"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

function DualttiLogo() {
  return (
    <span className="flex items-center gap-2 sm:gap-3">
      <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#240048] via-[#3c068a] to-[#5b18b2] shadow-[0_15px_30px_rgba(34,22,74,0.35)]" />
        <span className="relative h-[72%] w-[72%]">
          <span className="absolute left-0 top-0 h-6 w-2.5 sm:h-7 sm:w-2.5 md:h-8 md:w-3 rounded-full bg-[#FF8C73]" />
          <span className="absolute right-0 bottom-0 h-6 w-2.5 sm:h-7 sm:w-2.5 md:h-8 md:w-3 rounded-full bg-[#FFD0C2] origin-bottom-left transform rotate-[36deg]" />
        </span>
      </span>
      <span className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white">
        Dualtti
        <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-[#FF8C73] shadow-[0_5px_12px_rgba(0,0,0,0.25)]" />
      </span>
    </span>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Sobre nosotros", href: "#about" },
    { name: "Impacto", href: "#impact" },
    { name: "Servicios", href: "#services" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "relative max-w-6xl mx-auto flex items-center justify-between gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 py-3 sm:py-4 transition-all duration-300",
          "rounded-[24px] sm:rounded-[32px] border border-white/40 bg-white/25 backdrop-blur-3xl",
          "shadow-[0_25px_80px_rgba(15,15,15,0.18)]",
          isScrolled ? "scale-95" : "scale-100"
        )}
      >
        <span className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[24px] sm:rounded-[32px]">
          <span className="absolute -left-12 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-white/60 blur-[120px]" />
          <span className="absolute right-6 top-0 h-32 w-32 rounded-full bg-white/50 blur-[80px]" />
        </span>
        <Link href="/" className="relative z-10">
          <DualttiLogo />
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm xl:text-base font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden relative z-10 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-24 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:w-80 bg-gradient-to-b from-[#31006F] to-[#31006F]/95 backdrop-blur-3xl z-50 rounded-3xl border border-white/20 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "py-4 px-4 text-lg font-medium text-white hover:text-white/70 hover:bg-white/5 rounded-xl transition-all flex items-center justify-between",
                    idx !== navLinks.length - 1 && "border-b border-white/10"
                  )}
                >
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
}
