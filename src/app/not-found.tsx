import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="comic-panel p-12">
          <div className="font-[family-name:var(--font-bangers)] text-9xl text-[#e63946] comic-title mb-6">
            404
          </div>
          <h1 className="font-[family-name:var(--font-bangers)] text-4xl text-white mb-4">
            PAGE INTROUVABLE
          </h1>
          <p className="text-gray-400 mb-8">
            Cette page n&apos;existe pas.
          </p>
          <Link href="/" className="btn-comic bg-[#e63946] text-white hover:bg-white hover:text-[#e63946]">
            RETOUR À L&apos;ACCUEIL
          </Link>
        </div>
      </div>
    </div>
  );
}
