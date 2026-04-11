"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryNav } from "@/components/category-nav"
import { ProductCard } from "@/components/product-card"
import { ProductModal } from "@/components/product-modal"
import { getProductsByCategory, getCategoryById, type Product } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"

export default function CategoryPage() {
  const params = useParams()
  const categoryId = params.id as string
  const { t } = useLanguage()
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  
  const category = getCategoryById(categoryId)
  const products = getProductsByCategory(categoryId)

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t.categoryNotFound}</h1>
          <Link href="/" className="text-primary hover:underline">
            {t.backToHome}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Category Hero Section */}
      <CategoryHero category={category} />
      
      {/* Category Navigation - Circular buttons */}
      <div className="sticky top-[65px] z-40 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <CategoryNav activeId={categoryId} />
      </div>
      
      <main className="container mx-auto px-4 py-8 flex-1">
        {/* Products Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
        >
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={handleSelectProduct}
            />
          ))}
        </motion.div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t.noProducts}</p>
          </div>
        )}
      </main>
      
      <Footer />
      
      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}
