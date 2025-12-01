import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Impact } from "@/components/impact"
import { Work } from "@/components/work"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Cta } from "@/components/cta"
// SectionWrapper removed — native sections used instead

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-purple-200/30">
      <Navbar />
      <section>
        <Hero />
      </section>
      <Impact />
      <Cta />
      <Services />
      <Work />
      <Faq />
      
      {/* Call to Action Section */}
      <section className="py-32">
        <section id="contact" className="relative">
          <div className="container mx-auto px-6 text-center relative z-10 w-9/12 md:w-8/12 lg:w-7/12 xl:w-7/12">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              ¿Más clientes para tu negocio?<br />
              <span className="text-white">Dualtti convierte inversión en ventas</span>
            </h2>
            <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
              Somos una agencia paraguaya especializada en campañas de Meta Ads y un sistema propio de seguimiento
              para generar clientes medibles y escalar resultados.
            </p>
            <button className="btn-primary px-10 py-5 rounded-full font-bold text-xl shadow-lg shadow-coral/30">Contactar ahora</button>
          </div>

          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none"          />
        </section>
      </section>

      <Footer />
    </main>
  )
}
