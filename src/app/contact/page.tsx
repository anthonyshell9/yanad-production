"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <div className="font-[family-name:var(--font-bangers)] text-6xl text-[#e63946] mb-6">
              ENVOYÉ
            </div>
            <p className="text-gray-400 text-lg mb-8">
              Message reçu.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]"
            >
              OK
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Side */}
            <div>
              <h2 className="font-[family-name:var(--font-bangers)] text-3xl text-white mb-8">
                YANAD <span className="text-[#e63946]">PRODUCTION</span>
              </h2>

              <div className="space-y-6">
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
              <div className="mt-8">
                <div className="flex gap-3">
                  {["IG", "YT"].map((social) => (
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
            <div>
              <div className="comic-panel p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                      NOM
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-[family-name:var(--font-bangers)] text-white mb-2 text-sm">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1a1a2e] border-4 border-black text-white focus:border-[#e63946] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-comic ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-[#e63946] hover:bg-white hover:text-[#e63946]"
                    } text-white`}
                  >
                    {isSubmitting ? "..." : "ENVOYER"}
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
