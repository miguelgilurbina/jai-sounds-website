// src/components/Portfolio.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Play, Music, Sparkles } from "lucide-react";

export default function Portfolio() {
  const cases = [
    {
      title: "Spacebound",
      description:
        "Playlist narrativa que acompaña cuento de ciencia ficción. Una experiencia multimedia inmersiva que transporta al oyente a través de paisajes cósmicos y soundscapes futuristas.",
      result: "Portal sonoro hacia las estrellas",
      image: "/images/spacebound-concept.jpg",
      tags: ["Narrativo", "Sci-Fi", "Inmersivo"],
      link: "https://open.spotify.com/playlist/spacebound",
      gradient: "gradient-space",
      featured: true,
    },
    {
      title: "Caravana en el Desierto",
      description:
        "Soundtrack para historia de viaje místico. Portal sonoro hacia experiencia narrativa que evoca la vastedad del desierto y la introspección del viajero solitario.",
      result: "Ambientación perfecta para storytelling",
      image: "/images/caravana-concept.jpg",
      tags: ["Místico", "Viaje", "Narrativo"],
      link: "https://open.spotify.com/playlist/caravana",
      gradient: "gradient-desert",
      featured: true,
    },
    {
      title: "Universo de Playlists",
      description:
        "20+ playlists que demuestran rango y versatilidad curatorial completa. Desde krautrock alemán hasta synthwave contemporáneo, cada lista es una puerta a universos sonoros inexplorados.",
      result: "Showcase de capacidades musicales",
      image: "/images/playlists-showcase.jpg",
      tags: ["Portfolio", "Versatilidad", "Curaduría"],
      link: "https://open.spotify.com/user/12155888039",
      gradient: "gradient-portal",
      featured: false,
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
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
            <span className="text-gradient">Portales Sonoros</span>
          </h2>
          <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto leading-relaxed">
            Proyectos que demuestran la capacidad de crear universos sonoros
            completos, no solo listas de reproducción.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 ${project.gradient} rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />

                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-colors duration-300"
                      >
                        <Play className="w-8 h-8 text-white fill-white" />
                      </motion.a>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-6 left-6">
                        <span className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <Sparkles className="w-4 h-4" />
                          <span>Destacado</span>
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div
                className={`space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-[var(--neutral-dark)] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--neutral-dark)] font-poppins">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-[var(--neutral-medium)] leading-relaxed">
                  {project.description}
                </p>

                {/* Result */}
                <div className="bg-gradient-light rounded-2xl p-6 border-l-4 border-[var(--primary)]">
                  <h4 className="text-lg font-bold text-[var(--neutral-dark)] mb-2 font-poppins">
                    Resultado
                  </h4>
                  <p className="text-[var(--neutral-medium)]">
                    {project.result}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Escuchar Proyecto</span>
                  </a>
                  <button
                    onClick={() => {
                      const element = document.querySelector("#contact");
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <Music className="w-4 h-4" />
                    <span>Proyecto Similar</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[var(--primary)]/5 via-[var(--accent)]/5 to-[var(--primary)]/5 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
              Cada Proyecto es un{" "}
              <span className="text-gradient">Portal Único</span>
            </h3>
            <p className="text-xl text-[var(--neutral-medium)] max-w-4xl mx-auto leading-relaxed mb-8">
              No creamos simples playlists, diseñamos experiencias sonoras
              completas. Cada proyecto combina curaduría musical profunda con
              storytelling y conceptualización visual.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Investigación Profunda",
                  description:
                    "Análisis del proyecto, mood y objetivos específicos",
                  icon: "🔍",
                },
                {
                  title: "Curaduría Artesanal",
                  description:
                    "Selección manual de tracks que cuentan la historia perfecta",
                  icon: "🎨",
                },
                {
                  title: "Experiencia Completa",
                  description:
                    "Arte conceptual y narrativa que amplifica el impacto",
                  icon: "✨",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-[var(--neutral-dark)] mb-3 font-poppins">
                    {item.title}
                  </h4>
                  <p className="text-[var(--neutral-medium)] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA to Full Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
            ¿Te imaginas algo así para tu proyecto?
          </h3>
          <p className="text-lg text-[var(--neutral-medium)] mb-8 max-w-2xl mx-auto">
            Cada uno de estos proyectos comenzó con una conversación. Exploremos
            juntos qué portal sonoro necesita tu marca o proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://open.spotify.com/user/12155888039"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Portfolio Completo</span>
            </a>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary flex items-center space-x-2"
            >
              <Music className="w-4 h-4" />
              <span>Crear Mi Proyecto</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
