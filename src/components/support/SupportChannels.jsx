import React from 'react';
import { Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export default function SupportChannels() {
  const channels = [
    {
      icon: Mail,
      title: 'Correo Electrónico',
      desc: 'Atención a incidencias y solicitudes directas por nuestro equipo de guardia técnica.',
      highlight: 'contacto@naika.com.mx',
      action: 'mailto:contacto@naika.com.mx',
      actionText: 'Enviar mensaje directo',
      badge: 'Respuesta < 15 min',
    },
    {
      icon: Phone,
      title: 'Línea Telefónica Directa',
      desc: 'Comuníquese con nuestra central de Mérida para emergencias o atención inmediata.',
      highlight: '(999) 926 07 84',
      action: 'tel:9999260784',
      actionText: 'Llamar al NOC',
      badge: 'Atención Inmediata',
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      desc: 'Lunes a Viernes de 9:00 AM a 6:00 PM. Sábados de 9:00 AM a 1:00 PM.',
      highlight: 'Guardia 24/7 con Póliza',
      action: '#contact',
      actionText: 'Consultar cobertura de póliza',
      badge: 'Monitoreo 24/7',
    },
  ];

  return (
    <section className="py-20 bg-surface-subtle border-t border-outline-variant/60" id="channels">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-inter font-bold text-xs sm:text-sm tracking-widest uppercase">
            CANALES DE ATENCIÓN DIRECTA
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-primary leading-tight">
            Otras Formas de Contacto
          </h2>
          <p className="text-on-surface-variant font-inter text-base sm:text-lg">
            Si requiere asistencia personalizada o no tiene acceso a internet, nuestro equipo está a su disposición a través de nuestros canales oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((ch, index) => {
            const Icon = ch.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-outline-variant p-8 flex flex-col justify-between hover-card shadow-xs relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-inter font-semibold px-2.5 py-1 rounded-full bg-secondary-green/10 text-secondary border border-secondary-green/20">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="font-manrope font-bold text-xl text-primary mb-2">
                    {ch.title}
                  </h3>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-4">
                    {ch.desc}
                  </p>
                  <p className="font-mono font-bold text-base text-primary mb-6">
                    {ch.highlight}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/60">
                  <a
                    href={ch.action}
                    className="inline-flex items-center gap-2 text-sm font-inter font-semibold text-secondary hover:text-primary transition-colors group"
                  >
                    <span>{ch.actionText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
