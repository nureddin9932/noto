"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import type { Category } from "@/lib/menu-data"

interface CategoryHeroProps {
  category: Category
}

export function CategoryHero({ category }: CategoryHeroProps) {
  const { t } = useLanguage()
  
  const categoryTranslation = t.categories[category.id as keyof typeof t.categories]

  return (
    <div className="relative w-full h-[220px] md:h-[280px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={category.image}
        alt={categoryTranslation?.name || category.name}
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-2"
          >
            {categoryTranslation?.name || category.name}
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto"
          >
            {categoryTranslation?.heroText || categoryTranslation?.description || category.description}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </div>
  )
}
