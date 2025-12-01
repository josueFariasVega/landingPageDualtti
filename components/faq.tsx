"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
// SectionWrapper removed — using native section
import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿Cómo comienzan a trabajar con nuevos clientes?",
    a: "Realizamos un diagnóstico inicial sin costo, definimos objetivos y proponemos una estrategia de campañas y tracking adaptada a tu negocio.",
  },
  {
    q: "¿Qué resultados puedo esperar y en qué plazo?",
    a: "Dependiendo del sector y presupuesto, nuestros clientes suelen ver leads cualificados en las primeras 2-4 semanas y mejoras en CPA tras optimizaciones continuas.",
  },
  {
    q: "¿Cuál es el presupuesto mínimo recomendado para ver resultados?",
    a: "Recomendamos un presupuesto inicial que permita pruebas de audiencias y creativos; típicamente recomendamos comenzar desde USD 500 mensuales en inversión publicitaria.",
  },
  {
    q: "¿Cómo miden y reportan los resultados?",
    a: "Proporcionamos reportes claros con métricas clave (CPA, ROAS, CPL) y acceso a nuestro sistema de gestión para seguimiento en tiempo real.",
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs text-teal-300 uppercase tracking-widest mb-3 sm:mb-4 inline-block">
              Dualtti
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Preguntas frecuentes
            </h2>
            <p className="text-sm sm:text-base text-white mb-6 sm:mb-8 max-w-md">
              Resolvemos las dudas más comunes sobre nuestras campañas, procesos
              y resultados para que decidas con confianza.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              className="space-y-3 sm:space-y-4"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="rounded-xl sm:rounded-2xl p-4 sm:p-6 bg-white/5 border border-white/6 flex items-center justify-between gap-3 sm:gap-4 hover:shadow-lg transition-shadow">
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-medium text-white">
                        {f.q}
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-6">
                    <p className="text-xs sm:text-sm text-white">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
