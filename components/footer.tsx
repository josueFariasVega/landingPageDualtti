import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 overflow-hidden bg-gradient-to-t from-purple-50/40 to-transparent text-white">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-200/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
          <div>
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter mb-4 sm:mb-6 block text-white">
              Dualtti<span className="text-white">.</span>
            </Link>
            <p className="text-sm sm:text-base leading-relaxed">
              Agencia paraguaya especializada en generar clientes y ventas medibles mediante campañas en Meta Ads.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-white text-base sm:text-lg">Navegación</h4>
            <ul className="space-y-3 sm:space-y-4 text-white text-sm sm:text-base">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#impact" className="hover:text-white transition-colors">
                  Nuestro proceso
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-white text-base sm:text-lg">Síguenos</h4>
            <a
              href="https://instagram.com/dualtti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 sm:mb-6 text-white text-base sm:text-lg">Contacto</h4>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">¿Listo para impulsar tus ventas?</p>
            <a href="mailto:info@dualtti.com" className="text-lg sm:text-xl font-medium hover:text-white transition-colors break-all">
              info@dualtti.com
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-purple-200/30 text-xs sm:text-sm text-white gap-4 sm:gap-0">
          <p className="text-center sm:text-left">&copy; 2025 Dualtti. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
