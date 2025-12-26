import type { Metadata } from "next";
import { Bangers, Comic_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bangers = Bangers({
  weight: "400",
  variable: "--font-bangers",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  variable: "--font-comic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yanad Production | Label de Production Créatif",
  description: "Yanad Production - Votre partenaire créatif pour la production audiovisuelle, musicale et événementielle. Des projets uniques avec un style BD moderne.",
  keywords: ["production", "audiovisuel", "musique", "événementiel", "créatif", "yanad"],
  authors: [{ name: "Yanad Production" }],
  openGraph: {
    title: "Yanad Production | Label de Production Créatif",
    description: "Votre partenaire créatif pour des projets audiovisuels uniques",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${bangers.variable} ${comicNeue.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
