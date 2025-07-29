// src/components/Playlists.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ExternalLink, Music, Users } from "lucide-react";

interface PlaylistItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tracks: number;
  followers?: number;
  external_url: string;
  gradient: string;
  mood: string;
}

export default function Playlists() {
  const [hoveredPlaylist, setHoveredPlaylist] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState<PlaylistItem[]>([]);

  // Datos mock de playlists (en producción vendría de Spotify API)
  useEffect(() => {
    const mockPlaylists: PlaylistItem[] = [
      {
        id: "1",
        name: "Spacebound",
        description:
          "Portal sonoro hacia las estrellas. Acompaña un cuento de ciencia ficción con soundscapes cósmicos.",
        image: "/images/playlist-covers/spacebound.jpg",
        tracks: 24,
        followers: 156,
        external_url: "https://open.spotify.com/playlist/spacebound",
        gradient: "gradient-space",
        mood: "Cósmico",
      },
      {
        id: "2",
        name: "Caravana en el Desierto",
        description:
          "Viaje místico a través de paisajes sonoros áridos. Música para el alma nómada.",
        image: "/images/playlist-covers/caravana.jpg",
        tracks: 18,
        followers: 203,
        external_url: "https://open.spotify.com/playlist/caravana",
        gradient: "gradient-desert",
        mood: "Místico",
      },
      {
        id: "3",
        name: "Portal Temporal",
        description:
          "Navegación a través de décadas musicales. Del krautrock al synthwave.",
        image: "/images/playlist-covers/portal-temporal.jpg",
        tracks: 32,
        followers: 89,
        external_url: "https://open.spotify.com/playlist/portal",
        gradient: "gradient-portal",
        mood: "Temporal",
      },
      {
        id: "4",
        name: "Anti-Algoritmo",
        description:
          "Sonidos que nunca aparecerían en tu discover weekly. Pura curaduría humana.",
        image: "/images/playlist-covers/anti-algoritmo.jpg",
        tracks: 28,
        followers: 342,
        external_url: "https://open.spotify.com/playlist/anti-algoritmo",
        gradient: "gradient-temporal",
        mood: "Rebelde",
      },
      {
        id: "5",
        name: "Arqueología Sonora",
        description:
          "Gemas musicales excavadas de los archivos del tiempo. Cada track es un tesoro.",
        image: "/images/playlist-covers/arqueologia.jpg",
        tracks: 45,
        followers: 127,
        external_url: "https://open.spotify.com/playlist/arqueologia",
        gradient: "gradient-space",
        mood: "Explorador",
      },
      {
        id: "6",
        name: "Mindful Sessions",
        description:
          "Ambientación para espacios de trabajo creativo. Música que no interrumpe.",
        image: "/images/playlist-covers/mindful.jpg",
        tracks: 21,
        followers: 278,
        external_url: "https://open.spotify.com/playlist/mindful",
        gradient: "gradient-portal",
        mood: "Contemplativo",
      },
    ];
    setPlaylists(mockPlaylists);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="playlists" className="section-padding bg-gradient-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
            Universo de{" "}
            <span className="text-gradient">Playlists Interactivas</span>
          </h2>
          <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto leading-relaxed">
            Cada playlist es un portal hacia sonidos que el algoritmo jamás te
            acercaría. Explora, escucha y descubre.
          </p>
        </motion.div>

        {/* Playlists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredPlaylist(playlist.id)}
              onMouseLeave={() => setHoveredPlaylist(null)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Playlist Cover */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${playlist.gradient} opacity-20`}
                  />
                  <Image
                    src={playlist.image}
                    alt={playlist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredPlaylist === playlist.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        window.open(playlist.external_url, "_blank")
                      }
                      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-colors duration-300"
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </motion.button>
                  </div>

                  {/* Mood Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium text-white rounded-full ${playlist.gradient}`}
                    >
                      {playlist.mood}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--neutral-dark)] mb-2 font-poppins">
                    {playlist.name}
                  </h3>
                  <p className="text-[var(--neutral-medium)] text-sm mb-4 leading-relaxed">
                    {playlist.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-[var(--neutral-medium)] mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Music className="w-4 h-4" />
                        <span>{playlist.tracks} tracks</span>
                      </div>
                      {playlist.followers && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{playlist.followers}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        window.open(playlist.external_url, "_blank")
                      }
                      className="flex-1 bg-[var(--primary)] text-white py-2 px-4 rounded-lg font-medium hover:bg-[var(--primary)]/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Escuchar</span>
                    </button>
                    <button
                      onClick={scrollToContact}
                      className="flex-1 bg-gray-100 text-[var(--neutral-dark)] py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
                    >
                      Similar para mí
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-dark)] mb-4 font-poppins">
              ¿Te imaginas algo así para tu proyecto?
            </h3>
            <p className="text-lg text-[var(--neutral-medium)] mb-8 max-w-2xl mx-auto">
              Cada playlist está curada con 18+ años de experiencia musical.
              Creemos algo único para tu marca, espacio o proyecto creativo.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center space-x-3 mx-auto"
            >
              <Music className="w-5 h-5" />
              <span>Crear Mi Playlist Personalizada</span>
            </button>
          </div>
        </motion.div>

        {/* Link to Full Portfolio */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://open.spotify.com/user/12155888039"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-300 font-medium"
          >
            <span>Ver portfolio completo en Spotify</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
