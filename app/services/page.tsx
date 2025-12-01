"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
    Target,
    TrendingUp,
    Users,
    BarChart3,
    Zap,
    Shield,
    CheckCircle2,
    ArrowRight,
    Lightbulb,
    Rocket,
    LineChart
} from "lucide-react"
import Link from "next/link"

export default function Services() {
    const featuredService = {
        title: "Campañas de Meta Ads",
        subtitle: "Nuestro servicio estrella",
        description: "Generamos clientes reales y medibles para tu negocio a través de campañas optimizadas en Facebook e Instagram. No vendemos likes ni seguidores, vendemos resultados.",
        features: [
            "Segmentación avanzada de audiencias",
            "Optimización continua de campañas",
            "Creativos diseñados para convertir",
            "Seguimiento en tiempo real"
        ],
        stats: [
            { value: "500+", label: "Campañas exitosas" },
            { value: "3.2x", label: "ROAS promedio" },
            { value: "85%", label: "Tasa de retención" }
        ]
    }

    const services = [
        {
            icon: LineChart,
            title: "Sistema de Seguimiento Propio",
            description: "Plataforma exclusiva para monitorear cada lead desde el primer contacto hasta la conversión final. Visibilidad total de tu inversión.",
            benefits: [
                "Dashboard en tiempo real",
                "Integración con CRM",
                "Reportes automatizados"
            ]
        },
        {
            icon: Target,
            title: "Consultoría Estratégica",
            description: "Analizamos tu negocio, competencia y mercado para diseñar una estrategia de adquisición de clientes personalizada y escalable.",
            benefits: [
                "Análisis de mercado",
                "Plan de crecimiento",
                "Optimización de funnel"
            ]
        },
        {
            icon: BarChart3,
            title: "Reporting & Analytics",
            description: "Informes detallados con métricas clave: CPA, ROAS, CTR, y más. Datos claros para tomar decisiones inteligentes.",
            benefits: [
                "Métricas accionables",
                "Análisis de rendimiento",
                "Recomendaciones estratégicas"
            ]
        },
        {
            icon: Rocket,
            title: "Escala & Growth",
            description: "Estrategias probadas para escalar campañas rentables sin perder eficiencia. Crecimiento sostenible y predecible.",
            benefits: [
                "Escalamiento gradual",
                "Testing continuo",
                "Optimización de presupuesto"
            ]
        }
    ]

    const process = [
        {
            number: "01",
            title: "Descubrimiento",
            description: "Conocemos tu negocio, objetivos y audiencia ideal. Definimos KPIs claros y alcanzables."
        },
        {
            number: "02",
            title: "Estrategia",
            description: "Diseñamos un plan personalizado con segmentación, creativos y presupuesto optimizado."
        },
        {
            number: "03",
            title: "Ejecución",
            description: "Lanzamos campañas, monitoreamos resultados y optimizamos en tiempo real."
        },
        {
            number: "04",
            title: "Optimización",
            description: "Análisis continuo, A/B testing y ajustes para maximizar el retorno de inversión."
        },
        {
            number: "05",
            title: "Escala",
            description: "Incrementamos presupuesto en campañas ganadoras para multiplicar resultados."
        }
    ]

    return (
        <main className="min-h-screen selection:bg-purple-200/30">
            <Navbar />

            {/* Hero + Featured Service - Unified Section with Shared Background */}
            <section className="relative overflow-hidden pt-20">
                {/* Shared Background #31006F */}
                <div className="absolute inset-0 bg-[#31006F]" />

                {/* Sophisticated Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                          linear-gradient(rgba(255, 134, 114, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 134, 114, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Continuous Gradient Orbs - Salmón (#FF8672) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF8672]/20 rounded-full blur-3xl animate-blob" />
                    <div className="absolute top-40 right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#FF8672]/20 via-[#FF8672]/10 to-transparent blur-3xl" />
                    <div className="absolute top-[600px] -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FF8672]/15 via-[#FF8672]/5 to-transparent blur-3xl" />
                    <div className="absolute top-[800px] right-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF8672]/5 to-transparent blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF8672]/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 relative z-10 text-center text-white py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-6 px-6 py-2 rounded-full glass border-white/40"
                        >
                            <span className="text-sm font-semibold">Servicios que generan resultados</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                            Convertimos inversión en clientes reales
                        </h1>

                        <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
                            Especializados en Meta Ads y sistemas de seguimiento para empresas que buscan crecer de forma medible y escalable.
                        </p>
                    </motion.div>
                </div>

                {/* Featured Service - Bento Grid (Same Background) */}
                <div className="container mx-auto px-6 relative z-10 py-20">
                    <div className="max-w-[1400px] mx-auto">

                        {/* Premium Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center mb-24"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8672]/10 to-[#31006F]/10 border border-[#FF8672]/20 mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#FF8672] animate-pulse" />
                                <span className="text-sm font-medium text-[#FF8672]">{featuredService.subtitle}</span>
                            </div>

                            <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                                <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                                    {featuredService.title}
                                </span>
                            </h2>

                            <p className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto leading-relaxed font-light">
                                {featuredService.description}
                            </p>
                        </motion.div>

                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

                            {/* Main Feature Card - Spans 7 columns */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="lg:col-span-7 group"
                            >
                                <div className="relative h-full min-h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 hover:border-white/10 transition-all duration-500">

                                    {/* Gradient Mesh Background */}
                                    <div className="absolute inset-0 opacity-60">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF8672]/20 via-[#FF8672]/5 to-[#31006F]/20" />
                                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,134,114,0.1),transparent_50%)]" />
                                    </div>

                                    {/* Animated Particles */}
                                    <div className="absolute inset-0">
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 rounded-full bg-[#FF8672]/30"
                                                style={{
                                                    top: `${Math.random() * 100}%`,
                                                    left: `${Math.random() * 100}%`,
                                                }}
                                                animate={{
                                                    y: [0, -30, 0],
                                                    opacity: [0.3, 0.8, 0.3],
                                                }}
                                                transition={{
                                                    duration: 3 + Math.random() * 2,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 2,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full p-10 flex flex-col justify-between">

                                        {/* Top Section */}
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                                                <Target className="w-4 h-4 text-[#FF8672]" />
                                                <span className="text-sm font-medium text-white/80">Servicio Principal</span>
                                            </div>

                                            <h3 className="text-4xl font-bold text-white mb-4">
                                                Resultados que hablan por sí solos
                                            </h3>
                                            <p className="text-white/60 text-lg leading-relaxed max-w-md">
                                                Campañas optimizadas con tecnología de punta y estrategias probadas.
                                            </p>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-3 gap-4">
                                            {featuredService.stats.map((stat, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                                    className="relative group/stat"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8672]/10 to-transparent rounded-2xl blur-xl group-hover/stat:blur-2xl transition-all" />
                                                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                                        <div className="text-4xl font-bold bg-gradient-to-br from-[#FF8672] to-[#FF8672]/60 bg-clip-text text-transparent mb-2">
                                                            {stat.value}
                                                        </div>
                                                        <div className="text-xs text-white/50 font-medium uppercase tracking-wider">
                                                            {stat.label}
                                                        </div>

                                                        {/* Micro Progress Bar */}
                                                        <div className="mt-3 h-1 bg-white/5 rounded-full overflow-hidden">
                                                            <motion.div
                                                                className="h-full bg-gradient-to-r from-[#FF8672] to-[#FF8672]/60"
                                                                initial={{ width: 0 }}
                                                                whileInView={{ width: '100%' }}
                                                                viewport={{ once: true }}
                                                                transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                                                            />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative Corner Element */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF8672]/10 to-transparent rounded-bl-[100px] opacity-50" />
                                </div>
                            </motion.div>

                            {/* Features Column - Spans 5 columns */}
                            <div className="lg:col-span-5 flex flex-col gap-6">

                                {featuredService.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 40 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                                        className="group/feature"
                                    >
                                        <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 hover:border-[#FF8672]/30 transition-all duration-500 p-8">

                                            {/* Hover Gradient Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF8672]/0 to-[#FF8672]/0 group-hover/feature:from-[#FF8672]/5 group-hover/feature:to-transparent transition-all duration-500" />

                                            <div className="relative flex items-start gap-5">
                                                {/* Icon Container */}
                                                <div className="flex-shrink-0">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-[#FF8672]/20 rounded-xl blur-lg group-hover/feature:blur-xl transition-all" />
                                                        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF8672]/20 to-[#FF8672]/5 border border-[#FF8672]/20 flex items-center justify-center group-hover/feature:scale-110 group-hover/feature:border-[#FF8672]/40 transition-all duration-300">
                                                            <CheckCircle2 className="w-6 h-6 text-[#FF8672]" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 pt-1">
                                                    <h4 className="text-white font-semibold text-lg mb-2 group-hover/feature:text-[#FF8672] transition-colors">
                                                        {feature}
                                                    </h4>
                                                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#FF8672]/50 to-transparent group-hover/feature:w-20 transition-all duration-500" />
                                                </div>

                                                {/* Arrow Icon */}
                                                <ArrowRight className="w-5 h-5 text-white/20 group-hover/feature:text-[#FF8672] group-hover/feature:translate-x-1 transition-all flex-shrink-0 mt-1" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Premium CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-center pb-20"
                        >
                            <Link href="/contact">
                                <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FF8672] to-[#FF8672]/80 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF8672]/30">
                                    {/* Shimmer Effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                    <span className="relative">Comenzar ahora</span>
                                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-full bg-[#FF8672] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                                </button>
                            </Link>

                            <p className="mt-4 text-sm text-white/40">
                                Sin compromisos • Consulta gratuita • Resultados garantizados
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Other Services - Compact Layout with Particles */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[#31006F]" />

                {/* Animated Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Large floating circles */}
                    <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#ff8672]/10 blur-3xl animate-blob" />
                    <div className="absolute top-40 right-[15%] w-80 h-80 rounded-full bg-purple-600/10 blur-3xl animate-blob animation-delay-2000" />
                    <div className="absolute bottom-32 left-[20%] w-72 h-72 rounded-full bg-[#87e1d1]/10 blur-3xl animate-blob animation-delay-4000" />

                    {/* Small floating dots */}
                    <div className="absolute top-[15%] left-[25%] w-3 h-3 rounded-full bg-[#ff8672]/30 animate-float" />
                    <div className="absolute top-[25%] right-[30%] w-2 h-2 rounded-full bg-white/20 animate-float animation-delay-1000" />
                    <div className="absolute top-[45%] left-[15%] w-4 h-4 rounded-full bg-purple-400/20 animate-float animation-delay-2000" />
                    <div className="absolute top-[60%] right-[20%] w-3 h-3 rounded-full bg-[#87e1d1]/30 animate-float animation-delay-3000" />
                    <div className="absolute bottom-[20%] left-[35%] w-2 h-2 rounded-full bg-[#ff8672]/25 animate-float animation-delay-4000" />
                    <div className="absolute bottom-[35%] right-[40%] w-3 h-3 rounded-full bg-white/15 animate-float animation-delay-1500" />

                    {/* Medium circles */}
                    <div className="absolute top-[30%] right-[10%] w-32 h-32 rounded-full bg-[#ff8672]/5 blur-2xl animate-blob animation-delay-3000" />
                    <div className="absolute bottom-[25%] right-[25%] w-40 h-40 rounded-full bg-purple-500/8 blur-2xl animate-blob animation-delay-5000" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Más servicios para tu crecimiento
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Soluciones complementarias para maximizar tus resultados y escalar tu negocio.
                        </p>
                    </motion.div>

                    <div className="max-w-7xl mx-auto space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center py-8 border-b border-white/10 last:border-b-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                                    {/* Text Content */}
                                    <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        {/* Icon and Title */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#ff8672]/20 flex items-center justify-center flex-shrink-0">
                                                <service.icon className="w-6 h-6 text-[#ff8672]" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-base md:text-lg text-white/70 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Benefits List */}
                                        <div className="space-y-2 pt-2">
                                            {service.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-[#ff8672] mt-0.5 flex-shrink-0" />
                                                    <span className="text-white/80 text-sm">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual Area */}
                                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                        <div className="relative h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
                                            {/* Gradient Background */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff8672] via-[#ff8672]/70 to-[#31006f] opacity-80" />

                                            {/* Decorative Elements */}
                                            <div className="absolute inset-0 opacity-15">
                                                <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-white/40 blur-2xl" />
                                                <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-white/30 blur-2xl" />
                                            </div>

                                            {/* Icon Watermark */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <service.icon className="w-24 h-24 text-white/10" strokeWidth={1} />
                                            </div>

                                            {/* Service Number */}
                                            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                                <span className="text-lg font-bold text-white">0{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#31006F]" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Nuestro proceso de trabajo
                        </h2>
                        <p className="text-xl text-white/80 max-w-3xl mx-auto">
                            Un método probado para llevar tu negocio al siguiente nivel, paso a paso.
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto space-y-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="glass bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border-white/20 hover:border-[#ff8672]/40 transition-all flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ff8672] to-[#31006f] flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#ff8672]/30 group-hover:scale-110 transition-transform">
                                            {step.number}
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 text-lg leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#31006F]" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            ¿Por qué elegirnos?
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="relative overflow-hidden p-10 rounded-2xl bg-gradient-to-br from-[#FF8672] to-[#FF8672]/80 border border-[#FF8672]/20 hover:border-white/40 transition-all group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="relative text-2xl font-bold text-white mb-4">Resultados rápidos</h3>
                                <p className="relative text-white/90 leading-relaxed">
                                    Primeros leads en las primeras 48-72 horas de campaña activa.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center"
                        >
                            <div className="relative overflow-hidden p-10 rounded-2xl bg-gradient-to-br from-[#31006F] to-[#31006F]/80 border border-white/20 hover:border-white/40 transition-all group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="relative text-2xl font-bold text-white mb-4">100% Transparente</h3>
                                <p className="relative text-white/90 leading-relaxed">
                                    Acceso completo a métricas, reportes y resultados en tiempo real.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="relative overflow-hidden p-10 rounded-2xl bg-gradient-to-br from-[#FF8672] to-[#FF8672]/80 border border-[#FF8672]/20 hover:border-white/40 transition-all group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="relative text-2xl font-bold text-white mb-4">Escalable</h3>
                                <p className="relative text-white/90 leading-relaxed">
                                    Estrategias diseñadas para crecer sin perder rentabilidad.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[#31006F]" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            ¿Listo para generar más clientes?
                        </h2>
                        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                            Agenda una consulta gratuita y descubre cómo podemos ayudarte a escalar tu negocio.
                        </p>
                        <Link href="/contact">
                            <button className="btn-primary px-12 py-5 text-lg">
                                Agendar consulta gratuita
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
