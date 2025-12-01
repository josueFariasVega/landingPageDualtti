import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Lumina | Digital Agency",
  description: "Shaping the future of digital experiences.",
    generator: 'v0.app',
    icons: {
      // prefer using existing svg/png in public
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/icon-light-32x32.png', sizes: '32x32' },
        { url: '/icon-dark-32x32.png', sizes: '32x32' }
      ]
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased selection:bg-white/20", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
