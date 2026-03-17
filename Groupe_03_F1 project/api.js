const API_BASE = 'https://api.jolpi.ca/ergast/f1';
const SEASON = '2024';

async function fetchJSON(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`);
    return res.json();
}

// --- API calls ---

async function getDriverStandings() {
    const data = await fetchJSON(`/${SEASON}/driverStandings.json?limit=30`);
    return data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}

async function getConstructorStandings() {
    const data = await fetchJSON(`/${SEASON}/constructorStandings.json?limit=15`);
    return data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
}

async function getRaceCalendar() {
    const data = await fetchJSON(`/${SEASON}.json?limit=30`);
    return data.MRData.RaceTable.Races;
}

async function getLastRaceResults() {
    const data = await fetchJSON(`/${SEASON}/last/results.json?limit=25`);
    return data.MRData.RaceTable.Races[0];
}

async function fetchAllData() {
    const [drivers, constructors, races, lastRace] = await Promise.all([
        getDriverStandings(),
        getConstructorStandings(),
        getRaceCalendar(),
        getLastRaceResults(),
    ]);
    return { drivers, constructors, races, lastRace };
}
