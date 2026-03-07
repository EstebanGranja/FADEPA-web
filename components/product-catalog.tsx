"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Package } from "lucide-react"
import { Category, Product } from "@/lib/products"

interface ProductCatalogProps {
  categories: Category[]
}

export function ProductCatalog({ categories }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = categories.filter((category) => {
    if (selectedCategory && category.id !== selectedCategory) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const categoryMatches = category.name.toLowerCase().includes(query)
      const productMatches = category.products.some(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      )
      return categoryMatches || productMatches
    }
    return true
  })

  const getFilteredProducts = (products: Product[]) => {
    if (!searchQuery) return products
    const query = searchQuery.toLowerCase()
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    )
  }

  return (
    <div className="mt-12">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            Todas
          </Button>
          {categories.slice(0, 5).map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="hidden sm:inline-flex"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Chips - Mobile */}
      <div className="mt-4 flex flex-wrap gap-2 sm:hidden">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="mt-8 space-y-12">
        {filteredCategories.map((category) => {
          const filteredProducts = getFilteredProducts(category.products)
          if (filteredProducts.length === 0) return null

          return (
            <section key={category.id} id={category.id}>
              <div className="mb-6">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                  {category.name}
                </h2>
                <p className="mt-1 text-muted-foreground">{category.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredCategories.length === 0 && (
        <div className="mt-12 text-center">
          <Package className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium text-foreground">No se encontraron productos</h3>
          <p className="mt-2 text-muted-foreground">
            Probá con otros términos de búsqueda o explorá todas las categorías
          </p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory(null)
            }}
          >
            Ver todos los productos
          </Button>
        </div>
      )}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group border-border bg-card transition-all hover:shadow-md hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
          <Package className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-base font-semibold text-card-foreground">
          {product.name}
        </CardTitle>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </CardContent>
    </Card>
  )
}
