import { useState, useEffect, useRef } from "react";

const LightningEffect = () => {
  const [opacity, setOpacity] = useState(0);
  const mounted = useRef(true);
  const timer = useRef(null);

  useEffect(() => {
    mounted.current = true;

    const flash = () => {
      if (!mounted.current) return;

      // first flash
      setOpacity(0.7 + Math.random() * 0.3);
      setTimeout(() => mounted.current && setOpacity(0), 80);

      // optional double-flash
      if (Math.random() > 0.4) {
        setTimeout(() => {
          if (!mounted.current) return;
          setOpacity(0.3 + Math.random() * 0.3);
          setTimeout(() => mounted.current && setOpacity(0), 60);
        }, 200);
      }

      timer.current = setTimeout(flash, 4000 + Math.random() * 8000);
    };

    timer.current = setTimeout(flash, 1000 + Math.random() * 3000);
    return () => {
      mounted.current = false;
      clearTimeout(timer.current);
    };
  }, []);

  return <div className="lightning-flash" style={{ opacity }} />;
};

export default LightningEffect;
