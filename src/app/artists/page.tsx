"use client";

import Link from "next/link";

const artists = [
  {
    id: "artist-1",
    name: "NOVA",
    genre: "Afro-Pop / R&B",
    bio: "Nouvelle voix de la scène afro-pop française, NOVA mélange R&B contemporain et sonorités africaines.",
    stats: {
      streams: "2.5M+",
      followers: "50K+",
      concerts: "15+"
    },
    releases: ["Eclipse (Single)", "Nuit Blanche (EP)"],
    featured: true
  },
  {
    id: "artist-2",
    name: "KENZO",
    genre: "Rap FR / Trap",
    bio: "Flow technique et textes percutants, KENZO représente la nouvelle génération du rap français.",
    stats: {
      streams: "1.8M+",
      followers: "35K+",
      concerts: "20+"
    },
    releases: ["Altitude (Album)", "Fumée (Single)"],
    featured: true
  },
  {
    id: "artist-3",
    name: "LUNA",
    genre: "Pop Urbaine",
    bio: "Artiste complète, LUNA compose et produit ses propres morceaux avec une signature unique.",
    stats: {
      streams: "1.2M+",
      followers: "28K+",
      concerts: "10+"
    },
    releases: ["Miroir (Single)", "Étoiles (Single)"],
    featured: true
  },
  {
    id: "artist-4",
    name: "AXIS",
    genre: "Électro / House",
    bio: "DJ et producteur, AXIS enflamme les clubs avec ses sets énergiques et ses productions originales.",
    stats: {
      streams: "800K+",
      followers: "22K+",
      concerts: "30+"
    },
    releases: ["Gravity (Single)", "Pulse (EP)"],
    featured: false
  },
  {
    id: "artist-5",
    name: "MAYA",
    genre: "Soul / Neo-Soul",
    bio: "Voix envoûtante et mélodies soul, MAYA apporte une touche de chaleur à la scène musicale.",
    stats: {
      streams: "600K+",
      followers: "18K+",
      concerts: "8+"
    },
    releases: ["Golden Hour (Single)"],
    featured: false
  },
  {
    id: "artist-6",
    name: "ZEPHYR",
    genre: "Hip-Hop / Boom Bap",
    bio: "Retour aux sources du hip-hop avec des beats old school et des lyrics conscients.",
    stats: {
      streams: "450K+",
      followers: "15K+",
      concerts: "12+"
    },
    releases: ["Racines (Album)"],
    featured: false
  }
];

const totalStats = {
  streams: "7M+",
  followers: "170K+",
  releases: "15+",
  concerts: "95+"
};

export default function ArtistsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              LE <span className="text-[#e63946]">ROSTER</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Les artistes qui font Yanad Production
            </p>
          </div>
        </div>
      </section>

      {/* Stats globales */}
      <section className="py-12 border-y-4 border-[#e63946]/30 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-[#e63946] comic-title group-hover:scale-110 transition-transform inline-block">
                {totalStats.streams}
              </div>
              <p className="text-gray-400 mt-1">Streams totaux</p>
            </div>
            <div className="group">
              <div className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white comic-title group-hover:scale-110 transition-transform inline-block">
                {totalStats.followers}
              </div>
              <p className="text-gray-400 mt-1">Followers combinés</p>
            </div>
            <div className="group">
              <div className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-[#e63946] comic-title group-hover:scale-110 transition-transform inline-block">
                {totalStats.releases}
              </div>
              <p className="text-gray-400 mt-1">Sorties</p>
            </div>
            <div className="group">
              <div className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white comic-title group-hover:scale-110 transition-transform inline-block">
                {totalStats.concerts}
              </div>
              <p className="text-gray-400 mt-1">Concerts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl text-white mb-4">
              ARTISTES <span className="text-[#e63946]">PHARES</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {artists.filter(a => a.featured).map((artist, index) => (
              <div
                key={artist.id}
                className="comic-panel p-0 overflow-hidden group"
                style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
              >
                {/* Artist Image Placeholder */}
                <div className="aspect-square relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: `linear-gradient(135deg, #e63946, #1a1a2e)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-9xl text-white/20 group-hover:scale-110 transition-transform">
                      {artist.name.charAt(0)}
                    </span>
                  </div>

                  {/* Genre Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 border-2 border-black bg-[#e63946] text-white">
                      {artist.genre}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-gray-300 text-sm mb-4">{artist.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-6 border-t-4 border-black">
                  <h3 className="font-[family-name:var(--font-bangers)] text-3xl text-[#e63946] mb-2">
                    {artist.name}
                  </h3>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-bangers)] text-xl text-white">
                        {artist.stats.streams}
                      </div>
                      <p className="text-gray-500 text-xs">Streams</p>
                    </div>
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-bangers)] text-xl text-white">
                        {artist.stats.followers}
                      </div>
                      <p className="text-gray-500 text-xs">Followers</p>
                    </div>
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-bangers)] text-xl text-white">
                        {artist.stats.concerts}
                      </div>
                      <p className="text-gray-500 text-xs">Concerts</p>
                    </div>
                  </div>

                  {/* Releases */}
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-500 text-xs mb-2">DERNIÈRES SORTIES</p>
                    <div className="flex flex-wrap gap-2">
                      {artist.releases.map((release) => (
                        <span
                          key={release}
                          className="text-xs px-2 py-1 bg-[#1a1a2e] text-gray-300 border border-gray-700"
                        >
                          {release}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Artists */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl text-white mb-4">
              TOUT LE <span className="text-[#e63946]">ROSTER</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.filter(a => !a.featured).map((artist) => (
              <div
                key={artist.id}
                className="comic-border bg-[#1a1a2e] p-6 group hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-4">
                  {/* Mini Avatar */}
                  <div className="w-16 h-16 flex items-center justify-center border-3 border-black flex-shrink-0 bg-[#e63946]">
                    <span className="font-[family-name:var(--font-bangers)] text-2xl text-white">
                      {artist.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-[#e63946]">
                      {artist.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{artist.genre}</p>
                  </div>

                  <div className="text-right">
                    <div className="font-[family-name:var(--font-bangers)] text-xl text-white">
                      {artist.stats.streams}
                    </div>
                    <p className="text-gray-500 text-xs">Streams</p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mt-4">{artist.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Rejoindre le label */}
      <section className="py-20">
        <div className="zigzag-border h-4 mb-16"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="comic-panel p-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-6">
              T&apos;AS CE QU&apos;IL FAUT ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              On cherche toujours les prochaines légendes.
            </p>
            <Link href="/contact" className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]">
              CONTACT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
