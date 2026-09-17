import React from 'react';
import { Cpu, Shield, Zap, Sliders, CheckCircle2 } from 'lucide-react';

export default function PixanArchitecture() {
  const specs = [
    {
      icon: Cpu,
      title: 'Protocolos Soportados',
      desc: 'Compatibilidad nativa con SNMP v1/v2c/v3, ICMP, Syslog RFC 5424, NetFlow v9/IPFIX, y REST APIs abiertas.',
      items: ['SNMP v3 con autenticación SHA-256', 'Sondeo ICMP configurable desde 500ms', 'Exportación de métricas a Prometheus/Grafana'],
    },
    {
      icon: Shield,
      title: 'Seguridad y Privacidad',
      desc: 'Cifrado de extremo a extremo, control de acceso basado en roles (RBAC) y registros inmutables para auditorías.',
      items: ['Cifrado TLS 1.3 en tránsito', 'Autenticación multifactor (MFA)', 'Bitácora de auditoría inalterable'],
    },
    {
      icon: Zap,
      title: 'Alta Disponibilidad',
      desc: 'Arquitectura distribuida en clúster con balanceo de carga automático y conmutación por error sin interrupción.',
      items: ['99.99% de disponibilidad garantizada', 'Respaldo geo-redundante', 'Monitoreo de agentes ligeros'],
    },
    {
      icon: Sliders,
      title: 'Alertas Inteligentes',
      desc: 'Motor de correlación de eventos impulsado por reglas y umbrales dinámicos para evitar fatiga de alertas.',
      items: ['Notificaciones vía WhatsApp, Telegram y Correo', 'Supresión inteligente de alertas redundantes', 'Escalamiento automático por jerarquía'],
    },
  ];

  return (
    <section className="py-20 bg-surface-subtle border-t border-outline-variant/60" id="specs">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-secondary font-inter font-bold text-xs sm:text-sm tracking-widest uppercase">
            ESPECIFICACIONES TÉCNICAS
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-primary leading-tight">
            Arquitectura Robusta y Escalable
          </h2>
          <p className="text-on-surface-variant font-inter text-base sm:text-lg">
            Diseñada para satisfacer los requisitos más exigentes de empresas de telecomunicaciones, centros de datos y corporativos con infraestructuras críticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-outline-variant p-7 flex flex-col justify-between hover-card shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-manrope font-bold text-xl text-primary mb-2">
                    {spec.title}
                  </h3>
                  <p className="font-inter text-sm text-on-surface-variant leading-relaxed mb-6">
                    {spec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/60 space-y-2">
                  {spec.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant font-inter">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
