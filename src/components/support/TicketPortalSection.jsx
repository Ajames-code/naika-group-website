import React from 'react';
import { Ticket, ArrowUpRight, QrCode, Smartphone, Headphones, Info, ShieldCheck, Clock } from 'lucide-react';

export default function TicketPortalSection() {
  const ticketPortalUrl = "https://tickets.naika.fortiddns.com/Form/Render/3?token=yQezCO0ynAOMDjTXlDcrGUbju1KrgFCh4lMFCkKO";

  return (
    <section className="py-20 lg:py-24 bg-white" id="tickets">
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column (7 cols): Ticket Portal Access Card */}
          <div className="lg:col-span-7 bg-surface rounded-2xl border border-outline-variant p-8 sm:p-10 flex flex-col justify-between hover-card">
            <div>
              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center mb-6">
                <Ticket className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h2 className="font-manrope font-bold text-2xl sm:text-3xl text-primary mb-3">
                Acceso al Portal de Tickets
              </h2>
              <p className="font-inter text-on-surface-variant text-base leading-relaxed mb-6">
                Gestione sus requerimientos de forma centralizada sin necesidad de iniciar sesión. Nuestro sistema le permite reportar incidencias, solicitar cambios y recibir seguimiento prioritario por ingenieros certificados.
              </p>

              {/* Real Policy Notice Box (From official ticket platform) */}
              <div className="bg-amber-50/90 border-l-4 border-amber-500 p-4 rounded-r-xl mb-8 space-y-2 text-xs sm:text-sm font-inter">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Condiciones de Atención de Tickets:</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-amber-950">
                  <li>
                    <strong className="text-primary font-semibold">Clientes con Póliza de Soporte:</strong> Servicio cubierto bajo los términos de tu contrato actual.
                  </li>
                  <li>
                    <strong className="text-rose-700 font-semibold">Clientes sin Póliza Activa:</strong> Este ticket podría generar costos según el soporte brindado. Consulta detalles con tu ejecutivo de venta.
                  </li>
                </ul>
              </div>

              {/* Action Button: Directly opens real ticket form */}
              <div className="pt-2">
                <a
                  href={ticketPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-inter text-base font-bold shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto btn-shimmer"
                >
                  <span>Levantar Ticket de Soporte</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Simple Direct Steps (Without login friction) */}
            <div className="mt-10 pt-8 border-t border-outline-variant/60 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary font-manrope font-bold flex items-center justify-center text-sm flex-shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-inter font-bold text-sm text-primary">Describe tu Requerimiento</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Ingresa tus datos de contacto y describe tu incidencia o solicitud técnica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-lg bg-secondary/15 text-secondary font-manrope font-bold flex items-center justify-center text-sm flex-shrink-0">
                  02
                </span>
                <div>
                  <h4 className="font-inter font-bold text-sm text-primary">Atención Inmediata</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                    Un ingeniero certificado tomará tu caso de inmediato de acuerdo a tu póliza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Phygital Access with Real QR */}
          <div className="lg:col-span-5 bg-blue-50/60 rounded-2xl border border-blue-100 p-8 sm:p-10 flex flex-col items-center justify-between text-center hover-card">
            <div>
              <span className="text-secondary font-inter font-bold text-xs uppercase tracking-widest block mb-2">
                SOPORTE INSTANTÁNEO
              </span>
              <h3 className="font-manrope font-extrabold text-2xl sm:text-3xl text-primary mb-3">
                Acceso Digital
              </h3>
              <p className="font-inter text-sm text-on-surface-variant max-w-xs mx-auto mb-6">
                Escanee el código QR con la cámara de su teléfono para levantar su ticket al instante desde cualquier lugar.
              </p>
            </div>

            {/* Real QR Container */}
            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200/80 my-4 group hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/support-qr.png"
                alt="Código QR Levantamiento de Ticket Naika Group"
                className="w-52 h-52 sm:w-60 sm:h-60 object-contain rounded-lg"
              />
            </div>

            {/* Mobile Quote & Quick Icons */}
            <div className="space-y-4 max-w-xs pt-4">
              <p className="font-inter text-xs text-on-surface-variant italic">
                "Escanee el código QR para acceder directamente desde su dispositivo móvil a nuestra plataforma de asistencia remota."
              </p>
              
              <div className="flex items-center justify-center gap-6 text-primary pt-1">
                <span className="p-2 rounded-lg bg-white/80 border border-slate-200 shadow-xs" title="Escaneo QR">
                  <QrCode className="w-5 h-5 text-primary" />
                </span>
                <span className="p-2 rounded-lg bg-white/80 border border-slate-200 shadow-xs" title="Dispositivos Móviles">
                  <Smartphone className="w-5 h-5 text-secondary" />
                </span>
                <span className="p-2 rounded-lg bg-white/80 border border-slate-200 shadow-xs" title="Asistencia NOC">
                  <Headphones className="w-5 h-5 text-primary-container" />
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
