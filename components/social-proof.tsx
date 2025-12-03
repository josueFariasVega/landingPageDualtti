"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  { name: "Yuko", logo: "/clients/yuko.png" },
  { name: "Ikki Roller Shop", logo: "/clients/ikki.png" },
  { name: "Colochap", logo: "/clients/colochap.png" },
  { name: "Señor Taller", logo: "/clients/senor-taller.png" },
  { name: "Ascen Work Py", logo: "/clients/ascen-work.png" },
  { name: "Esencial Muebles", logo: "/clients/esencial-muebles.png" },
];

export function SocialProof() {
  return (
    <section className="py-10 border-b border-slate-100 bg-white dark:bg-[#343232] dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest font-syne"
        >
          Empresas que confían en nosotros
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative w-32 h-16 sm:w-40 sm:h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
