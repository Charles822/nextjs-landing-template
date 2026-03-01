import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AG Conseil – Courtier en assurances santé et prévoyance",
  description: "Courtier indépendant spécialisé en assurances de personnes : Santé Senior, Santé Pro et Prévoyance. Comparaison indépendante, 0€ de frais ajoutés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${newsreader.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
