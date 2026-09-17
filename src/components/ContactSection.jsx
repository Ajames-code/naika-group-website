import React, { useState } from 'react';
import { Mail, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-primary text-on-primary relative overflow-hidden" id="contact">
      {/* Glow decorative effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <span className="text-secondary-fixed font-inter font-bold text-sm tracking-widest uppercase">
              Contacto
            </span>
            <h2 className="font-manrope font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-tight">
              Estamos disponibles para resolverte cualquier duda
            </h2>
            <p className="text-white/80 font-inter text-base sm:text-lg mt-4 leading-relaxed">
              Ponte en contacto con nuestro equipo de consultores tecnológicos para una evaluación personalizada de tu infraestructura.
            </p>
          </div>

          <div className="space-y-6 pt-4 text-white">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3.5 rounded-xl text-secondary-fixed border border-white/10">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-manrope font-bold text-lg text-white">Correo Electrónico</p>
                <a href="mailto:contacto@naika.com.mx" className="text-white/80 hover:text-secondary-fixed transition-colors">
                  contacto@naika.com.mx
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3.5 rounded-xl text-secondary-fixed border border-white/10">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-manrope font-bold text-lg text-white">Teléfono</p>
                <a href="tel:9999260784" className="text-white/80 hover:text-secondary-fixed transition-colors">
                  (999) 926 07 84
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3.5 rounded-xl text-secondary-fixed border border-white/10">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-manrope font-bold text-lg text-white">Horario de Atención</p>
                <p className="text-white/80">Lunes a Viernes: 9:00 AM a 6:00 PM</p>
                <p className="text-white/80">Sábado: 9:00 AM a 1:00 PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl text-on-surface border border-outline-variant/60"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-secondary/10 text-secondary mb-2">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold font-manrope text-primary">
                ¡Gracias por comunicarte!
              </h3>
              <p className="text-on-surface-variant font-inter max-w-sm mx-auto">
                Hemos recibido tu solicitud exitosamente. Un especialista de Naika Group se pondrá en contacto contigo en breve.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-container transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary font-inter">Nombre *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    className="w-full bg-surface-subtle border border-outline-variant rounded-lg p-3.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-inter text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary font-inter">Apellido *</label>
                  <input
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    placeholder="Tu apellido"
                    className="w-full bg-surface-subtle border border-outline-variant rounded-lg p-3.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-inter text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary font-inter">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="nombre@empresa.com"
                  className="w-full bg-surface-subtle border border-outline-variant rounded-lg p-3.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-inter text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary font-inter">Mensaje *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="¿Cómo podemos ayudarte con tus necesidades de TI o ciberseguridad?"
                  className="w-full bg-surface-subtle border border-outline-variant rounded-lg p-3.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-inter text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-4 rounded-lg font-inter font-bold text-base hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl btn-shimmer"
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
