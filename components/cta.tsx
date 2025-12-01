"use client";

import { motion } from "framer-motion";
// SectionWrapper removed — using native section elements

export function Cta() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 rounded-xl sm:rounded-2xl overflow-hidden relative cta-background">
        <div aria-hidden className="absolute inset-0 cta-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-3xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Aumenta tus ventas campañas en Meta optimizadas para conversión
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/75 px-2">
            Campañas estratégicas, seguimiento de leads y un sistema propio para
            convertir inversión publicitaria en ventas medibles.
          </p>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4">
            {/* Empezar proyecto removed per request to simplify CTAs */}
            <a
              href="#work"
              className="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              Ver nuestro trabajo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
