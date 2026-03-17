// const RainEffect = () => {

//   const drops = Array.from({ length: 80 });

//   return (
//     <div className="rain-container">
//       {drops.map((_,i)=>(
//         <span key={i} className="rain-drop"></span>
//       ))}
//     </div>
//   );
// };

// export default RainEffect;

import { useMemo } from "react";

const RainEffect = ({ intensity = "moderate" }) => {
  const config = {
    light: { count: 50, minSpd: 1.0, maxSpd: 1.5 },
    moderate: { count: 100, minSpd: 0.6, maxSpd: 1.0 },
    heavy: { count: 180, minSpd: 0.3, maxSpd: 0.6 },
  };

  const { count, minSpd, maxSpd } = config[intensity] || config.moderate;

  const drops = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: minSpd + Math.random() * (maxSpd - minSpd),
        height: 10 + Math.random() * 18,
        opacity: 0.15 + Math.random() * 0.4,
      })),
    [count, minSpd, maxSpd],
  );

  return (
    <div className="rain-container">
      {drops.map((d) => (
        <div
          key={d.id}
          className="rain-drop"
          style={{
            left: `${d.left}%`,
            height: `${d.height}px`,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;
