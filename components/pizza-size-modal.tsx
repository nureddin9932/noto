"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import type { Product } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"

interface PizzaSizeModalProps {
  product: Product | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

type PizzaSize = "s" | "m" | "l" | "xl"

const sizeLabels: Record<PizzaSize, string> = {
  s: "S",
  m: "M",
  l: "L",
  xl: "XL",
}

export function PizzaSizeModal({ product, open, onOpenChange }: PizzaSizeModalProps) {
  const { t, language } = useLanguage()
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("m")

  useEffect(() => {
    if (open) {
      setSelectedSize("m")
    }
  }, [open, product?.id])

  if (!product || product.categoryId !== "pizza" || !product.sizePrices) return null

  const productTranslation = t.products[product.id]
  const selectedPrice = product.sizePrices[selectedSize]

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 z-50 w-[85%] max-w-[360px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-2xl">
              <button
                onClick={() => onOpenChange(false)}
                className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm transition-all hover:bg-black/60 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={productTranslation?.name || product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>

              <div className={`relative z-10 -mt-6 p-4 ${language === "ar" ? "text-right" : "text-left"}`}>
                <h3 className="mb-1 text-lg font-bold text-foreground">
                  {productTranslation?.name || product.name}
                </h3>

                <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {productTranslation?.description || product.description}
                </p>

                <div className="mb-4 rounded-xl border border-border/40 bg-background/50 p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {language === "ar" ? "اختر الحجم" : "Boyut Sec"}
                    </span>
                    <span className="text-sm font-semibold text-primary">{sizeLabels[selectedSize]}</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {(Object.keys(sizeLabels) as PizzaSize[]).map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-all ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border/50 bg-secondary/40 text-foreground hover:border-primary/40 hover:bg-secondary"
                        }`}
                      >
                        {sizeLabels[size]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/30 pt-2">
                  <span className="text-xs text-muted-foreground">
                    {language === "ar" ? "السعر حسب الحجم" : "Boyuta Gore Fiyat"}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {selectedPrice} {t.currency}
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
