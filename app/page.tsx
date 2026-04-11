"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryCard } from "@/components/category-card"
import { WelcomePopup } from "@/components/welcome-popup"
import { categories } from "@/lib/menu-data"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <WelcomePopup />
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t.menu}
          </h2>
          <p className="text-muted-foreground">
            {t.chooseCategory}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
