"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Category } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"

interface CategoryCardProps {
  category: Category
  index: number
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  const { t } = useLanguage()
  
  // Get translated category info
  const categoryTranslation = t.categories[category.id as keyof typeof t.categories]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/category/${category.id}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={category.image}
              alt={categoryTranslation?.name || category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 inset-x-0 p-5">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {categoryTranslation?.name || category.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {categoryTranslation?.description || category.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
