"use client";

import React from "react";
import { CheckCircle, Clock, Shield } from "lucide-react";

const ContactSection = () => {
  const embedCode = `
<iframe
    src="https://api.leadconnectorhq.com/widget/form/W3CQmHfFyWM1QWyWlaF9"
    style="width:100%;height:100%;border:none;border-radius:1px"
    id="inline-W3CQmHfFyWM1QWyWlaF9" 
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-trigger-value=""
    data-activation-type="alwaysActivated"
    data-activation-value=""
    data-deactivation-type="neverDeactivate"
    data-deactivation-value=""
    data-form-name="Contacto-Web"
    data-height="601"
    data-layout-iframe-id="inline-W3CQmHfFyWM1QWyWlaF9"
    data-form-id="W3CQmHfFyWM1QWyWlaF9"
    title="Contacto-Web"
        >
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
  `;

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white dark:from-[#343232] dark:to-[#343232]">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-[#31006F]/5 dark:bg-white/5 border border-[#31006F]/10 dark:border-white/10 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#31006F] dark:text-white mb-4">
            Contáctanos
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#31006F] dark:text-white mb-4">
            ¿Listo para hacer crecer tu negocio?
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Completa el formulario y un especialista de nuestro equipo te contactará
            para diseñar una estrategia personalizada de Meta Ads.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#87E1D1]" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#87E1D1]" />
              <span>Reserva tu auditoría</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#87E1D1]" />
              <span>Sin compromiso</span>
            </div>
          </div>
        </div>

        {/* Form Card - Sin padding para que coincida con bordes del form */}
        <div className="bg-[#31006F] dark:bg-[#31006F] rounded-2xl shadow-lg dark:shadow-2xl border border-slate-100 dark:border-white/10 overflow-hidden">
          {/* Form embed container - sin padding adicional */}
          <div 
            className="min-h-[610px]"
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
        </div>

        {/* Footer note */}
        <p className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-6">
          Tus datos están protegidos. No compartimos tu información con terceros.
        </p>
      </div>
    </section>
  );
};

export { ContactSection };

