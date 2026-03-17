const CloudsEffect = ({ density = "medium", dark = false }) => {
  const configs = {
    light: [
      { w: 200, h: 50, top: 20, dur: 65, delay: 0, op: 0.1 },
      { w: 160, h: 40, top: 80, dur: 85, delay: 12, op: 0.08 },
    ],
    medium: [
      { w: 250, h: 60, top: 10, dur: 55, delay: 0, op: 0.15 },
      { w: 300, h: 75, top: 55, dur: 72, delay: 8, op: 0.12 },
      { w: 180, h: 45, top: 100, dur: 65, delay: 18, op: 0.1 },
    ],
    heavy: [
      { w: 350, h: 85, top: 0, dur: 45, delay: 0, op: 0.22 },
      { w: 280, h: 70, top: 40, dur: 58, delay: 5, op: 0.2 },
      { w: 400, h: 95, top: 80, dur: 50, delay: 14, op: 0.25 },
      { w: 320, h: 80, top: 130, dur: 66, delay: 22, op: 0.18 },
      { w: 260, h: 65, top: 170, dur: 72, delay: 28, op: 0.15 },
    ],
  };

  const clouds = configs[density] || configs.medium;
  const bg = dark ? "rgba(30,30,40,1)" : "rgba(255,255,255,1)";

  return (
    <div className="cloud-layer">
      {clouds.map((c, i) => (
        <div
          key={i}
          className="cloud"
          style={{
            width: `${c.w}px`,
            height: `${c.h}px`,
            top: `${c.top}px`,
            background: bg,
            opacity: c.op,
            animationDuration: `${c.dur}s`,
            animationDelay: `${c.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CloudsEffect;