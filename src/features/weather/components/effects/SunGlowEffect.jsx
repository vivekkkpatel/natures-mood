const SunGlowEffect = ({ intensity = "full" }) => {
  const scale = intensity === "partial" ? 0.65 : 1;
  const op = intensity === "partial" ? 0.5 : 0.85;

  return (
    <div className="sun-glow-container">
      <div
        className="sun-orb"
        style={{ transform: `scale(${scale})`, opacity: op }}
      />
      <div className="sun-rays" style={{ opacity: op * 0.6 }} />
    </div>
  );
};

export default SunGlowEffect;
