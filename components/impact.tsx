"use client";

import { motion } from "framer-motion";
import { Handshake, Target, LineChart } from "lucide-react";
import { BrandPattern } from "@/components/ui/brand-pattern";

export function Impact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="impact"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BrandPattern
          color="#31006F"
          opacity={0.03}
          scale={1.8}
          className="top-0 left-[-20%]"
        />
        <BrandPattern
          color="#FF8672"
          opacity={0.04}
          scale={1.5}
          className="bottom-0 right-[-10%]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 relative z-10">
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge superior con animación */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#31006F]/5 dark:bg-white/5 border border-[#31006F]/10 dark:border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#31006F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#31006F]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#31006F] dark:text-white">
                NUESTRO MÉTODO
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#31006F] dark:text-white mb-5">
              Así incrementamos las ventas
              <br />
              de nuestros clientes
            </h2>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto px-4 leading-relaxed">
              Estrategia, ejecución y optimización. Diseñamos embudos y campañas
              para convertir tráfico en clientes.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              num: "01",
              title: "Sales Architecture",
              desc: "Estructuramos embudos comerciales end-to-end para que cada lead viva un recorrido claro hacia la conversión.",
              icon: Handshake,
              color: "#FF8672",
            },
            {
              num: "02",
              title: "Performance Media",
              desc: "Diseñamos campañas Meta Ads que combinan creatividad, data y experimentación constante para maximizar ROAS.",
              icon: Target,
              color: "#87E1D1",
            },
            {
              num: "03",
              title: "Analytics & Learning",
              desc: "Medimos cada interacción con dashboards propios, identificando señales tempranas para escalar lo que funciona.",
              icon: LineChart,
              color: "#FF8672",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-[32px] border border-[#31006F]/20 dark:border-white/10 bg-[#31006F]/85 dark:bg-[#31006F]/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(49,0,111,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white overflow-hidden backdrop-blur-xl transition-all duration-500 hover:shadow-[0_25px_60px_rgba(49,0,111,0.5)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:-translate-y-2 hover:border-[#87E1D1]/30">
                {/* Número grande en la esquina con efecto parallax */}
                <div className="absolute right-6 top-6 text-[120px] sm:text-[140px] font-bold text-white/[0.03] select-none leading-none transition-all duration-700 group-hover:scale-110 group-hover:text-white/[0.05]">
                  {item.num}
                </div>

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />

                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-[32px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${item.color} 0%, transparent 100%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icono con animación */}
                  <motion.div
                    className="mb-6 inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon
                      className="h-7 w-7 sm:h-8 sm:w-8 stroke-[1.5]"
                      style={{ color: item.color }}
                    />
                  </motion.div>

                  {/* Título */}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight text-white group-hover:text-[#87E1D1] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
