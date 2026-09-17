import React from 'react';
import { Eye, Cloud, Router, ShieldCheck, ArrowRight, Terminal, Activity, CheckCircle2 } from 'lucide-react';

export default function PixanHero() {
  return (
    <section className="relative bg-surface-subtle py-16 lg:py-24 overflow-hidden border-b border-outline-variant/40">
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#002868 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative Glows */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-secondary-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-green/10 text-secondary border border-secondary-green/20 font-inter text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-green" />
              </span>
              <Eye className="w-4 h-4 text-secondary" />
              <span>Plataforma de Monitoreo Pixán</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-5xl text-primary leading-[1.15] tracking-tight">
              Visibilidad de Activos Críticos en{' '}
              <span className="text-gradient">Tiempo Real</span>.
            </h1>

            {/* Subtitle */}
            <p className="font-inter text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-xl">
              Un robusto sistema de monitoreo basado en la nube que permite la gestión visual en tiempo real de los elementos de red desde cualquier lugar. Construido para escala empresarial y confiabilidad absoluta.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-primary-container text-white px-8 py-3.5 rounded-lg font-inter text-sm font-semibold hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg btn-shimmer"
              >
                <span>Solicitar Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#specs"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-container/30 bg-white/80 hover:bg-white text-primary-container px-8 py-3.5 rounded-lg font-inter text-sm font-semibold hover:border-primary-container transition-all duration-300"
              >
                <span>Especificaciones Técnicas</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 border-t border-outline-variant/60 flex items-center gap-6 text-xs sm:text-sm text-on-surface-variant">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-secondary-green" />
                <span>99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-secondary-green" />
                <span>SNMP v3 & Cifrado TLS</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Pixán Console Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none bg-white rounded-2xl border border-outline-variant/80 shadow-2xl overflow-hidden hover-card">
              
              {/* Console Header Bar */}
              <div className="bg-[#00153e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 text-xs font-mono font-medium text-slate-300 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-secondary-green" />
                    Consola Pixán v3.4 [Live]
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    CONECTADO
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 bg-slate-50/70 space-y-5">
                
                {/* Status Grid Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Card 1: Cloud Sync */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-inter text-slate-500 font-medium">Sincronización Cloud</span>
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Cloud className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-manrope font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Activo
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">Mérida Data Center 01</p>
                    </div>
                  </div>

                  {/* Card 2: Online Nodes */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-inter text-slate-500 font-medium">Nodos en Línea</span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-primary-container">
                        <Router className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-manrope font-bold text-primary">2,408</div>
                      <p className="text-[11px] text-emerald-600 font-medium mt-0.5">100% Operativos</p>
                    </div>
                  </div>
                </div>

                {/* Telemetry Activity Chart Graphic */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-secondary-green" />
                      <span className="text-xs font-inter font-semibold text-slate-700">Tráfico y Paquetes en Red (Tx / Rx)</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">Latencia: 12ms</span>
                  </div>

                  {/* Simulated Telemetry Bars */}
                  <div className="h-28 bg-slate-50 rounded-lg p-2.5 flex items-end justify-between gap-1 border border-slate-100">
                    {[
                      { h: '45%', c: 'bg-primary-container/40' },
                      { h: '60%', c: 'bg-primary-container/50' },
                      { h: '35%', c: 'bg-primary-container/40' },
                      { h: '75%', c: 'bg-primary-container/60' },
                      { h: '90%', c: 'bg-primary-container/80' },
                      { h: '65%', c: 'bg-primary-container/60' },
                      { h: '80%', c: 'bg-primary-container/70' },
                      { h: '95%', c: 'bg-primary-container' },
                      { h: '70%', c: 'bg-primary-container/70' },
                      { h: '85%', c: 'bg-secondary-green/80' },
                      { h: '100%', c: 'bg-secondary-green' },
                      { h: '88%', c: 'bg-secondary-green/90' },
                      { h: '78%', c: 'bg-secondary-green/80' },
                      { h: '92%', c: 'bg-secondary-green' },
                      { h: '82%', c: 'bg-primary-container/80' },
                    ].map((bar, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t transition-all duration-500 ${bar.c}`}
                        style={{ height: bar.h }}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400 font-mono">
                    <span>-15m</span>
                    <span>-10m</span>
                    <span>-5m</span>
                    <span className="text-secondary-green font-semibold">Ahora</span>
                  </div>
                </div>

                {/* Real-time telemetry feed badge */}
                <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-primary font-inter">
                    <ShieldCheck className="w-4 h-4 text-secondary-green" />
                    <span>Monitoreo continuo SNMPv3 sin pérdida de paquetes</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">SLA 99.99%</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
