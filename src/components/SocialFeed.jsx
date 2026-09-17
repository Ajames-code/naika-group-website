import React from 'react';
import { Share2 } from 'lucide-react';

function FacebookIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function SocialFeed() {
  return (
    <section className="py-20 bg-white border-t border-outline-variant/40">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop text-center">
        <div className="mb-10">
          <span className="text-secondary font-inter font-bold text-sm tracking-widest uppercase">
            Comunidad Digital
          </span>
          <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl text-primary mt-2">
            Síguenos en Facebook
          </h2>
        </div>

        <div className="bg-surface-container-low rounded-3xl p-10 sm:p-14 border border-outline-variant/80 flex flex-col items-center justify-center min-h-[320px] space-y-4 hover-card">
          <div className="bg-primary text-white p-4 rounded-full shadow-lg">
            <FacebookIcon className="w-8 h-8 stroke-white" />
          </div>
          <p className="text-primary font-manrope font-bold text-lg">
            @NaikaGroupOficial
          </p>
          <p className="text-on-surface-variant text-sm max-w-md font-inter">
            Únete a nuestra comunidad para conocer lanzamientos de soluciones, actualizaciones de ciberseguridad y eventos tecnológicos del sector.
          </p>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-container transition-all shadow-sm"
          >
            <span>Visitar Página</span>
            <Share2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
