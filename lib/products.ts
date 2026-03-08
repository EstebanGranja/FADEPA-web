import productosData from "@/data/productos.json"

export interface Product {
  id: string
  nombre: string
  categoria: string
  descripcion_corta: string
  descripcion_larga: string
  ficha_tecnica: string
  imagen: string
}

export interface Category {
  id: string
  name: string
  products: Product[]
}

const categoryNames: Record<string, string> = {
  aditivos: "Aditivos",
  latex: "Látex",
  pintura_cal: "Pintura a la Cal",
  impermeabilizantes: "Impermeabilizantes",
  esmaltes: "Esmaltes",
  industrial: "Industrial",
  entonadores: "Entonadores y Tintas",
  maderas: "Maderas",
  epoxi_poliuretanos: "Epoxi y Poliuretanos",
  fondos: "Fondos",
  diluyentes: "Diluyentes",
  tintometricos: "Sistema Tintométrico",
  revestimientos_texturados: "Revestimientos Texturados Acrílicos",
  pintura_piletas: "Pinturas para Piletas",
  pintura_pisos: "Pinturas para Pisos",
  morteros: "Morteros en Polvo",
}

function buildCategories(): Category[] {
  const map = new Map<string, Product[]>()

  for (const p of productosData as Product[]) {
    const list = map.get(p.categoria) ?? []
    list.push(p)
    map.set(p.categoria, list)
  }

  return Array.from(map.entries()).map(([id, products]) => ({
    id,
    name: categoryNames[id] ?? id,
    products,
  }))
}

export const categories: Category[] = buildCategories()

export function getAllProducts(): Product[] {
  return categories.flatMap((category) => category.products)
}

export function getProductsByCategory(categoryId: string): Product[] {
  const category = categories.find((c) => c.id === categoryId)
  return category?.products || []
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId)
}
