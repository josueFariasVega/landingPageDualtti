import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#343232]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#31006F] dark:text-white">
            Términos de Servicio
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p className="lead">
              Bienvenido a Dualtti. Al acceder a nuestro sitio web y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">1. Aceptación de los términos</h3>
            <p>
              Al utilizar los servicios de Dualtti, confirmas que has leído, entendido y aceptado estos Términos de Servicio. Si no estás de acuerdo con alguna parte de los términos, no deberás utilizar nuestros servicios.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">2. Servicios</h3>
            <p>
              Dualtti ofrece servicios de marketing digital especializados en Meta Ads, gestión de leads y consultoría estratégica. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">3. Propiedad Intelectual</h3>
            <p>
              Todo el contenido, diseño, logotipos y materiales presentes en este sitio web son propiedad exclusiva de Dualtti o de sus licenciantes y están protegidos por las leyes de propiedad intelectual aplicables. No está permitida su reproducción sin autorización expresa.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">4. Responsabilidades del cliente</h3>
            <p>
              Al contratar nuestros servicios, te comprometes a proporcionar información veraz y necesaria para la ejecución de las campañas. Eres responsable de asegurar que tienes los derechos sobre cualquier material (imágenes, textos) que nos proporciones para su uso en publicidad.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">5. Limitación de responsabilidad</h3>
            <p>
              Dualtti trabaja para obtener los mejores resultados posibles, pero no garantizamos resultados específicos de ventas o conversiones, ya que estos dependen de múltiples factores externos y del mercado. No seremos responsables por pérdidas indirectas o consecuentes derivadas del uso de nuestros servicios.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">6. Pagos y facturación</h3>
            <p>
              Los términos de pago se especificarán en la propuesta comercial o contrato de servicio individual. El incumplimiento de los pagos puede resultar en la suspensión de los servicios.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">7. Modificaciones</h3>
            <p>
              Nos reservamos el derecho de actualizar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>

            <h3 className="text-[#31006F] dark:text-white mt-8 mb-4 font-bold text-2xl">8. Ley aplicable</h3>
            <p>
              Estos términos se rigen por las leyes vigentes en Paraguay. Cualquier disputa relacionada con estos términos será sometida a la jurisdicción exclusiva de los tribunales competentes de Asunción.
            </p>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10">
              <p className="text-sm m-0">
                <strong>Contacto:</strong> Para consultas legales o sobre estos términos, contáctanos en contacto@dualtti.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
