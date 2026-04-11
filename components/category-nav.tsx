"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { categories } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  activeId?: string
}

export function CategoryNav({ activeId }: CategoryNavProps) {
  const { t } = useLanguage()

  return (
    <div className="w-full overflow-x-auto scrollbar-hide py-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-4 px-4 min-w-max justify-center"
      >
        {categories.map((category, index) => {
          // Get translated category name
          const categoryTranslation = t.categories[category.id as keyof typeof t.categories]
          
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/category/${category.id}`}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className={cn(
                    "relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300",
                    activeId === category.id
                      ? "border-primary shadow-lg shadow-primary/30 scale-105"
                      : "border-border/50 group-hover:border-primary/50 group-hover:shadow-md"
                  )}
                >
                  <Image
                    src={category.image}
                    alt={categoryTranslation?.name || category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span
                  className={cn(
                    "text-xs md:text-sm font-medium transition-colors",
                    activeId === category.id
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {categoryTranslation?.name || category.name}
                </span>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
