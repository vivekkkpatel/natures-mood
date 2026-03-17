import RainEffect from "./RainEffect";
import SnowEffect from "./SnowEffect";
import LightningEffect from "./LightningEffect";
import FogEffect from "./FogEffect";
import SunGlowEffect from "./SunGlowEffect";
import StarsEffect from "./StarsEffect";
import CloudsEffect from "./CloudsEffect";

const WeatherEffects = ({ weatherType, isDay }) => {

  // ── FORCE boolean ──
  const day = isDay === true;
  const night = isDay === false;

  // ── Debug log — REMOVE after confirming fix ──

  // ── CLEAR DAY ──
  if (weatherType === "clear" && day) {
    return <SunGlowEffect />;
  }

  // ── CLEAR NIGHT — ONLY place stars render ──
  if (weatherType === "clear" && night) {
    return <StarsEffect />;
  }

  // ── PARTLY CLOUDY DAY ──
  if (weatherType === "partly-cloudy" && day) {
    return (
      <>
        <SunGlowEffect intensity="partial" />
        <CloudsEffect density="light" />
      </>
    );
  }

  // ── PARTLY CLOUDY NIGHT ──
  if (weatherType === "partly-cloudy" && night) {
    return <CloudsEffect density="light" />;
  }

  // ── CLOUDY ──
  if (weatherType === "cloudy") {
    return <CloudsEffect density="medium" />;
  }

  // ── OVERCAST ──
  if (weatherType === "overcast") {
    return <CloudsEffect density="heavy" dark />;
  }

  // ── LIGHT RAIN ──
  if (weatherType === "light-rain") {
    return (
      <>
        <CloudsEffect density="medium" dark />
        <RainEffect intensity="light" />
      </>
    );
  }

  // ── MODERATE RAIN ──
  if (weatherType === "moderate-rain") {
    return (
      <>
        <CloudsEffect density="heavy" dark />
        <RainEffect intensity="moderate" />
      </>
    );
  }

  // ── HEAVY RAIN ──
  if (weatherType === "heavy-rain") {
    return (
      <>
        <CloudsEffect density="heavy" dark />
        <RainEffect intensity="heavy" />
      </>
    );
  }

  // ── FREEZING RAIN ──
  if (weatherType === "freezing-rain") {
    return (
      <>
        <CloudsEffect density="heavy" dark />
        <RainEffect intensity="moderate" />
      </>
    );
  }

  // ── LIGHT SNOW ──
  if (weatherType === "light-snow") {
    return (
      <>
        <CloudsEffect density="light" />
        <SnowEffect intensity="light" />
      </>
    );
  }

  // ── MODERATE SNOW ──
  if (weatherType === "moderate-snow") {
    return (
      <>
        <CloudsEffect density="medium" />
        <SnowEffect intensity="moderate" />
      </>
    );
  }

  // ── HEAVY SNOW ──
  if (weatherType === "heavy-snow") {
    return (
      <>
        <CloudsEffect density="heavy" />
        <SnowEffect intensity="heavy" />
      </>
    );
  }

  // ── BLIZZARD ──
  if (weatherType === "blizzard") {
    return <SnowEffect intensity="blizzard" />;
  }

  // ── ICE PELLETS ──
  if (weatherType === "ice-pellets") {
    return (
      <>
        <CloudsEffect density="medium" dark />
        <SnowEffect intensity="moderate" />
      </>
    );
  }

  // ── THUNDERSTORM ──
  if (weatherType === "thunderstorm") {
    return (
      <>
        <CloudsEffect density="heavy" dark />
        <RainEffect intensity="heavy" />
        <LightningEffect />
      </>
    );
  }

  // ── MIST ──
  if (weatherType === "mist") {
    return <FogEffect density="light" />;
  }

  // ── FOG ──
  if (weatherType === "fog") {
    return <FogEffect density="heavy" />;
  }

  // ── FREEZING FOG ──
  if (weatherType === "freezing-fog") {
    return <FogEffect density="heavy" freezing />;
  }

  // ── FALLBACK — NO stars ever ──
  console.warn("WeatherEffects: unmatched condition →", weatherType, isDay);
  return null;
};

export default WeatherEffects;

// import RainEffect from "./RainEffect";
// import SnowEffect from "./SnowEffect";
// import LightningEffect from "./LightningEffect";
// import FogEffect from "./FogEffect";
// import SunGlowEffect from "./SunGlowEffect";
// import StarsEffect from "./StarsEffect";
// import CloudsEffect from "./CloudsEffect";

// const WeatherEffects = ({ weatherType, isDay }) => {

//   // ── Stars ONLY for clear/partly-cloudy nights ──
//   const showStars =
//     isDay === false &&
//     (weatherType === "clear" || weatherType === "partly-cloudy");

//   // ── Sun ONLY for clear/partly-cloudy days ──
//   const showSun =
//     isDay === true &&
//     (weatherType === "clear" || weatherType === "partly-cloudy");

//   switch (weatherType) {

//     /* ── CLEAR ── */
//     case "clear":
//       return (
//         <>
//           {showSun && <SunGlowEffect />}
//           {showStars && <StarsEffect />}
//         </>
//       );

//     /* ── PARTLY CLOUDY ── */
//     case "partly-cloudy":
//       return (
//         <>
//           {showSun && <SunGlowEffect intensity="partial" />}
//           {showStars && <StarsEffect />}
//           <CloudsEffect density="light" />
//         </>
//       );

//     /* ── CLOUDY ── */
//     case "cloudy":
//       return <CloudsEffect density="medium" />;

//     /* ── OVERCAST ── */
//     case "overcast":
//       return <CloudsEffect density="heavy" dark />;

//     /* ── LIGHT RAIN ── */
//     case "light-rain":
//       return (
//         <>
//           <CloudsEffect density="medium" dark />
//           <RainEffect intensity="light" />
//         </>
//       );

//     /* ── MODERATE RAIN ── */
//     case "moderate-rain":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="moderate" />
//         </>
//       );

//     /* ── HEAVY RAIN ── */
//     case "heavy-rain":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="heavy" />
//         </>
//       );

//     /* ── FREEZING RAIN ── */
//     case "freezing-rain":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="moderate" />
//         </>
//       );

//     /* ── LIGHT SNOW ── */
//     case "light-snow":
//       return (
//         <>
//           <CloudsEffect density="light" />
//           <SnowEffect intensity="light" />
//         </>
//       );

//     /* ── MODERATE SNOW ── */
//     case "moderate-snow":
//       return (
//         <>
//           <CloudsEffect density="medium" />
//           <SnowEffect intensity="moderate" />
//         </>
//       );

//     /* ── HEAVY SNOW ── */
//     case "heavy-snow":
//       return (
//         <>
//           <CloudsEffect density="heavy" />
//           <SnowEffect intensity="heavy" />
//         </>
//       );

//     /* ── BLIZZARD ── */
//     case "blizzard":
//       return <SnowEffect intensity="blizzard" />;

//     /* ── ICE PELLETS ── */
//     case "ice-pellets":
//       return (
//         <>
//           <CloudsEffect density="medium" dark />
//           <SnowEffect intensity="moderate" />
//         </>
//       );

//     /* ── THUNDERSTORM ── */
//     case "thunderstorm":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="heavy" />
//           <LightningEffect />
//         </>
//       );

//     /* ── MIST ── */
//     case "mist":
//       return <FogEffect density="light" />;

//     /* ── FOG ── */
//     case "fog":
//       return <FogEffect density="heavy" />;

//     /* ── FREEZING FOG ── */
//     case "freezing-fog":
//       return <FogEffect density="heavy" freezing />;

//     /* ── DEFAULT — safe fallback ── */
//     default:
//       if (isDay === true) return <SunGlowEffect />;
//       if (isDay === false) return <StarsEffect />;
//       return null;
//   }
// };

// export default WeatherEffects;

// import RainEffect from "./RainEffect";
// import SnowEffect from "./SnowEffect";
// import LightningEffect from "./LightningEffect";
// import FogEffect from "./FogEffect";
// import SunGlowEffect from "./SunGlowEffect";
// import StarsEffect from "./StarsEffect";
// import CloudsEffect from "./CloudsEffect";

// const WeatherEffects = ({ weatherType, isDay }) => {
//   switch (weatherType) {
//     /* ── CLEAR ── */
//     case "clear":
//       return isDay ? <SunGlowEffect /> : <StarsEffect />;

//     /* ── PARTLY CLOUDY ── */
//     case "partly-cloudy":
//       return (
//         <>
//           {isDay ? <SunGlowEffect intensity="partial" /> : <StarsEffect />}
//           <CloudsEffect density="light" />
//         </>
//       );

//     /* ── CLOUDY ── */
//     case "cloudy":
//       return <CloudsEffect density="medium" />;

//     /* ── OVERCAST ── */
//     case "overcast":
//       return <CloudsEffect density="heavy" dark />;

//     /* ── LIGHT RAIN ── */
//     case "light-rain":
//       return (
//         <>
//           <CloudsEffect density="medium" dark />
//           <RainEffect intensity="light" />
//         </>
//       );

//     /* ── MODERATE RAIN ── */
//     case "moderate-rain":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="moderate" />
//         </>
//       );

//     /* ── HEAVY RAIN ── */
//     case "heavy-rain":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="heavy" />
//         </>
//       );

//     /* ── FREEZING RAIN ── */
//     case "freezing-rain":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="moderate" />
//         </>
//       );

//     /* ── LIGHT SNOW ── */
//     case "light-snow":
//       return (
//         <>
//           <CloudsEffect density="light" />
//           <SnowEffect intensity="light" />
//         </>
//       );

//     /* ── MODERATE SNOW ── */
//     case "moderate-snow":
//       return (
//         <>
//           <CloudsEffect density="medium" />
//           <SnowEffect intensity="moderate" />
//         </>
//       );

//     /* ── HEAVY SNOW ── */
//     case "heavy-snow":
//       return (
//         <>
//           <CloudsEffect density="heavy" />
//           <SnowEffect intensity="heavy" />
//         </>
//       );

//     /* ── BLIZZARD ── */
//     case "blizzard":
//       return <SnowEffect intensity="blizzard" />;

//     /* ── ICE PELLETS ── */
//     case "ice-pellets":
//       return (
//         <>
//           <CloudsEffect density="medium" dark />
//           <SnowEffect intensity="moderate" />
//         </>
//       );

//     /* ── THUNDERSTORM ── */
//     case "thunderstorm":
//       return (
//         <>
//           <CloudsEffect density="heavy" dark />
//           <RainEffect intensity="heavy" />
//           <LightningEffect />
//         </>
//       );

//     /* ── MIST ── */
//     case "mist":
//       return <FogEffect density="light" />;

//     /* ── FOG ── */
//     case "fog":
//       return <FogEffect density="heavy" />;

//     /* ── FREEZING FOG ── */
//     case "freezing-fog":
//       return <FogEffect density="heavy" freezing />;

//     default:
//       return isDay ? <SunGlowEffect /> : <StarsEffect />;
//   }
// };

// export default WeatherEffects;