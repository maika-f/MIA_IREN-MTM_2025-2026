# F1 API — Curl Commands

Base URL: `https://api.jolpi.ca/ergast/f1`

## Driver Championship Standings

```bash
curl "https://api.jolpi.ca/ergast/f1/2024/driverStandings.json?limit=30"
```

## Constructor Championship Standings

```bash
curl "https://api.jolpi.ca/ergast/f1/2024/constructorStandings.json?limit=15"
```

## Race Calendar (full season)

```bash
curl "https://api.jolpi.ca/ergast/f1/2024.json?limit=30"
```

## Last Race Results

```bash
curl "https://api.jolpi.ca/ergast/f1/2024/last/results.json?limit=25"
```

## Specific Race Results (by round)

```bash
curl "https://api.jolpi.ca/ergast/f1/2024/1/results.json"
```

## Driver Info

```bash
curl "https://api.jolpi.ca/ergast/f1/drivers/max_verstappen.json"
```

## Constructor Info

```bash
curl "https://api.jolpi.ca/ergast/f1/constructors/mclaren.json"
```

## Pretty print (pipe to jq)

```bash
curl -s "https://api.jolpi.ca/ergast/f1/2024/driverStandings.json?limit=30" | jq .
```
