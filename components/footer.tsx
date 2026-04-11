"use client"

import { motion } from "framer-motion"
import { Heart, Instagram, Twitter, MapPin, Phone, Clock } from "lucide-react"
import { Logo } from "./logo"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  const contactInfo = [
    { 
      icon: MapPin, 
      text: language === "ar" ? "تركيا، الريحانية" : "Türkiye, Reyhanlı" 
    },
    { 
      icon: Phone, 
      text: "+90 326 123 4567" 
    },
    { 
      icon: Clock, 
      text: language === "ar" ? "١٠ صباحاً - ١٢ مساءً" : "10:00 - 00:00" 
    },
  ]

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-card" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      {/* Top Decorative Border */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full blur-sm" />
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <Logo size="lg" />
            <p className="mt-4 text-muted-foreground text-center md:text-start leading-relaxed max-w-xs">
              {t.footerDescription}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="group relative w-11 h-11 rounded-full bg-secondary/60 border border-border/50 flex items-center justify-center text-muted-foreground overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon className="w-5 h-5 relative z-10 group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {language === "ar" ? "تواصل معنا" : "İletişim"}
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {t.quickLinks}
            </h3>
            <div className="space-y-3 text-center md:text-end">
              {Object.entries(t.categories).map(([key, cat]) => (
                <a
                  key={key}
                  href={`/category/${key}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          {/* Made with Love */}
          <div className="flex items-center gap-2 order-2 md:order-1">
            <span>{t.madeWith}</span>
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1],
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity, 
                repeatDelay: 1.5,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>{t.inSaudi}</span>
          </div>

          {/* Copyright */}
          <p className="order-1 md:order-2">
            &copy; {currentYear} {language === "ar" ? "نوتو" : "Noto"}. {t.allRights}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


