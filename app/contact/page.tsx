"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        service: "meta-ads"
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí irá la lógica del formulario o embedding
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className="min-h-screen selection:bg-purple-200/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[#31006F]" />

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff6b35]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-6 relative z-10 text-center text-white py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                            ¿Listo para hacer crecer tu negocio?
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                            Conversemos sobre cómo podemos ayudarte a generar más clientes y aumentar tus ventas con campañas de Meta Ads efectivas.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#31006F]" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Información de Contacto</h2>
                            </motion.div>

                            {/* Email Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center group-hover:bg-[#ff6b35]/30 transition-colors">
                                        <Mail className="w-6 h-6 text-[#ff6b35]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                        <p className="text-white/70">contacto@dualtti.com</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center group-hover:bg-[#ff6b35]/30 transition-colors">
                                        <Phone className="w-6 h-6 text-[#ff6b35]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Teléfono</h3>
                                        <p className="text-white/70">+595 981 234 567</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Location Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center group-hover:bg-[#ff6b35]/30 transition-colors">
                                        <MapPin className="w-6 h-6 text-[#ff6b35]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Ubicación</h3>
                                        <p className="text-white/70">Asunción, Paraguay</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Hours Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-6 rounded-lg border border-[#ff6b35]/20 hover:border-[#ff6b35]/40 transition-all duration-300 shadow-xl group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#ff6b35]/20 flex items-center justify-center group-hover:bg-[#ff6b35]/30 transition-colors">
                                        <Clock className="w-6 h-6 text-[#ff6b35]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Horario</h3>
                                        <p className="text-white/70">Lun - Vie: 9:00 - 18:00</p>
                                        <p className="text-white/70">Sáb: 9:00 - 13:00</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-gradient-to-br from-[#2a1f1a]/80 to-[#1f1612]/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#ff6b35]/20 shadow-2xl">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-[#ff6b35] flex items-center justify-center">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-white">Envíanos un mensaje</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name and Email Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-[#1a1210]/50 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b35]/50 focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                                                placeholder="Juan Pérez"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-[#1a1210]/50 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b35]/50 focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                                                placeholder="juan@ejemplo.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone and Company Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-white/90 mb-2">
                                                Teléfono
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-[#1a1210]/50 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b35]/50 focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                                                placeholder="+595 981 234 567"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-white/90 mb-2">
                                                Empresa
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-[#1a1210]/50 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b35]/50 focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                                                placeholder="Mi Empresa S.A."
                                            />
                                        </div>
                                    </div>

                                    {/* Service Selection */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-white/90 mb-2">
                                            Servicio de interés *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-[#1a1210]/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff6b35]/50 focus:ring-2 focus:ring-[#ff6b35]/20 transition-all"
                                        >
                                            <option value="meta-ads">Campañas de Meta Ads</option>
                                            <option value="seguimiento">Sistema de Seguimiento</option>
                                            <option value="consultoria">Consultoría Digital</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-[#1a1210]/50 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff6b35]/50 focus:ring-2 focus:ring-[#ff6b35]/20 transition-all resize-none"
                                            placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-[#ff6b35] to-[#ff8555] hover:from-[#ff8555] hover:to-[#ff6b35] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-[#ff6b35]/30 hover:shadow-[#ff6b35]/50 flex items-center justify-center gap-2 group"
                                    >
                                        <span>Enviar mensaje</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[#31006F]" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            ¿Prefieres una llamada?
                        </h2>
                        <p className="text-lg text-white/80 mb-8">
                            Agenda una reunión con nuestro equipo y descubre cómo podemos impulsar tu negocio.
                        </p>
                        <button className="bg-white text-[#1a1210] font-semibold py-4 px-10 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Agendar reunión
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
