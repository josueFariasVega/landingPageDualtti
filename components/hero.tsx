"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[80vh] md:h-[85vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 rounded-b-[24px] sm:rounded-b-[40px] md:rounded-b-[48px] bg-white hero-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-blob mix-blend-multiply"
          style={{
            background:
              "radial-gradient(circle, rgba(49, 0, 111, 0.15), transparent)",
          }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 134, 114, 0.12), transparent)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"
          style={{
            background:
              "radial-gradient(circle, rgba(135, 225, 209, 0.12), transparent)",
          }}
        />
      </div>

      {/* Overlay oscuro para contraste de texto - CRITICAL FIX */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#31006F]/75 via-[#31006F]/55 to-[#31006F]/35 z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] mt-5 mb-5 sm:mb-6 md:mb-8 px-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
        >
          Campañas de Meta Ads que
          <br className="hidden sm:block" />
          <span className="sm:inline"> </span>
          <span className="bg-gradient-to-r from-[#FF8672] via-[#FF9C89] to-[#87E1D1] bg-clip-text text-transparent">
            convierten inversión en clientes reales
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 mx-auto max-w-3xl rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-white/30 bg-white/20 p-5 sm:p-6 md:p-8 lg:p-9 text-left shadow-[0_25px_70px_rgba(15,15,15,0.25)] backdrop-blur-3xl"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
            <strong className="font-semibold">
              Para empresas paraguayas que quieren dejar de gastar en ads que no
              venden.
            </strong>{" "}
            Diseñamos campañas de Meta Ads con seguimiento completo, desde el
            primer clic hasta la venta cerrada. Sistema propio de gestión de
            leads + reportes claros = inversión que se convierte en clientes
            reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center px-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-[24px] sm:rounded-[28px] md:rounded-[32px] px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-bold tracking-tight text-white shadow-[0_20px_60px_rgba(255,134,114,0.5)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(255,134,114,0.65)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            <span className="absolute inset-0 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border-2 border-white/40" />
            <span className="absolute inset-0 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-gradient-to-r from-[#FF8672] to-[#31006F]" />
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Quiero más clientes
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Trust badge debajo del CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-white/80 text-center px-4 leading-relaxed"
        >
          <span className="inline-block">✓ Sin compromiso</span>
          <span className="hidden sm:inline"> · </span>
          <span className="sm:hidden">
            <br />
          </span>
          <span className="inline-block">✓ Respuesta en 24h</span>
          <span className="hidden sm:inline"> · </span>
          <span className="sm:hidden">
            <br />
          </span>
          <span className="inline-block">✓ Consultoría inicial gratis</span>
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      {/*<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-foreground/40 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/0 via-foreground/30 to-foreground/0" />
      </motion.div>*/}
    </section>
  );
}
