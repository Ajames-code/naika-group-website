import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LatestInsights() {
  const articles = [
    {
      title: 'Velocidad vs. Confianza: Lo que los Líderes de Datos y TI Necesitan Saber',
      tag: 'Blogs • Datos y TI',
      date: '22 de Julio, 2026',
      description: 'Navegar por las complejidades de los servidores MCP y las plataformas de datos modernas requiere un equilibrio entre agilidad y gobernanza.',
      image: '/assets/insights-1.jpg',
    },
    {
      title: 'Agentes de IA de ServiceNow: De la Automatización a la Acción',
      tag: 'Blogs • IA',
      date: '25 de Junio, 2026',
      description: 'Yendo más allá de la simple automatización hacia agentes autónomos que impulsan resultados empresariales significativos en toda la empresa.',
      image: '/assets/insights-2.jpg',
    },
    {
      title: 'Naika Group Invierte en el Desarrollo de la Fuerza Laboral de TI',
      tag: 'Noticias • Comunidad',
      date: '23 de Junio, 2026',
      description: 'Nuestra última asociación formativa se centra en construir la próxima generación de profesionales técnicos a través de programas de aprendizaje.',
      image: '/assets/insights-3.jpg',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-outline-variant/40">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6">
          <div>
            <span className="text-secondary font-inter font-bold text-sm tracking-widest uppercase">
              Blog y Noticias
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary mt-3 leading-tight">
              Últimas Perspectivas de Naika
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-primary font-inter font-bold hover:text-secondary transition-colors text-sm sm:text-base"
          >
            <span>Descubrir más perspectivas</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group hover-card rounded-2xl p-3 bg-white border border-outline-variant/60 shadow-sm transition-all"
            >
              <div className="relative overflow-hidden rounded-xl mb-5 aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {item.date}
                </div>
              </div>
              <div className="px-2 pb-2">
                <span className="text-secondary font-inter font-bold text-xs uppercase tracking-wider">
                  {item.tag}
                </span>
                <h3 className="font-manrope font-bold text-xl text-primary mt-2 group-hover:text-secondary transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant mt-3 text-sm font-inter leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
