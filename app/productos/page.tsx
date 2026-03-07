import { Metadata } from "next"
import { categories } from "@/lib/products"
import { ProductCatalog } from "@/components/product-catalog"

export const metadata: Metadata = {
  title: "Productos | FADEPA Pinturería",
  description: "Catálogo completo de pinturas, revestimientos, aditivos y productos para pintura en Alta Gracia, Córdoba.",
}

export default function ProductosPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Nuestros Productos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explorá nuestro amplio catálogo de pinturas, revestimientos y productos para el hogar e industria
          </p>
        </div>

        {/* Product Catalog */}
        <ProductCatalog categories={categories} />
      </div>
    </div>
  )
}
