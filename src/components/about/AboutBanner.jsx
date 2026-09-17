import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutBanner() {
  return (
    <section className="relative h-[480px] sm:h-[520px] w-full overflow-hidden flex items-center">
      {/* Panoramic background image */}
      <img
        src="/assets/about-panoramic.jpg"
        alt="Instalaciones y visión corporativa Naika Group"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLSaqgFJgaBRNPWiIujEsnC5n1cBP0gshnspnlfkmuFa7Z4jynW0Et7qKy56sXKiJ5bKkXnqKAo3UlqAXKw5nH56RZP3rbJn1uYwMRA2abOWjusuoX_3f1Y6ZTKeB86ebikfxAcuJxOl-ER1UcedNWi6alp2Be2tXqidxDHm5Mygrzi5cvA8tpY5LaZV3nMfx6Wk7_8NMj6OBNXhbPFo8Sr6H-AhaPUhjHCzbVq-zMEfr5YJqQJKGE';
        }}
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-primary/75 backdrop-blur-[1.5px]" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl bg-white/10 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/20 text-white shadow-2xl space-y-4"
        >
          <div className="text-secondary-fixed">
            <Quote className="w-10 h-10" />
          </div>
          <p className="font-manrope text-xl sm:text-2xl font-bold leading-snug">
            "Transformar la complejidad tecnológica en certidumbre, resiliencia y ventaja competitiva para las empresas."
          </p>
          <p className="font-inter text-sm text-white/80 uppercase tracking-widest font-semibold pt-2">
            Misión Corporativa • Naika Group
          </p>
        </motion.div>
      </div>
    </section>
  );
}
