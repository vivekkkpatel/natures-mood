import { GiMoonOrbit } from "react-icons/gi";
import { WiMoonAltWaxingCrescent6 } from "react-icons/wi";
import { BsMoonStars } from "react-icons/bs";
import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";

const AstronomyCard = ({ astro }) => {
  if (!astro) return null;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white md:h-full">
      <h3 className="font-Outfit text-xl md:text-2xl font-semibold mb-1">
        <div className="flex items-center justify-left gap-1.5 mt-1">
          <GiMoonOrbit size={22} />
          Celestial
        </div>
      </h3>

      <div className="font-Outfit mb-4 text-sm opacity-80">
        Current Sun and Moon Calculations
      </div>

      <div className="font-Outfit grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="flex items-center justify-left gap-0.5 mt-1 -ml-1">
            <WiSunrise size={22} />
            <p className="text-white/70">Sunrise</p>
          </div>

          <p className="font-Manrope font-semibold">{astro.sunrise}</p>
        </div>
        <div>
          <div className="flex items-center justify-left gap-0.5 mt-1 -ml-1">
            <WiSunset size={22} />
            <p className="text-white/70">Sunset</p>
          </div>
          <p className="font-Manrope font-semibold">{astro.sunset}</p>
        </div>
        <div>
          <div className="flex items-center justify-left gap-0 mt-1 -ml-1">
            <WiMoonrise size={22} />
            <p className="text-white/70">Moonrise</p>
          </div>

          <p className="font-Manrope font-semibold">{astro.moonrise}</p>
        </div>
        <div>
          <div className="flex items-center justify-left gap-0 mt-1 -ml-1">
            <WiMoonset size={22} />
            <p className="text-white/70">Moonset</p>
          </div>

          <p className="font-Manrope font-semibold">{astro.moonset}</p>
        </div>
        <div>
          <div className="flex items-center justify-left gap-1 mt-1 -ml-0.5">
            <WiMoonAltWaxingCrescent6 size={16} />
            <p className="text-white/70">Moon Phase</p>
          </div>

          <p className="font-Manrope font-semibold">{astro.moon_phase}</p>
        </div>
        <div>
          <div className="flex items-center justify-left gap-1.5 mt-1">
            <BsMoonStars size={12} />
            <p className="text-white/70">Illumination</p>
          </div>

          <p className="font-Manrope font-semibold">
            {astro.moon_illumination}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AstronomyCard;

// const AstronomyCard = ({ astro }) => {
//   if (!astro) return null;

//   return (
//     <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">

//       <h3 className="font-Outfit text-xl md:text-2xl font-semibold mb-4">
//         Celestial
//       </h3>

//       <div className="font-Outfit grid grid-cols-2 gap-4 text-sm">

//         <div>
//           <p className="text-white/70">Sunrise</p>
//           <p className="font-Manrope font-semibold"> {astro.sunrise}</p>
//         </div>

//         <div>
//           <p className="text-white/70">Sunset</p>
//           <p className="font-Manrope font-semibold"> {astro.sunset}</p>
//         </div>

//         <div>
//           <p className="text-white/70">Moonrise</p>
//           <p className="font-Manrope font-semibold"> {astro.moonrise}</p>
//         </div>

//         <div>
//           <p className="text-white/70">Moonset</p>
//           <p className="font-Manrope font-semibold"> {astro.moonset}</p>
//         </div>

//         <div>
//           <p className="text-white/70">Moon Phase</p>
//           <p className="font-Manrope font-semibold">{astro.moon_phase}</p>
//         </div>

//         <div>
//           <p className="text-white/70">Illumination</p>
//           <p className="font-Manrope font-semibold">
//             {astro.moon_illumination}%
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default AstronomyCard;
