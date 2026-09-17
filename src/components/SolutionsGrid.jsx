import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Shield, Cloud, Database, Network, ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionsGrid() {
  const secondarySolutions = [
    {
      icon: Shield,
      title: 'Ciberseguridad y Protección de Datos',
      description: 'Implementación de firewalls, protección de endpoints y cumplimiento normativo para blindar la información crítica de tu organización contra amenazas.',
      linkText: 'Ver Detalles',
      href: '/servicios#ciberseguridad',
      isGlass: true,
    },
    {
      icon: Cloud,
      title: 'Soluciones Cloud e Infraestructura',
      description: 'Migración, optimización y gestión de entornos en la nube (privada, pública o híbrida) adaptados al crecimiento sostenido de tu empresa.',
      linkText: 'Ver Detalles',
      href: '/servicios#cloud',
      isGlass: true,
    },
    {
      icon: Database,
      title: 'Licenciamiento y Software Empresarial',
      description: 'Asesoría e integración de herramientas de productividad y software especializado con la mejor relación costo-beneficio del mercado.',
      linkText: 'Ver Detalles',
      href: '/servicios#licenciamiento',
      isGlass: false,
    },
    {
      icon: Network,
      title: 'Consultoría TI y Redes',
      description: 'Diseño de arquitectura de red empresarial, cableado estructurado de alta densidad y proyectos tecnológicos llave en mano.',
      linkText: 'Ver Detalles',
      href: '/servicios#consultoria',
      isGlass: true,
    },
  ];

  return (
    <section className="py-24 bg-surface" id="solutions">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header Title with Link to /servicios */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-inter font-bold text-sm tracking-widest uppercase">
              Nuestras Soluciones
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary mt-3 leading-tight">
              Soluciones de TI y Ciberseguridad a la medida de tu empresa
            </h2>
            <p className="text-on-surface-variant mt-4 text-base sm:text-lg font-inter leading-relaxed">
              Diseñamos, implementamos y gestionamos infraestructura tecnológica robusta para proteger tus datos e impulsar la continuidad de tu negocio.
            </p>
          </div>
          {/* User Requested Link to /servicios */}
          <Link
            to="/servicios"
            className="text-primary font-inter font-bold flex items-center gap-2 hover:text-secondary transition-colors group text-sm sm:text-base flex-shrink-0"
          >
            <span>Explorar todos nuestros servicios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured Large Card (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-outline-variant hover-card min-h-[420px] sm:min-h-[480px] flex flex-col justify-end"
          >
            {/* Background Image */}
            <img
              src="/assets/server-room.jpg"
              alt="Data Center Naika Group"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHwd37MeMjUtM8KZbKICzyjPWZ9wTgagKxjjjFQAPpXF7rThCI5juo5cE1_kl6aOMrpR61tK7yw_3YSZPFu4RtDZ9YpmTtUjAie7CWr4emuRQl4XKnTUmyzF8ysgC9aeRbbO9i_NU4ZiwYTA7TZqQov4_fmG2gqpCbkmxGbAHyrVE7MRze7xG_G3Z34Vx6N9NKxXqv8Qpm7DhYQLzVq70aaZH9wGwmecIRbwoNrNa0Vvqvqe20tnnl';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 p-8 sm:p-10 text-white space-y-3">
              <div className="bg-secondary/20 backdrop-blur-md p-3 rounded-lg w-fit text-secondary-fixed mb-2">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-manrope font-bold">
                Servicios TI Gestionados y Soporte Empresarial
              </h3>
              <p className="max-w-xl text-white/90 text-sm sm:text-base font-inter leading-relaxed">
                Asistencia técnica especializada, monitoreo proactivo de infraestructura y continuidad operativa 24/7 para mantener tu empresa siempre en línea y blindada.
              </p>
              <div className="pt-2">
                <Link
                  to="/servicios"
                  className="inline-flex items-center gap-2 text-secondary-fixed font-inter font-bold hover:text-white transition-colors"
                >
                  <span>Aprender más</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Ciberseguridad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group glass-card p-8 sm:p-10 rounded-2xl hover-card hover:border-secondary transition-all flex flex-col justify-between"
          >
            <div>
              <div className="bg-secondary/10 p-3 rounded-xl w-fit text-secondary mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-manrope font-bold text-primary mb-3">
                {secondarySolutions[0].title}
              </h3>
              <p className="text-on-surface-variant text-sm sm:text-base font-inter leading-relaxed">
                {secondarySolutions[0].description}
              </p>
            </div>
            <div className="pt-6">
              <Link
                to="/servicios"
                className="text-primary font-bold inline-flex items-center gap-2 group-hover:text-secondary transition-colors text-sm font-inter"
              >
                <span>{secondarySolutions[0].linkText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Remaining 3 Cards */}
          {secondarySolutions.slice(1).map((sol, index) => {
            const IconComp = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                className={`group p-8 sm:p-10 rounded-2xl hover-card transition-all flex flex-col justify-between ${
                  sol.isGlass
                    ? 'glass-card hover:border-secondary'
                    : 'bg-surface-alt border border-outline-variant hover:border-primary'
                }`}
              >
                <div>
                  <div className="bg-primary/10 p-3 rounded-xl w-fit text-primary mb-6 group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-manrope font-bold text-primary mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm sm:text-base font-inter leading-relaxed">
                    {sol.description}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    to="/servicios"
                    className="text-primary font-bold inline-flex items-center gap-2 group-hover:text-secondary transition-colors text-sm font-inter"
                  >
                    <span>{sol.linkText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
