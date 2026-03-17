// pages/weather/utils/weatherConfig.js

// export const getWeatherType = (conditionText) => {
//   if (!conditionText) return "clear";
//   const c = conditionText.toLowerCase();

//   // ── Thunderstorm ──
//   if (c.includes("thunder")) return "thunderstorm";

//   // ── Blizzard ──
//   if (c.includes("blizzard")) return "blizzard";

//   // ── Freezing conditions ──
//   if (c.includes("freezing rain") || c.includes("freezing drizzle"))
//     return "freezing-rain";
//   if (c.includes("freezing fog")) return "freezing-fog";
//   if (c.includes("ice pellets") || c.includes("sleet")) return "ice-pellets";

//   // ── Snow ──
//   if (c.includes("heavy snow")) return "heavy-snow";
//   if (c.includes("moderate snow")) return "moderate-snow";
//   if (c.includes("snow")) return "light-snow";

//   // ── Rain ──
//   if (c.includes("heavy rain") || c.includes("torrential")) return "heavy-rain";
//   if (c.includes("moderate rain")) return "moderate-rain";
//   if (c.includes("rain") || c.includes("drizzle") || c.includes("patchy rain"))
//     return "light-rain";

//   // ── Fog / Mist ──
//   if (c.includes("fog")) return "fog";
//   if (c.includes("mist")) return "mist";

//   // ── Cloud variants (order matters: overcast → partly → cloudy) ──
//   if (c.includes("overcast")) return "overcast";
//   if (c.includes("partly")) return "partly-cloudy";
//   if (c.includes("cloudy") || c.includes("cloud")) return "cloudy";

//   // ── Clear / Sunny ──
//   if (c.includes("sunny") || c.includes("clear")) return "clear";

//   return "clear";
// };

// export const getBackgroundClass = (weatherType, isDay) => {
//   const map = {
//     clear: isDay ? "bg-sunny" : "bg-night-clear",
//     "partly-cloudy": isDay ? "bg-partly-cloudy" : "bg-night-cloudy",
//     cloudy: "bg-cloudy",
//     overcast: "bg-overcast",
//     "light-rain": "bg-light-rain",
//     "moderate-rain": "bg-moderate-rain",
//     "heavy-rain": "bg-heavy-rain",
//     "freezing-rain": "bg-freezing-rain",
//     "light-snow": "bg-light-snow",
//     "moderate-snow": "bg-moderate-snow",
//     "heavy-snow": "bg-heavy-snow",
//     blizzard: "bg-blizzard",
//     "ice-pellets": "bg-ice-pellets",
//     thunderstorm: "bg-thunderstorm",
//     mist: "bg-mist",
//     fog: "bg-fog",
//     "freezing-fog": "bg-freezing-fog",
//   };

//   return map[weatherType] || (isDay ? "bg-sunny" : "bg-night-clear");
// };


export const getWeatherType = (conditionText) => {
  if (!conditionText) return "clear";
  const c = conditionText.toLowerCase();

  // ── Thunderstorm (check FIRST — "patchy light rain with thunder") ──
  if (c.includes("thunder")) return "thunderstorm";

  // ── Blizzard ──
  if (c.includes("blizzard")) return "blizzard";

  // ── Freezing conditions ──
  if (c.includes("freezing rain") || c.includes("freezing drizzle"))
    return "freezing-rain";
  if (c.includes("freezing fog")) return "freezing-fog";
  if (c.includes("ice pellets") || c.includes("sleet")) return "ice-pellets";

  // ── Snow ──
  if (c.includes("heavy snow") || c.includes("blowing snow"))
    return "heavy-snow";
  if (c.includes("moderate snow")) return "moderate-snow";
  if (c.includes("light snow") || c.includes("patchy snow"))
    return "light-snow";
  if (c.includes("snow")) return "light-snow";

  // ── Rain ──
  if (c.includes("heavy rain") || c.includes("torrential"))
    return "heavy-rain";
  if (c.includes("moderate rain")) return "moderate-rain";
  if (
    c.includes("light rain") ||
    c.includes("patchy rain") ||
    c.includes("light drizzle") ||
    c.includes("patchy light drizzle") ||
    c.includes("drizzle") ||
    c.includes("rain")
  )
    return "light-rain";

  // ── Fog / Mist ──
  if (c.includes("fog")) return "fog";
  if (c.includes("mist")) return "mist";

  // ── Cloud variants ──
  if (c.includes("overcast")) return "overcast";
  if (c.includes("partly cloudy") || c.includes("partly"))
    return "partly-cloudy";
  if (c.includes("cloudy") || c.includes("cloud")) return "cloudy";

  // ── Sunny / Clear ──
  if (c.includes("sunny") || c.includes("clear")) return "clear";

  // ── Fallback ──
  console.warn("Unknown weather condition:", conditionText);
  return "clear";
};

export const getBackgroundClass = (weatherType, isDay) => {
  const map = {
    clear: isDay ? "bg-sunny" : "bg-night-clear",
    "partly-cloudy": isDay ? "bg-partly-cloudy" : "bg-night-cloudy",
    cloudy: "bg-cloudy",
    overcast: "bg-overcast",
    "light-rain": "bg-light-rain",
    "moderate-rain": "bg-moderate-rain",
    "heavy-rain": "bg-heavy-rain",
    "freezing-rain": "bg-freezing-rain",
    "light-snow": "bg-light-snow",
    "moderate-snow": "bg-moderate-snow",
    "heavy-snow": "bg-heavy-snow",
    blizzard: "bg-blizzard",
    "ice-pellets": "bg-ice-pellets",
    thunderstorm: "bg-thunderstorm",
    mist: "bg-mist",
    fog: "bg-fog",
    "freezing-fog": "bg-freezing-fog",
  };

  return map[weatherType] || (isDay ? "bg-sunny" : "bg-night-clear");
};