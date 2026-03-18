import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import {
  getCurrentWeather,
  getForecast,
  getAstronomy,
  getYesterdayWeather,
} from "./services/weatherApi";
import Loader from "../../components/Loader";
import ForecastCard from "./components/ForecastCard";
import HourlyForecast from "./components/HourlyForecast";
import TemperatureChart from "./components/TemperatureChart";
import SunProgress from "./components/SunProgress";
import AqiCard from "./components/AqiCard";
import logo from "../../assets/Logo.svg";
import BrandLoader from "../../components/BrandLoader";
import AstronomyCard from "./components/AstronomyCard";
import YesterdayCard from "./components/YesterdayCard";
import ErrorMessage from "../../components/ErrorMessage";
import { getAllWeather } from "./services/weatherApi";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import WeatherEffects from "./components/effects/WeatherEffects";
import { getWeatherType, getBackgroundClass } from "./utils/weatherConfig";

const WeatherPage = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [astronomy, setAstronomy] = useState(null);
  const [yesterday, setYesterday] = useState(null);
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // useEffect(() => {
  //   const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

const fetchWeather = async (city) => {
  setWeather(null);
  setForecast(null);
  setAstronomy(null);
  setYesterday(null);

  try {
    setLoading(true);
    setError(null);

    // 🔥 Single API call
    const data = await getAllWeather(city);

    // ✅ REQUIRED (main data)
    setWeather(data.current);

    // ✅ OPTIONAL (safe handling)
    if (data.forecast) {
      setForecast(data.forecast.forecast);
    } else {
      console.warn("Forecast unavailable");
    }

    if (data.astronomy) {
      setAstronomy(data.astronomy.astronomy.astro);
    }

    if (data.history) {
      setYesterday(data.history.forecast.forecastday[0]);
    }

  } catch (err) {
    console.error(err);
    setError("City not found or API failed");
  } finally {
    setLoading(false);
  }
};

  // const fetchWeather = async (city) => {
  //   setWeather(null);
  //   setForecast(null);
  //   setAstronomy(null);
  //   setYesterday(null);

  //   try {
  //     setLoading(true);
  //     setError(null);

  //     const weatherData = await getCurrentWeather(city);
  //     setWeather(weatherData);

  //     try {
  //       const forecastData = await getForecast(city);
  //       setForecast(forecastData.forecast);
  //     } catch {
  //       console.warn("Forecast unavailable");
  //     }

  //     try {
  //       const astronomyData = await getAstronomy(city);
  //       setAstronomy(astronomyData.astronomy.astro);
  //     } catch {}

  //     try {
  //       const yesterdayData = await getYesterdayWeather(city);
  //       setYesterday(yesterdayData.forecast.forecastday[0]);
  //     } catch {}
  //   } catch (err) {
  //     console.error(err);
  //     setError("City not found");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    if (!weather) {
      fetchWeather("Indore");
    }
  }, []);

  const weatherType = weather
    ? getWeatherType(weather.current.condition.text)
    : "clear";
  // const isDay = weather ? weather.current.is_day : 1;
  // const isDay = weather ? weather.current.is_day === 1 : true;
  const isDay = weather ? Number(weather.current.is_day) === 1 : true;
  const bgClass = getBackgroundClass(weatherType, isDay);

  return (
    <div
      className={`min-h-screen ${bgClass} text-white px-10 md:px-12 py-6 relative overflow-hidden`}
    >
      {loading && <BrandLoader />}
      <WeatherEffects weatherType={weatherType} isDay={isDay} />
      <div className="weather-vignette" />

      <div className="relative z-10">
        {/* ── Navbar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Nature's Mood Logo"
              className="w-10 h-10 md:w-10 md:h-10"
            />
            <h1 className="font-GoogleSansFlex text-3xl font-[620] drop-shadow-lg m-0 leading-none text-white tracking-tight">
              Nature's Mood
            </h1>
          </div>
          <SearchBar onSelectCity={fetchWeather} />
        </div>

        {weather && (
          <div className="mt-12 text-center space-y-2">
            <h2 className="font-GoogleSansFlex text-2xl md:text-3xl font-semibold drop-shadow-md md:-mt-0 -mt-3">
              {weather.location.name}, {weather.location.country}
            </h2>

            <p className="font-Outfit md:text-base text-sm text-white/70 tracking-wide">
              {(() => {
                const date = new Date(weather.location.localtime);

                const formattedDate = date.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });

                const formattedTime = date.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                });

                return `${formattedDate} • ${formattedTime}`;
              })()}
            </p>
          </div>
        )}

        {/* ═══════════════════════════════════════════════
            BENTO GRID
            ─────────────────────────────────────────────
            Desktop (lg) 3 cols:
            ┌─────────────┬──────────┬─────────────┐
            │ WeatherCard │   AQI    │  Astronomy  │
            │ (row-span-2)├──────────┼─────────────┤
            │             │Yesterday │ 5-Day Fore. │
            └─────────────┴──────────┴─────────────┘

            Tablet (md) 2 cols:
            ┌─────────────┬──────────┐
            │ WeatherCard │   AQI    │
            │ (row-span-2)├──────────┤
            │             │Astronomy │
            ├─────────────┼──────────┤
            │ Yesterday   │ 5-Day    │
            └─────────────┴──────────┘

            Mobile: single column stacked
            ═══════════════════════════════════════════════ */}
        {/* {weather && !loading && !error && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-12 weather-bento-grid">

            
            <div className="md:row-span-2 bento-cell">
              <WeatherCard weather={weather} />
            </div>

           
            <div className="bento-cell">
              <AqiCard air={weather.current.air_quality} />
            </div>

            
            <div className="bento-cell">
              {astronomy && <AstronomyCard astro={astronomy} />}
            </div>

           
            <div className="bento-cell">
              {yesterday && <YesterdayCard yesterday={yesterday} />}
            </div>

            
            <div className="bento-cell">
              {forecast && <ForecastCard forecast={forecast} />}
            </div>

          </div>
        )} */}

        {/* <p style={{ color: "red", fontSize: "30px" }}>TEST CHANGE WORKS</p> */}

        {/* <p style={{ color: "lime", fontSize: "24px" }}>
  isDesktop: {String(isDesktop)} | width: {window.innerWidth}
</p> */}

        {weather && !loading && !error && (
          <div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12"
            style={
              isDesktop ? { gridTemplateColumns: "1.1fr 0.8fr 0.80fr" } : {}
            }
          >
            {/* Weather Card */}
            <div className="md:row-span-2 bento-cell">
              <WeatherCard weather={weather} />
            </div>

            {/* AQI */}
            <div className="bento-cell">
              <AqiCard air={weather.current.air_quality} />
            </div>

            {/* Astronomy */}
            <div className="bento-cell">
              {astronomy && <AstronomyCard astro={astronomy} />}
            </div>

            {/* Yesterday */}
            <div className="bento-cell">
              {yesterday && <YesterdayCard yesterday={yesterday} />}
            </div>

            {/* 5 Day Forecast */}
            <div className="bento-cell">
              {forecast && <ForecastCard forecast={forecast} />}
            </div>
          </div>
        )}

        {/* ═══ Hourly Forecast (full width) ═══ */}
        <div className="max-w-6xl mx-auto full-width-child">
          {forecast && !loading && !error && (
            <HourlyForecast forecast={forecast} />
          )}
        </div>

        {/* ═══ Charts ═══ */}
        <div className="max-w-6xl mx-auto full-width-child">
          {forecast && (
            <>
              <TemperatureChart forecast={forecast} />
              <SunProgress forecast={forecast} location={weather.location} />
            </>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="font-Outfit text-semibold mt-16 text-center text-sm text-white/70 flex flex-col md:flex-row justify-center items-center gap-1">
        ©{new Date().getFullYear()} Nature's Mood. All rights reserved.
        <p className="text-white/60 flex items-center gap-0.5 text-normal">
          Weather data provided by
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-Nunito font-semibold hover:text-blue-400 hover:underline transition flex items-center gap-0"
          >
            weatherapi.com
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </p>
      </div>

      {/* Developer */}
      <div className="flex items-center justify-center gap-1 mt-2 text-sm font-Outfit font-semibold text-white">
      <div className="">
        Developed by{" "}
        <span className="">Vivek Patel</span>
      </div>

      •

      {/* Social Links */}
      <div className="flex items-center gap-1">
        <a
          href="https://github.com/vivekkkpatel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-cyan-400 transition"
        >
          <FaGithub size={12} />
          GitHub
        </a>

        

        <a
          href="https://linkedin.com/in/vivekkkpatel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-cyan-400 transition"
        >
          <FaLinkedin size={13} />
          LinkedIn
        </a>
      </div>
      </div>

    </div>
  );
};

export default WeatherPage;

// import { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";
// import {
//   getCurrentWeather,
//   getForecast,
//   getAstronomy,
//   getYesterdayWeather,
// } from "./services/weatherApi";
// import Loader from "../../components/Loader";
// import ForecastCard from "./components/ForecastCard";
// import HourlyForecast from "./components/HourlyForecast";
// import TemperatureChart from "./components/TemperatureChart";
// import SunProgress from "./components/SunProgress";
// import AqiCard from "./components/AqiCard";
// import logo from "../../assets/Logo.svg";
// import BrandLoader from "../../components/BrandLoader";
// import AstronomyCard from "./components/AstronomyCard";
// import YesterdayCard from "./components/YesterdayCard";

// //icons
// import { ArrowUpRight } from 'lucide-react';

// // ── new imports ──
// import WeatherEffects from "./components/effects/WeatherEffects";
// import { getWeatherType, getBackgroundClass } from "./utils/weatherConfig";

// const WeatherPage = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [astronomy, setAstronomy] = useState(null);
//   const [yesterday, setYesterday] = useState(null);

//   // const fetchWeather = async (city) => {
//   //   try {
//   //     setLoading(true);
//   //     setError(null);
//   //     const weatherData = await getCurrentWeather(city);
//   //     const forecastData = await getForecast(city);
//   //     const astronomyData = await getAstronomy(city);
//   //     const yesterdayData = await getYesterdayWeather(city);
//   //     setWeather(weatherData);
//   //     setForecast(forecastData.forecast);
//   //     setAstronomy(astronomyData.astronomy.astro);
//   //     setYesterday(yesterdayData.forecast.forecastday[0].day);
//   //   } catch {
//   //     setError("City not found");
//   //     setWeather(null);
//   //     setForecast(null);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchWeather = async (city) => {
//     setWeather(null);
//     setForecast(null);
//     setAstronomy(null);
//     setYesterday(null);

//     try {
//       setLoading(true);
//       setError(null);

//       const weatherData = await getCurrentWeather(city);
//       setWeather(weatherData);

//       try {
//         // const forecastData = await getForecast(city);
//         // setForecast(forecastData.forecast);
//         try {
//           const forecastData = await getForecast(city);
//           setForecast(forecastData.forecast);
//         } catch {
//           console.warn("Forecast unavailable");
//         }
//       } catch {}

//       try {
//         const astronomyData = await getAstronomy(city);
//         setAstronomy(astronomyData.astronomy.astro);
//       } catch {}

//       try {
//         const yesterdayData = await getYesterdayWeather(city);
//         setYesterday(yesterdayData.forecast.forecastday[0]);
//       } catch {}
//     } catch (err) {
//       console.error(err);
//       setError("City not found");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!weather) {
//       fetchWeather("Indore");
//     }
//   }, []);

//   // ── derive weather type & background ──
//   const weatherType = weather
//     ? getWeatherType(weather.current.condition.text)
//     : "clear";
//   const isDay = weather ? weather.current.is_day : 1;
//   const bgClass = getBackgroundClass(weatherType, isDay);

//   return (
//     <div
//       className={`min-h-screen ${bgClass} text-white px-10 md:px-12 py-6 relative overflow-hidden`}
//     >
//       {loading && <BrandLoader />}
//       {/* ── Animated weather effects layer ── */}
//       <WeatherEffects weatherType={weatherType} isDay={isDay} />

//       {/* ── Cinematic vignette overlay ── */}
//       <div className="weather-vignette" />

//       {/* ── All content sits above effects ── */}
//       <div className="relative z-10">
//         {/* Navbar */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           {/* <p className="font-heading text-4xl">
//   Google Sans Flex Test
// </p> */}
//           {/* <h1 className="font-GoogleSansFlex text-3xl font-bold drop-shadow-lg">Nature's Mood</h1> */}
//           <div className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Nature's Mood Logo"
//               className="w-10 h-10 md:w-10 md:h-10"
//             />

//             <h1 className="font-GoogleSansFlex text-3xl font-[620] drop-shadow-lg m-0 leading-none text-white tracking-tight">
//               Nature's Mood
//             </h1>
//           </div>
//           <SearchBar onSelectCity={fetchWeather} />
//         </div>

//         {/* City Header */}
//         {weather && (
//           <div className="mt-12 text-center space-y-2">
//             <h2 className="font-GoogleSansFlex text-2xl md:text-3xl font-semibold drop-shadow-md md:-mt-0 -mt-3">
//               {weather.location.name}, {weather.location.country}
//             </h2>
//             <p className="font-Outfit md:text-base text-sm text-white/70">
//               {weather.location.localtime}
//             </p>
//           </div>
//         )}

//         {/* Weather Card */}
//         {/* <div className="flex justify-center mt-8 md:mt-12">
//           {loading && <Loader />}
//           {error && (
//             <div className="bg-red-500/20 backdrop-blur-md px-6 py-3 rounded-xl border border-red-400">
//               {error}
//             </div>
//           )}
//           {weather && !loading && !error && <WeatherCard weather={weather} />}
//         </div> */}
//         {/* <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-8 md:mt-12">

//   {weather &&  (
//     <WeatherCard weather={weather} />
//   )}

//   <div className="flex flex-col gap-6">

//   {weather && (
//     <AqiCard air={weather.current.air_quality} />
//   )}

//   {astronomy && (
//       <AstronomyCard astro={astronomy} />
//     )}

//     </div>

// </div> */}

//         {/* <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 md:mt-12">

//           <div className="lg:col-span-2 flex justify-center">
//             {weather && !loading && !error && <WeatherCard weather={weather} />}
//           </div>

//           <div className="flex flex-col gap-6">
//             {weather && <AqiCard air={weather.current.air_quality} />}

//             {astronomy && <AstronomyCard astro={astronomy} />}

//             {yesterday && <YesterdayCard yesterday={yesterday} />}
//           </div>
//         </div> */}

//         {/* MAIN TOP GRID */}
// {/* ===== TOP CARDS LAYOUT ===== */}

// <div className="max-w-6xl mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">

//   {/* Weather Card */}
//   <div className="md:row-span-2 flex justify-center">
//     {weather && !loading && !error && (
//       <WeatherCard weather={weather} />
//     )}
//   </div>

//   {/* AQI */}
//   <div className="flex justify-center">
//     {weather && (
//       <AqiCard air={weather.current.air_quality} />
//     )}
//   </div>

//   {/* Celestial */}
//   <div className="flex justify-center">
//     {astronomy && (
//       <AstronomyCard astro={astronomy} />
//     )}
//   </div>

//   {/* Yesterday */}
//   <div className="flex justify-center">
//     {yesterday && (
//       <YesterdayCard yesterday={yesterday} />
//     )}
//   </div>

//   {/* 5 Day Forecast */}
//   <div className="w-full md:col-span-2 lg:col-span-1">
//     {forecast && !loading && !error && (
//       <ForecastCard forecast={forecast} />
//     )}
//   </div>

// </div>

//         {/* Hourly + Forecast */}
//         {/* {forecast && !loading && !error && (
//           <>
//             <HourlyForecast forecast={forecast} />
//             <div className="mt-10">
//               <ForecastCard forecast={forecast} />
//             </div>
//           </>
//         )} */}

//         {/* Hourly Forecast */}
// {forecast && !loading && !error && (
//   <HourlyForecast forecast={forecast} />
// )}

//         {/* Charts */}
//         {/* {forecast && (
//           <>
//             <TemperatureChart forecast={forecast} />
//             <SunProgress forecast={forecast} location={weather.location} />
//           </>
//         )} */}

//         {/* Temperature Chart */}
// {forecast && (
//   <TemperatureChart forecast={forecast} />
// )}

// {/* Sun Cycle */}
// {forecast && (
//   <SunProgress forecast={forecast} location={weather.location} />
// )}

//       </div>

//       {/* <div className="font-Outfit mt-16 text-center text-sm text-white/70 flex justify-center gap-1">
//         ©{new Date().getFullYear()} Nature's Mood. All rights reserved.
//         <p className="text-white/50 flex justify-center gap-0.5">
//     Weather data provided by{" "}
//     <a
//       href="https://www.weatherapi.com/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="font-Nunito font-semibold hover:text-white/90 transition flex justify-center -gap-1"
//     >
//       weatherapi.com <ArrowUpRight className="mt-1 h-3 w-3"/>
//     </a>
//     </p>
//       </div> */}

//       <div className="font-Outfit text-semibold mt-16 text-center text-sm text-white/70 flex flex-col md:flex-row justify-center items-center gap-1 ">

//   ©{new Date().getFullYear()} Nature's Mood. All rights reserved.

//   <p className="text-white/60 flex items-center gap-0.5 text-normal">
//     Weather data provided by
//     <a
//       href="https://www.weatherapi.com/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="font-Nunito font-semibold hover:text-blue-400 hover:underline transition flex items-center gap-0"
//     >
//       weatherapi.com
//       <ArrowUpRight className="h-3 w-3" />
//     </a>
//   </p>

// </div>

//     </div>
//   );
// };

// export default WeatherPage;

// import { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";
// import { getCurrentWeather } from "./services/weatherApi";
// import Loader from "../../components/Loader";
// import { getForecast } from "./services/weatherApi";
// import ForecastCard from "./components/ForecastCard";
// import HourlyForecast from "./components/HourlyForecast";
// import TemperatureChart from "./components/TemperatureChart";
// import SunProgress from "./components/SunProgress";
// import CloudLayer from "./components/CloudLayer";
// import RainEffect from "./components/effects/RainEffect";

// const WeatherPage = () => {
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [forecast, setForecast] = useState(null);

//   // const fetchWeather = async (city) => {
//   //   try {
//   //     setLoading(true);
//   //     setError(null);
//   //     const data = await getCurrentWeather(city);
//   //     setWeather(data);
//   //   } catch (err) {
//   //     setError("City not found");
//   //     setWeather(null);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const fetchWeather = async (city) => {
//   try {
//     setLoading(true);
//     setError(null);

//     const weatherData = await getCurrentWeather(city);
//     const forecastData = await getForecast(city);

//     setWeather(weatherData);
//     setForecast(forecastData.forecast);

//   } catch (err) {
//     setError("City not found");
//     setWeather(null);
//     setForecast(null);
//   } finally {
//     setLoading(false);
//   }
// };

//   useEffect(() => {
//     fetchWeather("Indore");
//   }, []);

//   // const getBackground = () => {
//   //   if (!weather) return "from-indigo-600 to-blue-900";

//   //   const condition = weather.current.condition.text.toLowerCase();
//   //   const isDay = weather.current.is_day;

//   //   if (condition.includes("rain"))
//   //     return "from-gray-700 to-blue-800";

//   //   if (condition.includes("cloud"))
//   //     return "from-slate-600 to-slate-800";

//   //   if (!isDay)
//   //     return "from-gray-900 to-black";

//   //   return "from-sky-500 to-blue-700";
//   // };

//   const getBackground = () => {
//   if (!weather) return "bg-day";

//   const condition = weather.current.condition.text.toLowerCase();
//   const isDay = weather.current.is_day;

//   if (condition.includes("rain")) return "bg-rain";
//   if (condition.includes("snow")) return "bg-snow";
//   if (condition.includes("cloud")) return "bg-cloud";

//   if (!isDay) return "bg-night";

//   return "bg-day";
// };

//   return (
//     <div className={`min-h-screen ${getBackground()} text-white px-6 md:px-12 py-6`}>
//       {weather?.current.condition.text.includes("rain") && <RainEffect />}
//       <CloudLayer />

//       {/* Navbar */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//         <h1 className="text-3xl font-bold">Nature’s Mood</h1>
//         <SearchBar onSelectCity={fetchWeather} />
//       </div>

//         {/* City Header Section */}
//  {weather && (
//   <div className="mt-12 text-center space-y-2">
//     <h2 className="text-2xl md:text-3xl font-semibold">
//       {weather.location.name}, {weather.location.country}
//     </h2>

//     <p className="text-sm text-white/70">
//       {weather.location.localtime}
//     </p>
//   </div>
// )}

//       {/* Center Content */}
//       {/* <div className="flex justify-center mt-16 md:mt-24">

//         {loading && <Loader />}

//         {error && (
//           <div className="bg-red-500/20 backdrop-blur-md px-6 py-3 rounded-xl border border-red-400">
//             {error}
//           </div>
//         )}

//         {weather && !loading && !error && (
//           <WeatherCard weather={weather} />
//         )}

//       </div> */}

//        {/* Weather Card */}
//   <div className="flex justify-center mt-8 md:mt-12">
//     {loading && <Loader />}
//     {error && <ErrorMessage message={error} />}
//     {weather && !loading && !error && (
//       <WeatherCard weather={weather} />
//     )}
//   </div>

//   {forecast && !loading && !error && (
//   <>
//     <HourlyForecast forecast={forecast} />

//     {/* <ForecastCard forecast={forecast} /> */}
//   </>
// )}

//   {forecast && !loading && !error && (
//   <div className="mt-10">
//     <ForecastCard forecast={forecast} />
//   </div>
// )}

// {forecast && (
//   <>
//     <TemperatureChart forecast={forecast} />
//     <SunProgress forecast={forecast} location={weather.location} />
//   </>
// )}

//     </div>
//   );
// };

// export default WeatherPage;
