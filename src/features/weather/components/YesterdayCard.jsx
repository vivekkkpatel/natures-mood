import { IoIosPartlySunny } from "react-icons/io";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { IconCloudRain, IconUvIndex, IconEye } from "@tabler/icons-react";
import { BsDropletHalf } from "react-icons/bs";
import {
  PiArrowBendUpLeftBold,
  PiArrowArcLeftBold,
  PiArrowBendDownLeftBold,
} from "react-icons/pi";

const YesterdayCard = ({ yesterday }) => {
  if (!yesterday || !yesterday.day) return null;

  const day = yesterday.day;

  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl md:h-full">
      <h3 className="font-Outfit text-xl md:text-2xl font-semibold mb-4">
        <div className="flex items-center justify-left gap-0">
          Yesterday's Highlights
        </div>
      </h3>

      <div className="font-Outfit grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-white/70 flex items-center gap-0.5">
            <FaTemperatureQuarter size={14} /> Avg Temp
          </div>
          <p className="font-Manrope font-semibold">{day.avgtemp_c}°C</p>
        </div>

        <div>
          <div className="text-white/70 flex items-center gap-1">
            <IoIosPartlySunny size={16} /> Condition
          </div>
          <p className="font-Manrope font-semibold">{day.condition?.text}</p>
        </div>

        <div>
          <div className="text-white/70 flex items-center gap-1">
            <BsDropletHalf size={14} /> Humidity
          </div>
          <p className="font-Manrope font-semibold">{day.avghumidity}%</p>
        </div>

        <div>
          <div className="text-white/70 flex items-center gap-1">
            <IconCloudRain size={16} /> Precipitation
          </div>
          <p className="font-Manrope font-semibold">{day.totalprecip_mm} mm</p>
        </div>

        <div>
          <div className="text-white/70 flex items-center gap-1">
            <IconEye size={14} /> Visibility
          </div>
          <p className="font-Manrope font-semibold">{day.avgvis_km} km</p>
        </div>

        <div>
          <div className="text-white/70 flex items-center gap-0.5">
            <IconUvIndex size={18} /> UV Index
          </div>
          <p className="font-Manrope font-semibold">{day.uv}</p>
        </div>
      </div>
    </div>
  );
};

export default YesterdayCard;

// const YesterdayCard = ({ yesterday }) => {
//   if (!yesterday || !yesterday.day) return null;

//   const day = yesterday.day;

//   return (
//     <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl w-full">

//       <h3 className="font-Outfit text-xl md:text-2xl font-semibold mb-4">
//         Yesterday's Highlights
//         {/* <div className="font-Manrope text-sm font-normal mt-1">{yesterday.date}</div> */}
//       </h3>

//       <div className="font-Outfit space-y-2 text-white/70 text-sm">

//         <p>Avg Temp: <span className="font-Manrope text-white">{day.avgtemp_c}°C</span></p>
//         <p>Condition: <span className="font-Manrope text-white">{day.condition?.text}</span></p>
//         <p>Humidity: <span className="font-Manrope text-white">{day.avghumidity}%</span></p>
//         <p>Precipitation: <span className="font-Manrope text-white">{day.totalprecip_mm} mm</span></p>
//         <p>Visibility: <span className="font-Manrope text-white">{day.avgvis_km} km</span></p>
//         <p>UV: <span className="font-Manrope text-white">{day.uv}</span></p>

//       </div>
//     </div>
//   );
// };

// export default YesterdayCard;
