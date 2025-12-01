import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Dualtti | Agencia de Meta Ads en Paraguay - Más Clientes, Más Ventas",
  description: "Agencia paraguaya especializada en campañas de Meta Ads (Facebook & Instagram) que generan clientes reales. Sistema propio de gestión de leads y ROAS medible.",
  keywords: ["meta ads paraguay", "facebook ads paraguay", "instagram ads", "agencia digital paraguay", "publicidad facebook", "leads paraguay", "marketing digital"],
  authors: [{ name: "Dualtti" }],
  openGraph: {
    title: "Dualtti | Campañas de Meta Ads que convierten inversión en clientes",
    description: "Aumenta tus ventas con campañas estratégicas en Meta. Sistema propio de gestión de leads, reportes claros y optimización continua.",
    url: "https://dualtti.com",
    siteName: "Dualtti",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dualtti | Meta Ads que generan clientes reales en Paraguay",
    description: "Agencia paraguaya especializada en convertir inversión publicitaria en clientes y ventas medibles.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn("min-h-screen font-sans antialiased", outfit.variable)}
      >
        {children}
      </body>
    </html>
  );
}
