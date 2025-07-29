// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAI Sounds - Curaduría Musical Auténtica",
  description:
    "Donde el algoritmo nunca te acercaría, nosotros abrimos portales en el tiempo. Curaduría musical profesional que lleva identidades sonoras a otro nivel.",
  keywords:
    "curaduría musical, playlists personalizadas, música auténtica, soundtracks creativos, JAI Sounds, Santiago Chile",
  authors: [{ name: "JAI Sounds" }],
  creator: "JAI Sounds",
  publisher: "JAI Sounds",
  openGraph: {
    title: "JAI Sounds - Arqueología Sonora para el Alma Moderna",
    description:
      "Explora sonidos que el algoritmo jamás te acercaría. Curaduría musical auténtica con 18+ años de experiencia.",
    url: "https://jaisounds.com",
    siteName: "JAI Sounds",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JAI Sounds - Curaduría Musical",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JAI Sounds - Curaduría Musical Auténtica",
    description: "Portales sonoros hacia la exploración musical auténtica",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token_here",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C73E1D" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-neutral-dark`}
      >
        {children}
      </body>
    </html>
  );
}
