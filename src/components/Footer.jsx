import React from 'react';
import { Send, Globe, Users, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-white font-inter">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-manrope font-extrabold text-2xl text-white tracking-tight">
              Naika Group
            </span>
          </div>
          <p className="text-white/80 text-sm leading-relaxed pr-4">
            Durante más de 15 años, Naika Group ha impulsado a organizaciones empresariales con soluciones integrales de TI, ciberseguridad y consultoría especializada.
          </p>
          <div className="flex items-center gap-3 text-white/80">
            <a href="#" className="p-2 bg-white/10 rounded-lg hover:text-secondary-fixed hover:bg-white/20 transition-all" aria-label="Certificaciones">
              <Award className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-lg hover:text-secondary-fixed hover:bg-white/20 transition-all" aria-label="Comunidad">
              <Users className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-lg hover:text-secondary-fixed hover:bg-white/20 transition-all" aria-label="Web">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Servicios */}
        <div className="space-y-4">
          <h4 className="font-manrope font-bold text-secondary-fixed text-base">
            Servicios
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><a href="#solutions" className="hover:text-secondary-fixed transition-colors">Servicios TI Gestionados</a></li>
            <li><a href="#solutions" className="hover:text-secondary-fixed transition-colors">Ciberseguridad y Protección</a></li>
            <li><a href="#solutions" className="hover:text-secondary-fixed transition-colors">Soluciones Cloud e Infraestructura</a></li>
            <li><a href="#solutions" className="hover:text-secondary-fixed transition-colors">Licenciamiento de Software</a></li>
            <li><a href="#solutions" className="hover:text-secondary-fixed transition-colors">Consultoría y Redes</a></li>
          </ul>
        </div>

        {/* Column 3: Recursos */}
        <div className="space-y-4">
          <h4 className="font-manrope font-bold text-secondary-fixed text-base">
            Recursos
          </h4>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><a href="#" className="hover:text-secondary-fixed transition-colors">Blogs y Perspectivas</a></li>
            <li><a href="#" className="hover:text-secondary-fixed transition-colors">Noticias de la Industria</a></li>
            <li><a href="#" className="hover:text-secondary-fixed transition-colors">Casos de Éxito</a></li>
            <li><a href="#" className="hover:text-secondary-fixed transition-colors">Centro de Soporte Técnico</a></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-4">
          <h4 className="font-manrope font-bold text-secondary-fixed text-base">
            Mantente Conectado
          </h4>
          <p className="text-sm text-white/80">
            Recibe nuestros últimos análisis tecnológicos y recomendaciones de seguridad.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex rounded-lg overflow-hidden border border-white/20">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="bg-primary-container text-white px-3.5 py-2.5 text-sm w-full outline-none placeholder:text-white/50"
            />
            <button
              type="submit"
              className="bg-secondary px-4 text-white hover:bg-secondary/90 transition-colors flex items-center justify-center"
              aria-label="Suscribirse"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-white/10">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© 2026 Naika Group. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
