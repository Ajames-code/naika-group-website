import React from 'react';

export default function PartnersCarousel() {
  const partners = [
    { name: 'Cisco', src: '/assets/cisco.png' },
    { name: 'Bosch', src: '/assets/bosch.png' },
    { name: 'Fortinet', src: '/assets/fortinet.png' },
    { name: 'Huawei', src: '/assets/huawei.png' },
    { name: 'Aruba Networks', src: '/assets/aruba.png' },
    { name: 'APC Schneider', src: '/assets/apc.png' },
    { name: 'Dahua Technology', src: '/assets/dahua.png' },
    { name: 'Hikvision', src: '/assets/hikvision.png' },
    { name: 'Panduit', src: '/assets/panduit.png' },
    { name: 'Grandstream', src: '/assets/grandstream.png' },
    { name: 'Extreme Networks', src: '/assets/extreme-networks.png' },
    { name: 'CyberPower', src: '/assets/cyberpower.png' },
    { name: 'ZKTeco', src: '/assets/zkteco.png' },
    { name: 'Total Ground', src: '/assets/total-ground.png' },
    { name: 'Came', src: '/assets/came.png' },
    { name: 'AccessPro', src: '/assets/accesspro.png' },
    { name: 'Epcom', src: '/assets/epcom.png' },
  ];

  // Duplicated for seamless infinite loop
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="py-20 lg:py-24 bg-surface-subtle overflow-hidden border-t border-outline-variant/40 relative">
      <style>{`
        @keyframes continuousMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: continuousMarquee 65s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Text */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-[40px] text-primary leading-tight tracking-tight">
              Actualización y Vanguardia
            </h2>
            <p className="text-on-surface-variant text-base font-inter leading-relaxed">
              En Naika Group nos mantenemos a la vanguardia tecnológica, capacitando a nuestro equipo y forjando alianzas estratégicas para ofrecer soluciones innovadoras que impulsen el éxito de nuestros clientes.
            </p>
          </div>

          {/* Right Column: Transparent Larger Logos with Edge Fade */}
          <div className="lg:col-span-7 relative w-full overflow-hidden py-4">
            
            {/* Left Edge Fade Overlay */}
            <div
              className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #F7F9FF 25%, rgba(247, 249, 255, 0.85) 65%, rgba(247, 249, 255, 0) 100%)'
              }}
            />

            {/* Right Edge Fade Overlay */}
            <div
              className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-20 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #F7F9FF 25%, rgba(247, 249, 255, 0.85) 65%, rgba(247, 249, 255, 0) 100%)'
              }}
            />

            {/* Scroller Track */}
            <div className="overflow-hidden">
              <div className="marquee-track items-center gap-14 sm:gap-20">
                {marqueeItems.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-300 group cursor-default"
                  >
                    <img
                      alt={item.name}
                      src={item.src}
                      className="h-14 sm:h-18 md:h-20 w-auto max-w-[180px] sm:max-w-[220px] object-contain grayscale opacity-65 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextElementSibling;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <span className="hidden text-sm font-bold font-inter text-slate-700">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
