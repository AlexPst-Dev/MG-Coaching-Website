"use client";
import { INSTAGRAM_URL, TIKTOK_URL } from "@/lib/site-config";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  const menuItems = [
    { label: "RESTER ACTIF", id: "stay-active" },
    { label: "PROPOSITIONS", id: "activities" },
    { label: "OFFRES", id: "offers" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <header className="z-50 p-[4%] md:px-[8%] md:py-[1%] flex items-center justify-between md:gap-8 fixed w-full bg-white shadow-2xs">
      <Image
        src="/logo.svg"
        alt="Logo MG Coaching, retour en haut de page"
        width={50}
        height={50}
        priority
      />

      {/* Hamburger Button - Mobile Only */}
      <button
        type="button"
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Ouvrir ou fermer le menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-7 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-7 h-0.5 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-7 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      <div className="hidden md:flex items-center gap-8 ml-auto font-medium">
        <nav aria-label="Navigation principale" className="text-xl">
          <ul className="flex items-center gap-8">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-fuchsia-900 transition-colors list-none"
              >
                <button
                  type="button"
                  className="font-inherit text-inherit cursor-pointer bg-transparent border-0 p-0"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Réseaux sociaux" className="flex items-center gap-6 text-base">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-900 transition-colors"
          >
            TikTok
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl flex flex-col font-medium text-xl p-8 pt-24 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Navigation principale">
          <ul className="flex flex-col gap-8">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-fuchsia-900 transition-colors border-b pb-4 list-none"
              >
                <button
                  type="button"
                  className="font-inherit text-inherit cursor-pointer bg-transparent border-0 p-0 text-left w-full"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-label="Réseaux sociaux"
          className="mt-auto pt-8 border-t flex flex-col gap-4 text-base"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-900 transition-colors"
          >
            Instagram
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-900 transition-colors"
          >
            TikTok
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/75 z-30"
          role="presentation"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
