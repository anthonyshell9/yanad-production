import Link from "next/link";

export const metadata = {
  title: "Le Label | Yanad Production",
  description: "Yanad Production - Label indépendant basé à Paris.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#e63946]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#e63946]/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-[family-name:var(--font-bangers)] text-6xl sm:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            <span className="text-[#e63946]">YANAD</span> PRODUCTION
          </h1>
          <p className="text-gray-400 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            &quot;Yanad&quot; signifie &quot;créateur&quot; en berbère.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="comic-panel p-12">
            <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed text-center">
              Label indépendant basé à Paris.
              Production, développement, distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "AUTHENTICITÉ",
                desc: "La vraie musique."
              },
              {
                title: "INDÉPENDANCE",
                desc: "On fait les choses à notre façon."
              },
              {
                title: "QUALITÉ",
                desc: "Chaque projet mérite le meilleur."
              },
              {
                title: "FAMILLE",
                desc: "On grandit ensemble."
              },
            ].map((value) => (
              <div key={value.title} className="border-l-4 border-[#e63946] pl-6">
                <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-8">
            <span className="text-[#e63946]">ARTISTE</span>
          </h2>

          <Link
            href="/artists"
            className="font-[family-name:var(--font-bangers)] text-6xl sm:text-7xl text-white/30 hover:text-[#e63946] transition-colors inline-block"
          >
            ALIF
          </Link>
        </div>
      </section>
    </div>
  );
}
