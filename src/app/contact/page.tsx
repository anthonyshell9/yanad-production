"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="comic-panel p-12">
            <div className="text-8xl mb-6">🎉</div>
            <h1 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl text-[#ffd23f] mb-4">
              MESSAGE ENVOYÉ !
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Merci pour votre message ! Notre équipe vous répondra dans les plus brefs délais.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  service: "",
                  budget: "",
                  message: "",
                });
              }}
              className="btn-comic bg-[#ff6b35] text-black hover:bg-[#ffd23f]"
            >
              ENVOYER UN AUTRE MESSAGE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 action-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 float-animation">
              <div className="bg-[#ff6b35] border-4 border-black px-6 py-2 rotate-2">
                <span className="font-[family-name:var(--font-bangers)] text-black text-xl">PARLONS DE VOTRE PROJET !</span>
              </div>
            </div>
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              <span className="text-[#ffd23f]">CONTACTEZ</span>-NOUS
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Une idée ? Un projet ? Des questions ? Notre équipe est là pour vous accompagner !
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-white mb-8">
                NOS <span className="text-[#ff6b35]">COORDONNÉES</span>
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: "📍",
                    title: "Adresse",
                    content: "123 Rue de la Création\n75011 Paris, France",
                    color: "#ff6b35"
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: "contact@yanad-production.com",
                    color: "#ffd23f"
                  },
                  {
                    icon: "📞",
                    title: "Téléphone",
                    content: "+33 1 23 45 67 89",
                    color: "#004e89"
                  },
                  {
                    icon: "⏰",
                    title: "Horaires",
                    content: "Lun - Ven : 9h - 19h\nSam : Sur rendez-vous",
                    color: "#ff6b35"
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 flex items-center justify-center border-4 border-black flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-[family-name:var(--font-bangers)] text-xl text-white mb-4">
                  SUIVEZ-NOUS
                </h3>
                <div className="flex gap-4">
                  {[
                    { name: "Instagram", color: "#ff6b35" },
                    { name: "YouTube", color: "#ffd23f" },
                    { name: "LinkedIn", color: "#004e89" },
                    { name: "Twitter", color: "#ff6b35" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 flex items-center justify-center border-4 border-black transition-transform hover:scale-110"
                      style={{ backgroundColor: social.color }}
                    >
                      <span className="font-[family-name:var(--font-bangers)] text-black text-lg">
                        {social.name[0]}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 comic-panel p-4">
                <div className="aspect-video bg-[#1a1a2e] flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl">🗺️</span>
                    <p className="text-gray-400 mt-2">Paris, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="comic-panel p-8">
                <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-[#ffd23f] mb-6 text-center">
                  ENVOYEZ-NOUS UN MESSAGE !
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                        NOM *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                        TÉLÉPHONE
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors"
                        placeholder="+33 6 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                        ENTREPRISE
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors"
                        placeholder="Votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                        SERVICE *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="video">Production Vidéo</option>
                        <option value="music">Production Musicale</option>
                        <option value="event">Événementiel</option>
                        <option value="post">Post-Production</option>
                        <option value="artistic">Direction Artistique</option>
                        <option value="streaming">Streaming & Live</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                        BUDGET
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionnez un budget</option>
                        <option value="small">Moins de 5 000€</option>
                        <option value="medium">5 000€ - 15 000€</option>
                        <option value="large">15 000€ - 50 000€</option>
                        <option value="enterprise">Plus de 50 000€</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-bangers)] text-white mb-2">
                      VOTRE MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#ff6b35] focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-comic text-xl ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#ff6b35] hover:bg-[#ffd23f]"
                    } text-black`}
                  >
                    {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER LE MESSAGE !"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0f0f1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-4xl text-white mb-4">
              QUESTIONS <span className="text-[#ffd23f]">FRÉQUENTES</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Quels sont vos délais de réalisation ?",
                a: "Les délais varient selon la complexité du projet. En général, comptez 2-4 semaines pour un clip, 1-3 mois pour un album complet.",
                color: "#ff6b35"
              },
              {
                q: "Travaillez-vous avec des artistes émergents ?",
                a: "Absolument ! Nous adorons découvrir et accompagner les nouveaux talents. N'hésitez pas à nous contacter quel que soit votre niveau.",
                color: "#ffd23f"
              },
              {
                q: "Proposez-vous des devis gratuits ?",
                a: "Oui, tous nos devis sont gratuits et sans engagement. Décrivez-nous votre projet et nous vous répondrons sous 48h.",
                color: "#004e89"
              },
              {
                q: "Intervenez-vous en dehors de Paris ?",
                a: "Nous intervenons partout en France et à l'international pour vos projets. Des frais de déplacement peuvent s'appliquer.",
                color: "#ff6b35"
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="comic-panel p-6"
                style={{ transform: `rotate(${index % 2 === 0 ? '0.5' : '-0.5'}deg)` }}
              >
                <h3
                  className="font-[family-name:var(--font-bangers)] text-xl mb-2"
                  style={{ color: faq.color }}
                >
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
