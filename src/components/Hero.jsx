import React, { useEffect, useRef } from 'react';
import { ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vertexShaderSource = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

    const fragmentShaderSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;
        
        float pulse = 0.5 + 0.5 * sin(u_time * 0.25);
        vec3 color1 = vec3(0.0, 0.157, 0.408); // Naika Dark Blue
        vec3 color2 = vec3(0.0, 0.07, 0.2);   // Darker Navy
        
        vec3 finalColor = mix(color1, color2, uv.y + pulse * 0.2);
        float glow = smoothstep(0.4, 0.0, length(p - vec2(sin(u_time * 0.1), cos(u_time * 0.15)) * 0.5));
        finalColor += glow * 0.05;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');

    let animationFrameId;
    function resize() {
      if (!canvas) return;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener('resize', resize);

    function render(time) {
      time *= 0.001;
      gl.uniform1f(timeLoc, time);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        animationFrameId = requestAnimationFrame(render);
      }
    }
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[750px] lg:min-h-[850px] flex items-center overflow-hidden py-16 lg:py-24">
      {/* Dynamic Shader Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-surface-subtle/80 to-white/95 z-0" />

      {/* Main Container */}
      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-inter text-sm font-semibold border border-secondary/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Soluciones Empresariales de Próxima Generación
          </div>

          {/* Headline */}
          <h1 className="font-manrope font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-primary leading-[1.15] tracking-tight">
            Potenciando tu Negocio con{' '}
            <span className="text-gradient">Tecnología Moderna</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-lg sm:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Naika Group ayuda a las organizaciones a modernizar sus sistemas TI, reducir costos y lograr resultados sostenibles a través de estrategias, implementación y soporte tecnológico comprobados.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-inter text-base font-semibold hover:bg-primary-container transition-all duration-300 flex items-center gap-2 group btn-shimmer shadow-lg hover:shadow-xl"
            >
              <span>Habla con un Experto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#solutions"
              className="border border-outline-variant bg-white text-primary px-8 py-4 rounded-lg font-inter text-base font-semibold hover:bg-surface-alt transition-all duration-300 shadow-sm hover:shadow"
            >
              Ver Soluciones
            </a>
          </div>

          {/* Trust points */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-on-surface-variant font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Soporte 24/7 Garantizado</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Ingenieros Certificados</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column Visual Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative lg:block"
        >
          {/* Subtle glow circle */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

          {/* Main Showcase Image Card */}
          <div className="relative z-10 glass-card p-3 sm:p-4 rounded-2xl shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              className="rounded-xl w-full h-[380px] sm:h-[460px] lg:h-[480px] object-cover"
              alt="Instalaciones tecnológicas Naika Group"
              src="/assets/hero-office.jpg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa_Eq05VTw9hkd4yY2xUWvRkcrlqGAsw49NA_mjT_lwFUpyczvnYpNQChE_wx3yBiocBiWxo9aigxOk4VxUIUkUgs81WKceaXBI31SU-hIWfVQgybwVyz_Mpr2cH1JNYf4SMsYEfvQ7O7-qQQicn6cit69xPupB34_v8rVDEhEKi3xMVEp27ZPbUPpRf6rKiJWveF6l4HOCX25SAHrIRCjaduabFDGQWtxIHAbq3JrWbsa2TVQETWMlk00_fi6EkUR5NGB-wC3-WiT2g';
              }}
            />

            {/* Floating CSAT Badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-card p-4 sm:p-5 rounded-xl shadow-xl animate-float border border-white/80">
              <div className="flex items-center gap-3.5">
                <div className="bg-secondary p-3 rounded-lg text-white shadow-md">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-manrope font-bold text-primary text-lg sm:text-xl">87% Puntuación CSAT</p>
                  <p className="text-xs text-on-surface-variant font-medium">Excelencia Global en Servicio</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
