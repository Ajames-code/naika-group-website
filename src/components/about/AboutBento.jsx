import React from 'react';
import { History, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutBento() {
  return (
    <section className="py-24 bg-surface-subtle" id="historia">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Left Card (Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-outline-variant/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-secondary font-inter font-bold text-xs uppercase tracking-widest">
                Compromiso y Resultados
              </span>
              <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-4xl text-primary mt-2 mb-4 leading-tight">
                Un socio de confianza para iniciativas críticas
              </h2>
              <p className="text-on-surface-variant font-inter text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Vamos más allá de implementaciones puntuales para entregar valor a largo plazo. Nuestra trayectoria se consolida en la cercanía humana, la resolución efectiva y la preparación continua de nuestros ingenieros certificados por los fabricantes globales más exigentes.
              </p>
            </div>

            {/* Metrics Counter Strip */}
            <div className="pt-6 border-t border-outline-variant/60 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-manrope text-secondary">
                  87%
                </div>
                <div className="font-inter font-bold text-xs sm:text-sm text-primary uppercase tracking-wider mt-1">
                  Puntuación CSAT
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">Satisfacción y excelencia de servicio</p>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-manrope text-secondary">
                  +350
                </div>
                <div className="font-inter font-bold text-xs sm:text-sm text-primary uppercase tracking-wider mt-1">
                  Proyectos Exitosos
                </div>
                <p className="text-xs text-on-surface-variant mt-0.5">Empresas e industrias modernizadas</p>
              </div>
            </div>
          </motion.div>

          {/* Right Highlight Card (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-4 bg-primary-container p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden text-white"
          >
            {/* Background icon watermark */}
            <div className="absolute top-4 right-4 text-white/10 pointer-events-none">
              <History className="w-40 h-40" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="bg-white/15 backdrop-blur p-3 rounded-2xl w-fit text-secondary-fixed">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-widest text-secondary-fixed font-bold font-inter">
                Innovación Constante
              </span>
            </div>

            <div className="relative z-10 pt-16">
              <div className="text-5xl sm:text-6xl font-extrabold font-manrope mb-2 text-white">
                +15
              </div>
              <div className="text-xl font-manrope font-bold text-white/90 mb-3">
                Años Liderando Soluciones TI
              </div>
              <p className="text-white/80 font-inter text-sm leading-relaxed">
                Evolucionamos día con día para incorporar inteligencia artificial, ciberseguridad avanzada y arquitecturas de nube que aseguran la continuidad empresarial de nuestros clientes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
