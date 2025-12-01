"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden pt-20 rounded-b-4xl bg-white hero-background">
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

      {/* Gradient overlay that starts lower in the hero so the image shows above */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "80vh",
          bottom: 0,
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-6 sm:mb-8 px-2"
        >
          Aumenta tus ventas con
          <br />
          <span className="text-white">
            campañas de Meta Ads que convierten
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 mb-5 mx-auto max-w-3xl rounded-[24px] sm:rounded-[32px] border border-white/40 bg-white/25 p-5 sm:p-6 md:p-8 text-left shadow-[0_25px_70px_rgba(15,15,15,0.15)] backdrop-blur-3xl"
        >
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
            Somos Dualtti, un equipo paraguayo enfocado en impulsar negocios
            mediante estrategias digitales centradas en resultados. Nos
            involucramos en cada etapa del embudo, desde la investigación hasta
            la optimización, integrando datos, creatividad y automatizaciones
            propias para convertir inversión en crecimiento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center px-4"
        >
          <div className="relative flex w-auto max-w-3xl flex-col gap-4 rounded-[32px] sm:rounded-[40px] border border-white/40 bg-white/15 px-4 py-5 sm:px-6 sm:py-6 md:px-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-3xl lg:flex-row lg:items-center lg:gap-6">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center rounded-[24px] sm:rounded-[28px] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold tracking-tight text-white shadow-[0_15px_50px_rgba(132,94,247,0.45)] transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              <span className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border border-white/40" />
              <span className="absolute inset-0 rounded-[24px] sm:rounded-[28px] bg-gradient-to-r from-[#FF8672] to-[#31006F]" />
              <span className="relative z-10 flex items-center gap-2">
                Empezar proyecto
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </motion.div>
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
