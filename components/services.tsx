"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import { Code2, Palette, Rocket, Smartphone } from "lucide-react"
// SectionWrapper removed — using plain sections

const services = [
  {
    icon: <Palette className="w-8 h-8" style={{ color: "white" }} />,
    title: "Campañas en Meta (Facebook & Instagram)",
    description: "Diseño, segmentación y optimización de campañas enfocadas en generar leads y conversiones medibles.",
  },
  {
    icon: <Smartphone className="w-8 h-8" style={{ color: "white" }} />,
    title: "Gestión de Leads & CRM",
    description: "Integración con nuestro sistema propio para capturar, calificar y nutrir leads hasta convertirlos en clientes.",
  },
  {
    icon: <Code2 className="w-8 h-8" style={{ color: "white" }} />,
    title: "Reporting y Analytics",
    description: "Informes claros y métricas accionables para medir ROAS, CPA y optimizar la inversión publicitaria.",
  },
  {
    icon: <Rocket className="w-8 h-8" style={{ color: "white" }} />,
    title: "Escala & Growth",
    description: "Estrategias para aumentar presupuesto de campañas eficientes y escalar resultados sin perder rentabilidad.",
  },
]

export function Services() {
  return (
    <section className="py-32 overflow-hidden bg-[#31006F]">
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
        <div className="container mx-auto px-6 w-9/12 md:w-8/12 lg:w-7/12 xl:w-7/12">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Nuestra experiencia
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              className="h-1 rounded-full bg-gradient-to-r from-[#FF8672] to-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const isSalmon = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`relative overflow-hidden h-full flex flex-col justify-between group p-8 rounded-2xl transition-all ${isSalmon
                    ? 'bg-gradient-to-br from-[#FF8672] to-[#FF8672]/80 border border-[#FF8672]/20 hover:border-white/40'
                    : 'bg-gradient-to-br from-[#31006F] to-[#31006F]/80 border border-white/20 hover:border-white/40'
                    }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="mb-6 p-4 rounded-2xl w-fit bg-white/20 backdrop-blur-sm group-hover:shadow-lg transition-all">
                        <div className="w-8 h-8 text-white">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                      <p className="text-white/90 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </section>
  )
}
