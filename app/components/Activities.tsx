"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type ActivityCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function Activities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const activities: ActivityCard[] = [
    {
      title: "Séance à domicile",
      description: "Profitez de séances personnalisées directement chez vous",
      image: "/img/activities/activity-athome.jpg",
      imageAlt:
        "Coach accompagnant un client senior lors d'exercices doux dans un salon lumineux à domicile",
    },
    {
      title: "Sport adapté",
      description:
        "Refaites tous les sports que vous n'osez plus faire avec des règles adaptées",
      image: "/img/activities/activity-adapted.jpg",
      imageAlt:
        "Groupe de personnes en plein air pratiquant un sport adapté et sécurisé avec matériel léger",
    },
    {
      title: "Marche",
      description:
        "Groupe de marche du même niveau encadré avec séance de yoga en forêt / lac etc...",
      image: "/img/activities/activity-walking.jpg",
      imageAlt:
        "Randonneurs marchant sur un chemin ombragé près d'un lac en Bretagne",
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
      id="activities"
      aria-label="Propositions d'activités et de services"
      className="min-h-screen flex flex-col md:flex-row w-full gap-4"
    >
      {activities.map((activity, index) => {
        const isActive = activeIndex === index;
        const isHovered = hoveredIndex === index;

        return (
          <article
            key={activity.title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`
              relative flex flex-col justify-end rounded-2xl p-4 overflow-hidden
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={activity.image}
              alt={activity.imageAlt}
              fill
              className="object-cover z-0"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl transition-all duration-500 z-1 pointer-events-none" />

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
          </article>
        );
      })}
    </section>
  );
}
