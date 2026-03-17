import { IconDashboard } from "@tabler/icons-react";

const AqiCard = ({ air }) => {
  if (!air) return null;

  const aqi = air["us-epa-index"];

  const getAQIData = (value) => {
    switch (value) {
      case 1:
        return { label: "Good", color: "bg-green-500" };
      case 2:
        return { label: "Moderate", color: "bg-yellow-400" };
      case 3:
        return { label: "Unhealthy (Sensitive)", color: "bg-orange-400" };
      case 4:
        return { label: "Unhealthy", color: "bg-red-500" };
      case 5:
        return { label: "Very Unhealthy", color: "bg-purple-500" };
      default:
        return { label: "Hazardous", color: "bg-gray-700" };
    }
  };

  const { label, color } = getAQIData(aqi);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
      <h3 className="font-Outfit text-base md:text-lg font-semibold mb-4">
        <div className="flex items-center justify-left gap-1.5 mt-1">
          <IconDashboard size={20} />
          Air Quality
        </div>
      </h3>

      <div className="font-Outfit text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
        AQI <div className="font-Manrope">{aqi}</div>
      </div>

      <div className="font-Outfit mb-4 text-sm opacity-80">{label}</div>

      <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
        <div
          className={`${color} h-full`}
          style={{ width: `${(aqi / 6) * 100}%` }}
        />
      </div>

      <div className="font-Outfit grid grid-cols-2 gap-3 mt-6 text-sm text-white/70 font-semibold">
        <div>
          PM2.5:{" "}
          <span className="font-Manropes font-normal text-white">
            {air.pm2_5} {" "}<span className="font-Outfit">µg/m³</span>
          </span>
        </div>
        <div>
          PM10:{" "}
          <span className="font-Manrope font-normal text-white">
            {air.pm10}{" "}<span className="font-Outfit">µg/m³</span>
          </span>
        </div>
        <div>
          CO:{" "}
          <span className="font-Manrope font-normal text-white">{air.co}{" "}<span className="font-Outfit">µg/m³</span></span>
        </div>
        <div>
          NO₂:{" "}
          <span className="font-Manrope font-normal text-white">{air.no2}{" "}<span className="font-Outfit">µg/m³</span></span>
        </div>
        <div>
          O₃:{" "}
          <span className="font-Manrope font-normal text-white">{air.o3}{" "}<span className="font-Outfit">µg/m³</span></span>
        </div>
        <div>
          SO₂:{" "}
          <span className="font-Manrope font-normal text-white">{air.so2}{" "}<span className="font-Outfit">µg/m³</span></span>
        </div>
      </div>
    </div>
  );
};

export default AqiCard;

// const AqiCard = ({ air }) => {
//   if (!air) return null;

//   const aqi = air["us-epa-index"];

//   const getAQIData = (value) => {
//     switch (value) {
//       case 1:
//         return { label: "Good", color: "bg-green-500" };
//       case 2:
//         return { label: "Moderate", color: "bg-yellow-400" };
//       case 3:
//         return { label: "Unhealthy (Sensitive)", color: "bg-orange-400" };
//       case 4:
//         return { label: "Unhealthy", color: "bg-red-500" };
//       case 5:
//         return { label: "Very Unhealthy", color: "bg-purple-500" };
//       default:
//         return { label: "Hazardous", color: "bg-gray-700" };
//     }
//   };

//   const { label, color } = getAQIData(aqi);

//   return (
//     <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">

//       <h3 className="font-Outfit text-base md:text-lg font-semibold mb-4">
//         Air Quality
//       </h3>

//       <div className="font-Outfit text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
//         AQI <div className="font-Manrope">{aqi}</div>
//       </div>

//       <div className="font-Outfit mb-4 text-sm opacity-80">
//         {label}
//       </div>

//       {/* AQI Progress Bar */}
//       <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
//         <div
//           className={`${color} h-full`}
//           style={{ width: `${(aqi / 6) * 100}%` }}
//         />
//       </div>

//       {/* Pollutants */}
//       <div className="font-Outfit grid grid-cols-2 gap-3 mt-6 text-sm">
//         <div>PM2.5: <span className="font-Manrope">{air.pm2_5}</span></div>
//         <div>PM10: <span className="font-Manrope">{air.pm10}</span></div>
//         <div>CO: <span className="font-Manrope">{air.co}</span></div>
//         <div>NO₂: <span className="font-Manrope">{air.no2}</span></div>
//         <div>O₃: <span className="font-Manrope">{air.o3}</span></div>
//         <div>SO₂: <span className="font-Manrope">{air.so2}</span></div>
//       </div>

//     </div>
//   );
// };

// export default AqiCard;
