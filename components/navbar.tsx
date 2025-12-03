"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

import Image from "next/image";

function DualttiLogo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <span className="flex items-center gap-2 sm:gap-3">
      <div className="relative h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0">
        <Image
          src="/logo.png"
          alt="Dualtti Logo"
          fill
          className="object-contain rounded-full"
          sizes="(max-width: 768px) 40px, 44px"
        />
      </div>
      <span
        className={cn(
          "flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300",
          isScrolled ? "text-[#31006F] dark:text-white" : "text-white"
        )}
      >
        Dualtti
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
          "rounded-[24px] sm:rounded-[32px] border",
          "shadow-[0_25px_80px_rgba(15,15,15,0.18)]",
          isScrolled
            ? "scale-95 bg-white/90 dark:bg-[#343232]/90 border-white/60 dark:border-white/10 backdrop-blur-xl shadow-lg"
            : "scale-100 bg-white/10 dark:bg-black/20 border-white/20 dark:border-white/10 backdrop-blur-md"
        )}
      >
        {/* Decorative background elements - only visible when NOT scrolled for cleaner look on scroll */}
        {!isScrolled && (
          <span className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <span className="absolute -left-12 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-white/20 blur-[120px]" />
            <span className="absolute right-6 top-0 h-32 w-32 rounded-full bg-white/10 blur-[80px]" />
          </span>
        )}

        <Link href="/" className="relative z-10">
          <DualttiLogo isScrolled={isScrolled} />
        </Link>

        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm xl:text-base font-medium transition-colors flex items-center gap-1 whitespace-nowrap",
                isScrolled
                  ? "text-slate-600 hover:text-[#31006F] dark:text-slate-300 dark:hover:text-white"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <ModeToggle />
          <button
            className={cn(
              "relative z-10 transition-colors",
              isScrolled ? "text-[#31006F] dark:text-white" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
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
            className="fixed top-24 left-4 right-4 sm:left-6 sm:right-6 md:left-auto md:right-6 md:w-80 bg-white backdrop-blur-3xl z-50 rounded-3xl border border-white/20 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "py-4 px-4 text-lg font-medium text-slate-700 hover:text-[#31006F] hover:bg-slate-50 rounded-xl transition-all flex items-center justify-between",
                    idx !== navLinks.length - 1 && "border-b border-slate-100"
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
