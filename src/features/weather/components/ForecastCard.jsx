import { BsDropletHalf } from "react-icons/bs";

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div>
      <h2 className="font-Outfit text-2xl font-semibold mb-4 text-white">
        3 Day Forecast
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/30 sm:justify-start md:justify-start scroll-smooth">
        {forecast.forecastday.map((day) => (
          <div
            key={day.date}
            className="min-w-[147px] bg-white/10 backdrop-blur-xl rounded-2xl p-4 text-center text-white flex-shrink-0"
          >
            <p className="font-Outfit font-medium">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="mx-auto my-2"
            />
            <p className="font-Manrope text-lg font-semibold">
              {day.day.maxtemp_c}° / {day.day.mintemp_c}°
            </p>
            <p className="font-Outfit text-sm opacity-80">
              {day.day.condition.text}
            </p>

            <div className="flex items-center justify-center gap-1 mt-1">
              <BsDropletHalf size={12} />
              <p className="font-Manrope text-xs opacity-70">
                {day.day.avghumidity}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;

// const ForecastCard = ({ forecast }) => {
//   if (!forecast) return null;

//   return (
//     <div className="w-full">

//       <h2 className="font-Outfit text-2xl font-semibold mb-4 text-white">
//         5 Day Forecast
//       </h2>

//       <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/30">

//         {forecast.forecastday.map((day) => (
//           <div
//             key={day.date}
//             className="
//             min-w-[140px]
//             bg-white/10
//             backdrop-blur-xl
//             rounded-2xl
//             p-4
//             text-center
//             text-white

//             flex-shrink-0
//           "
//           >
//             {/* Day */}
//             <p className="font-Outfit font-medium">
//               {new Date(day.date).toLocaleDateString("en-US", {
//                 weekday: "short",
//               })}
//             </p>

//             {/* Icon */}
//             <img
//               src={day.day.condition.icon}
//               alt={day.day.condition.text}
//               className="mx-auto my-2"
//             />

//             {/* Temp */}
//             <p className="font-Manrope text-lg font-semibold">
//               {day.day.maxtemp_c}° / {day.day.mintemp_c}°
//             </p>

//             {/* Condition */}
//             <p className="font-Outfit text-sm opacity-80">
//               {day.day.condition.text}
//             </p>

//             {/* Humidity */}
//             <p className="font-Ropeman text-xs opacity-70 mt-1">
//               💧 {day.day.avghumidity}%
//             </p>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// };

// export default ForecastCard;

// // const ForecastCard = ({ forecast }) => {
// //   if (!forecast) return null;

// //   return (
// //     <div className="mt-8 w-full max-w-4xl mx-auto">

// //       <h2 className="font-Outfit text-2xl font-semibold mb-4 text-white">
// //         5 Day Forecast
// //       </h2>

// //       <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

// //         {forecast.forecastday.map((day) => (
// //           <div
// //             key={day.date}
// //             className="
// //             bg-white/20
// //             backdrop-blur-xl
// //             rounded-2xl
// //             p-4
// //             text-center
// //             text-white
// //             shadow-lg
// //           "
// //           >
// //             {/* Day */}
// //             <p className="font-Outfit font-medium">
// //               {new Date(day.date).toLocaleDateString("en-US", {
// //                 weekday: "short",
// //               })}
// //             </p>

// //             {/* Icon */}
// //             <img
// //               src={day.day.condition.icon}
// //               alt={day.day.condition.text}
// //               className="mx-auto my-2"
// //             />

// //             {/* Temp */}
// //             <p className="font-Manrope text-lg font-semibold">
// //               {day.day.maxtemp_c}° / {day.day.mintemp_c}°
// //             </p>

// //             {/* Condition */}
// //             <p className="font-Outfit text-sm opacity-80">
// //               {day.day.condition.text}
// //             </p>

// //             {/* Humidity */}
// //             <p className="font-Ropeman text-xs opacity-70 mt-1">
// //               💧 {day.day.avghumidity}%
// //             </p>
// //           </div>
// //         ))}

// //       </div>
// //     </div>
// //   );
// // };

// // export default ForecastCard;
