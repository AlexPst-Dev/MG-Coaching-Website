"use client";

import { useState, useEffect, useRef } from "react";

export default function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activities = [
    {
      title: "Séance à domicile",
      description: "Profitez de séances personnalisées directement chez vous",
      image: "/img/activities/activity-athome.jpg",
    },
    {
      title: "Sport adapté",
      description:
        "Refaites tous les sports que vous n'osez plus faire avec des règles adaptées",
      image: "/img/activities/activity-adapted.jpg",
    },
    {
      title: "Marche",
      description:
        "Groupe de marche du même niveau encadré avec séance de yoga en forêt / lac etc...",
      image: "/img/activities/activity-walking.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // Only on mobile

      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();

          // Use the TOP of the card for distance calculation
          // This triggers the animation when the top reaches center
          const cardTop = rect.top;
          const distanceFromCenter = Math.abs(cardTop - viewportCenter);

          // Find the card with top closest to viewport center
          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row w-full gap-4"
    >
      {activities.map((activity, index) => {
        const isActive = activeIndex === index;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`
              flex flex-col justify-end rounded-2xl p-4 bg-cover bg-center relative
              transition-all duration-500 ease-in-out
              ${
                // Mobile: height animation
                isActive ? "h-[60vh] md:h-auto" : "h-[20vh] md:h-auto"
              }
              ${
                // Desktop: width animation
                isHovered
                  ? "md:w-[66%]"
                  : hoveredIndex !== null
                    ? "md:w-[17%]"
                    : "md:w-[33%]"
              }
              md:cursor-pointer md:min-h-[70vh]
            `}
            style={{ backgroundImage: `url('${activity.image}')` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-black/40 rounded-2xl transition-all duration-500"></div>

            <h3 className="text-white text-2xl md:text-3xl relative z-10 font-bold mb-2">
              {activity.title}
            </h3>

            <p
              className={`
                text-white relative z-10 transition-all duration-500 text-sm md:text-base
                ${
                  isActive || isHovered
                    ? "opacity-100 max-h-40"
                    : "opacity-0 max-h-0 overflow-hidden"
                }
              `}
            >
              {activity.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
