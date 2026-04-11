"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("noto-visited")
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("noto-visited", "true")
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative bg-card border border-border/50 rounded-2xl p-8 max-w-sm w-full shadow-2xl shadow-primary/10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute top-4 ${language === "ar" ? "left-4" : "right-4"} p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors`}
            >
              <X className="w-4 h-4" />
            </button>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 400, delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-6 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-600 rounded-2xl rotate-3 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-4xl font-bold text-primary-foreground">
                  {language === "ar" ? "ن" : "N"}
                </span>
              </div>
            </motion.div>
            
            <h2 className="text-2xl font-bold text-foreground mb-3">
              {t.welcomeTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.welcomeMessage}
            </p>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              {t.browseMenu}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
