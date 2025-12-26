import Link from "next/link";

export const metadata = {
  title: "Nos Services | Yanad Production",
  description: "Découvrez tous nos services : production vidéo, musicale, événementiel, post-production et direction artistique.",
};

const services = [
  {
    id: "video",
    title: "PRODUCTION VIDÉO",
    icon: "🎬",
    color: "#ff6b35",
    description: "Des productions vidéo qui captivent et inspirent. Notre équipe transforme vos concepts en réalité visuelle époustouflante.",
    features: [
      "Clips musicaux",
      "Publicités & spots TV",
      "Courts et longs métrages",
      "Vidéos corporate",
      "Documentaires",
      "Contenus pour réseaux sociaux"
    ],
    process: "De la pré-production au montage final, nous gérons chaque étape avec passion et professionnalisme."
  },
  {
    id: "music",
    title: "PRODUCTION MUSICALE",
    icon: "🎵",
    color: "#ffd23f",
    description: "Un studio professionnel et une équipe de producteurs talentueux pour donner vie à votre univers sonore.",
    features: [
      "Composition originale",
      "Enregistrement studio",
      "Mixage & mastering",
      "Sound design",
      "Musique de film",
      "Jingles & identités sonores"
    ],
    process: "Nous accompagnons les artistes de la création à la finalisation de leurs projets musicaux."
  },
  {
    id: "events",
    title: "ÉVÉNEMENTIEL",
    icon: "🎪",
    color: "#004e89",
    description: "Organisation et couverture complète de vos événements, du concept à l'exécution parfaite.",
    features: [
      "Concerts & festivals",
      "Lancements de produits",
      "Conférences & séminaires",
      "Soirées privées",
      "Captation multicaméra",
      "Régie technique"
    ],
    process: "Une planification méticuleuse et une exécution impeccable pour des événements mémorables."
  },
  {
    id: "post",
    title: "POST-PRODUCTION",
    icon: "🎞️",
    color: "#ff6b35",
    description: "La touche finale qui fait toute la différence. Nos experts subliment vos contenus.",
    features: [
      "Montage vidéo",
      "Étalonnage colorimétrique",
      "Effets visuels (VFX)",
      "Motion design",
      "Sous-titrage",
      "Formats d'export multiples"
    ],
    process: "Des outils professionnels et une expertise technique pour un rendu d'excellence."
  },
  {
    id: "artistic",
    title: "DIRECTION ARTISTIQUE",
    icon: "🎨",
    color: "#ffd23f",
    description: "Une vision créative unique pour sublimer l'identité visuelle de tous vos projets.",
    features: [
      "Conception visuelle",
      "Identité graphique",
      "Scénographie",
      "Stylisme",
      "Décors & accessoires",
      "Storyboarding"
    ],
    process: "Nous créons des univers visuels cohérents et impactants qui marquent les esprits."
  },
  {
    id: "streaming",
    title: "STREAMING & LIVE",
    icon: "📡",
    color: "#004e89",
    description: "Solutions de diffusion en direct professionnelles pour toucher votre audience partout dans le monde.",
    features: [
      "Live streaming HD/4K",
      "Multi-plateformes",
      "Régie de diffusion",
      "Intégration graphique",
      "Modération chat",
      "Replay & VOD"
    ],
    process: "Une infrastructure technique robuste pour des diffusions fluides et professionnelles."
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="bg-[#ff6b35] border-4 border-black px-6 py-2 rotate-2">
                <span className="font-[family-name:var(--font-bangers)] text-black text-xl">CE QU&apos;ON FAIT DE MIEUX !</span>
              </div>
            </div>
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              NOS <span className="text-[#ff6b35]">SUPER</span> <span className="text-[#ffd23f]">SERVICES</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Une gamme complète de services créatifs pour donner vie à tous vos projets audiovisuels
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="comic-panel p-8">
                    <div className="text-8xl mb-6" style={{ filter: `drop-shadow(4px 4px 0 ${service.color})` }}>
                      {service.icon}
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-black/50 to-transparent flex items-center justify-center border-4 border-black">
                      <span className="font-[family-name:var(--font-bangers)] text-3xl text-white/50">
                        SHOWREEL
                      </span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2
                    className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl mb-4"
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white mb-4">
                      CE QU&apos;ON PROPOSE :
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rotate-45"
                            style={{ backgroundColor: service.color }}
                          ></div>
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="comic-bubble mb-6">
                    <p className="text-sm">{service.process}</p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-comic text-black"
                    style={{ backgroundColor: service.color }}
                  >
                    DEMANDER UN DEVIS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-white mb-4">
              NOTRE <span className="text-[#ff6b35]">PROCESSUS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Une méthode éprouvée pour des résultats exceptionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "BRIEF", desc: "On écoute vos idées et définissons ensemble les objectifs", color: "#ff6b35" },
              { step: "02", title: "CRÉATION", desc: "Notre équipe développe concepts et propositions créatives", color: "#ffd23f" },
              { step: "03", title: "PRODUCTION", desc: "Tournage, enregistrement, création avec les meilleurs outils", color: "#004e89" },
              { step: "04", title: "LIVRAISON", desc: "Finalisation et livraison dans les formats souhaités", color: "#ff6b35" },
            ].map((item) => (
              <div key={item.step} className="comic-panel p-6 text-center group hover:scale-105 transition-transform">
                <div
                  className="font-[family-name:var(--font-bangers)] text-6xl mb-4 comic-title"
                  style={{ color: item.color }}
                >
                  {item.step}
                </div>
                <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
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
              UN PROJET EN TÊTE ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Parlons-en ! Notre équipe est prête à donner vie à vos idées les plus folles.
            </p>
            <Link href="/contact" className="btn-comic bg-[#ffd23f] text-black hover:bg-[#ff6b35]">
              CONTACTEZ-NOUS !
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
