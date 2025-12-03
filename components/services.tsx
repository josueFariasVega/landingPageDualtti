"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";
import { BrandPattern } from "@/components/ui/brand-pattern";

const services = [
  {
    num: "01",
    icon: Palette,
    title: "Campañas en Meta (Facebook & Instagram)",
    description:
      "Diseño, segmentación y optimización de campañas enfocadas en generar leads y conversiones medibles.",
    color: "#FF8672",
  },
  {
    num: "02",
    icon: Smartphone,
    title: "Gestión de Leads & CRM",
    description:
      "Integración con nuestro sistema propio para capturar, calificar y nutrir leads hasta convertirlos en clientes.",
    color: "#87E1D1",
  },
  {
    num: "03",
    icon: Code2,
    title: "Reporting y Analytics",
    description:
      "Informes claros y métricas accionables para medir ROAS, CPA y optimizar la inversión publicitaria.",
    color: "#FF8672",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Escala & Growth",
    description:
      "Estrategias para aumentar presupuesto de campañas eficientes y escalar resultados sin perder rentabilidad.",
    color: "#87E1D1",
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden relative">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BrandPattern
          color="#87E1D1"
          opacity={0.05}
          scale={1.6}
          className="top-[10%] left-[-15%]"
        />
        <BrandPattern
          color="#31006F"
          opacity={0.04}
          scale={1.4}
          className="bottom-[10%] right-[-15%]"
        />
      </div>

      <section id="services" className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
          <div className="mb-16 sm:mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#31006F]/5 dark:bg-white/5 border border-[#31006F]/10 dark:border-white/10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="h-4 w-4 text-[#31006F]" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#31006F] dark:text-white">
                  NUESTROS SERVICIOS
                </span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-[#31006F] dark:text-white">
                Experiencia que
                <br />
                impulsa tu negocio
              </h2>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4 leading-relaxed">
                Soluciones completas para maximizar tu inversión publicitaria
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 w-24 rounded-full bg-gradient-to-r from-[#FF8672] via-[#87E1D1] to-[#31006F] mx-auto mt-6"
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative h-full rounded-[32px] border border-[#31006F]/20 dark:border-white/10 bg-[#31006F]/85 dark:bg-[#31006F]/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(49,0,111,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white overflow-hidden backdrop-blur-xl transition-all duration-500 hover:shadow-[0_25px_60px_rgba(49,0,111,0.5)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] hover:-translate-y-2 hover:border-[#87E1D1]/30">
                  {/* Número grande en la esquina con efecto parallax */}
                  <div className="absolute right-6 top-6 text-[120px] sm:text-[140px] font-bold text-white/[0.03] select-none leading-none transition-all duration-700 group-hover:scale-110 group-hover:text-white/[0.05]">
                    {service.num}
                  </div>

                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />

                  {/* Accent line */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-[32px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, ${service.color} 0%, transparent 100%)`,
                    }}
                  />

                  {/* Corner decoration */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-[60px]"
                    style={{
                      background: `radial-gradient(circle at top right, ${service.color} 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icono con animación */}
                    <motion.div
                      className="mb-6 inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon
                        className="h-7 w-7 sm:h-8 sm:w-8 stroke-[1.5]"
                        style={{ color: service.color }}
                      />
                    </motion.div>

                    {/* Título */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight text-white group-hover:text-[#87E1D1] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <div className="h-px w-8 bg-gradient-to-r from-[#87E1D1] to-transparent" />
                      <span className="text-xs font-medium text-[#87E1D1] uppercase tracking-wider">
                        Ver más
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
