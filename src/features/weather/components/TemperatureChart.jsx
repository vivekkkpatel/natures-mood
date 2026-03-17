import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { FaTemperatureHalf } from "react-icons/fa6";

const TemperatureChart = ({ forecast }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!forecast) return null;

  const data = forecast.forecastday[0].hour.map((hour) => ({
    time: new Date(hour.time).getHours().toString().padStart(2, "0") + ":00",
    temp: hour.temp_c,
  }));

  return (
    <div className="font-Manrope mt-10 w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
      <h2 className="font-Outfit text-xl md:text-2xl font-semibold mb-4">
        <div className="flex items-center justify-left gap-1.5">
          <FaTemperatureHalf size={22} /> Temperature Trend
        </div>
      </h2>

      <div className="outline-none focus:outline-none [&_*]:outline-none">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis
              className="font-Outfit"
              dataKey="time"
              stroke="#fff"
              interval={isMobile ? 3 : 1}
              tick={{ fontSize: isMobile ? 10 : 12 }}
              padding={{ left: 20, right: 0 }}
            />

            <Tooltip
              className="font-Manrope"
              formatter={(value) => [`${value}°C`, "Temperature"]}
              labelFormatter={(label) => `Time: ${label}`}
              contentStyle={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#ffffff"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChart;

// import {
//   LineChart,
//   Line,
//   XAxis,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts";

// const TemperatureChart = ({ forecast }) => {

//   if (!forecast) return null;

//   const data = forecast.forecastday[0].hour.map((hour) => ({
//     time: new Date(hour.time).getHours() + ":00",
//     temp: hour.temp_c
//   }));

//   return (
//     <div className="font-Manrope mt-10 w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl ">

//       <h2 className="font-Outfit text-xl md:text-2xl font-semibold mb-4 sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Temperature Trend</h2>
//       <div className="outline-none focus:outline-none [&_*]:outline-none">
//       <ResponsiveContainer width="100%" height={200}>
//         <LineChart data={data}>
//           <XAxis className="font-Outfit" dataKey="time" stroke="#fff" />
//           <Tooltip className="font-Manrope"
//   formatter={(value) => [`${value}°C`, "Temperature"]}
//   labelFormatter={(label) => `Time: ${label}`}
//   contentStyle={{
//     background: "rgba(255,255,255,0.1)",
//     backdropFilter: "blur(10px)",
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "12px",
//     color: "#fff"
//   }}
// />
//           <Line
//   type="monotone"
//   dataKey="temp"
//   stroke="#ffffff"
//   strokeWidth={3}
//   dot={false}
//   activeDot={{ r: 6 }}
// />
//         </LineChart>
//       </ResponsiveContainer>
//       </div>

//     </div>
//   );
// };

// export default TemperatureChart;
