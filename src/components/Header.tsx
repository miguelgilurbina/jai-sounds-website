// src/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Music } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { label: "Universo", href: "#playlists" },
    { label: "Proyectos", href: "#portfolio" },
    { label: "Filosofía", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center space-x-3 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
          >
            <div className="relative w-16 h-16 md:w-12 md:h-12">
              <Image
                src="/jai-logo.png"
                alt="JAI Sounds"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-[var(--primary)] font-poppins">
                JAI Sounds
              </h1>
              <p className="text-xs text-[var(--neutral-medium)] -mt-1">
                Curaduría Musical
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-[var(--neutral-dark)] hover:text-[var(--primary)] font-medium transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[var(--primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary flex items-center space-x-2"
            >
              <Music className="w-4 h-4" />
              <span>Consulta Musical</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--neutral-dark)] hover:text-[var(--primary)] transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-[var(--neutral-dark)] hover:text-[var(--primary)] font-medium py-2 text-left transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-primary flex items-center justify-center space-x-2 mt-4"
              >
                <Music className="w-4 h-4" />
                <span>Consulta Musical</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
