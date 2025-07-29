// src/components/Services.tsx
"use client";

import { motion } from "framer-motion";
import {
  Music,
  Radio,
  Headphones,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Curaduría Personalizada",
      description:
        "Playlists curadas según tu mood, proyecto o necesidad específica",
      features: [
        "Arreglo de canciones preseleccionadas",
        "Exploración basada en mood/emoción",
        "Ambientación para espacios comerciales",
        "Soundtracks para proyectos creativos",
      ],
      icon: Music,
      is_featured: true,
      gradient: "gradient-portal",
      price_note: "Desde consulta personalizada",
    },
    {
      title: "Showcase Musical",
      description:
        "Explora playlists ya curadas como demostración del rango y calidad",
      features: [
        "20+ playlists como portfolio",
        "Diversos géneros y épocas",
        "Widgets interactivos",
        "Preview instantáneo",
      ],
      icon: Radio,
      is_featured: false,
      gradient: "gradient-space",
      price_note: "Exploración gratuita",
    },
    {
      title: "Proyectos Narrativos",
      description:
        "Experiencias multimedia que combinan curaduría con storytelling",
      features: [
        "Soundtrack para narrativas",
        "Arte conceptual incluido",
        "Experiencias inmersivas",
        "Portales sonoros únicos",
      ],
      icon: Headphones,
      is_featured: true,
      gradient: "gradient-temporal",
      price_note: "Proyecto premium",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-light">
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
            Curaduría que <span className="text-gradient">Transforma</span>
          </h2>
          <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto leading-relaxed">
            Cada servicio está diseñado para conectar tu proyecto con esos
            sonidos que el algoritmo jamás te acercaría.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  service.is_featured ? "ring-2 ring-[var(--primary)]/20" : ""
                }`}
              >
                {/* Featured Badge */}
                {service.is_featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Destacado
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-4 font-poppins">
                  {service.title}
                </h3>

                <p className="text-[var(--neutral-medium)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--neutral-medium)] text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price Note */}
                <div className="text-center mb-6">
                  <span className="text-[var(--primary)] font-medium text-sm">
                    {service.price_note}
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    service.is_featured
                      ? "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
                      : "bg-gray-100 text-[var(--neutral-dark)] hover:bg-gray-200"
                  }`}
                >
                  <span>
                    {service.is_featured
                      ? "Consultar Ahora"
                      : "Más Información"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--neutral-dark)] text-center mb-12 font-poppins">
            Mi Proceso de <span className="text-gradient">Curaduría</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Conversación",
                description:
                  "Entendemos tu proyecto, mood y objetivos específicos",
                icon: "🎯",
              },
              {
                step: "02",
                title: "Exploración",
                description:
                  "Navegamos por décadas de música buscando los sonidos perfectos",
                icon: "🔍",
              },
              {
                step: "03",
                title: "Curaduría",
                description:
                  "Seleccionamos y organizamos cada track con intención y propósito",
                icon: "🎨",
              },
              {
                step: "04",
                title: "Entrega",
                description:
                  "Recibes tu playlist personalizada con contexto y explicación",
                icon: "🎵",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-portal rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-[var(--neutral-dark)] mb-3 font-poppins">
                  {step.title}
                </h4>
                <p className="text-[var(--neutral-medium)] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
            ¿Listo para descubrir tu identidad sonora?
          </h3>
          <p className="text-lg text-[var(--neutral-medium)] mb-8 max-w-2xl mx-auto">
            Cada proyecto es único. Conversemos sobre tus necesidades
            específicas y creemos algo que realmente te represente.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary flex items-center space-x-3 mx-auto"
          >
            <Music className="w-5 h-5" />
            <span>Iniciar Consulta Musical</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
