"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandPattern } from "@/components/ui/brand-pattern";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[80vh] md:h-[85vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16 rounded-b-[24px] sm:rounded-b-[40px] md:rounded-b-[48px] bg-white dark:bg-[#343232]">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/FONDO1.jpg"
          alt="Dualtti Hero Background"
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <BrandPattern
          color="#31006F"
          opacity={0.05}
          scale={1.5}
          className="top-[-20%] left-[-10%]"
        />
        <BrandPattern
          color="#FF8672"
          opacity={0.08}
          scale={1.2}
          className="top-[20%] right-[-10%]"
        />
        <BrandPattern
          color="#87E1D1"
          opacity={0.06}
          scale={1.3}
          className="bottom-[-10%] left-[20%]"
        />
      </div>

      {/* Overlay oscuro para contraste de texto - Adjusted for clearer image in light mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#31006F]/50 via-[#31006F]/30 to-[#31006F]/10 dark:from-[#31006F]/80 dark:via-[#31006F]/60 dark:to-[#31006F]/40 z-[1]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] mt-12 sm:mt-16 mb-5 sm:mb-6 md:mb-8 px-2 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
        >
          Campañas de Meta Ads que
          <br className="hidden sm:block" />
          <span className="sm:inline"> </span>
          <span className="bg-gradient-to-r from-[#FF8672] via-[#FF9C89] to-[#87E1D1] bg-clip-text text-transparent">
            convierten inversión en clientes reales
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 mx-auto max-w-3xl rounded-[20px] sm:rounded-[28px] md:rounded-[32px] border border-white/30 bg-white/20 p-5 sm:p-6 md:p-8 lg:p-9 text-left shadow-[0_25px_70px_rgba(15,15,15,0.25)] backdrop-blur-3xl"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
            <strong className="font-semibold">
              Para empresas paraguayas que quieren dejar de gastar en ads que no
              venden.
            </strong>{" "}
            Diseñamos campañas de Meta Ads con seguimiento completo, desde el
            primer clic hasta la venta cerrada. Sistema propio de gestión de
            leads + reportes claros = inversión que se convierte en clientes
            reales.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center px-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center rounded-[24px] sm:rounded-[28px] md:rounded-[32px] px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-bold tracking-tight text-white shadow-[0_20px_60px_rgba(255,134,114,0.5)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(255,134,114,0.65)] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
          >
            <span className="absolute inset-0 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] border-2 border-white/40" />
            <span className="absolute inset-0 rounded-[24px] sm:rounded-[28px] md:rounded-[32px] bg-gradient-to-r from-[#FF8672] to-[#31006F]" />
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              Solicitar Auditoría 
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        {/* Urgency Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 sm:mt-6 text-xs sm:text-sm md:text-base text-white/90 text-center px-4 leading-relaxed font-medium"
        >
         
        </motion.p>
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
  );
}
