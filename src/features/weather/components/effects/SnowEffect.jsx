import { useMemo } from "react";

const SnowEffect = ({ intensity = "moderate" }) => {
  const config = {
    light: { count: 35 },
    moderate: { count: 70 },
    heavy: { count: 120 },
    blizzard: { count: 200 },
  };

  const { count } = config[intensity] || config.moderate;
  const isBlizzard = intensity === "blizzard";

  const flakes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: isBlizzard ? 1 + Math.random() * 2 : 3 + Math.random() * 6,
        size: 2 + Math.random() * 5,
        opacity: 0.4 + Math.random() * 0.6,
        sway: -20 + Math.random() * 40,
      })),
    [count, isBlizzard],
  );

  return (
    <div className="snow-container">
      {flakes.map((f) => (
        <div
          key={f.id}
          className={`snowflake ${isBlizzard ? "snowflake-blizzard" : ""}`}
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            "--sway": `${f.sway}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
