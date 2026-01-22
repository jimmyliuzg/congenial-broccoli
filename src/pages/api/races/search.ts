
import races from '../../../data/races.json';

export const prerender = false;

export const POST = async ({ request }) => {
    try {
        const data = await request.json();
        console.log('Search Query:', data);

        const { experienceLevel, distance, location, type, timelineInMonths } = data;

        // --- 1. Filtering Logic ---
        let matches = races.filter(race => {
            // Status check
            if (race.status !== 'Open') return false;

            // Distance check
            // Naive matching: if user asks 'Marathon', race.distance must include 'Marathon'
            // Ideally normalize this data better, but string match works for current dataset
            if (distance && !race.distance.toLowerCase().includes(distance.toLowerCase()) && race.distance !== 'Various') {
                return false;
            }

            // Type check (Road/Trail)
            if (type && race.type.toLowerCase() !== type.toLowerCase()) {
                return false;
            }

            // Location check
            // Simple case-insensitive substring match
            if (location) {
                const raceLoc = (race.location || '').toLowerCase();
                const searchLoc = location.toLowerCase();
                // If user types "San Fran", matches "San Francisco"
                if (!raceLoc.includes(searchLoc)) {
                    return false;
                }
            }

            // Timeline check
            // timelineInMonths matches races happening within X months from now
            if (timelineInMonths) {
                if (!race.date) return false;
                const raceDate = new Date(race.date);
                const now = new Date();
                const futureLimit = new Date();
                futureLimit.setMonth(now.getMonth() + Number(timelineInMonths));

                if (raceDate < now || raceDate > futureLimit) {
                    return false;
                }
            }

            return true;
        });

        // --- 2. Sorting & Selection ---
        // Sort by date (soonest first)
        matches.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Allow empty results
        if (matches.length === 0) {
            return new Response(JSON.stringify({ topMatch: null, alternatives: [] }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Heuristic: First match is "Top Pick"
        const topMatch = matches[0];
        const alternatives = matches.slice(1); // Return all others? Or limit?
        // Let's limit alternatives to 50 to avoid huge payloads
        const limitedAlternatives = alternatives.slice(0, 50);

        return new Response(JSON.stringify({
            topMatch,
            alternatives: limitedAlternatives
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Search API Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
