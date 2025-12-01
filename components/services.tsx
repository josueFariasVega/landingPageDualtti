"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Smartphone } from "lucide-react";
// SectionWrapper removed — using plain sections

const services = [
  {
    num: "01",
    icon: Palette,
    title: "Campañas en Meta (Facebook & Instagram)",
    description:
      "Diseño, segmentación y optimización de campañas enfocadas en generar leads y conversiones medibles.",
  },
  {
    num: "02",
    icon: Smartphone,
    title: "Gestión de Leads & CRM",
    description:
      "Integración con nuestro sistema propio para capturar, calificar y nutrir leads hasta convertirlos en clientes.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Reporting y Analytics",
    description:
      "Informes claros y métricas accionables para medir ROAS, CPA y optimizar la inversión publicitaria.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Escala & Growth",
    description:
      "Estrategias para aumentar presupuesto de campañas eficientes y escalar resultados sin perder rentabilidad.",
  },
];

export function Services() {
  return (
    <section className="py-32 overflow-hidden  rounded-t-4xl relative">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </div>

      <section id="services" className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
          <div className="mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#31006F]"
            >
              Nuestra experiencia
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              className="h-1 rounded-full bg-gradient-to-r from-[#FF8672] to-white mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="relative h-full rounded-[28px] border border-[#31006F]/20 bg-[#31006F]/85 p-8 sm:p-10 shadow-[0_20px_50px_rgba(49,0,111,0.4)] text-white overflow-hidden backdrop-blur-xl">
                  {/* Número grande en la esquina superior derecha */}
                  <div className="absolute right-6 top-6 text-[120px] sm:text-[140px] font-bold text-white/[0.03] select-none leading-none">
                    {service.num}
                  </div>

                  <div className="relative z-10">
                    {/* Icono */}
                    <div className="mb-6">
                      <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white/80 stroke-[1.5]" />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4 tracking-tight text-white">
                      {service.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
