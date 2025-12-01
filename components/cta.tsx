"use client"

import { motion } from "framer-motion"
// SectionWrapper removed — using native section elements

export function Cta() {
  return (
    <section className="py-20">
      <div
        className="container mx-auto px-6 rounded-2xl overflow-hidden relative"
        style={{
          backgroundImage: "url('/cta-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/callToAction1.png')",
            //'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), rgba(255,255,255,0) 35%), linear-gradient(180deg, rgba(3,3,5,0.55), rgba(3,3,5,0.7))',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto py-20 px-6"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-white/6 border border-white/8 text-sm text-pink-300 font-medium">
            Dualtti • Agencia de Adquisición
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Aumenta tus ventas con campañas en Meta optimizadas para conversión
          </h2>

          <p className="mt-4 text-lg md:text-xl text-white/75">
            Campañas estratégicas, seguimiento de leads y un sistema propio para convertir inversión publicitaria
            en ventas medibles.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Empezar proyecto removed per request to simplify CTAs */}
            <a href="#work" className="btn-primary ">
              Ver nuestro trabajo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
