import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-subtle border border-outline-variant rounded-3xl p-10 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-sm"
        >
          {/* Text Content */}
          <div className="max-w-2xl relative z-10 space-y-4">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-primary leading-tight">
              ¿Busca Experiencia Estratégica en TI?
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg font-inter leading-relaxed">
              Combinamos capacidades técnicas profundas con un enfoque cercano y resolutivo. Hablemos sobre cómo podemos fortalecer y modernizar la infraestructura de su empresa.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="bg-secondary text-white px-8 py-3.5 rounded-lg font-inter font-bold text-sm sm:text-base hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group btn-shimmer"
              >
                <span>Trabaje con Naika Group</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="hidden lg:block w-72 h-72 border-[20px] border-secondary/10 rounded-full absolute -right-20 -bottom-20 pointer-events-none" />
          <div className="hidden lg:block w-48 h-48 border-[10px] border-primary/5 rounded-full absolute top-10 right-40 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
