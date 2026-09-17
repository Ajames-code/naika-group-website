import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const isServices = location.pathname === '/servicios';
  const isAbout = location.pathname === '/nosotros';
  const isPixan = location.pathname === '/pixan';
  const isSupport = location.pathname === '/soporte';

  const navLinks = [
    { name: 'Inicio', path: '/', isActive: isHome },
    { name: 'Servicios', path: '/servicios', isActive: isServices },
    { name: 'Nosotros', path: '/nosotros', isActive: isAbout },
    { name: 'Pixán', path: '/pixan', isActive: isPixan },
    { name: 'Soporte', path: '/soporte', isActive: isSupport },
  ];

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-outline-variant/60'
          : 'bg-white border-b border-outline-variant'
      }`}
    >
      <nav className="max-w-container-max mx-auto px-6 lg:px-margin-desktop flex items-center h-20 relative justify-between">
        {/* Brand Logo -> Link to Home */}
        <Link to="/" className="flex items-center gap-3">
          <img
            alt="Naika Group Logo"
            className="h-10 w-auto object-contain"
            src="/assets/naika-logo.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOXL3c8rejIXee7YOE1BoAxIS_H7tibFHAvPXrA7RUbgfXZ-El_XCRnurxylVo4b9BA30wnfatATGved5YuvHp-CFvhBZEIIa1cIL2kZVkZ0On3rWfvLW59i2dbdZsGNRCvkXH0r4ukEouPVUZep7istJcgb7ozNmdf1E54J56yNIa1P6DqAWSDaIsb4HZw_UmJPp3Oc5J6STBzE5dEIv4jJ4YnWLqhfJ5VUcHr_D7PY65E1KiPmOHUZlHM2bOyJibMQ';
            }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-inter text-sm font-semibold transition-colors duration-200 ${
                link.isActive
                  ? 'text-secondary border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-white px-7 py-2.5 rounded-lg font-inter text-sm font-semibold hover:bg-primary-container transition-all duration-300 shadow-sm hover:shadow-md btn-shimmer"
          >
            <span>Contáctenos</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-primary hover:bg-surface-alt transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant px-6 py-5 shadow-lg space-y-4 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-semibold transition-colors ${
                link.isActive ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold shadow-sm"
          >
            Contáctenos
          </a>
        </div>
      )}
    </header>
  );
}
