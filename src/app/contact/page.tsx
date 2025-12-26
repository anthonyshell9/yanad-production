"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artistName: "",
    genre: "",
    links: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
            <div className="font-[family-name:var(--font-bangers)] text-8xl text-[#e63946] mb-6">
              REÇU !
            </div>
            <p className="text-gray-300 text-lg mb-8">
              On a bien reçu ton message. Si ton son nous parle, on te recontacte.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  artistName: "",
                  genre: "",
                  links: "",
                  message: "",
                });
              }}
              className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]"
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
            <h1 className="font-[family-name:var(--font-bangers)] text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              <span className="text-[#e63946]">CONTACT</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Tu veux nous envoyer ta démo ou juste nous contacter ? C&apos;est ici.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Side */}
            <div className="lg:col-span-2">
              <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-white mb-8">
                YANAD <span className="text-[#e63946]">PRODUCTION</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e63946] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white">contact@yanad-production.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e63946] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Localisation</p>
                    <p className="text-white">Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-500 text-sm mb-4">RÉSEAUX</p>
                <div className="flex gap-3">
                  {["IG", "TW", "YT", "SP"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-[#1a1a2e] border-2 border-black flex items-center justify-center hover:bg-[#e63946] transition-colors"
                    >
                      <span className="font-[family-name:var(--font-bangers)] text-white text-sm">
                        {social}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
              <div className="comic-panel p-8">
                <h3 className="font-[family-name:var(--font-bangers)] text-2xl text-[#e63946] mb-6">
                  ENVOIE-NOUS UN MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                        TON NOM *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                        placeholder="Prénom Nom"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                        placeholder="ton@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                        NOM D&apos;ARTISTE
                      </label>
                      <input
                        type="text"
                        name="artistName"
                        value={formData.artistName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                        placeholder="Ton blaze"
                      />
                    </div>
                    <div>
                      <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                        GENRE MUSICAL
                      </label>
                      <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                      >
                        <option value="">Sélectionne un genre</option>
                        <option value="rap">Rap</option>
                        <option value="afro">Afro-Pop</option>
                        <option value="rnb">R&B</option>
                        <option value="pop">Pop</option>
                        <option value="electro">Électro</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                      LIENS (Spotify, SoundCloud, YouTube...)
                    </label>
                    <input
                      type="text"
                      name="links"
                      value={formData.links}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                      placeholder="Tes liens musique"
                    />
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                      TON MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors resize-none"
                      placeholder="Parle-nous de toi et de ta musique..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-comic text-xl ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#e63946] hover:bg-white hover:text-[#e63946]"
                    } text-white`}
                  >
                    {isSubmitting ? "ENVOI..." : "ENVOYER"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
