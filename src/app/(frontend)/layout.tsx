import React from "react";
import "./styles.css";
import { Inter, Poppins } from "next/font/google";

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
    "école, éducation, Sénégal, Dakar, préscolaire, élémentaire, collège, Les Hirondelles",
  openGraph: {
    title: "Institution Les Hirondelles",
    description: "École d'excellence - Préscolaire, Élémentaire, Collège",
    type: "website",
    locale: "fr_SN",
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
