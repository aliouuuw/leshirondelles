import React from "react";
import "./styles.css";
import { Inter, Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";
import { getProgramNavigation } from "@/sanity/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Institution Les Hirondelles - École d'Excellence au Sénégal",
  description:
    "Institution Les Hirondelles offre une éducation de qualité du préscolaire au collège. Formant les leaders de demain avec excellence et bienveillance à Dakar, Sénégal.",
  keywords:
    "école, éducation, Sénégal, Dakar, préscolaire, primaire, collège, Les Hirondelles",
  openGraph: {
    title: "Institution Les Hirondelles",
    description: "École d'excellence - Préscolaire, Primaire, Collège",
    type: "website",
    locale: "fr_SN",
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const year = new Date().getFullYear();
  const programLinks = await getProgramNavigation();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <Navigation programLinks={programLinks} />
        {children}
        {/* Minimal Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <div className="logo" style={{ marginBottom: "1.5rem" }}>
                  {/* Logo */}
                  <Link href="/" className="flex items-center gap-3">
                    <Image
                      src="/images/logo.png"
                      alt="Les Hirondelles"
                      width={30}
                      height={40}
                    />
                    <span className="font-semibold text-lg">
                      Les Hirondelles
                    </span>
                  </Link>
                </div>
                <p style={{ color: "var(--gray-400)", lineHeight: "1.6" }}>
                  Excellence éducative depuis plus de 20 ans.
                </p>
              </div>

              <div className="footer-section">
                <h4>Navigation</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="/about">À propos</Link>
                  </li>
                  <li>
                    <Link href="/programs">Programmes</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/inscription">Inscription</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Contact</h4>
                <ul className="footer-links">
                  <li>Dakar, Sénégal</li>
                  <li>+221 33 XXX XX XX</li>
                  <li>contact@leshirondelles.sn</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Suivez-nous</h4>
                <ul className="footer-links">
                  <li>
                    <Link href="#">Facebook</Link>
                  </li>
                  <li>
                    <Link href="#">Instagram</Link>
                  </li>
                  <li>
                    <Link href="#">LinkedIn</Link>
                  </li>
                  <li>
                    <Link href="https://wa.me/22177XXXXXX">WhatsApp</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>
                &copy; {year} Institution Les Hirondelles. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
