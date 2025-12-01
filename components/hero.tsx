"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: "url('/FONDO1.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center right',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] animate-blob mix-blend-multiply"
          style={{ background: "radial-gradient(circle, rgba(49, 0, 111, 0.15), transparent)" }}
        />
        <div
          className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"
          style={{ background: "radial-gradient(circle, rgba(255, 134, 114, 0.12), transparent)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"
          style={{ background: "radial-gradient(circle, rgba(135, 225, 209, 0.12), transparent)" }}
        />
      </div>

      {/* Gradient overlay that starts lower in the hero so the image shows above */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: '80vh',
          bottom: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(4,4,6,0.75) 100%)',
        }}
      />

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-300"></span>
            </span>
            <span className="text-xs font-medium text-teal-200 uppercase tracking-wider">
              Dualtti • Adquisición de Clientes
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
        >
          Aumenta tus ventas con
          <br />
          <span className="text-white">campañas de Meta Ads que convierten</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Agencia paraguaya especializada en generar clientes y ventas medibles mediante campañas en Meta Ads
          y un sistema propio de gestión. Convertimos visitas en contactos cualificados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
            <a href="#contact" className="btn-primary inline-flex items-center justify-center group">
              <span className="relative z-10 flex items-center gap-2">
                Empezar proyecto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
        </motion.div>
        
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500 inline-block" />
            <span>50+ Projecten</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500 inline-block" />
            <span>45+ Tevreden Klanten</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-500 inline-block" />
            <span>3+ Jaar Ervaring</span>
          </div>
        </div>
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
  )
}
