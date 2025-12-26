"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["Tous", "Vidéo", "Musique", "Événement", "Streaming"];

const projects = [
  {
    id: 1,
    title: "Clip Musical - NOVA",
    category: "Vidéo",
    description: "Clip musical futuriste pour l'artiste émergente NOVA",
    year: "2024",
    color: "#ff6b35"
  },
  {
    id: 2,
    title: "Album \"Éclipse\" - The Wanderers",
    category: "Musique",
    description: "Production complète de l'album studio du groupe",
    year: "2024",
    color: "#ffd23f"
  },
  {
    id: 3,
    title: "Festival Summer Vibes",
    category: "Événement",
    description: "Organisation et captation du festival annuel",
    year: "2024",
    color: "#004e89"
  },
  {
    id: 4,
    title: "Publicité TechStart",
    category: "Vidéo",
    description: "Campagne publicitaire pour startup tech innovante",
    year: "2024",
    color: "#ff6b35"
  },
  {
    id: 5,
    title: "Concert Live - DJ Pulse",
    category: "Streaming",
    description: "Diffusion live du concert avec 50k viewers",
    year: "2024",
    color: "#004e89"
  },
  {
    id: 6,
    title: "Court-métrage \"Horizon\"",
    category: "Vidéo",
    description: "Court-métrage primé au festival de Cannes",
    year: "2023",
    color: "#ff6b35"
  },
  {
    id: 7,
    title: "EP \"Neon Dreams\" - Synthia",
    category: "Musique",
    description: "Production et mixage de l'EP électro",
    year: "2023",
    color: "#ffd23f"
  },
  {
    id: 8,
    title: "Gala Annuel Corp XYZ",
    category: "Événement",
    description: "Soirée corporate avec 500 invités",
    year: "2023",
    color: "#004e89"
  },
  {
    id: 9,
    title: "Série Web \"Connexions\"",
    category: "Vidéo",
    description: "Mini-série en 6 épisodes pour plateforme streaming",
    year: "2023",
    color: "#ff6b35"
  },
  {
    id: 10,
    title: "Masterclass Live - Prod Academy",
    category: "Streaming",
    description: "Formation en ligne avec interaction temps réel",
    year: "2023",
    color: "#004e89"
  },
  {
    id: 11,
    title: "Single \"Gravity\" - AXIS",
    category: "Musique",
    description: "Production du single certifié or",
    year: "2023",
    color: "#ffd23f"
  },
  {
    id: 12,
    title: "Documentaire \"Urban Stories\"",
    category: "Vidéo",
    description: "Documentaire sur la scène artistique urbaine",
    year: "2022",
    color: "#ff6b35"
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "Tous"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 float-animation">
              <div className="bg-[#ffd23f] border-4 border-black px-6 py-2 -rotate-2">
                <span className="font-[family-name:var(--font-bangers)] text-black text-xl">NOS CHEFS-D&apos;ŒUVRE !</span>
              </div>
            </div>
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              <span className="text-[#ff6b35]">PORTFOLIO</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Découvrez nos réalisations les plus marquantes et laissez-vous inspirer
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-y-4 border-[#ff6b35]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 font-[family-name:var(--font-bangers)] text-lg tracking-wide border-4 border-black transition-all ${
                  activeCategory === category
                    ? "bg-[#ff6b35] text-black shadow-[4px_4px_0_0_#000]"
                    : "bg-transparent text-white hover:bg-[#ff6b35]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative comic-border bg-[#1a1a2e] overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image Placeholder */}
                <div className="aspect-[4/3] relative">
                  <div
                    className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-50"
                    style={{ background: `linear-gradient(135deg, ${project.color}60, transparent)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-6xl text-white/20">
                      {project.category.charAt(0)}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center p-6">
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="bg-[#ffd23f] border-3 border-black px-4 py-2 inline-block">
                        <span className="font-[family-name:var(--font-bangers)] text-black">VOIR LE PROJET</span>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold px-3 py-1 border-2 border-black"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/80 text-white text-xs px-2 py-1 font-bold">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 border-t-4 border-black">
                  <h3
                    className="font-[family-name:var(--font-bangers)] text-xl mb-2"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
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
              { value: "150+", label: "Projets", color: "#ff6b35" },
              { value: "50+", label: "Clips", color: "#ffd23f" },
              { value: "30+", label: "Événements", color: "#004e89" },
              { value: "100+", label: "Artistes", color: "#ff6b35" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div
                  className="font-[family-name:var(--font-bangers)] text-5xl mb-2 comic-title group-hover:scale-110 transition-transform inline-block"
                  style={{ color: stat.color }}
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
              VOTRE PROJET <span className="text-[#ffd23f]">ICI</span> ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Rejoignez notre galerie de projets réussis. Parlons de votre prochaine création !
            </p>
            <Link href="/contact" className="btn-comic bg-[#ff6b35] text-black hover:bg-[#ffd23f]">
              DÉMARRER UN PROJET
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
