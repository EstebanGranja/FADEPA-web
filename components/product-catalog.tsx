"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Search, Package, FileText, X } from "lucide-react"
import { Category, Product } from "@/lib/products"

interface ProductCatalogProps {
  categories: Category[]
}

export function ProductCatalog({ categories }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)
  const [filterKey, setFilterKey] = useState(0)

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat)
    setFilterKey((k) => k + 1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setFilterKey((k) => k + 1)
  }

  const filteredCategories = categories.filter((category) => {
    if (selectedCategory && category.id !== selectedCategory) return false
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      const categoryMatches = category.name.toLowerCase().includes(query)
      const productMatches = category.products.some(
        (product) =>
          product.nombre.toLowerCase().includes(query) ||
          product.descripcion_corta.toLowerCase().includes(query)
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
        product.nombre.toLowerCase().includes(query) ||
        product.descripcion_corta.toLowerCase().includes(query)
    )
  }

  return (
    <div className="mt-12 overflow-x-hidden">
      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(null)}
          >
            Todas
          </Button>
          {categories.slice(0, 5).map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category.id)}
              className=""
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div key={filterKey} className="mt-8 space-y-12">
        {filteredCategories.map((category) => {
          const filteredProducts = getFilteredProducts(category.products)
          if (filteredProducts.length === 0) return null

          return (
            <section key={category.id} id={category.id}>
              <div className="mb-8 flex items-center gap-4 overflow-hidden">
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground">
                  {category.name}
                </h2>
                <div className="flex-1 min-w-0 h-[2px] bg-gradient-to-l from-[#00918e] via-[#00918e] to-transparent opacity-60" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onClick={() => setSelectedProduct(product)}
                  />
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
              handleSearchChange("")
              handleCategoryChange(null)
            }}
          >
            Ver todos los productos
          </Button>
        </div>
      )}

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-xl max-h-[92vh] sm:max-h-[85vh] flex flex-col p-5 sm:p-7 gap-0 overflow-hidden">
          {selectedProduct && (
            <div className="flex flex-col items-center gap-3 sm:gap-3 min-h-0 w-full overflow-hidden">
              {/* Imagen centrada */}
              <div
                className="relative cursor-zoom-in flex-shrink-0 rounded-xl overflow-hidden bg-black"
                style={{ width: 200, height: 200 }}
                onClick={() => setFullscreenImage(selectedProduct.imagen)}
              >
                <Image
                  src={selectedProduct.imagen}
                  alt={selectedProduct.nombre}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <DialogTitle className="mt-2 sm:mt-2 text-base sm:text-xl font-bold text-center leading-snug">
                  {selectedProduct.nombre}
                </DialogTitle>
                <div className="mt-1 h-[2px] w-[80%] max-w-xs bg-gradient-to-l from-[#1a8a84] via-[#1a8a84] to-transparent opacity-70 rounded-full" />
              </div>
              <div className="w-full overflow-y-auto flex-1 min-h-0">
                <DialogDescription className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-center px-1">
                  {selectedProduct.descripcion_larga}
                </DialogDescription>
              </div>
              <div className="flex items-center justify-between w-full pt-4 border-t flex-shrink-0">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm cursor-default">Ficha técnica</span>
                </div>
                <Button variant="default" size="sm" onClick={() => setSelectedProduct(null)}>
                  Cerrar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Fullscreen Image Overlay */}
      <Dialog open={!!fullscreenImage} onOpenChange={(open) => !open && setFullscreenImage(null)}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] w-[95vw] h-[95vh] p-0 bg-black border-none"
          showCloseButton={false}
        >
          <DialogClose className="absolute top-3 right-3 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25">
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar</span>
          </DialogClose>
          {fullscreenImage && (
            <div className="relative w-full h-full">
              <Image
                src={fullscreenImage}
                alt="Producto"
                fill
                className="object-contain"
                sizes="95vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ProductCard({ product, onClick, index = 0 }: { product: Product; onClick: () => void; index?: number }) {
  return (
    <Card
      className="group cursor-pointer border-border bg-card transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4 duration-300"
      style={{ animationDelay: `${index * 40}ms`, animationFillMode: "both" }}
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <div className="relative h-28 w-28 shrink-0 ml-3 my-3 overflow-hidden rounded-full">
          <Image
            src={product.imagen}
            alt={product.nombre}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="112px"
          />
        </div>
        <CardContent className="flex flex-col justify-center p-3 min-w-0">
          <h3 className="text-sm font-semibold text-card-foreground line-clamp-2">
            {product.nombre}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
            {product.descripcion_corta}
          </p>
        </CardContent>
      </div>
    </Card>
  )
}
