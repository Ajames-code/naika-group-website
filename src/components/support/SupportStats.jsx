import React from 'react';

export default function SupportStats() {
  const stats = [
    { value: '15+', label: 'Años de Experiencia en TI' },
    { value: '24/7', label: 'Monitoreo y Cobertura con Póliza' },
    { value: '500+', label: 'Clientes Enterprise & Gobierno' },
    { value: '< 15m', label: 'Tiempo de Respuesta Promedio' },
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-secondary-fixed">
                {item.value}
              </div>
              <p className="font-inter text-xs sm:text-sm text-slate-300 uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
