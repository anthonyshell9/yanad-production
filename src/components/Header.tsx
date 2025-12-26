"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "À Propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b-4 border-[#ff6b35]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-[#ff6b35] border-4 border-black rotate-12 group-hover:rotate-0 transition-transform duration-300">
                <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-bangers)] text-2xl text-black -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  Y
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#ffd23f] border-4 border-black -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-white">
                YANAD
              </span>
              <span className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[#ff6b35] ml-2">
                PRODUCTION
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-[family-name:var(--font-bangers)] text-lg tracking-wide text-white hover:text-[#ffd23f] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b35] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 btn-comic bg-[#ff6b35] text-black hover:bg-[#ffd23f] px-6 py-2"
            >
              BOOM!
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-[#ff6b35] border-3 border-black flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-black transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-black transition-all ${
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
          <div className="flex flex-col gap-2 pt-4 border-t-2 border-[#ff6b35]/30">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 font-[family-name:var(--font-bangers)] text-xl tracking-wide text-white hover:bg-[#ff6b35]/20 hover:text-[#ffd23f] transition-colors border-l-4 border-transparent hover:border-[#ff6b35]"
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
