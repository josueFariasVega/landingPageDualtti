import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#343232]">
      <Navbar />

      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#31006F] dark:text-white">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p className="lead">
              En Dualtti, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, usamos y protegemos tu información.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">1. Información que recopilamos</h3>
            <p>
              Recopilamos información que nos proporcionas directamente cuando te contactas con nosotros, solicitas nuestros servicios o interactúas con nuestro sitio web. Esto puede incluir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y apellido</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa</li>
              <li>Información sobre tu negocio y necesidades de marketing</li>
            </ul>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">2. Cómo usamos tu información</h3>
            <p>
              Utilizamos la información recopilada para los siguientes propósitos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios de marketing digital</li>
              <li>Comunicarnos contigo sobre consultas, propuestas y actualizaciones de servicio</li>
              <li>Personalizar tu experiencia y optimizar las estrategias de marketing</li>
              <li>Enviar información relevante sobre nuestros servicios (si has dado tu consentimiento)</li>
              <li>Cumplir con obligaciones legales y contractuales</li>
            </ul>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">3. Compartir información con terceros</h3>
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing sin tu consentimiento explícito. Podemos compartir información con:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveedores de servicios que nos ayudan a operar nuestro negocio (plataformas de Meta Ads, herramientas de análisis, sistemas CRM)</li>
              <li>Autoridades legales cuando sea requerido por ley</li>
              <li>Socios comerciales solo con tu consentimiento previo</li>
            </ul>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">4. Cookies y tecnologías de seguimiento</h3>
            <p>
              Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puedes configurar tu navegador para rechazar cookies, aunque esto puede limitar algunas funcionalidades del sitio.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">5. Seguridad de los datos</h3>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">6. Retención de datos</h3>
            <p>
              Conservamos tu información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada, incluyendo requisitos legales, contables o de informes.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">7. Tus derechos</h3>
            <p>
              Tienes derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a la información personal que tenemos sobre ti</li>
              <li>Solicitar la corrección de datos inexactos o incompletos</li>
              <li>Solicitar la eliminación de tus datos personales</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Retirar tu consentimiento en cualquier momento</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">8. Enlaces a sitios de terceros</h3>
            <p>
              Nuestro sitio web puede contener enlaces a sitios externos. No somos responsables de las prácticas de privacidad de estos sitios. Te recomendamos leer las políticas de privacidad de cada sitio que visites.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">9. Cambios a esta política</h3>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o por razones legales. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web con la fecha de actualización.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">10. Menores de edad</h3>
            <p>
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, los eliminaremos de inmediato.
            </p>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
              <p className="text-sm m-0">
                <strong>Contacto para asuntos de privacidad:</strong> Si tienes preguntas sobre esta política o deseas ejercer tus derechos, contáctanos en contacto@dualtti.com
              </p>
              <p className="text-sm mt-2 m-0 text-slate-500 dark:text-slate-400">
                Última actualización: Diciembre 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
