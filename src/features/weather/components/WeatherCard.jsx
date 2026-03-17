import { useEffect, useState } from "react";
import {
  IconDropletHalfFilled,
  IconWind,
  IconCompass,
  IconWindmill,
  IconTemperature,
  IconFlame,
  IconSnowflake,
  IconDroplet,
  IconEye,
  IconSun,
  IconCloud,
  IconCloudRain,
  IconUvIndex,
  IconNavigationNorth,
  IconTemperatureSnow,
  IconDropCircleFilled,
  IconLocationPin,
} from "@tabler/icons-react";

import { Bubbles } from "lucide-react";
import { BsDropletHalf } from "react-icons/bs";

const WeatherCard = ({ weather }) => {
  const { location, current } = weather;
  const [displayTemp, setDisplayTemp] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = Math.floor(current.temp_c);
    const duration = 800;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayTemp(end);
        clearInterval(counter);
      } else {
        setDisplayTemp(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [current.temp_c]);

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center transition-all duration-500 text-white md:h-full">
      <div className="flex justify-center mb-4 sun-glow">
        <img
          src={weather.current.condition.icon}
          alt="weather icon"
          className="w-20 h-20"
        />
      </div>

      <h3 className="font-Manrope md:text-6xl text-5xl font-bold flex items-center justify-center">
        {displayTemp}
        <p className="font-Outfit">°C</p>
      </h3>

      <p className="font-Outfit md:text-3xl text-2xl mt-2.5 opacity-90">
        {current.condition.text}
      </p>

      <div className="font-Outfit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-sm ">
        <div className="text-center">
          <p className="opacity-70">Humidity</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <BsDropletHalf size={15} />
            <p className="font-Manrope">{current.humidity}%</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Wind</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconWind size={18} />
            <p className="font-Manrope">{current.wind_kph} km/h</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Wind Dir</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconLocationPin size={18} />
            <p className="font-Manrope">{current.wind_dir}</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Wind Gust</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconWindmill size={18} />
            <p className="font-Manrope">{current.gust_kph} km/h</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Feels Like</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconTemperature size={18} />
            <p className="font-Manrope">{current.feelslike_c}°C</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Heat Index</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconFlame size={18} />
            <p className="font-Manrope">{current.heatindex_c}°C</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Wind Chill</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconTemperatureSnow size={18} />
            <p className="font-Manrope">{current.windchill_c}°C</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Dew Point</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <Bubbles size={18} />
            <p className="font-Manrope">{current.dewpoint_c}°C</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Visibility</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconEye size={18} />
            <p className="font-Manrope">{current.vis_km} km</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">UV Index</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconUvIndex size={18} />
            <p className="font-Manrope">{current.uv}</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Cloud</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconCloud size={18} />
            <p className="font-Manrope">{current.cloud}%</p>
          </div>
        </div>

        <div className="text-center">
          <p className="opacity-70">Precipitation</p>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <IconCloudRain size={18} />
            <p className="font-Manrope">{current.precip_in} in</p>
          </div>
        </div>
      </div>

      {/* <div className="font-Outfit grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-sm">

  
  <div className="flex items-center justify-center md:justify-start gap-2">
    <IconDropletHalfFilled size={18} className="opacity-70" />
    <div className="text-center md:text-left">
      <p className="opacity-70">Humidity</p>
      <p className="font-Manrope">{current.humidity}%</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">🌬</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Wind</p>
      <p className="font-Manrope">{current.wind_kph} km/h</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">🧭</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Wind Dir</p>
      <p className="font-Manrope">{current.wind_dir}</p>
    </div>
  </div>

  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">💨</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Wind Gust</p>
      <p className="font-Manrope">{current.gust_kph} km/h</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">🌡</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Feels Like</p>
      <p className="font-Manrope">{current.feelslike_c}°C</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">🔥</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Heat Index</p>
      <p className="font-Manrope">{current.heatindex_c}°C</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">❄</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Wind Chill</p>
      <p className="font-Manrope">{current.windchill_c}°C</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">💧</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Dew Point</p>
      <p className="font-Manrope">{current.dewpoint_c}°C</p>
    </div>
  </div>

 
  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">👁</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Visibility</p>
      <p className="font-Manrope">{current.vis_km} km</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">☀</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">UV Index</p>
      <p className="font-Manrope">{current.uv}</p>
    </div>
  </div>


  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">☁</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Cloud</p>
      <p className="font-Manrope">{current.cloud}%</p>
    </div>
  </div>

  <div className="flex items-center justify-center md:justify-start gap-2">
    <span className="opacity-70">🌧</span>
    <div className="text-center md:text-left">
      <p className="opacity-70">Precipitation</p>
      <p className="font-Manrope">{current.precip_in} in</p>
    </div>
  </div>

</div>*/}
    </div>
  );
};

export default WeatherCard;

// import { useEffect, useState } from "react";
// import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";

// const WeatherCard = ({ weather }) => {
//   const { location, current } = weather;
//   const [displayTemp, setDisplayTemp] = useState(0);

//   // Animated temperature counter
//   useEffect(() => {
//     let start = 0;
//     const end = Math.floor(current.temp_c);
//     const duration = 800;
//     const increment = end / (duration / 16);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setDisplayTemp(end);
//         clearInterval(counter);
//       } else {
//         setDisplayTemp(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(counter);
//   }, [current.temp_c]);

//   return (
//     <div
//       className="
//         bg-white/10
//         backdrop-blur-xl
//         rounded-2xl
//         p-8
//         w-full

//         text-center
//         transition-all duration-500
//         text-white
//       "
//     >
//       {/* bg-white/10
//     backdrop-blur-xl
//     rounded-2xl
//     p-8
//     w-[92%] md:w-full max-w-md
//     shadow-2xl
//     text-center
//     transition-all duration-500 text-white */}
//       {/* <h2 className="text-2xl font-semibold">
//         {location.name}, {location.country}
//       </h2>

//       <p className="text-sm opacity-80 mt-1">
//         {location.localtime}
//       </p> */}

//       {/* <img
//         src={current.condition.icon}
//         alt={current.condition.text}
//         className="mx-auto my-4 w-20"
//       /> */}

// <div className="flex justify-center mb-4 sun-glow">
//   <img
//     src={weather.current.condition.icon}
//     alt="weather icon"
//     className="w-20 h-20"
//   />
// </div>

//       <h3 className="font-Manrope md:text-6xl text-5xl font-bold flex items-center justify-center">{displayTemp}<p className="font-Outfit">°C</p></h3>

//       <p className="font-Outfit md:text-3xl text-2xl mt-2.5 opacity-90">{current.condition.text}</p>

//       {/* <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
//         <div>
//           <p className="opacity-70">Humidity</p>
//           <p>{current.humidity}%</p>
//         </div>

//         <div>
//           <p className="opacity-70">Wind</p>
//           <p>{current.wind_kph} km/h</p>
//         </div>

//         <div>
//           <p className="opacity-70">Feels Like</p>
//           <p>{current.feelslike_c}°C</p>
//         </div>

//         <div>
//           <p className="opacity-70">Pressure</p>
//           <p>{current.pressure_mb} mb</p>
//         </div>
//       </div> */}

//       <div className="font-Outfit grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-sm">
//         <div>
//           <p className="opacity-70">Humidity</p>
//           <p className="font-Manrope">{current.humidity}%</p>
//         </div>

//         <div>
//           <p className="opacity-70">Wind</p>
//           <p className="font-Manrope">{current.wind_kph} km/h</p>
//         </div>

//         <div>
//           <p className="opacity-70">Wind Dir</p>
//           <p className="font-Manrope">{current.wind_dir}</p>
//         </div>

//         <div>
//           <p className="opacity-70">Wind Gust</p>
//           <p className="font-Manrope">{current.gust_kph} km/h</p>
//         </div>

//         <div>
//           <p className="opacity-70">Feels Like</p>
//           <p className="font-Manrope">{current.feelslike_c}°C</p>
//         </div>

//         <div>
//           <p className="opacity-70">Heat Index</p>
//           <p className="font-Manrope">{current.heatindex_c}°C</p>
//         </div>

//         <div>
//           <p className="opacity-70">Wind Chill</p>
//           <p className="font-Manrope">{current.windchill_c}°C</p>
//         </div>

//         <div>
//           <p className="opacity-70">Dew Point</p>
//           <p className="font-Manrope">{current.dewpoint_c}°C</p>
//         </div>

//         <div>
//           <p className="opacity-70">Visibility</p>
//           <p className="font-Manrope">{current.vis_km} km</p>
//         </div>

//         <div>
//           <p className="opacity-70">UV Index</p>
//           <p className="font-Manrope">{current.uv}</p>
//         </div>

//         <div>
//           <p className="opacity-70">Cloud</p>
//           <p className="font-Manrope">{current.cloud}%</p>
//         </div>

//         <div>
//           <p className="opacity-70">Precipitation</p>
//           <p className="font-Manrope">{current.precip_in} in</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherCard;
