import React from 'react';
import { ArrowRight, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PixanCTA() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-outline-variant/60">
      <div className="max-w-4xl mx-auto px-6 lg:px-margin-desktop text-center space-y-6">
        <span className="text-secondary font-inter font-bold text-xs sm:text-sm tracking-widest uppercase">
          IMPLEMENTACIÓN INMEDIATA
        </span>
        <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
          Asegure Su Infraestructura Hoy
        </h2>
        <p className="font-inter text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Integre Pixán en sus operaciones y obtenga visibilidad y control inigualables sobre sus activos de telecomunicaciones y red críticos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-green text-white px-8 py-4 rounded-lg font-inter text-sm font-semibold transition-all duration-300 shadow-lg shadow-secondary/20 btn-shimmer"
          >
            <span>Contactar Equipo de Ventas</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            to="/servicios"
            className="inline-flex items-center justify-center gap-2 border border-outline-variant hover:border-primary-container bg-surface text-primary-container px-8 py-4 rounded-lg font-inter text-sm font-semibold hover:bg-surface-alt transition-colors"
          >
            <Headphones className="w-4 h-4" />
            <span>Ver Catálogo de Servicios</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
