import { IoMdSunny } from "react-icons/io";
import { WiSunrise, WiSunset } from "react-icons/wi";

const SunProgress = ({ forecast, location }) => {
  if (!forecast || !location) return null;

  const astro = forecast.forecastday[0].astro;

  const parseTime = (timeStr) => {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  const sunriseMinutes = parseTime(astro.sunrise);
  const sunsetMinutes = parseTime(astro.sunset);

  const cityTime = new Date(location.localtime);
  const nowMinutes = cityTime.getHours() * 60 + cityTime.getMinutes();

  let progress =
    ((nowMinutes - sunriseMinutes) / (sunsetMinutes - sunriseMinutes)) * 100;

  progress = Math.max(0, Math.min(progress, 100));

  const isDay = nowMinutes >= sunriseMinutes && nowMinutes <= sunsetMinutes;

  /* ---- SVG Arc Calculations ---- */

  const radius = 150;
  const centerX = 160;
  const centerY = 160;

  const angle = (progress / 100) * Math.PI;

  const sunX = centerX - radius * Math.cos(angle);
  const sunY = centerY - radius * Math.sin(angle);

  return (
    <div className="mt-10 w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl">
      <h2 className="font-Outfit text-xl md:text-2xl font-semibold mb-6">
        <div className="flex items-center justify-left gap-1.5 mt-1">
          <IoMdSunny size={22} /> Sun Cycle
        </div>
      </h2>

      <div className="font-Manrope font-bold flex justify-between text-sm mb-6">
        <div className="flex items-center justify-left gap-1">
          <WiSunrise size={20} /> <span>{astro.sunrise}</span>
        </div>

        <div className="flex items-center justify-left gap-1">
          <WiSunset size={20} /> <span>{astro.sunset}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <svg width="320" height="170">
          {/* arc path */}
          <path
            d="M10 160 A150 150 0 0 1 310 160"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="6"
          />

          {/* progress arc */}
          <path
            d="M10 160 A150 150 0 0 1 310 160"
            fill="none"
            stroke="url(#sunGradient)"
            strokeWidth="6"
            strokeDasharray="471"
            strokeDashoffset={471 - (progress / 100) * 471}
            style={{ transition: "stroke-dashoffset 0.7s ease" }}
          />

          <defs>
            <linearGradient id="sunGradient">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          {/* sun / moon */}
          <text
            x={sunX}
            y={sunY}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="22"
          >
            {isDay ? "☀️" : "🌙"}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SunProgress;
