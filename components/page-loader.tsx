"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Temporizador máximo de 2.5 segundos para garantizar que el loading no exceda 3 segundos
    const maxLoadTime = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 200);
    }, 2500);

    // Esperar al DOM interactivo (más rápido que 'load' completo)
    const handleLoad = () => {
      clearTimeout(maxLoadTime);
      // Delay mínimo solo para asegurar renderizado suave
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowContent(true);
        }, 200);
      }, 400);
    };

    // Si el DOM ya está listo
    if (document.readyState === "complete" || document.readyState === "interactive") {
      handleLoad();
    } else {
      // Esperar a DOMContentLoaded (más rápido que 'load')
      document.addEventListener("DOMContentLoaded", handleLoad);
      return () => {
        document.removeEventListener("DOMContentLoaded", handleLoad);
        clearTimeout(maxLoadTime);
      };
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </>
  );
}
