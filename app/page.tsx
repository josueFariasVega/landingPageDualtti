"use client";

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Impact } from "@/components/impact";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Cta } from "@/components/cta";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
// SectionWrapper removed — native sections used instead

export default function Home() {
  return (
    <main className="min-h-screen  text-white overflow-x-hidden">
      <Navbar />

      <section className="bg-white">
        <Hero />
        <Impact />
        <Cta />
        <Services />
      </section>

      <Faq />

      {/* Contact Form Section */}
      <section
        id="contact"
        className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-white"
      >
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[25%] w-3 h-3 rounded-full bg-[#ff8672]/30 animate-float" />
          <div className="absolute top-[25%] right-[30%] w-2 h-2 rounded-full bg-white/20 animate-float animation-delay-1000" />
          <div className="absolute top-[45%] left-[15%] w-4 h-4 rounded-full bg-purple-400/20 animate-float animation-delay-2000" />
          <div className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-[#87e1d1]/30 animate-float animation-delay-3000" />
          <div className="absolute bottom-[20%] left-[35%] w-2 h-2 rounded-full bg-[#ff8672]/25 animate-float animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#31006F]">
                ¿Listo para hacer crecer tu negocio?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-900 max-w-2xl mx-auto px-4">
                Completa el formulario y descubre cómo podemos ayudarte a
                generar más clientes y ventas con Meta Ads.
              </p>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
