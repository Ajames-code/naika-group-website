import React from 'react';
import { ShieldCheck, Users, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutValues() {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Integridad Primero',
      description: 'Priorizamos la honestidad, la ética y la transparencia en cada diagnóstico. Recomendamos exactamente la arquitectura que tu empresa necesita, no la moda pasajera ni gastos superfluos.',
    },
    {
      icon: Users,
      title: 'Crecimiento Inclusivo',
      description: 'Creemos que la tecnología moderna debe ser accesible y generar impacto tangible en todas las áreas de una organización, empoderando el talento de los equipos humanos.',
    },
    {
      icon: Rocket,
      title: 'Innovación Sostenible',
      description: 'Diseñamos e implementamos sistemas que no solo resuelven el reto operativo de hoy, sino que son modulares, escalables y resilientes para las décadas por venir.',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-outline-variant/40" id="valores">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-inter font-bold text-sm tracking-widest uppercase">
            Cultura Corporativa
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary mt-3 leading-tight">
            El Ethos de Naika
          </h2>
          <p className="text-on-surface-variant font-inter text-base sm:text-lg mt-4 leading-relaxed">
            Nuestra cultura se define por el rigor profesional, la curiosidad técnica y un compromiso absoluto con el éxito y la seguridad de cada uno de nuestros clientes.
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 sm:p-10 border border-outline-variant/80 rounded-3xl bg-white hover-card group flex flex-col justify-between shadow-sm hover:border-secondary/60 transition-all"
              >
                <div>
                  <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-manrope font-bold text-xl sm:text-2xl text-primary mb-3">
                    {val.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm sm:text-base font-inter leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-outline-variant/40">
                  <span className="text-secondary font-inter font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>Compromiso Naika</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
