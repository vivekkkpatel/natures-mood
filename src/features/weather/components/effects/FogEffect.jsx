const FogEffect = ({ density = "normal", freezing = false }) => {
  const opacityMap = { light: 0.25, normal: 0.45, heavy: 0.6 };
  const base = opacityMap[density] || 0.45;
  const tint = freezing ? "180,210,255" : "220,220,220";

  const layers = [
    { pos: "50% 50%", op: base, anim: "fogDrift1" },
    { pos: "50% 40%", op: base * 0.8, anim: "fogDrift2" },
    { pos: "50% 60%", op: base * 0.6, anim: "fogDrift3" },
  ];

  return (
    <div className="fog-container">
      {layers.map((l, i) => (
        <div
          key={i}
          className={`fog-layer ${l.anim}`}
          style={{
            background: `radial-gradient(ellipse at ${l.pos}, rgba(${tint},${l.op}) 0%, rgba(${tint},${l.op * 0.5}) 40%, transparent 65%)`,
          }}
        />
      ))}
    </div>
  );
};

export default FogEffect;

// const FogEffect = ({ density = "normal", freezing = false }) => {
//   const opacityMap = { light: 0.25, normal: 0.45, heavy: 0.6 };
//   const base = opacityMap[density] || 0.45;
//   const tint = freezing ? "180,210,255" : "220,220,220";

//   const layers = [
//     { pos: "25% 50%", op: base, anim: "fogDrift1" },
//     { pos: "75% 40%", op: base * 0.8, anim: "fogDrift2" },
//     { pos: "50% 70%", op: base * 0.6, anim: "fogDrift3" },
//   ];

//   return (
//     <div className="fog-container">
//       {layers.map((l, i) => (
//         <div
//           key={i}
//           className={`fog-layer ${l.anim}`}
//           style={{
//             background: `radial-gradient(ellipse at ${l.pos}, rgba(${tint},${l.op}), transparent 70%)`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FogEffect;
