"use client";

import { motion } from "framer-motion";
import { BrandPattern } from "@/components/ui/brand-pattern";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden">
      {/* Background Patterns - Subtle on white */}
      <div className="absolute inset-0 opacity-5">
        <BrandPattern
          color="#31006F"
          scale={2}
          className="top-[-20%] left-[-20%] animate-pulse"
        />
        <BrandPattern
          color="#FF8672"
          scale={2}
          className="bottom-[-20%] right-[-20%] animate-pulse"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative mb-8"
        >
          {/* Outer ring */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-[0_10px_40px_rgba(49,0,111,0.15)] border border-slate-100">
            {/* Logo Image */}
            <div className="w-full h-full rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF8672]/30 to-transparent animate-spin-slow" />
              <img
                src="/logo-round.png"
                alt="Dualtti Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <h2 className="text-xl font-bold text-[#31006F] tracking-tight font-syne">
            Dualtti
          </h2>
          <div className="flex gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-[#31006F]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 rounded-full bg-[#FF8672]"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 rounded-full bg-[#87E1D1]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
