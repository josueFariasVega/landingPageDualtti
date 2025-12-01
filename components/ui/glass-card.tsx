import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        /* Updated glass effect for light mode with subtle gradients */
        "glass rounded-3xl p-8 relative overflow-hidden group bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(49,0,111,0.08)]",
        hoverEffect && "glass-hover hover:-translate-y-1",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </div>
  )
}
