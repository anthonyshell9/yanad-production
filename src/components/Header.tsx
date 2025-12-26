"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/artists", label: "Artistes" },
    { href: "/portfolio", label: "Releases" },
    { href: "/about", label: "Le Label" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b-4 border-[#e63946]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Simple et moderne */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              {/* Logo simple - Y stylisé */}
              <div className="w-12 h-12 bg-[#e63946] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="font-[family-name:var(--font-bangers)] text-3xl text-white">
                  Y
                </span>
              </div>
              {/* Texte du logo */}
              <div className="ml-3 hidden sm:flex flex-col leading-none">
                <span className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-white">
                  YANAD
                </span>
                <span className="font-[family-name:var(--font-bangers)] text-sm tracking-[0.3em] text-[#e63946]">
                  PRODUCTION
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-[family-name:var(--font-bangers)] text-lg tracking-wide text-white hover:text-[#e63946] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e63946] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946] px-6 py-2"
            >
              DÉMO
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-[#e63946] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t-2 border-[#e63946]/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-[family-name:var(--font-bangers)] text-xl tracking-wide text-white hover:bg-[#e63946]/20 hover:text-[#e63946] transition-colors border-l-4 border-transparent hover:border-[#e63946]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
