import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 action-lines opacity-30"></div>
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#ff6b35]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#ffd23f]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-6">
                <span className="comic-bubble text-sm font-bold">
                  Bienvenue chez nous !
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
                <span className="text-white">CRÉEZ</span>
                <br />
                <span className="text-[#ff6b35]">L&apos;EXTRAORDINAIRE</span>
                <br />
                <span className="text-[#ffd23f]">AVEC NOUS !</span>
              </h1>

              <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
                Yanad Production transforme vos idées en œuvres audiovisuelles
                époustouflantes. Production vidéo, musique, événementiel -
                nous donnons vie à vos projets !
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="btn-comic bg-[#ff6b35] text-black hover:bg-[#ffd23f]"
                >
                  DÉMARRER UN PROJET
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-comic bg-transparent text-white border-white hover:bg-white hover:text-black"
                >
                  VOIR NOS RÉALISATIONS
                </Link>
              </div>
            </div>

            {/* Right Content - Comic Style Visual */}
            <div className="relative">
              <div className="comic-panel p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video bg-gradient-to-br from-[#ff6b35]/20 to-[#004e89]/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="starburst w-32 h-32 flex items-center justify-center">
                      <span className="font-[family-name:var(--font-bangers)] text-4xl text-white z-10">PLAY</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 comic-bubble !py-2 !px-4">
                    <span className="text-xs font-bold">Showreel 2024</span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 float-animation">
                <div className="bg-[#ffd23f] border-4 border-black p-3 rotate-12">
                  <span className="font-[family-name:var(--font-bangers)] text-black text-xl">POW!</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 float-animation" style={{ animationDelay: '1s' }}>
                <div className="bg-[#ff6b35] border-4 border-black p-3 -rotate-12">
                  <span className="font-[family-name:var(--font-bangers)] text-black text-xl">BOOM!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative">
        <div className="zigzag-border h-4 mb-16"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOS <span className="text-[#ff6b35]">SUPER</span> SERVICES
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des solutions créatives pour tous vos projets audiovisuels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "PRODUCTION VIDÉO",
                description: "Clips, publicités, courts-métrages... Nous capturons votre vision avec créativité et expertise.",
                icon: "🎬",
                color: "#ff6b35"
              },
              {
                title: "PRODUCTION MUSICALE",
                description: "Composition, enregistrement, mixage et mastering pour donner vie à vos créations sonores.",
                icon: "🎵",
                color: "#ffd23f"
              },
              {
                title: "ÉVÉNEMENTIEL",
                description: "Organisation et couverture d'événements mémorables, du concept à la réalisation.",
                icon: "🎪",
                color: "#004e89"
              },
              {
                title: "POST-PRODUCTION",
                description: "Montage, étalonnage, effets visuels et sound design de qualité professionnelle.",
                icon: "🎞️",
                color: "#ff6b35"
              },
              {
                title: "DIRECTION ARTISTIQUE",
                description: "Une vision créative unique pour sublimer l'identité de vos projets.",
                icon: "🎨",
                color: "#ffd23f"
              },
              {
                title: "STREAMING & LIVE",
                description: "Solutions de diffusion en direct pour vos concerts, conférences et événements.",
                icon: "📡",
                color: "#004e89"
              }
            ].map((service, index) => (
              <div
                key={service.title}
                className="comic-panel p-6 group hover:translate-y-[-5px] transition-all duration-300"
                style={{ transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)' }}
              >
                <div
                  className="text-5xl mb-4 transform group-hover:scale-110 transition-transform"
                  style={{ filter: `drop-shadow(3px 3px 0 ${service.color})` }}
                >
                  {service.icon}
                </div>
                <h3
                  className="font-[family-name:var(--font-bangers)] text-2xl mb-3"
                  style={{ color: service.color }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-comic bg-[#ffd23f] text-black hover:bg-[#ff6b35]"
            >
              TOUS NOS SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-[#0f0f1a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white">
                NOS <span className="text-[#ffd23f]">RÉALISATIONS</span>
              </h2>
              <p className="text-gray-400 mt-2">Découvrez nos projets les plus récents</p>
            </div>
            <Link
              href="/portfolio"
              className="btn-comic bg-transparent text-white border-[#ffd23f] hover:bg-[#ffd23f] hover:text-black"
            >
              VOIR TOUT
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Clip Musical - Artiste X", category: "Vidéo", color: "#ff6b35" },
              { title: "Album Studio - Band Y", category: "Musique", color: "#ffd23f" },
              { title: "Festival Summer Vibes", category: "Événement", color: "#004e89" },
              { title: "Publicité Marque Z", category: "Vidéo", color: "#ff6b35" },
              { title: "Court-métrage \"Horizon\"", category: "Cinéma", color: "#ffd23f" },
              { title: "Live Stream Concert", category: "Streaming", color: "#004e89" },
            ].map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden comic-border bg-[#1a1a2e] aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                <div
                  className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40"
                  style={{ background: `linear-gradient(135deg, ${project.color}40, transparent)` }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <span
                    className="text-xs font-bold px-2 py-1 mb-2 inline-block"
                    style={{ backgroundColor: project.color, color: 'black' }}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-[#ffd23f] border-3 border-black p-2">
                    <span className="font-[family-name:var(--font-bangers)] text-black text-sm">VOIR +</span>
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
              { number: "150+", label: "Projets Réalisés", color: "#ff6b35" },
              { number: "50+", label: "Artistes Accompagnés", color: "#ffd23f" },
              { number: "10+", label: "Années d'Expérience", color: "#004e89" },
              { number: "100%", label: "Clients Satisfaits", color: "#ff6b35" },
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
              PRÊT À <span className="text-[#ff6b35]">CRÉER</span> QUELQUE CHOSE <span className="text-[#ffd23f]">D&apos;INCROYABLE</span> ?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant et donnons vie à votre projet ensemble !
            </p>
            <Link
              href="/contact"
              className="btn-comic bg-[#ff6b35] text-black hover:bg-[#ffd23f] text-xl"
            >
              CONTACTEZ-NOUS !
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
