"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pl-[4%] md:pl-[8%] pr-[4%] md:pr-[8%] mt-8 flex items-center justify-between md:gap-8">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />

      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-7 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-black transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-xl">
        <li className="cursor-pointer hover:text-fuchsia-900 transition-colors">
          RESTER ACTIF
        </li>
        <li className="cursor-pointer hover:text-fuchsia-900 transition-colors">
          PROPOSITIONS
        </li>
        <li className="cursor-pointer hover:text-fuchsia-900 transition-colors">
          AVIS
        </li>
        <li className="cursor-pointer hover:text-fuchsia-900 transition-colors">
          OFFRES
        </li>
        <li className="cursor-pointer hover:text-fuchsia-900 transition-colors">
          CONTACT
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl flex flex-col gap-8 font-medium text-xl p-8 pt-24 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <li
          className="cursor-pointer hover:text-fuchsia-900 transition-colors border-b pb-4"
          onClick={toggleMenu}
        >
          RESTER ACTIF
        </li>
        <li
          className="cursor-pointer hover:text-fuchsia-900 transition-colors border-b pb-4"
          onClick={toggleMenu}
        >
          PROPOSITIONS
        </li>
        <li
          className="cursor-pointer hover:text-fuchsia-900 transition-colors border-b pb-4"
          onClick={toggleMenu}
        >
          AVIS
        </li>
        <li
          className="cursor-pointer hover:text-fuchsia-900 transition-colors border-b pb-4"
          onClick={toggleMenu}
        >
          OFFRES
        </li>
        <li
          className="cursor-pointer hover:text-fuchsia-900 transition-colors border-b pb-4"
          onClick={toggleMenu}
        >
          CONTACT
        </li>
      </ul>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/75 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
