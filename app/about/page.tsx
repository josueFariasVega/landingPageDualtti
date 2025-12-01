"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Rocket, Trophy, Users, Code2, Lightbulb, Shield, Zap } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen selection:bg-purple-200/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#31006F]" />

        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#ff8672]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="container mx-auto px-6 relative z-10 text-center text-white py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-6 py-2 rounded-full glass border-white/40"
            >
              <span className="text- font-semibold">Conocenos aun mas</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Más que marketing, somos tu socio de crecimiento
            </h1>

            <p className="text-xl md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Somos especialistas en campañas digitales y sistemas de seguimiento que convierten inversión en resultados medibles.
            </p>


          </motion.div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#31006F]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our History</h2>
              <div className="space-y-6 text-white/90 leading-relaxed text-lg">
                <p>
                  From humble beginnings to becoming a leader in digital growth, our journey has been marked by innovation,
                  dedication, and an unwavering commitment to our clients' success. We started with a simple vision: to create
                  digital experiences that not only look exceptional but deliver tangible results.
                </p>
                <p>
                  Over the years, we've grown into a diverse team of strategists, designers, and developers who are passionate
                  about pushing boundaries and achieving excellence. Our history is written with the success of our partners and
                  the impactful projects we've launched together.
                </p>
                <p>
                  Every challenge we've faced has made us stronger, and every project has taught us something new. Today, we
                  stand as a testament to what's possible when creativity meets strategy, and when passion drives innovation.
                </p>
              </div>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] lg:h-[700px]"
            >
              {/* Image Grid Layout */}
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Large image - bottom left */}
                <div className="row-span-2 relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 about-image-1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Top right - team collaboration */}
                <div className="relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 about-image-2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Bottom right - team celebration */}
                <div className="relative rounded-lg overflow-hidden">
                  <div className="absolute inset-0 about-image-3" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Nuestra Trayectoria */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#31006F]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Nuestra Trayectoria</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent mx-auto" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line - Vertical central */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#ff6b35]/30 to-transparent" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 - 2018 Fundación */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                {/* Left side - Empty on mobile, content on desktop */}
                <div className="hidden md:block" />

                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-lg shadow-[#ff6b35]/50 z-10">
                  <Rocket className="w-8 h-8 text-white" />
                </div>

                {/* Content Card */}
                <div className="ml-24 md:ml-0">
                  <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl">
                    <h3 className="text-xl md:text-2xl font-bold text-[#ff6b35] mb-2">2018 - Fundación</h3>
                    <p className="text-white/80 leading-relaxed">
                      Mavion Project nace con la misión de simplificar procesos complejos a través de la tecnología.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Item 2 - 2020 Primer Gran Proyecto */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                {/* Content Card - Left on desktop */}
                <div className="ml-24 md:ml-0 md:col-start-1">
                  <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl md:text-right">
                    <h3 className="text-xl md:text-2xl font-bold text-[#ff6b35] mb-2">2020 - Primer Gran Proyecto</h3>
                    <p className="text-white/80 leading-relaxed">
                      Lanzamos nuestra primera solución de automatización a gran escala para un cliente internacional.
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-lg shadow-[#ff6b35]/50 z-10">
                  <Trophy className="w-8 h-8 text-white" />
                </div>

                {/* Right side - Empty on desktop */}
                <div className="hidden md:block" />
              </motion.div>

              {/* Item 3 - 2022 Crecimiento del Equipo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                {/* Left side - Empty on mobile, content on desktop */}
                <div className="hidden md:block" />

                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-lg shadow-[#ff6b35]/50 z-10">
                  <Users className="w-8 h-8 text-white" />
                </div>

                {/* Content Card */}
                <div className="ml-24 md:ml-0">
                  <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl">
                    <h3 className="text-xl md:text-2xl font-bold text-[#ff6b35] mb-2">2022 - Crecimiento del Equipo</h3>
                    <p className="text-white/80 leading-relaxed">
                      Expandimos nuestro equipo a más de 20 expertos en automatización y diseño web.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Item 4 - Hoy Mirando al Futuro */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                {/* Content Card - Left on desktop */}
                <div className="ml-24 md:ml-0 md:col-start-1">
                  <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl md:text-right">
                    <h3 className="text-xl md:text-2xl font-bold text-[#ff6b35] mb-2">Hoy - Mirando al Futuro</h3>
                    <p className="text-white/80 leading-relaxed">
                      Continuamos innovando, desarrollando nuevas soluciones para los desafíos del mañana.
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-lg shadow-[#ff6b35]/50 z-10">
                  <Code2 className="w-8 h-8 text-white" />
                </div>

                {/* Right side - Empty on desktop */}
                <div className="hidden md:block" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#31006F]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Nuestros Valores</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-8 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/60 transition-all duration-300 shadow-xl hover:shadow-[#ff6b35]/20 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovación</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Impulsamos el cambio con ideas audaces y soluciones creativas que transforman el futuro digital.
                </p>
              </div>
            </motion.div>

            {/* Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-8 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/60 transition-all duration-300 shadow-xl hover:shadow-[#ff6b35]/20 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excelencia</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Nos comprometemos con la calidad superior en cada proyecto, superando expectativas constantemente.
                </p>
              </div>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-8 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/60 transition-all duration-300 shadow-xl hover:shadow-[#ff6b35]/20 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Colaboración</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Construimos puentes entre ideas y equipos, fomentando un entorno de trabajo sinérgico y productivo.
                </p>
              </div>
            </motion.div>

            {/* Integrity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-8 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/60 transition-all duration-300 shadow-xl hover:shadow-[#ff6b35]/20 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff6b35]/20 to-[#ff6b35]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#ff6b35]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Integridad</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  Actuamos con honestidad y transparencia, construyendo confianza duradera con nuestros clientes y equipo.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

