export default function ArtistsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              <span className="text-[#e63946]">ALIF</span>
            </h1>
            <p className="text-gray-400 text-xl">
              Rap FR
            </p>
          </div>
        </div>
      </section>

      {/* Artist Profile */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Artist Visual */}
            <div className="comic-panel p-0 overflow-hidden">
              <div className="aspect-square relative">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(135deg, #e63946, #1a1a2e)` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bangers)] text-[16rem] text-white/20">
                    A
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-sm font-bold px-4 py-2 border-2 border-black bg-[#e63946] text-white">
                    RAP FR
                  </span>
                </div>
              </div>
            </div>

            {/* Artist Info */}
            <div>
              <h2 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl text-[#e63946] mb-6">
                ALIF
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Premier artiste signé chez Yanad Production.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {["Spotify", "Instagram", "YouTube"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-[#1a1a2e] border-2 border-black text-white font-bold hover:bg-[#e63946] transition-colors text-sm"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Releases Section */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-[family-name:var(--font-bangers)] text-3xl text-white mb-8 text-center">
            <span className="text-[#e63946]">SORTIES</span>
          </h3>

          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              À venir...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
