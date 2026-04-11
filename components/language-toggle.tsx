"use client"

import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage, type Language } from "@/lib/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang: Language = language === "ar" ? "tr" : "ar"
    setLanguage(newLang)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">
        {language === "ar" ? "TR" : "عربي"}
      </span>
    </motion.button>
  )
}
