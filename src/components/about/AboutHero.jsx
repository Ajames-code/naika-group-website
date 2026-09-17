import React from 'react';
import { Award, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-subtle to-white">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-inter text-xs font-bold tracking-widest uppercase border border-primary/15">
            <Award className="w-3.5 h-3.5 text-secondary" />
            MÁS DE 15 AÑOS DE TRAYECTORIA
          </div>

          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.15] tracking-tight">
            Empoderando el crecimiento a través de{' '}
            <span className="text-gradient">tecnología de grado institucional</span>.
          </h1>

          <p className="font-inter text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-2xl">
            Durante más de 15 años, Naika Group ha sido el socio estratégico detrás de los sistemas tecnológicos de organizaciones líderes en la región, entregando resultados sostenibles mediante previsión estratégica, soporte 24/7 y excelencia técnica comprobada.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#historia"
              className="bg-primary text-white px-8 py-3.5 rounded-lg font-inter text-sm sm:text-base font-semibold hover:bg-primary-container transition-all duration-300 shadow-md hover:shadow-xl btn-shimmer inline-flex items-center gap-2 group"
            >
              <span>Nuestra Historia</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#valores"
              className="bg-white border border-outline-variant text-primary px-8 py-3.5 rounded-lg font-inter text-sm sm:text-base font-semibold hover:bg-surface-alt transition-all shadow-sm"
            >
              Filosofía y Valores
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
