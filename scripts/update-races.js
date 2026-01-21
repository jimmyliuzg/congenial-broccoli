
import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';

const RACES_FILE = path.join(process.cwd(), 'src', 'data', 'races.json');

// --- Helper: Format Dates ---
function formatDate(dateStr) {
  if (!dateStr) return null;
  try {
    return new Date(dateStr).toISOString().split('T')[0];
  } catch (e) {
    return null;
  }
}

// --- Source 1: RunGuides ---
async function fetchRunGuides() {
  console.log('Fetching RunGuides...');
  const url = 'https://runguides-api-6dce8eac15ab.herokuapp.com/events/search?current_location_view_id=1&geo_boundary%5Blong1%5D=-124.87753649700174&geo_boundary%5Blat2%5D=42.009518&geo_boundary%5Blong2%5D=-114.131211&geo_boundary%5Blat1%5D=32.534156&method=redis&offset=0&limit=50';

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.runguides.com/',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
      }
    });

    if (!response.ok) return [];
    const data = await response.json();

    // RunGuides API returns { listings: [...], ... }
    const races = data.listings || [];

    return races.map(event => ({
      id: `rg_${event.id}`,
      name: event.title || event.name,
      // Field mapping involves some guesswork as full response wasn't inspected, 
      // but 'title' and 'event_date' were confirmed.
      distance: event.distance_metric || 'Unknown',
      type: event.surface || 'Road',
      date: event.event_date ? event.event_date.split('T')[0] : null,
      location: event.city ? `${event.city}, ${event.region}, ${event.country_code}` : 'California, USA',
      latitude: event.latitude,
      longitude: event.longitude,
      url: `https://www.runguides.com/event/${event.id}`,
      status: 'Open',
      cost: event.price_min || 0,
    }));
  } catch (error) {
    console.error('Error fetching RunGuides:', error);
    return [];
  }
}

// --- Source 2: RaceRaves ---
async function fetchRaceRaves() {
  console.log('Fetching RaceRaves...');
  const url = 'https://raceraves.com/california-races-reviews/';

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const races = [];

    $('a[href^="https://raceraves.com/races/"]').each((i, el) => {
      const link = $(el).attr('href');
      const name = $(el).text().trim();
      if (name && link && !name.includes('ratings')) {
        races.push({
          id: `rr_${path.basename(link)}`,
          name: name,
          url: link,
          location: 'California, USA',
          status: 'Open',
          type: 'Road'
        });
      }
    });

    const uniqueRaces = [];
    const seenUrls = new Set();
    for (const r of races) {
      if (!seenUrls.has(r.url)) {
        seenUrls.add(r.url);
        uniqueRaces.push(r);
      }
    }
    return uniqueRaces;
  } catch (error) {
    console.error('Error fetching RaceRaves:', error);
    return [];
  }
}

// --- Source 3: RunSignup ---
async function fetchRunSignup() {
  const apiKey = process.env.RUNSIGNUP_API_KEY;
  const apiSecret = process.env.RUNSIGNUP_API_SECRET;

  if (!apiKey || !apiSecret) {
    console.warn('Skipping RunSignup: Missing RUNSIGNUP_API_KEY or RUNSIGNUP_API_SECRET in environment.');
    return [];
  }

  console.log('Fetching RunSignup (US)...');
  // Documentation: https://runsignup.com/API/races/GET
  // Using parameters to search for US races, JSON format
  const url = `https://runsignup.com/Rest/races?format=json&country=US&events=T&results_per_page=50&api_key=${apiKey}&api_secret=${apiSecret}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Log detailed error if possible
      const text = await response.text();
      throw new Error(`Status ${response.status}: ${text}`);
    }
    const data = await response.json();

    // RunSignup structure: data.races = [ { race: { ... } }, ... ]
    if (!data.races) return [];

    return data.races.map(item => {
      const r = item.race;
      const event = r.events ? r.events[0] : {}; // Take first event for distance/cost info

      return {
        id: `rsu_${r.race_id}`,
        name: r.name,
        distance: event.distance || 'Various',
        type: r.is_trail_race ? 'Trail' : 'Road', // Naive guess from boolean if available, often not explicit
        date: formatDate(r.next_date),
        location: `${r.address.city}, ${r.address.state}, ${r.address.country_code}`,
        latitude: r.address.latitude ? parseFloat(r.address.latitude) : null,
        longitude: r.address.longitude ? parseFloat(r.address.longitude) : null,
        url: r.url,
        status: 'Open', // Assuming listed = open
        cost: 0 // Pricing is complex in RSU, skipping for now
      };
    });

  } catch (error) {
    console.error('Error fetching RunSignup:', error.message);
    return [];
  }
}

// --- Source 4: Active.com ---
async function fetchActive() {
  const apiKey = process.env.ACTIVE_API_KEY;
  if (!apiKey) {
    console.warn('Skipping Active.com: Missing ACTIVE_API_KEY in environment.');
    return [];
  }

  console.log('Fetching Active.com (Running)...');
  // Active API v2: http://api.amp.active.com/v2/search
  // Query for running events in US
  const url = `http://api.amp.active.com/v2/search?query=running&category=event&country=US&per_page=50&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Status ${response.status}`);
    const data = await response.json();

    // Active structure: data.results = [ ... ]
    return (data.results || []).map(r => ({
      id: `act_${r.assetGuid}`,
      name: r.assetName,
      distance: 'Various', // Active data is generic "running", specific distances are buried
      type: 'Road', // Default
      date: formatDate(r.activityStartDate),
      location: r.place.cityName ? `${r.place.cityName}, ${r.place.stateProvinceCode}, ${r.place.countryCode}` : 'USA',
      latitude: r.place.geoPoint ? r.place.geoPoint.lat : null,
      longitude: r.place.geoPoint ? r.place.geoPoint.lon : null,
      url: r.homePageUrlAdr,
      status: 'Open',
      cost: 0 // Often not exposed in search list
    }));

  } catch (error) {
    console.error('Error fetching Active.com:', error.message);
    return [];
  }
}

async function main() {
  // Load env vars if running locally (basic support)
  // In a real setup, use 'dotenv' package. For now checking process.env directly
  // which works if run like: RUNSIGNUP_API_KEY=... node scripts/update-races.js

  // 1. Read existing
  let existingRaces = [];
  try {
    const fileContent = await fs.readFile(RACES_FILE, 'utf-8');
    existingRaces = JSON.parse(fileContent);
  } catch (e) {
    console.log('No existing races found, starting fresh.');
  }

  // 2. Fetch all
  const [rg, rr, rsu, act] = await Promise.all([
    fetchRunGuides(),
    fetchRaceRaves(),
    fetchRunSignup(),
    fetchActive()
  ]);

  console.log(`\n--- Results ---`);
  console.log(`RunGuides: ${rg.length}`);
  console.log(`RaceRaves: ${rr.length}`);
  console.log(`RunSignup: ${rsu.length}`);
  console.log(`Active.com: ${act.length}`);

  const allNewRaces = [...rg, ...rr, ...rsu, ...act];
  let addedCount = 0;

  // 3. Merge
  for (const newRace of allNewRaces) {
    // Simple dedupe by ID
    const exists = existingRaces.find(r => r.id === newRace.id);
    if (!exists) {
      // Defaults
      newRace.distance = newRace.distance || 'Various';
      newRace.type = newRace.type || 'Road';
      newRace.cost = newRace.cost || 0;
      newRace.elevationGain = newRace.elevationGain || 0; // Not available in most APIs

      existingRaces.push(newRace);
      addedCount++;
    }
  }

  // 4. Write
  await fs.writeFile(RACES_FILE, JSON.stringify(existingRaces, null, 4));
  console.log(`\nUpdated races.json. Added ${addedCount} new races.`);
}

main();
