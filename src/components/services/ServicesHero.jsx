import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-surface-container-low via-surface-subtle to-white">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-inter text-xs font-bold tracking-widest uppercase border border-primary/15">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            NUESTRAS SOLUCIONES
          </div>

          <h1 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.15] tracking-tight">
            Impulsando su Negocio con{' '}
            <span className="text-gradient">Tecnología Moderna</span>
          </h1>

          <p className="font-inter text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl">
            Naika Group ayuda a las organizaciones a modernizar sus sistemas de TI, reducir costos y lograr resultados sostenibles mediante estrategias tecnológicas probadas y una implementación experta.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3.5 rounded-lg font-inter text-sm sm:text-base font-semibold hover:bg-primary-container transition-all duration-300 shadow-md hover:shadow-xl btn-shimmer inline-flex items-center gap-2 group"
            >
              <span>Hablar con un Experto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services-catalog"
              className="bg-white border border-outline-variant text-primary px-8 py-3.5 rounded-lg font-inter text-sm sm:text-base font-semibold hover:bg-surface-alt transition-all shadow-sm"
            >
              Explorar Servicios
            </a>
          </div>
        </motion.div>

        {/* Right Column Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 glass-card p-3 transform hover:scale-[1.01] transition-transform duration-500 border border-white/80">
            <img
              className="w-full h-full object-cover rounded-xl"
              alt="Equipo de consultoría TI Naika Group"
              src="/assets/services-hero.jpg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCL_RwG7W7N28CgilHsRLKM6nif0OcJPcpkgXlczyb0veGYCuU4vcf19e_nTwdb4q9w7Ikacfyx59GXB1rmCOngSVgjRVEoa9_N7_b42zirVMM5a6xGu46EHCrqedR_yQEgRStTgoIwmrG-5zAm9MDLh1GESrNP0loGcpHmBkCMsmxhHPwv7HieiM6pyhZu3zzEckbaq1ch-JRkU1dEEpTZplKZ9-U5MxvlwD2rWCJ1jffCk67SiSvB';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
