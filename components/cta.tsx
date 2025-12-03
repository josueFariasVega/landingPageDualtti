"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle, TrendingUp, Sparkles } from "lucide-react";
import { BrandPattern } from "@/components/ui/brand-pattern";

export function Cta() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#31006F] via-[#31006F] to-[#FF8672]/80 dark:from-[#1a003d] dark:via-[#31006F] dark:to-[#FF8672]/60 p-10 sm:p-14 md:p-20 border border-white/5"
        >
          {/* Animated blob background */}
          <BrandPattern
            color="#FF8672"
            opacity={0.15}
            scale={1.2}
            className="top-[-20%] right-[-20%]"
          />
          <BrandPattern
            color="#87E1D1"
            opacity={0.1}
            scale={1.2}
            className="bottom-[-20%] left-[-20%]"
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Badge con urgencia - Mejorado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#87E1D1]/20 to-[#FF8672]/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium shadow-lg">
                <Sparkles className="h-4 w-4 text-[#87E1D1]" />
                <span>Solo 3 cupos disponibles este mes</span>
              </div>
            </motion.div>

            {/* Headline - Mejorado */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 text-center font-syne"
            >
              ¿Listo para{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87E1D1] to-[#FF8672]">
                multiplicar
              </span>{" "}
              tus resultados?
            </motion.h2>

            {/* Subheadline - Mejorado */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-10 leading-relaxed text-center max-w-2xl mx-auto"
            >
              Agenda una{" "}
              <span className="font-semibold text-[#87E1D1]">
                auditoría gratuita de 30 minutos
              </span>{" "}
              y descubre exactamente cómo optimizar tus campañas actuales o crear una estrategia desde cero.
            </motion.p>

            {/* Beneficios en grid - Mejorado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-12 text-white"
            >
              <div className="group flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-3 rounded-full bg-[#87E1D1]/10 border border-[#87E1D1]/20">
                  <CheckCircle className="h-6 w-6 text-[#87E1D1]" />
                </div>
                <span className="text-sm sm:text-base font-medium leading-tight">
                  Auditoría gratuita de tus campañas
                </span>
              </div>
              <div className="group flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-3 rounded-full bg-[#FF8672]/10 border border-[#FF8672]/20">
                  <TrendingUp className="h-6 w-6 text-[#FF8672]" />
                </div>
                <span className="text-sm sm:text-base font-medium leading-tight">
                  Plan de acción personalizado
                </span>
              </div>
              <div className="group flex flex-col items-center text-center gap-3 p-5 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="p-3 rounded-full bg-[#87E1D1]/10 border border-[#87E1D1]/20">
                  <Clock className="h-6 w-6 text-[#87E1D1]" />
                </div>
                <span className="text-sm sm:text-base font-medium leading-tight">
                  Respuesta en 24 horas
                </span>
              </div>
            </motion.div>

            {/* CTA Button centrado - Mejorado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-6 rounded-full bg-white text-[#31006F] font-bold text-base sm:text-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_80px_rgba(135,225,209,0.3)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#87E1D1]/0 via-[#87E1D1]/10 to-[#87E1D1]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative">Agendar auditoría gratuita</span>
                <ArrowRight className="relative h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Pricing hint - Mejorado */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center text-sm text-white/70 max-w-xl mx-auto"
            >
              Sin contratos anuales • Cancela cuando quieras • Inversión transparente
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
