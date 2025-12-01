"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
// SectionWrapper removed — using native section wrapper instead

export function Impact() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#31006F]">
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

      <div className="container mx-auto px-6 w-9/12 md:w-8/12 lg:w-7/12 xl:w-7/12 relative z-10" >
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 justify-center ">
              <span className="text-xs font-medium text-teal-300 uppercase tracking-wider">Nuestro Proceso</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              De la idea a clientes: 3 pasos claros
            </h2>
            <p className="mt-4 text-white max-w-3xl mx-auto">
              Estrategia, ejecución y optimización. Diseñamos embudos y campañas para convertir tráfico en clientes.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Diagnóstico y Estrategia',
              desc:
                'Analizamos tu negocio, público objetivo y estructuramos una estrategia de adquisición en Meta Ads enfocada a conversión.',
            },
            {
              num: '02',
              title: 'Configuración & Lanzamiento',
              desc:
                'Creamos las campañas, segmentaciones y creativos; conectamos nuestro sistema de gestión para capturar y calificar leads.',
            },
            {
              num: '03',
              title: 'Optimización & Escala',
              desc:
                'Medimos, optimizamos y escalamos lo que convierte: ajustamos pujas, audiencias y creativos para maximizar ROAS.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
            >
              <GlassCard className="relative h-full p-8 overflow-hidden glass border border-white/6">
                <div className="absolute right-6 top-6 text-[6rem] font-bold text-pink-900 opacity-10 select-none">{item.num}</div>
                <div className="relative z-10">
                  <div className="mb-4 p-3 rounded-lg inline-flex items-center justify-center" style={{ background: 'rgba(255,134,114,0.06)' }}>
                    <div className="w-6 h-6 rounded-full" style={{ background: '#31006F' }} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
                {/* Removed CTA button as requested */}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
