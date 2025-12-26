import Link from "next/link";

const featuredArtists = [
  { name: "NOVA", genre: "Afro-Pop", streams: "2.5M+", color: "#e63946" },
  { name: "KENZO", genre: "Rap FR", streams: "1.8M+", color: "#e63946" },
  { name: "LUNA", genre: "Pop Urbaine", streams: "1.2M+", color: "#e63946" },
];

const latestReleases = [
  { title: "Eclipse", artist: "NOVA", type: "Single", color: "#e63946" },
  { title: "Altitude", artist: "KENZO", type: "Album", color: "#e63946" },
  { title: "Miroir", artist: "LUNA", type: "Single", color: "#e63946" },
  { title: "Gravity", artist: "AXIS", type: "Single", color: "#e63946" },
  { title: "Nuit Blanche", artist: "NOVA", type: "EP", color: "#e63946" },
  { title: "Golden Hour", artist: "MAYA", type: "Single", color: "#e63946" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 action-lines opacity-30"></div>
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#e63946]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#e63946]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="comic-bubble text-sm font-bold">
                  Le son de demain !
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
                <span className="text-white">YANAD</span>
                <br />
                <span className="text-[#e63946]">PRODUCTION</span>
                <br />
                <span className="text-white">LABEL</span>
              </h1>

              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                On produit les artistes de demain. Rap, Afro-Pop, R&B, Électro...
                Rejoins la famille Yanad et fais exploser ta musique !
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/artists"
                  className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]"
                >
                  DÉCOUVRIR NOS ARTISTES
                </Link>
                <Link
                  href="/contact"
                  className="btn-comic bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  ENVOYER MA DÉMO
                </Link>
              </div>
            </div>

            {/* Right Content - Featured Artist */}
            <div className="relative">
              <div className="comic-panel p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-[#e63946]/30 to-[#1a1a2e] flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-9xl text-white/10">Y</span>
                  </div>
                  <div className="text-center z-10">
                    <div className="font-[family-name:var(--font-bangers)] text-6xl text-[#e63946] comic-title mb-2">
                      7M+
                    </div>
                    <p className="text-gray-300">Streams totaux</p>
                  </div>
                  <div className="absolute bottom-4 right-4 comic-bubble !py-2 !px-4">
                    <span className="text-xs font-bold">En 2024</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 float-animation">
                <div className="bg-[#e63946] border-4 border-black p-3 rotate-12">
                  <span className="font-[family-name:var(--font-bangers)] text-white text-xl">NEW!</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 float-animation" style={{ animationDelay: '1s' }}>
                <div className="bg-white border-4 border-black p-3 -rotate-12">
                  <span className="font-[family-name:var(--font-bangers)] text-black text-xl">FIRE!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-20 relative">
        <div className="zigzag-border h-4 mb-16"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOS <span className="text-[#e63946]">ARTISTES</span> PHARES
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les talents qui font vibrer Yanad Production
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtists.map((artist, index) => (
              <Link
                key={artist.name}
                href="/artists"
                className="comic-panel p-0 overflow-hidden group hover:translate-y-[-5px] transition-all duration-300"
                style={{ transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)' }}
              >
                {/* Artist Visual */}
                <div className="aspect-square relative">
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{ background: `linear-gradient(135deg, ${artist.color}80, #1a1a2e)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-8xl text-white/20 group-hover:scale-110 transition-transform">
                      {artist.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold px-3 py-1 border-2 border-black text-white"
                      style={{ backgroundColor: artist.color }}
                    >
                      {artist.genre}
                    </span>
                  </div>
                </div>

                {/* Artist Info */}
                <div className="p-6 border-t-4 border-black">
                  <h3
                    className="font-[family-name:var(--font-bangers)] text-3xl mb-1"
                    style={{ color: artist.color }}
                  >
                    {artist.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-bangers)] text-xl text-white">
                      {artist.streams}
                    </span>
                    <span className="text-gray-500 text-sm">streams</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/artists"
              className="btn-comic bg-white text-black hover:bg-[#e63946] hover:text-white"
            >
              VOIR TOUS LES ARTISTES
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-20 bg-[#0f0f1a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white">
                DERNIÈRES <span className="text-[#e63946]">SORTIES</span>
              </h2>
              <p className="text-gray-400 mt-2">Les nouveautés du label</p>
            </div>
            <Link
              href="/portfolio"
              className="btn-comic bg-transparent text-white border-[#e63946] hover:bg-[#e63946]"
            >
              TOUTES LES SORTIES
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReleases.map((release) => (
              <div
                key={`${release.title}-${release.artist}`}
                className="group relative overflow-hidden comic-border bg-[#1a1a2e] aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div
                  className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40"
                  style={{ background: `linear-gradient(135deg, ${release.color}40, transparent)` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bangers)] text-6xl text-white/10">
                    {release.artist.charAt(0)}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span
                    className="text-xs font-bold px-2 py-1 mb-2 inline-block text-white"
                    style={{ backgroundColor: release.color }}
                  >
                    {release.type}
                  </span>
                  <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white">
                    {release.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{release.artist}</p>
                </div>
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#e63946] border-3 border-black p-2">
                    <span className="font-[family-name:var(--font-bangers)] text-white text-sm">ÉCOUTER</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 halftone opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "7M+", label: "Streams totaux", color: "#e63946" },
              { number: "6", label: "Artistes signés", color: "#ffffff" },
              { number: "15+", label: "Sorties", color: "#e63946" },
              { number: "95+", label: "Concerts", color: "#ffffff" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div
                  className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl mb-2 comic-title group-hover:scale-110 transition-transform inline-block"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="zigzag-border h-4 mb-16"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="comic-panel p-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-6">
              T&apos;AS DU <span className="text-[#e63946]">TALENT</span> ? ON VEUT T&apos;<span className="text-[#e63946]">ENTENDRE</span> !
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Envoie-nous ta démo et rejoins la famille Yanad Production.
              On cherche les prochaines stars !
            </p>
            <Link
              href="/contact"
              className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946] text-xl"
            >
              ENVOYER MA DÉMO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
