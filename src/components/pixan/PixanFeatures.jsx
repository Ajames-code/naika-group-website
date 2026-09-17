import React from 'react';
import { Activity, CloudSync, Network, ShieldCheck, ArrowRight, CheckCircle2, Server } from 'lucide-react';

export default function PixanFeatures() {
  return (
    <section className="py-20 lg:py-24 bg-white" id="features">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        
        {/* Section Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-secondary font-inter font-bold text-xs sm:text-sm tracking-widest uppercase">
            SUPERVISIÓN AVANZADA
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary leading-tight">
            Controle su Red
          </h2>
          <p className="text-on-surface-variant font-inter text-base sm:text-lg leading-relaxed">
            Pixán proporciona una supervisión integral de su infraestructura crítica, traduciendo datos de red complejos en inteligencia visual procesable.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Wide (8 Cols) - Monitoreo Visual en Tiempo Real */}
          <div className="md:col-span-8 bg-surface rounded-2xl border border-outline-variant p-8 sm:p-10 hover-card relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Background Icon */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-[0.06] text-primary pointer-events-none">
              <Activity className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-primary mb-3">
                Monitoreo Visual en Tiempo Real
              </h3>
              <p className="font-inter text-on-surface-variant text-base leading-relaxed max-w-2xl mb-8">
                Visualice instantáneamente la salud y el estado de cada elemento en su red. Las anomalías se detectan y notifican de inmediato, reduciendo drásticamente el tiempo medio de resolución (MTTR) y garantizando el tiempo de actividad continuo para operaciones de misión crítica.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-outline-variant/60">
              <div className="bg-white/80 p-3 rounded-lg border border-outline-variant/50">
                <span className="block text-xl font-manrope font-bold text-primary">&lt; 500ms</span>
                <span className="text-xs text-on-surface-variant">Detección de anomalías</span>
              </div>
              <div className="bg-white/80 p-3 rounded-lg border border-outline-variant/50">
                <span className="block text-xl font-manrope font-bold text-secondary">24/7/365</span>
                <span className="text-xs text-on-surface-variant">Supervisión ininterrumpida</span>
              </div>
              <div className="bg-white/80 p-3 rounded-lg border border-outline-variant/50">
                <span className="block text-xl font-manrope font-bold text-primary">Multi-canal</span>
                <span className="text-xs text-on-surface-variant">Alertas SMS, Email y Webhook</span>
              </div>
            </div>
          </div>

          {/* Card 2: Square Dark (4 Cols) - Administración Basada en la Nube */}
          <div className="md:col-span-4 bg-gradient-to-br from-primary-container to-primary text-white rounded-2xl p-8 sm:p-10 hover-card relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-6">
                <CloudSync className="w-6 h-6 text-secondary-fixed" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-white mb-3">
                Administración en la Nube
              </h3>
              <p className="font-inter text-slate-200 text-sm leading-relaxed mb-6">
                Gestión segura y descentralizada. Acceda a su panel de Pixán desde cualquier punto final autorizado globalmente, sin comprometer el control administrativo ni la integridad de los datos de su empresa.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/15">
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary-fixed">
                <ShieldCheck className="w-4 h-4" />
                <span>Cifrado de grado bancario TLS 1.3</span>
              </div>
            </div>
          </div>

          {/* Card 3: Square (6 Cols) - Control de Elementos de Red */}
          <div className="md:col-span-6 bg-surface rounded-2xl border border-outline-variant p-8 sm:p-10 hover-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-primary mb-3">
                Control de Elementos de Red
              </h3>
              <p className="font-inter text-on-surface-variant text-base leading-relaxed mb-6">
                Más allá del monitoreo pasivo, Pixán permite el control administrativo granular sobre elementos de red individuales. Configure, actualice y gestione hardware de forma remota a través de un túnel cifrado y seguro.
              </p>

              <ul className="space-y-3.5 mt-6">
                <li className="flex items-start gap-3 text-sm text-on-surface-variant font-inter">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Gestión del ciclo de vida del firmware y parches de seguridad automatizados</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface-variant font-inter">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Copia de seguridad periódica y restauración instantánea de configuraciones</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-on-surface-variant font-inter">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Aislamiento preventivo de puertos ante detección de ataques o sobrecargas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Square (6 Cols) - Mapa de Topología Activo */}
          <div className="md:col-span-6 bg-surface-subtle rounded-2xl border border-outline-variant p-8 sm:p-10 hover-card flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary-container mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="font-manrope font-bold text-2xl text-primary mb-2">
                Topología Dinámica Interactiva
              </h3>
              <p className="font-inter text-on-surface-variant text-sm mb-6">
                Mapeo automático de dependencias físicas y lógicas de su infraestructura en tiempo real.
              </p>
            </div>

            {/* Interactive Network Map Visualization */}
            <div className="relative w-full h-52 bg-white rounded-xl border border-outline-variant/80 overflow-hidden p-4 shadow-inner flex items-center justify-center">
              {/* SVG Link lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="#002868" strokeWidth="2" strokeDasharray="4" strokeOpacity="0.4" />
                <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#002868" strokeWidth="2" strokeDasharray="4" strokeOpacity="0.4" />
                <line x1="30%" y1="75%" x2="50%" y2="50%" stroke="#006e2c" strokeWidth="2" strokeOpacity="0.6" />
                <line x1="70%" y1="75%" x2="50%" y2="50%" stroke="#002868" strokeWidth="2" strokeDasharray="4" strokeOpacity="0.4" />
              </svg>

              {/* Node 1: Edge router */}
              <div className="absolute top-[26%] left-[23%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-secondary-green shadow-[0_0_12px_rgba(52,168,83,0.8)] animate-ping" />
                <div className="w-4 h-4 rounded-full bg-secondary-green absolute" />
                <span className="text-[10px] font-mono font-semibold text-slate-500 mt-5 bg-white/90 px-1 rounded">Switch-01</span>
              </div>

              {/* Node 2: Firewall */}
              <div className="absolute top-[22%] left-[75%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary-container shadow-[0_0_10px_rgba(0,40,104,0.5)]" />
                <span className="text-[10px] font-mono font-semibold text-slate-500 mt-5 bg-white/90 px-1 rounded">FW-Edge</span>
              </div>

              {/* Central Hub: Core */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20 shadow-lg">
                  <Server className="w-4 h-4 text-secondary-fixed" />
                </div>
                <span className="text-[11px] font-mono font-bold text-primary mt-9 bg-white/90 px-1.5 py-0.5 rounded shadow-xs">Core Gateway</span>
              </div>

              {/* Node 3: Cloud Node */}
              <div className="absolute top-[75%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-secondary-green" />
                <span className="text-[10px] font-mono font-semibold text-slate-500 mt-5 bg-white/90 px-1 rounded">AP-Corp</span>
              </div>

              {/* Node 4: Storage */}
              <div className="absolute top-[75%] left-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary-container" />
                <span className="text-[10px] font-mono font-semibold text-slate-500 mt-5 bg-white/90 px-1 rounded">SAN-01</span>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-md border border-outline-variant/60 shadow-xs text-xs font-inter font-bold text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary-green animate-pulse" />
                <span>Mapa de Topología Activo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
