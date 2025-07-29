// src/components/About.tsx
// src/components/About.tsx
"use client";

import { motion } from "framer-motion";
import { Quote, Music2, Disc, Radio, Headphones } from "lucide-react";

export default function About() {
  const achievements = [
    {
      title: "24 episodios",
      description:
        'Analizando algoritmos de Spotify en "Descubriendo con Chocolate"',
      icon: Radio,
    },
    {
      title: "2+ años",
      description: "De investigación musical documentada",
      icon: Music2,
    },
    {
      title: "20+ playlists",
      description: "Curadas en perfil propio como showcase",
      icon: Disc,
    },
    {
      title: "Proyectos únicos",
      description: "Narrativos multimedia como Spacebound",
      icon: Headphones,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
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
            <span className="text-gradient">Arqueología Sonora</span>
            <br />
            para el Alma Moderna
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
                La Historia Detrás del Sonido
              </h3>
              <p className="text-lg text-[var(--neutral-medium)] leading-relaxed mb-6">
                Curador musical con <strong>18+ años explorando sonidos</strong>
                , desde Eureka disco tienda hasta -Descubriendo con Chocolate-.
                JAI Sounds es el espacio donde se escucha sin juzgar y se
                aprecia el sonido porque existe.
              </p>
              <p className="text-lg text-[var(--neutral-medium)] leading-relaxed">
                Desde adolescente fascinado por curar bibliotecas musicales,
                experimenté con Limewire/Ares, trabajé en Eureka disco tienda,
                creé -Descubriendo con Chocolate- analizando algoritmos de
                Spotify por 2 años. Ahora canalizo toda esa experiencia en JAI
                Sounds.
              </p>
            </div>

            {/* Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-light rounded-2xl p-8 border-l-4 border-[var(--primary)]">
                <Quote className="w-8 h-8 text-[var(--primary)] mb-4" />
                <blockquote className="text-xl font-medium text-[var(--neutral-dark)] mb-4 italic">
                  Toda música representa una visión que existe y es válida solo
                  por el hecho de existir
                </blockquote>
                <p className="text-[var(--neutral-medium)]">
                  Nuestra misión: ser el puente entre tu proyecto y esos sonidos
                  que el mundo necesita escuchar.
                </p>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-[var(--neutral-dark)] mb-3 font-poppins">
                Guía Musical que Lleva Identidades Sonoras a Otro Nivel
              </h4>
              <p className="text-[var(--neutral-medium)] leading-relaxed">
                Inspirado en la filosofía de <strong>Rick Rubin</strong>,
                creemos que la mejor curaduría viene de la escucha profunda y la
                conexión auténtica con cada sonido.
              </p>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-portal rounded-xl mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--primary)] mb-2 font-poppins">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-[var(--neutral-medium)] leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Anti-Algorithm Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[var(--primary)]/5 via-[var(--accent)]/5 to-[var(--primary)]/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
              Anti-Algoritmo, Anti-Snob,
              <br />
              <span className="text-gradient">Puro Aprecio Musical</span>
            </h3>
            <p className="text-xl text-[var(--neutral-medium)] max-w-4xl mx-auto leading-relaxed mb-8">
              En un mundo saturado de algoritmos que nos encierran en burbujas,
              JAI Sounds actúa como ese amigo sabio que siempre sabe exactamente
              qué música necesitas escuchar, incluso cuando tú no lo sabías.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="bg-white text-[var(--primary)] px-4 py-2 rounded-full border border-[var(--primary)]/20">
                18+ años de experiencia
              </span>
              <span className="bg-white text-[var(--primary)] px-4 py-2 rounded-full border border-[var(--primary)]/20">
                Filosofía anti-establishment
              </span>
              <span className="bg-white text-[var(--primary)] px-4 py-2 rounded-full border border-[var(--primary)]/20">
                Curaduría auténtica
              </span>
              <span className="bg-white text-[var(--primary)] px-4 py-2 rounded-full border border-[var(--primary)]/20">
                Exploración sin límites
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
