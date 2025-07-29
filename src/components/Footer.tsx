// src/components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Instagram,
  Music,
  ExternalLink,
  MessageCircle,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Universo", href: "#playlists" },
    { label: "Proyectos", href: "#portfolio" },
    { label: "Filosofía", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/jai.sounds/",
      icon: Instagram,
    },
    {
      platform: "Spotify",
      url: "https://open.spotify.com/user/12155888039",
      icon: Music,
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--neutral-dark)] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-portal opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-space opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* CTA Flotante */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[var(--primary)] text-white -mt-12 mx-4 md:mx-8 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
            ¿Listo para descubrir tu portal sonoro?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Cada gran proyecto musical comienza con una conversación. Exploremos
            juntos qué universo sonoro necesita tu marca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/56977221088"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Directo</span>
            </a>
            <button
              onClick={() => scrollToSection("#contact")}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[var(--primary)] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Formulario Detallado</span>
            </button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="container-custom pt-20 pb-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo y Nombre */}
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-16 h-16">
                  <Image
                    src="/jai-logo.png"
                    alt="JAI Sounds Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-poppins group-hover:text-[var(--accent)] transition-colors duration-300">
                    JAI Sounds
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Curaduría Musical Auténtica
                  </p>
                </div>
              </button>

              {/* Tagline */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Arqueología sonora para el alma moderna
              </p>

              {/* Philosophy */}
              <blockquote className="border-l-4 border-[var(--primary)] pl-6 text-gray-300 italic">
                Entendemos que cada sonido es válido porque existe, y nuestra
                misión es ser el puente entre tu proyecto y esos sonidos que el
                mundo necesita escuchar.
              </blockquote>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MessageCircle className="w-5 h-5 text-[var(--primary)]" />
                  <span>+56 9 7722 1088</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                  <span>jai.audio.22@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <ExternalLink className="w-5 h-5 text-[var(--primary)]" />
                  <span>Santiago, Chile</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold font-poppins">Navegación</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-gray-300 hover:text-[var(--accent)] transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="pt-6">
                <h5 className="text-lg font-semibold mb-3 font-poppins">
                  Servicios
                </h5>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Playlists Personalizadas</li>
                  <li>• Ambientación Comercial</li>
                  <li>• Soundtracks Creativos</li>
                  <li>• Proyectos Narrativos</li>
                </ul>
              </div>
            </motion.div>

            {/* Social & Portfolio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold font-poppins">Sígueme</h4>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-300 hover:text-[var(--accent)] transition-colors duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>{social.platform}</span>
                      <ExternalLink className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </div>

              {/* Portfolio Highlight */}
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <h5 className="font-semibold mb-2 font-poppins">
                  Portfolio Musical
                </h5>
                <p className="text-gray-300 text-sm mb-3">
                  20+ playlists curadas disponibles en Spotify
                </p>
                <a
                  href="https://open.spotify.com/user/12155888039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[var(--accent)] hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  <Music className="w-4 h-4" />
                  <span>Explorar en Spotify</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700"
        >
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm text-center md:text-left">
                <p>© {currentYear} JAI Sounds. Santiago, Chile.</p>
                <p className="mt-1">
                  Donde el algoritmo nunca te acercaría, nosotros abrimos
                  portales en el tiempo.
                </p>
              </div>

              {/* Made with love */}
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>para la exploración musical</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 bg-[var(--primary)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--primary)]/90 transition-colors duration-300 z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
