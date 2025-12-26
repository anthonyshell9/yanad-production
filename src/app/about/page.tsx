import Link from "next/link";

export const metadata = {
  title: "À Propos | Yanad Production",
  description: "Découvrez l'histoire, l'équipe et les valeurs de Yanad Production, votre partenaire créatif en audiovisuel.",
};

const team = [
  {
    name: "Alexandre Martin",
    role: "Fondateur & Directeur Créatif",
    bio: "15 ans d'expérience dans la production audiovisuelle",
    color: "#ff6b35"
  },
  {
    name: "Sophie Dubois",
    role: "Directrice de Production",
    bio: "Experte en gestion de projets complexes",
    color: "#ffd23f"
  },
  {
    name: "Marc Chen",
    role: "Réalisateur Principal",
    bio: "Primé dans plusieurs festivals internationaux",
    color: "#004e89"
  },
  {
    name: "Emma Laurent",
    role: "Productrice Musicale",
    bio: "Compositrice et arrangeure multi-genres",
    color: "#ff6b35"
  },
  {
    name: "Thomas Petit",
    role: "Directeur Technique",
    bio: "Expert en technologies audiovisuelles",
    color: "#ffd23f"
  },
  {
    name: "Julie Moreau",
    role: "Chef de Projet Événementiel",
    bio: "10 ans d'expérience événementielle",
    color: "#004e89"
  },
];

const values = [
  {
    title: "CRÉATIVITÉ",
    description: "Nous repoussons les limites de l'imagination pour créer des œuvres uniques et mémorables.",
    icon: "💡",
    color: "#ff6b35"
  },
  {
    title: "EXCELLENCE",
    description: "Chaque projet est traité avec le plus haut niveau de qualité et d'attention aux détails.",
    icon: "⭐",
    color: "#ffd23f"
  },
  {
    title: "PASSION",
    description: "Notre amour pour l'art et la création nous pousse à donner le meilleur chaque jour.",
    icon: "❤️",
    color: "#004e89"
  },
  {
    title: "INNOVATION",
    description: "Nous adoptons les dernières technologies pour offrir des productions à la pointe.",
    icon: "🚀",
    color: "#ff6b35"
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <div className="bg-[#004e89] border-4 border-black px-6 py-2 rotate-2">
                  <span className="font-[family-name:var(--font-bangers)] text-white text-xl">QUI SOMMES-NOUS ?</span>
                </div>
              </div>
              <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl text-white mb-6">
                L&apos;HISTOIRE DE <span className="text-[#ff6b35]">YANAD</span> <span className="text-[#ffd23f]">PRODUCTION</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Fondée en 2014, Yanad Production est née de la passion commune d&apos;une équipe de créatifs
                déterminés à révolutionner le monde de la production audiovisuelle.
              </p>
              <p className="text-gray-400 mb-8">
                Notre nom, &quot;Yanad&quot;, signifie &quot;créateur&quot; en berbère, reflétant notre engagement
                à donner vie aux idées les plus audacieuses de nos clients. Aujourd&apos;hui, nous sommes
                fiers d&apos;avoir accompagné plus de 150 projets et travaillé avec des artistes et marques
                de renommée nationale et internationale.
              </p>
            </div>
            <div className="relative">
              <div className="comic-panel p-8">
                <div className="aspect-square bg-gradient-to-br from-[#ff6b35]/20 to-[#004e89]/20 flex items-center justify-center relative">
                  <div className="font-[family-name:var(--font-bangers)] text-9xl text-white/10">Y</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-[family-name:var(--font-bangers)] text-6xl text-[#ff6b35] comic-title">2014</div>
                      <p className="text-gray-400 mt-2">Année de création</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 float-animation">
                <div className="bg-[#ffd23f] border-4 border-black p-3 rotate-12">
                  <span className="font-[family-name:var(--font-bangers)] text-black text-lg">10+ ANS !</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOS <span className="text-[#ffd23f]">VALEURS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="comic-panel p-6 text-center group hover:scale-105 transition-transform"
                style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
              >
                <div
                  className="text-5xl mb-4"
                  style={{ filter: `drop-shadow(3px 3px 0 ${value.color})` }}
                >
                  {value.icon}
                </div>
                <h3
                  className="font-[family-name:var(--font-bangers)] text-2xl mb-3"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOTRE <span className="text-[#ff6b35]">ÉQUIPE</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des passionnés dévoués à votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="comic-border bg-[#1a1a2e] overflow-hidden group hover:scale-[1.02] transition-transform"
                style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
              >
                {/* Avatar Placeholder */}
                <div className="aspect-square relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{ background: `linear-gradient(135deg, ${member.color}60, transparent)` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full border-4 border-black flex items-center justify-center"
                      style={{ backgroundColor: member.color }}
                    >
                      <span className="font-[family-name:var(--font-bangers)] text-4xl text-black">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 border-t-4 border-black text-center">
                  <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white mb-1">
                    {member.name}
                  </h3>
                  <p style={{ color: member.color }} className="font-bold text-sm mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOTRE <span className="text-[#ffd23f]">PARCOURS</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#ff6b35]"></div>

            {[
              { year: "2014", title: "Création", desc: "Naissance de Yanad Production", color: "#ff6b35" },
              { year: "2016", title: "Premier Studio", desc: "Ouverture de notre studio à Paris", color: "#ffd23f" },
              { year: "2018", title: "Expansion", desc: "Lancement du pôle événementiel", color: "#004e89" },
              { year: "2020", title: "Digital", desc: "Développement des services streaming", color: "#ff6b35" },
              { year: "2022", title: "International", desc: "Premiers projets internationaux", color: "#ffd23f" },
              { year: "2024", title: "10 ans", desc: "Célébration de notre anniversaire", color: "#004e89" },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                >
                  <div className="comic-panel p-4">
                    <div
                      className="font-[family-name:var(--font-bangers)] text-3xl mb-1"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </div>
                    <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 border-4 border-black"
                  style={{ backgroundColor: item.color }}
                ></div>
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
              ENVIE DE <span className="text-[#ff6b35]">REJOINDRE</span> L&apos;AVENTURE ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Que ce soit en tant que client ou collaborateur, nous serions ravis de vous rencontrer !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-comic bg-[#ff6b35] text-black hover:bg-[#ffd23f]">
                CONTACTEZ-NOUS
              </Link>
              <Link href="/portfolio" className="btn-comic bg-transparent text-white border-white hover:bg-white hover:text-black">
                VOIR NOS PROJETS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
