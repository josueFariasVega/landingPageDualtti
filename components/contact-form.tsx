"use client";

import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto text-slate-900"
    >
      {/* GoHighLevel Form Embed Placeholder */}
      <div
        id="ghl-form-container"
        className="w-full min-h-[500px] rounded-2xl bg-[#31006F] border border-slate-200 shadow-[0_25px_60px_rgba(15,15,30,0.08)] backdrop-blur-sm p-8 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <p className="text-lg font-semibold mb-2 text-white">
            GoHighLevel Form Placeholder
          </p>
          <p className="text-sm">Paste your GHL embed code here</p>
        </div>
      </div>

      {/*
        INSTRUCCIONES:
        1. Ve a tu cuenta de GoHighLevel
        2. Crea o selecciona el formulario que quieres usar
        3. Obtén el código de embed (iframe o script)
        4. Reemplaza el div #ghl-form-container con tu código de embed

        Ejemplo de código embed de GHL:
        <iframe src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
                style="width:100%;height:100%;border:none;"
                id="inline-YOUR_FORM_ID">
        </iframe>
      */}
    </motion.div>
  );
}
