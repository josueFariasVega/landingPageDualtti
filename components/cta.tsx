"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle, TrendingUp } from "lucide-react";

export function Cta() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#31006F] via-[#31006F] to-[#FF8672]/80 p-10 sm:p-14 md:p-20"
        >
          {/* Animated blob background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8672]/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#87E1D1]/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Badge con urgencia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6"
            >
              <Clock className="h-4 w-4" />
              <span className="font-medium">Solo 3 cupos disponibles este mes</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center">
              ¿Listo para dejar de desperdiciar presupuesto en ads?
            </h2>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              Agenda una <span className="font-semibold text-[#87E1D1]">auditoría gratuita de 30 minutos</span> y descubre exactamente cómo podemos optimizar tus campañas actuales o crear una estrategia desde cero.
            </p>

            {/* Beneficios en grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-white/90">
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <CheckCircle className="h-6 w-6 text-[#87E1D1]" />
                <span className="text-sm sm:text-base font-medium">Auditoría gratuita<br/>de tus campañas</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <TrendingUp className="h-6 w-6 text-[#87E1D1]" />
                <span className="text-sm sm:text-base font-medium">Plan de acción<br/>personalizado</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Clock className="h-6 w-6 text-[#87E1D1]" />
                <span className="text-sm sm:text-base font-medium">Respuesta<br/>en 24 horas</span>
              </div>
            </div>

            {/* CTA Button centrado */}
            <div className="flex justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-white text-[#31006F] font-bold text-lg shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Agendar auditoría gratuita
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Pricing hint */}
            <p className="mt-6 text-center text-sm text-white/60">
              Fee mensual + porcentaje de inversión publicitaria · Sin contratos anuales · Cancela cuando quieras
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
