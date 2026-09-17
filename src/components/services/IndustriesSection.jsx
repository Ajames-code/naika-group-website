import React from 'react';
import { Landmark, GraduationCap, Hospital, Factory, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IndustriesSection() {
  const industries = [
    {
      icon: Landmark,
      title: 'Gobierno',
      description: 'Modernización de servicios digitales ciudadanos, infraestructuras resilientes y cumplimiento con las más estrictas normativas de seguridad pública.',
    },
    {
      icon: GraduationCap,
      title: 'Educación',
      description: 'Infraestructuras de conectividad de alta densidad y plataformas seguras de gestión de datos para instituciones académicas y universidades.',
    },
    {
      icon: Hospital,
      title: 'Salud',
      description: 'Sistemas tecnológicos críticos con disponibilidad 24/7, protección de datos clínicos y conectividad médica confiable.',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Convergencia de redes TI y OT, cableado industrial robusto y soluciones IoT para asegurar la continuidad de líneas de manufactura y distribución.',
    },
  ];

  return (
    <section className="py-24 bg-surface" id="industrias">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-secondary font-inter font-bold text-sm tracking-widest uppercase">
              Sectores Especializados
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-primary mt-2">
              Experiencia en Diversos Sectores
            </h2>
            <p className="text-on-surface-variant mt-3 text-base font-inter">
              Proporcionamos iniciativas tecnológicas críticas para organizaciones medianas y corporativas en sectores de alta exigencia y cumplimiento.
            </p>
          </div>
          <a
            href="#contact"
            className="text-primary font-inter font-bold text-sm flex items-center gap-2 hover:text-secondary transition-colors group"
          >
            <span>CONSULTAR POR SECTOR</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-outline-variant/80 hover-card group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-manrope font-bold text-xl text-primary mb-3">
                    {ind.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm font-inter leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                <div className="pt-6">
                  <a
                    href="#contact"
                    className="text-secondary font-inter font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Conocer soluciones</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
