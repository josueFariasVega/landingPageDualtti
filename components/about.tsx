"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BrandPattern } from "@/components/ui/brand-pattern";
import { CheckCircle2, Users } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 relative bg-white dark:bg-[#343232] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <BrandPattern
          color="#31006F"
          opacity={0.03}
          scale={1.5}
          className="top-0 right-[-10%]"
        />
        <BrandPattern
          color="#FF8672"
          opacity={0.04}
          scale={1.2}
          className="bottom-0 left-[-10%]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#31006F]/5 dark:bg-white/5 border border-[#31006F]/10 dark:border-white/10">
                <Users className="h-4 w-4 text-[#FF8672]" />
                <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#31006F] dark:text-white">
                  SOBRE NOSOTROS
                </span>
              </div>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#31006F] dark:text-white leading-tight"
            >
              Más que una agencia,
              <br />
              <span className="text-[#FF8672]">tu socio de crecimiento.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Somos <strong className="text-[#31006F] dark:text-[#87E1D1]">Dualtti</strong>, una agencia paraguaya especializada en adquisición de clientes. No nos enfocamos en "likes" o métricas vanidosas; utilizamos campañas estratégicas de <strong className="text-[#31006F] dark:text-[#87E1D1]">Meta Ads</strong> y un sistema propio de gestión para generar ventas directas y medibles.
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Nuestro objetivo es simple: convertir tus visitas en contactos cualificados y tus contactos en clientes reales, brindándote claridad total sobre el retorno de tu inversión.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 space-y-4">
              {[
                "Estrategias enfocadas en ROI",
                "Sistema propio de gestión de leads",
                "Reportes claros y transparentes",
                "Equipo especializado en Meta Ads"
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#87E1D1]/10 flex items-center justify-center group-hover:bg-[#87E1D1]/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#87E1D1]" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-200 font-medium group-hover:text-[#31006F] dark:group-hover:text-white transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:pl-10"
          >
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[32px] overflow-hidden shadow-2xl bg-[#31006F] group">
              <Image
                src="/about-image.png"
                alt="Dualtti Brand"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#31006F]/40 to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FF8672]/10 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#87E1D1]/10 rounded-full blur-2xl -z-10" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white dark:bg-[#2a2a3e] p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-white/10 max-w-[220px] backdrop-blur-sm"
            >
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-[#FF8672] font-syne">100%</span>
                  <span className="text-sm font-bold text-[#31006F] dark:text-white">ROI</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-tight">
                  Enfoque total en resultados medibles y escalables
                </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
