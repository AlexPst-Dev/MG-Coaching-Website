"use client";

import { useEffect, useState } from "react";

export default function ScrollBlob() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate position based on scroll (0 = top-right, 1 = bottom-left)
  const topPosition = -100 + scrollProgress * 120; // -10% to 110%
  const rightPosition = -100 + scrollProgress * 120; // -10% to 110%
  const scale = 1 + scrollProgress * 0.2; // 1 to 1.2

  // Curve calculation: moves more to the center at 50% scroll
  const curveOffset = Math.sin(scrollProgress * Math.PI) * 20;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute w-[600px] h-[600px] md:w-[2900px] md:h-[2900px] rounded-full transition-all duration-300 ease-out"
        style={{
          top: `${topPosition}%`,
          right: `${rightPosition - curveOffset}%`,
          transform: `scale(${scale})`,
          background:
            "radial-gradient(circle, rgba(192, 38, 211, 0.3) 0%, rgba(192, 38, 211, 0.1) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
