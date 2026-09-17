import React from 'react';
import { motion } from 'framer-motion';

export default function Metrics() {
  const metrics = [
    {
      value: '+15 años',
      label: 'Experiencia en tecnología empresarial',
      hasBorder: false,
    },
    {
      value: '+350',
      label: 'Soluciones y proyectos implementados',
      hasBorder: true,
    },
    {
      value: '+475',
      label: 'Tecnologías y fabricantes especializados',
      hasBorder: false,
    },
  ];

  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center items-center">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`space-y-2 py-4 md:py-0 ${
                item.hasBorder
                  ? 'border-y md:border-y-0 md:border-x border-white/20 md:px-8'
                  : 'md:px-8'
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-extrabold font-manrope text-secondary-fixed">
                {item.value}
              </h2>
              <p className="text-base text-white/90 font-inter font-normal">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
