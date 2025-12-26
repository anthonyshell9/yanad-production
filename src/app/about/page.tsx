import Link from "next/link";

export const metadata = {
  title: "Le Label | Yanad Production",
  description: "Yanad Production - Le label qui définit le son de demain.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section - Grande affirmation */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#e63946]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#e63946]/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-[family-name:var(--font-bangers)] text-6xl sm:text-7xl lg:text-8xl text-white mb-8 leading-tight">
            LE SON DE <span className="text-[#e63946]">DEMAIN</span>
            <br />
            SE CRÉE <span className="text-[#e63946]">AUJOURD&apos;HUI</span>
          </h1>
          <p className="text-gray-300 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Yanad Production. Un nom, une vision, une famille.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="comic-panel p-12">
            <div className="text-center mb-8">
              <span className="font-[family-name:var(--font-bangers)] text-[#e63946] text-2xl">NOTRE VISION</span>
            </div>
            <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed text-center">
              &quot;Yanad&quot; signifie &quot;créateur&quot; en berbère.
              On ne produit pas juste de la musique. On crée des carrières,
              on façonne des artistes, on construit des légendes.
            </p>
            <p className="text-gray-400 text-lg sm:text-xl leading-relaxed text-center mt-8">
              Rap, Afro-Pop, R&B, Électro... Peu importe le genre.
              Ce qui compte, c&apos;est le talent et l&apos;authenticité.
            </p>
          </div>
        </div>
      </section>

      {/* Stats avec impact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "7M+", label: "STREAMS" },
              { number: "6", label: "ARTISTES" },
              { number: "15+", label: "RELEASES" },
              { number: "95+", label: "SHOWS" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div
                  className="font-[family-name:var(--font-bangers)] text-6xl sm:text-7xl lg:text-8xl mb-2 comic-title group-hover:scale-105 transition-transform"
                  style={{ color: index % 2 === 0 ? '#e63946' : '#ffffff' }}
                >
                  {stat.number}
                </div>
                <p className="text-gray-500 text-sm tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture / Valeurs - Style minimaliste */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white">
              CE QUI NOUS <span className="text-[#e63946]">DÉFINIT</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "AUTHENTICITÉ",
                desc: "La vraie musique. Pas de compromis."
              },
              {
                title: "AMBITION",
                desc: "Viser le sommet. Toujours."
              },
              {
                title: "FAMILLE",
                desc: "On grandit ensemble. On gagne ensemble."
              },
              {
                title: "INNOVATION",
                desc: "Créer le son que les autres copieront."
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

      {/* Le Roster - Lien vers artistes */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-8">
            LE <span className="text-[#e63946]">ROSTER</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Découvre les artistes qui font vibrer Yanad Production
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["NOVA", "KENZO", "LUNA", "AXIS", "MAYA", "ZEPHYR"].map((name) => (
              <Link
                key={name}
                href="/artists"
                className="font-[family-name:var(--font-bangers)] text-3xl sm:text-4xl text-white/30 hover:text-[#e63946] transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>

          <Link
            href="/artists"
            className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]"
          >
            VOIR TOUS LES ARTISTES
          </Link>
        </div>
      </section>

      {/* CTA Simple */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="comic-panel p-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-6">
              T&apos;AS CE QU&apos;IL FAUT ?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              On cherche pas des artistes. On cherche des futures légendes.
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
