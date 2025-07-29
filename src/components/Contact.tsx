// src/components/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Instagram,
  Music,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    mood: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      type: "whatsapp",
      label: "WhatsApp",
      value: "+56977221088",
      href: "https://wa.me/56977221088",
      icon: MessageCircle,
      primary: true,
      description: "Respuesta inmediata",
    },
    {
      type: "email",
      label: "Email",
      value: "jai.audio.22@gmail.com",
      href: "mailto:jai.audio.22@gmail.com",
      icon: Mail,
      primary: false,
      description: "Para proyectos detallados",
    },
    {
      type: "meeting",
      label: "Reunión Presencial",
      value: "Santiago, Chile",
      href: "#",
      icon: MapPin,
      primary: false,
      description: "Disponible en Santiago",
    },
  ];

  const socialLinks = [
    {
      platform: "instagram",
      url: "https://www.instagram.com/jai.sounds/",
      label: "@jai.sounds",
      icon: Instagram,
    },
    {
      platform: "spotify",
      url: "https://open.spotify.com/user/12155888039",
      label: "Portfolio Musical",
      icon: Music,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-light">
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
            ¿Listo para llevar tu identidad musical
            <br />
            <span className="text-gradient">a otro nivel?</span>
          </h2>
          <p className="text-xl text-[var(--neutral-medium)] max-w-3xl mx-auto leading-relaxed">
            Conversemos sobre tu proyecto y exploremos juntos el universo sonoro
            que necesitas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--neutral-dark)] mb-8 font-poppins">
                Múltiples Formas de Conectar
              </h3>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <motion.a
                      key={index}
                      href={method.href}
                      target={method.type === "whatsapp" ? "_blank" : undefined}
                      rel={
                        method.type === "whatsapp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                        method.primary ? "ring-2 ring-[var(--primary)]/20" : ""
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            method.primary
                              ? "bg-[var(--primary)]"
                              : "bg-gray-100"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 ${
                              method.primary
                                ? "text-white"
                                : "text-[var(--neutral-dark)]"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-lg font-bold text-[var(--neutral-dark)] font-poppins">
                              {method.label}
                            </h4>
                            {method.primary && (
                              <span className="bg-[var(--primary)] text-white text-xs px-2 py-1 rounded-full">
                                Preferido
                              </span>
                            )}
                          </div>
                          <p className="text-[var(--neutral-medium)] font-medium">
                            {method.value}
                          </p>
                          <p className="text-[var(--neutral-medium)] text-sm">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-[var(--neutral-dark)] mb-4 font-poppins">
                Sígueme en Redes
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3"
                    >
                      <IconComponent className="w-5 h-5 text-[var(--primary)]" />
                      <span className="text-[var(--neutral-dark)] font-medium text-sm">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Philosophy Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border-l-4 border-[var(--primary)]"
            >
              <blockquote className="text-lg font-medium text-[var(--neutral-dark)] italic mb-2">
                Entendemos que cada sonido es válido porque existe
              </blockquote>
              <p className="text-[var(--neutral-medium)] text-sm">
                Nuestra misión es ser el puente entre tu proyecto y esos sonidos
                que el mundo necesita escuchar.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[var(--neutral-dark)] mb-6 font-poppins">
              Cuéntame sobre tu proyecto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--neutral-dark)] font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-[var(--neutral-dark)] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--neutral-dark)] font-medium mb-2">
                  Tipo de Proyecto
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors duration-300"
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="playlist-personal">
                    Playlist Personalizada
                  </option>
                  <option value="ambiente-comercial">
                    Ambientación Comercial
                  </option>
                  <option value="soundtrack-creativo">
                    Soundtrack para Proyecto Creativo
                  </option>
                  <option value="narrativo-multimedia">
                    Proyecto Narrativo Multimedia
                  </option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-[var(--neutral-dark)] font-medium mb-2">
                  Mood o Estilo Deseado
                </label>
                <input
                  type="text"
                  name="mood"
                  value={formData.mood}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors duration-300"
                  placeholder="Ej: Cósmico, nostálgico, energético, contemplativo..."
                />
              </div>

              <div>
                <label className="block text-[var(--neutral-dark)] font-medium mb-2">
                  Cuéntame más sobre tu visión
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] transition-colors duration-300 resize-none"
                  placeholder="Describe tu proyecto, objetivos, referentes musicales o cualquier detalle que consideres importante..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Consulta</span>
                  </>
                )}
              </motion.button>
            </form>

            <p className="text-[var(--neutral-medium)] text-sm mt-6 text-center">
              Normalmente respondo en menos de 24 horas. Para consultas
              urgentes, usa WhatsApp.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
