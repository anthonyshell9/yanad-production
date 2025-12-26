import Link from "next/link";

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
              </h1>

              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                Label indépendant basé à Paris.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/artists"
                  className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]"
                >
                  DÉCOUVRIR ALIF
                </Link>
                <Link
                  href="/contact"
                  className="btn-comic bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Right Content - Artist Highlight */}
            <div className="relative">
              <div className="comic-panel p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square bg-gradient-to-br from-[#e63946]/30 to-[#1a1a2e] flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-[family-name:var(--font-bangers)] text-[12rem] text-white/10">A</span>
                  </div>
                  <div className="text-center z-10">
                    <div className="font-[family-name:var(--font-bangers)] text-6xl text-[#e63946] comic-title mb-2">
                      ALIF
                    </div>
                    <p className="text-gray-300">Rap FR</p>
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
                  <span className="font-[family-name:var(--font-bangers)] text-black text-xl">RAP FR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section className="py-20 relative">
        <div className="zigzag-border h-4 mb-16"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOTRE <span className="text-[#e63946]">ARTISTE</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Link
              href="/artists"
              className="comic-panel p-0 overflow-hidden group hover:translate-y-[-5px] transition-all duration-300 block"
            >
              {/* Artist Visual */}
              <div className="aspect-square relative">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(135deg, #e63946, #1a1a2e)` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bangers)] text-[12rem] text-white/20 group-hover:scale-110 transition-transform">
                    A
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold px-3 py-1 border-2 border-black text-white bg-[#e63946]">
                    RAP FR
                  </span>
                </div>
              </div>

              {/* Artist Info */}
              <div className="p-8 border-t-4 border-black text-center">
                <h3 className="font-[family-name:var(--font-bangers)] text-5xl text-[#e63946] mb-4">
                  ALIF
                </h3>
                <p className="text-gray-400 text-lg">
                  Premier artiste signé chez Yanad Production
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Label Section */}
      <section className="py-20 bg-[#0f0f1a] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-8">
            LE <span className="text-[#e63946]">LABEL</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-12">
            &quot;Yanad&quot; signifie &quot;créateur&quot; en berbère.
            Label indépendant basé à Paris.
          </p>
          <Link
            href="/about"
            className="btn-comic bg-transparent text-white border-[#e63946] hover:bg-[#e63946]"
          >
            LE LABEL
          </Link>
        </div>
      </section>

    </div>
  );
}
