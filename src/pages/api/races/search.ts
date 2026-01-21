import type { APIRoute } from 'astro';
import racesData from '../../../data/races.json';
import type { Race, SearchCriteria } from '../../../types/race';

// This endpoint runs on the server, not prerendered
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        console.log('[API] Received search request');
        console.log('[API] Races in database:', racesData?.length || 0);

        const criteria: SearchCriteria = await request.json();
        console.log('[API] Criteria:', JSON.stringify(criteria));

        const { experienceLevel, distance, type, location, timelineInMonths } = criteria;

        // --- Hard Filters ---
        let filteredRaces = racesData.filter((race: any) => {
            // 1. Distance Match (Exact)
            // Note: In a real app, normalize strings. Here we assume exact matches from dropdowns.
            // Special case: map "Full Marathon" to "Marathon" if needed, but UI should send "Marathon"
            if (race.distance !== distance) return false;

            // 2. Type Match (Exact)
            if (race.type !== type) return false;

            // 3. Timeline Match (Month)
            // "Race must occur within [selected month] from today"
            // Simplification: We'll check if the race date is within [now, now + timelineInMonths]
            const raceDate = new Date(race.date);
            const today = new Date();
            const maxDate = new Date();
            maxDate.setMonth(today.getMonth() + timelineInMonths);

            if (raceDate < today || raceDate > maxDate) return false;

            // 4. Location Match (Simple substring/fuzzy for MVP)
            if (location && !race.location.toLowerCase().includes(location.toLowerCase())) {
                // In a real app, this would be geodist calc, but MVP uses string match as per plan/PRD limitation note
                // Use Haversine if we had user lat/long. 
                // For MVP, if user types "Boston", we match "Boston, MA".
                return false;
            }

            return true;
        });

        // --- Experience Level Filters ---
        filteredRaces = filteredRaces.filter((race: any) => {
            const cutoffTime = parseTime(race.cutoffTime || "0:00:00");
            const elevation = race.elevationGain || 0;

            if (experienceLevel === 'Beginner') {
                // Exclude strict cutoffs (< 6h for Marathon, < 3h for HM)
                if (distance === 'Marathon' && cutoffTime < 6) return false;
                if (distance === 'Half Marathon' && cutoffTime < 3) return false;
                // Exclude high elevation
                if (elevation > 3000) return false;
                // Exclude qualifying times
                if (race.qualifyingTime) return false;
            } else if (experienceLevel === 'Intermediate') {
                if (distance === 'Marathon' && cutoffTime < 6) return false;
                if (distance === 'Half Marathon' && cutoffTime < 2.5) return false;
                if (elevation > 5000) return false;
            }
            // Advanced: No filters
            return true;
        });

        // --- Ranking ---
        // 1. Location (Exact match boosted, otherwise we can't sort by distance without user coords)
        // 2. Date (Earliest first)
        filteredRaces.sort((a: any, b: any) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        const topMatch = filteredRaces.length > 0 ? filteredRaces[0] : null;
        const alternatives = filteredRaces.length > 1 ? filteredRaces.slice(1) : [];

        // Fallback logic if no matches? Handled in frontend or here?
        // PRD says: "No Results Fallback... offer button to auto loosen".
        // For this API, we just return empty. Frontend handles "No results found".

        return new Response(JSON.stringify({
            topMatch,
            alternatives
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
};

// Helper: Parse HH:MM:SS to hours (float)
function parseTime(timeStr: string): number {
    if (!timeStr) return 0;
    const parts = timeStr.split(':').map(Number);
    // Optional handling for MM:SS vs HH:MM:SS? Assuming stored as HH:MM:SS
    if (parts.length === 3) {
        return parts[0] + parts[1] / 60 + parts[2] / 3600;
    }
    return 0;
}
