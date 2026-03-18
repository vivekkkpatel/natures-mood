// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
// const BASE_URL = "https://api.weatherapi.com/v1";

const BASE_URL = "/api";

// export const searchCity = async (query) => {
//   const res = await fetch(
//     `${BASE_URL}/search.json?key=${API_KEY}&q=${query}`
//   );
//   return res.json();
// };

// export const getForecast = async (city) => {
//   const res = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`
//   );
//   return res.json();
// };

//----------for vercel serverless-----------------
// export const getCurrentWeather = async (city) => {
//   const res = await fetch(
//     `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=yes`
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch weather");
//   }

//   return res.json();
// };

// // export const getForecast = async (city) => {
// //   const res = await fetch(
// //     `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
// //   );

// //   if (!res.ok) {
// //     throw new Error("Failed to fetch forecast");
// //   }

// //   const data = await res.json();
// //   return data;
// // };

// export const getForecast = async (city) => {

//   try {

//     const res = await fetch(
//       `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
//     );

//     if (!res.ok) throw new Error();

//     return await res.json();

//   } catch {

//     console.warn("Retrying forecast request...");

//     const retry = await fetch(
//       `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
//     );

//     if (!retry.ok) throw new Error("Forecast failed");

//     return retry.json();
//   }
// };

// export const getAstronomy = async (city) => {
//   const today = new Date().toISOString().split("T")[0];

//   const res = await fetch(
//     `${BASE_URL}/astronomy.json?key=${API_KEY}&q=${city}&dt=${today}`
//   );

//   if (!res.ok) {
//     throw new Error("Astronomy fetch failed");
//   }

//   return res.json();
// };

// export const getYesterdayWeather = async (city) => {
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1);

//   const date = yesterday.toISOString().split("T")[0];

//   const res = await fetch(
//     `${BASE_URL}/history.json?key=${API_KEY}&q=${city}&dt=${date}`
//   );

//   if (!res.ok) throw new Error("History fetch failed");

//   return res.json();
// };


export const getAllWeather = async (city) => {
  try {
    const res = await fetch(`${BASE_URL}/weather?city=${city}`);

    if (!res.ok) throw new Error();

    return await res.json();
  } catch {
    throw new Error("Weather fetch failed");
  }
}

export const searchCity = async (query) => {
  const res = await fetch(`/api/search?query=${query}`);

  if (!res.ok) throw new Error("Search failed");

  return res.json();
};