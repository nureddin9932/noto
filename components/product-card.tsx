"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Product } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"

interface ProductCardProps {
  product: Product
  index: number
  onSelect: (product: Product) => void
}

export function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const { t, language } = useLanguage()
  const isPizza = product.categoryId === "pizza"
  
  // Get translated product info
  const productTranslation = t.products[product.id]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={() => onSelect(product)}
        className={`w-full group ${language === "ar" ? "text-right" : "text-left"}`}
      >
        <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={productTranslation?.name || product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-1">
              {productTranslation?.name || product.name}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3 min-h-[2rem]">
              {productTranslation?.description || product.description}
            </p>
            <div className="flex items-center justify-between">
              {isPizza ? (
                <span className="text-sm font-semibold text-primary">
                  {language === "ar" ? "اختر الحجم" : "Boyut Sec"}
                </span>
              ) : (
                <span className="text-lg font-bold text-primary">
                  {product.price} {t.currency}
                </span>
              )}
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  )
}
