import React from 'react';
import { ShieldCheck, Zap, Headphones, CheckCircle2, Award } from 'lucide-react';

export default function SupportHero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] flex items-center bg-[#00153e] text-white overflow-hidden py-20">
      {/* Background Graphic & Texture */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#34a853_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-green/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-container/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/30 border border-secondary-green/40 text-secondary-fixed text-xs sm:text-sm font-inter font-semibold backdrop-blur-md">
            <Headphones className="w-4 h-4" />
            <span>Centro de Soporte y Operaciones Técnicas (NOC)</span>
          </div>

          {/* Headline */}
          <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
            Soporte Técnico Especializado
          </h1>

          {/* Description */}
          <p className="font-inter text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
            En Naika Group, entendemos que la continuidad de su negocio es primordial. Nuestro equipo de ingeniería ofrece una respuesta ágil y soluciones de arquitectura robustas para garantizar que su infraestructura tecnológica sea un motor de crecimiento constante.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-secondary-fixed" />
              <span>SLA 99.9% Garantizado</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm font-semibold text-white">
              <Zap className="w-4 h-4 text-secondary-fixed" />
              <span>Respuesta en Tiempo Real</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 text-xs sm:text-sm font-semibold text-white">
              <Award className="w-4 h-4 text-secondary-fixed" />
              <span>Ingenieros Certificados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
