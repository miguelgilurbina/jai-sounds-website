// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Playlists from "@/components/Playlists";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Playlists Universe - Sección estrella */}
      <Playlists />

      {/* About - Filosofía y credibilidad */}
      <About />

      {/* Services - Ofertas claras */}
      <Services />

      {/* Portfolio - Casos de éxito */}
      <Portfolio />

      {/* Contact - Conversión final */}
      <Contact />

      {/* Footer - CTA final + info */}
      <Footer />
    </motion.main>
  );
}

// src/lib/spotify.ts (para futuras integraciones)
// Archivo preparado para integración real con Spotify API

export interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  tracks: {
    total: number;
  };
  external_urls: {
    spotify: string;
  };
  followers?: {
    total: number;
  };
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{
    name: string;
  }>;
  album: {
    name: string;
    images: Array<{
      url: string;
    }>;
  };
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
}

// Función mock para desarrollo - reemplazar con API real
export const getPlaylistsByUser = async (
  userId: string
): Promise<SpotifyPlaylist[]> => {
  // Mock data para desarrollo
  return [
    {
      id: "spacebound",
      name: "Spacebound",
      description: "Portal sonoro hacia las estrellas",
      images: [
        {
          url: "/images/playlist-covers/spacebound.jpg",
          height: 640,
          width: 640,
        },
      ],
      tracks: { total: 24 },
      external_urls: {
        spotify: "https://open.spotify.com/playlist/spacebound",
      },
      followers: { total: 156 },
    },
    {
      id: "caravana",
      name: "Caravana en el Desierto",
      description: "Viaje místico a través de paisajes sonoros",
      images: [
        {
          url: "/images/playlist-covers/caravana.jpg",
          height: 640,
          width: 640,
        },
      ],
      tracks: { total: 18 },
      external_urls: { spotify: "https://open.spotify.com/playlist/caravana" },
      followers: { total: 203 },
    },
    // Más playlists...
  ];
};

// Función real para producción (requiere token de Spotify)
export const getSpotifyPlaylists = async (
  userId: string,
  accessToken: string
): Promise<SpotifyPlaylist[]> => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching playlists");
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching Spotify playlists:", error);
    return [];
  }
};

// Función para obtener tracks de una playlist
export const getPlaylistTracks = async (
  playlistId: string,
  accessToken: string
): Promise<SpotifyTrack[]> => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Error fetching playlist tracks");
    }

    const data = await response.json();
    return data.items.map((item: { track: SpotifyTrack }) => item.track);
  } catch (error) {
    console.error("Error fetching playlist tracks:", error);
    return [];
  }
};
