"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["Tous", "Single", "EP", "Album"];

const releases = [
  {
    id: 1,
    title: "Eclipse",
    artist: "NOVA",
    type: "Single",
    year: "2024",
    streams: "850K"
  },
  {
    id: 2,
    title: "Altitude",
    artist: "KENZO",
    type: "Album",
    year: "2024",
    streams: "1.2M"
  },
  {
    id: 3,
    title: "Miroir",
    artist: "LUNA",
    type: "Single",
    year: "2024",
    streams: "620K"
  },
  {
    id: 4,
    title: "Gravity",
    artist: "AXIS",
    type: "Single",
    year: "2024",
    streams: "450K"
  },
  {
    id: 5,
    title: "Nuit Blanche",
    artist: "NOVA",
    type: "EP",
    year: "2024",
    streams: "980K"
  },
  {
    id: 6,
    title: "Golden Hour",
    artist: "MAYA",
    type: "Single",
    year: "2024",
    streams: "320K"
  },
  {
    id: 7,
    title: "Fumée",
    artist: "KENZO",
    type: "Single",
    year: "2023",
    streams: "780K"
  },
  {
    id: 8,
    title: "Étoiles",
    artist: "LUNA",
    type: "Single",
    year: "2023",
    streams: "540K"
  },
  {
    id: 9,
    title: "Pulse",
    artist: "AXIS",
    type: "EP",
    year: "2023",
    streams: "380K"
  },
  {
    id: 10,
    title: "Racines",
    artist: "ZEPHYR",
    type: "Album",
    year: "2023",
    streams: "290K"
  },
  {
    id: 11,
    title: "Premier Souffle",
    artist: "NOVA",
    type: "Single",
    year: "2023",
    streams: "420K"
  },
  {
    id: 12,
    title: "Horizon",
    artist: "MAYA",
    type: "Single",
    year: "2023",
    streams: "180K"
  },
];

export default function ReleasesPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredReleases = activeCategory === "Tous"
    ? releases
    : releases.filter(r => r.type === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              <span className="text-[#e63946]">RELEASES</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Toutes les sorties du label
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y-4 border-[#e63946]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-[family-name:var(--font-bangers)] text-lg tracking-wide border-4 border-black transition-all ${
                  activeCategory === category
                    ? "bg-[#e63946] text-white shadow-[4px_4px_0_0_#000]"
                    : "bg-transparent text-white hover:bg-[#e63946]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReleases.map((release, index) => (
              <div
                key={release.id}
                className="group relative comic-border bg-[#1a1a2e] overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`,
                }}
              >
                {/* Cover Placeholder */}
                <div className="aspect-square relative">
                  <div
                    className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
                    style={{ background: `linear-gradient(135deg, #e63946, #1a1a2e)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-8xl text-white/20 group-hover:scale-110 transition-transform">
                      {release.artist.charAt(0)}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 border-2 border-black bg-[#e63946] text-white">
                      {release.type}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/80 text-white text-xs px-2 py-1 font-bold">
                      {release.year}
                    </span>
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#e63946] flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Release Info */}
                <div className="p-6 border-t-4 border-black">
                  <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-[#e63946] mb-1">
                    {release.title}
                  </h3>
                  <p className="text-white text-lg mb-2">{release.artist}</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                    <span className="text-sm">{release.streams} streams</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "7M+", label: "Streams totaux" },
              { value: "15+", label: "Releases" },
              { value: "6", label: "Artistes" },
              { value: "2023", label: "Depuis" },
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <div
                  className="font-[family-name:var(--font-bangers)] text-5xl mb-2 comic-title group-hover:scale-110 transition-transform inline-block"
                  style={{ color: index % 2 === 0 ? '#e63946' : '#ffffff' }}
                >
                  {stat.value}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="zigzag-border h-4 mb-16"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="comic-panel p-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-6">
              ÉCOUTE SUR <span className="text-[#e63946]">TOUTES LES PLATEFORMES</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Spotify", "Apple Music", "Deezer", "YouTube Music"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-6 py-3 bg-[#1a1a2e] border-2 border-black text-white font-bold hover:bg-[#e63946] transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
