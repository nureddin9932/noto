"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

interface LogoProps {
  size?: "sm" | "md" | "lg"
}

export function Logo({ size = "md" }: LogoProps) {
  const { language } = useLanguage()

  const sizes = {
    sm: { name: "text-xl" },
    md: { name: "text-2xl" },
    lg: { name: "text-3xl" },
  }

  return (
    <motion.div
      className="flex items-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex flex-col">
        <span className={`${sizes[size].name} font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent`}>
          {language === "ar" ? "نوتو" : "Noto"}
        </span>
      </div>
    </motion.div>
  )
}
