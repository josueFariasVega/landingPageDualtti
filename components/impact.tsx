"use client";

import { motion } from "framer-motion";
import { Handshake, Target, LineChart, RefreshCw } from "lucide-react";
// SectionWrapper removed — using native section wrapper instead

export function Impact() {
  return (
    <section
      id="impact"
      className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas originales */}
        <div className="absolute top-[15%] left-[25%] w-3 h-3 rounded-full bg-[#ff8672]/30 animate-float" />
        <div className="absolute top-[25%] right-[30%] w-2 h-2 rounded-full bg-white/20 animate-float animation-delay-1000" />
        <div className="absolute top-[45%] left-[15%] w-4 h-4 rounded-full bg-purple-400/20 animate-float animation-delay-2000" />
        <div className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-[#87e1d1]/30 animate-float animation-delay-3000" />
        <div className="absolute bottom-[20%] left-[35%] w-2 h-2 rounded-full bg-[#ff8672]/25 animate-float animation-delay-4000" />
        <div className="absolute bottom-[35%] right-[40%] w-3 h-3 rounded-full bg-white/15 animate-float animation-delay-1500" />
        <div className="absolute top-[35%] left-[40%] w-2 h-2 rounded-full bg-purple-300/25 animate-float animation-delay-5000" />
        <div className="absolute top-[70%] right-[35%] w-3 h-3 rounded-full bg-[#ff8672]/20 animate-float animation-delay-6000" />
        <div className="absolute bottom-[50%] left-[10%] w-4 h-4 rounded-full bg-white/10 animate-float animation-delay-7000" />
        <div className="absolute top-[10%] right-[45%] w-2 h-2 rounded-full bg-[#87e1d1]/35 animate-float animation-delay-8000" />

        {/* Partículas adicionales */}
        <div className="absolute top-[8%] left-[12%] w-2 h-2 rounded-full bg-[#31006F]/25 animate-float animation-delay-1200" />
        <div className="absolute top-[18%] left-[55%] w-3 h-3 rounded-full bg-[#ff8672]/20 animate-float animation-delay-2500" />
        <div className="absolute top-[32%] right-[15%] w-2 h-2 rounded-full bg-[#87e1d1]/30 animate-float animation-delay-3500" />
        <div className="absolute top-[42%] left-[8%] w-3 h-3 rounded-full bg-purple-500/15 animate-float animation-delay-4500" />
        <div className="absolute top-[52%] right-[48%] w-2 h-2 rounded-full bg-white/25 animate-float animation-delay-5500" />
        <div className="absolute top-[65%] left-[28%] w-4 h-4 rounded-full bg-[#31006F]/20 animate-float animation-delay-6500" />
        <div className="absolute bottom-[15%] right-[25%] w-2 h-2 rounded-full bg-[#ff8672]/30 animate-float animation-delay-7500" />
        <div className="absolute bottom-[28%] left-[45%] w-3 h-3 rounded-full bg-[#87e1d1]/25 animate-float animation-delay-8500" />
        <div className="absolute bottom-[42%] right-[12%] w-2 h-2 rounded-full bg-purple-400/20 animate-float animation-delay-9000" />
        <div className="absolute bottom-[8%] left-[18%] w-3 h-3 rounded-full bg-white/20 animate-float animation-delay-9500" />
        <div className="absolute top-[28%] left-[62%] w-2 h-2 rounded-full bg-[#31006F]/30 animate-float animation-delay-10000" />
        <div className="absolute top-[55%] right-[55%] w-3 h-3 rounded-full bg-[#ff8672]/25 animate-float animation-delay-10500" />
        <div className="absolute bottom-[55%] left-[70%] w-2 h-2 rounded-full bg-[#87e1d1]/20 animate-float animation-delay-11000" />
        <div className="absolute top-[75%] left-[50%] w-4 h-4 rounded-full bg-purple-300/15 animate-float animation-delay-11500" />
        <div className="absolute bottom-[65%] right-[8%] w-2 h-2 rounded-full bg-white/30 animate-float animation-delay-12000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge superior */}
            <div className="inline-block mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#31006F] ">
                MÉTODO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#31006F]">
              Así incrementamos las ventas
              <br />
              de nuestros clientes
            </h2>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Estrategia, ejecución y optimización. Diseñamos embudos y campañas
              para convertir tráfico en clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              num: "01",
              title: "Sales Architecture",
              desc: "Estructuramos embudos comerciales end-to-end para que cada lead viva un recorrido claro hacia la conversión.",
              icon: Handshake,
            },
            {
              num: "02",
              title: "Performance Media",
              desc: "Diseñamos campañas Meta Ads que combinan creatividad, data y experimentación constante para maximizar ROAS.",
              icon: Target,
            },
            {
              num: "03",
              title: "Analytics & Learning",
              desc: "Medimos cada interacción con dashboards propios, identificando señales tempranas para escalar lo que funciona.",
              icon: LineChart,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
            >
              <div className="relative h-full rounded-[28px] border border-[#31006F]/20 bg-[#31006F]/85 p-8 sm:p-10 shadow-[0_20px_50px_rgba(49,0,111,0.4)] text-white overflow-hidden backdrop-blur-xl">
                {/* Número grande en la esquina superior derecha */}
                <div className="absolute right-6 top-6 text-[120px] sm:text-[140px] font-bold text-white/[0.03] select-none leading-none">
                  {item.num}
                </div>

                <div className="relative z-10">
                  {/* Icono */}
                  <div className="mb-6">
                    <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white/80 stroke-[1.5]" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight text-white">
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
