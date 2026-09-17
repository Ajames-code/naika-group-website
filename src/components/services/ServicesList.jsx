import React from 'react';
import { Settings, Shield, Cloud, Database, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesList() {
  const services = [
    {
      id: 'ti-gestionados',
      icon: Settings,
      title: 'Servicios TI Gestionados y Soporte Empresarial',
      subtitle: 'Continuidad operativa y monitoreo especializado 24/7',
      description: 'Soluciones integrales de TI adaptadas a las necesidades de su organización. Desde la administración de infraestructura hasta el soporte de usuarios finales, garantizamos sistemas de alto rendimiento, resistentes y permanentemente monitoreados.',
      features: [
        'Mesa de ayuda y soporte técnico especializado 24/7/365',
        'Monitoreo proactivo de servidores, almacenamiento y disponibilidad',
        'Mantenimiento preventivo y correctivo con SLAs rigurosos',
        'Gestión integral de respaldos y recuperación operativa ante contingencias',
      ],
      featured: true,
      tag: 'Mayor Demanda',
    },
    {
      id: 'ciberseguridad',
      icon: Shield,
      title: 'Ciberseguridad y Protección de Datos',
      subtitle: 'Defensa integral contra amenazas y blindaje normativo',
      description: 'Proteja la información confidencial y los activos digitales más críticos de su organización mediante una arquitectura de defensa en profundidad diseñada con los más altos estándares mundiales.',
      features: [
        'Implementación y gestión de Firewalls de última generación (NGFW)',
        'Protección avanzada de endpoints con EDR / XDR',
        'Evaluación continua de vulnerabilidades y pruebas de penetración',
        'Cumplimiento de normativas de protección de datos y privacidad',
      ],
      featured: false,
      tag: 'Seguridad Crítica',
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Soluciones Cloud e Infraestructura',
      subtitle: 'Flexibilidad, escalabilidad y eficiencia operativa en la nube',
      description: 'Acompañamos a su empresa en el diseño, migración y optimización de entornos de nube (privada, pública o híbrida), garantizando alta disponibilidad y costos perfectamente controlados.',
      features: [
        'Migración y modernización de cargas de trabajo a la nube',
        'Arquitecturas multicloud e híbridas de alta resiliencia',
        'Optimización continua de consumo y finanzas de nube (FinOps)',
        'Almacenamiento elástico y soluciones seguras de disaster recovery',
      ],
      featured: false,
      tag: 'Innovación',
    },
    {
      id: 'licenciamiento',
      icon: Database,
      title: 'Licenciamiento y Software Empresarial',
      subtitle: 'Productividad corporativa con la mejor relación costo-beneficio',
      description: 'Asesoría experta en la adquisición, renovación y administración de licencias de software corporativo, maximizando el aprovechamiento tecnológico y asegurando el cumplimiento legal.',
      features: [
        'Gestión unificada de contratos y licenciamiento por volumen',
        'Plataformas de productividad, colaboración y comunicación',
        'Auditorías preventivas de cumplimiento y optimización de licencias',
        'Soporte en renovaciones con fabricantes líderes',
      ],
      featured: false,
      tag: 'Productividad',
    },
    {
      id: 'consultoria',
      icon: Network,
      title: 'Consultoría TI y Redes',
      subtitle: 'Diseño e ingeniería de conectividad y proyectos llave en mano',
      description: 'Diseñamos e implementamos arquitecturas de red robustas, confiables y de baja latencia que sostienen las operaciones más demandantes de su negocio con tecnología de vanguardia.',
      features: [
        'Diseño e implementación de redes empresariales LAN, WAN y SD-WAN',
        'Cableado estructurado de alta densidad categoría 6A y fibra óptica',
        'Soluciones inalámbricas WiFi 6/7 para alta concurrencia corporativa',
        'Auditoría y optimización de topologías y protocolos de enrutamiento',
      ],
      featured: true,
      tag: 'Infraestructura',
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-outline-variant/40" id="services-catalog">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-inter font-bold text-sm tracking-widest uppercase">
            Catálogo Integral
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary mt-3 leading-tight">
            Sus Prioridades, Nuestras Soluciones
          </h2>
          <p className="text-on-surface-variant mt-4 text-base sm:text-lg font-inter leading-relaxed">
            Transformamos desafíos tecnológicos complejos en oportunidades comerciales estratégicas a través de nuestras 5 ofertas de servicios especializados principales.
          </p>
        </div>

        {/* 5 Services Cards */}
        <div className="space-y-12">
          {services.map((srv, idx) => {
            const IconComp = srv.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden hover-card ${
                  srv.featured
                    ? 'bg-gradient-to-br from-surface-subtle via-white to-surface-subtle border-primary/20 shadow-md hover:shadow-xl'
                    : 'bg-white border-outline-variant/80 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Info Column */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary p-3.5 rounded-2xl inline-flex group-hover:bg-secondary/10 group-hover:text-secondary transition-colors">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-surface-container rounded-full text-primary font-inter">
                        {srv.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-manrope font-bold text-primary">
                        {srv.title}
                      </h3>
                      <p className="text-secondary font-inter font-semibold text-sm mt-1">
                        {srv.subtitle}
                      </p>
                    </div>

                    <p className="text-on-surface-variant text-base font-inter leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="pt-2">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold font-inter hover:bg-primary-container transition-all shadow-sm btn-shimmer group"
                      >
                        <span>Solicitar Cotización</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Features Column */}
                  <div className="lg:col-span-5 bg-surface-subtle/80 rounded-2xl p-6 sm:p-8 border border-outline-variant/60 space-y-4">
                    <h4 className="font-manrope font-bold text-primary text-sm uppercase tracking-wider">
                      Capacidades Clave
                    </h4>
                    <ul className="space-y-3">
                      {srv.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant font-inter">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
