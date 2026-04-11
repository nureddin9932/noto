"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Logo } from "./logo"
import { LanguageToggle } from "./language-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* Logo on one side */}
          <Link href="/">
            <Logo size="md" />
          </Link>
          
          {/* Language toggle on the other side */}
          <LanguageToggle />
        </motion.div>
      </div>
    </header>
  )
}
