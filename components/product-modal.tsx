"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import type { Product } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"

interface ProductModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  const { t, language } = useLanguage()
  
  if (!product) return null
  
  const productTranslation = t.products[product.id]

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[320px]"
          >
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border/30">
              {/* Close Button */}
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-3 left-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/60 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
              
              {/* Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={productTranslation?.name || product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Content */}
              <div className={`p-4 -mt-6 relative z-10 ${language === "ar" ? "text-right" : "text-left"}`}>
                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {productTranslation?.name || product.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                  {productTranslation?.description || product.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-between pt-2 border-t border-border/30">
                  <span className="text-xs text-muted-foreground">{t.price || "السعر"}</span>
                  <span className="text-lg font-bold text-primary">
                    {product.price} {t.currency}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
