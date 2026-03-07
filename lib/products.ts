export interface Product {
  id: string
  name: string
  description: string
  category: string
}

export interface Category {
  id: string
  name: string
  description: string
  products: Product[]
}

export const categories: Category[] = [
  {
    id: "pintura-cal",
    name: "Pintura a la Cal",
    description: "Pinturas tradicionales a base de cal para interiores y exteriores",
    products: [
      { id: "latizador", name: "Latizador", description: "Fijador para Pintura a la Cal", category: "pintura-cal" },
      { id: "cal-apagada", name: "Cal Apagada", description: "Cal de alta pureza para preparación de pinturas", category: "pintura-cal" },
    ],
  },
  {
    id: "aditivos",
    name: "Aditivos",
    description: "Productos para mejorar el rendimiento de las pinturas",
    products: [
      { id: "antihongo", name: "Antihongo - Antialga Concentrado", description: "Previene la aparición de hongos y algas en superficies pintadas", category: "aditivos" },
      { id: "mateante", name: "Mateante para Esmaltes Sintéticos y Barnices", description: "Reduce el brillo de esmaltes y barnices", category: "aditivos" },
      { id: "aditivo-doble", name: "Aditivo Doble Acción", description: "Convertidor y Antióxido en un solo producto", category: "aditivos" },
      { id: "secante", name: "Secante para Pinturas", description: "Acelera el tiempo de secado de pinturas al aceite", category: "aditivos" },
    ],
  },
  {
    id: "latex",
    name: "Látex",
    description: "Pinturas látex para interiores y exteriores",
    products: [
      { id: "latex-interior", name: "Látex Interior", description: "Pintura económica para interiores de alto rendimiento", category: "latex" },
      { id: "latex-exterior", name: "Látex Exterior", description: "Resistente a la intemperie y rayos UV", category: "latex" },
      { id: "latex-lavable", name: "Látex Lavable", description: "Alta resistencia al lavado y manchas", category: "latex" },
      { id: "latex-satinado", name: "Látex Satinado", description: "Acabado semi-brillante para interiores", category: "latex" },
    ],
  },
  {
    id: "impermeabilizantes",
    name: "Impermeabilizantes",
    description: "Productos para proteger superficies de la humedad",
    products: [
      { id: "membrana-liquida", name: "Membrana Líquida", description: "Impermeabilizante elástico para techos", category: "impermeabilizantes" },
      { id: "hidrofugo", name: "Hidrofugo para Paredes", description: "Protección invisible contra humedad en muros", category: "impermeabilizantes" },
      { id: "sellador-grietas", name: "Sellador de Grietas", description: "Masilla elástica para fisuras y juntas", category: "impermeabilizantes" },
    ],
  },
  {
    id: "esmaltes",
    name: "Esmaltes",
    description: "Esmaltes sintéticos y al agua para múltiples superficies",
    products: [
      { id: "esmalte-sintetico", name: "Esmalte Sintético Brillante", description: "Alto brillo y durabilidad para metales y maderas", category: "esmaltes" },
      { id: "esmalte-mate", name: "Esmalte Sintético Mate", description: "Acabado mate elegante para interiores", category: "esmaltes" },
      { id: "esmalte-agua", name: "Esmalte al Agua", description: "Secado rápido y bajo olor", category: "esmaltes" },
      { id: "convertidor-oxido", name: "Convertidor de Óxido", description: "Transforma el óxido en superficie pintable", category: "esmaltes" },
    ],
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Productos especializados para uso industrial",
    products: [
      { id: "pintura-industrial", name: "Pintura Industrial", description: "Alta resistencia para ambientes industriales", category: "industrial" },
      { id: "anticorrosivo", name: "Anticorrosivo", description: "Protección superior contra la corrosión", category: "industrial" },
      { id: "pintura-alta-temp", name: "Pintura Alta Temperatura", description: "Resiste hasta 600°C", category: "industrial" },
    ],
  },
  {
    id: "entonadores",
    name: "Entonadores y Tintas",
    description: "Colorantes para personalizar pinturas",
    products: [
      { id: "entonador-universal", name: "Entonador Universal", description: "Compatible con pinturas al agua y sintéticas", category: "entonadores" },
      { id: "tinta-madera", name: "Tinta para Madera", description: "Colorantes penetrantes para maderas", category: "entonadores" },
    ],
  },
  {
    id: "maderas",
    name: "Maderas",
    description: "Productos para protección y decoración de maderas",
    products: [
      { id: "barniz-marino", name: "Barniz Marino", description: "Máxima protección contra agua y sol", category: "maderas" },
      { id: "barniz-interior", name: "Barniz Interior", description: "Acabado brillante para muebles", category: "maderas" },
      { id: "lasur", name: "Lasur Protector", description: "Protección y decoración para maderas exteriores", category: "maderas" },
      { id: "aceite-teca", name: "Aceite de Teca", description: "Nutre y protege maderas nobles", category: "maderas" },
    ],
  },
  {
    id: "epoxi",
    name: "Epoxi y Poliuretanos",
    description: "Recubrimientos de alta resistencia química y mecánica",
    products: [
      { id: "epoxi-pisos", name: "Epoxi para Pisos", description: "Recubrimiento industrial de alto tráfico", category: "epoxi" },
      { id: "poliuretano", name: "Poliuretano Brillante", description: "Acabado cristalino de alta dureza", category: "epoxi" },
      { id: "epoxi-piletas", name: "Epoxi para Piletas", description: "Resistente al cloro y productos químicos", category: "epoxi" },
    ],
  },
  {
    id: "auxiliares",
    name: "Productos Auxiliares",
    description: "Complementos para preparación y aplicación de pinturas",
    products: [
      { id: "aguarras", name: "Aguarrás", description: "Diluyente y limpiador de herramientas", category: "auxiliares" },
      { id: "desengrasante", name: "Desengrasante", description: "Preparador de superficies", category: "auxiliares" },
      { id: "removedor", name: "Removedor de Pinturas", description: "Elimina capas de pintura vieja", category: "auxiliares" },
    ],
  },
  {
    id: "fondos",
    name: "Fondos",
    description: "Imprimaciones y selladores para preparación de superficies",
    products: [
      { id: "fondo-blanco", name: "Fondo Blanco", description: "Imprimación para superficies nuevas", category: "fondos" },
      { id: "fijador-sellador", name: "Fijador Sellador", description: "Sella superficies porosas", category: "fondos" },
      { id: "fondo-anticorrosivo", name: "Fondo Anticorrosivo", description: "Protección base para metales", category: "fondos" },
    ],
  },
  {
    id: "diluyentes",
    name: "Diluyentes",
    description: "Solventes para dilución y limpieza",
    products: [
      { id: "diluyente-sintetico", name: "Diluyente Sintético", description: "Para esmaltes y barnices", category: "diluyentes" },
      { id: "thinner", name: "Thinner", description: "Diluyente universal", category: "diluyentes" },
      { id: "acetona", name: "Acetona", description: "Limpiador y diluyente de alta evaporación", category: "diluyentes" },
    ],
  },
  {
    id: "tintometrico",
    name: "Sistema Tintométrico",
    description: "Sistema de coloración computarizado",
    products: [
      { id: "base-tintometrica", name: "Base Tintométrica", description: "Base para sistema de coloración", category: "tintometrico" },
      { id: "colorante-tinto", name: "Colorantes Tintométricos", description: "Pigmentos de alta concentración", category: "tintometrico" },
    ],
  },
  {
    id: "revestimientos",
    name: "Revestimientos Texturados Acrílicos",
    description: "Recubrimientos texturados para fachadas",
    products: [
      { id: "texturado-fino", name: "Texturado Fino", description: "Acabado texturado suave", category: "revestimientos" },
      { id: "texturado-grueso", name: "Texturado Grueso", description: "Textura rústica pronunciada", category: "revestimientos" },
      { id: "revestimiento-acrilico", name: "Revestimiento Acrílico", description: "Flexible y resistente a fisuras", category: "revestimientos" },
    ],
  },
  {
    id: "piletas",
    name: "Pinturas para Piletas",
    description: "Pinturas especiales para piscinas",
    products: [
      { id: "pintura-pileta-agua", name: "Pintura para Piletas al Agua", description: "Fácil aplicación, bajo olor", category: "piletas" },
      { id: "pintura-pileta-caucho", name: "Pintura Caucho Clorado", description: "Máxima durabilidad y resistencia", category: "piletas" },
    ],
  },
  {
    id: "pisos",
    name: "Pinturas para Pisos",
    description: "Recubrimientos resistentes para pisos",
    products: [
      { id: "piso-cemento", name: "Pintura para Pisos de Cemento", description: "Resistente al tránsito y abrasión", category: "pisos" },
      { id: "piso-exterior", name: "Pintura Piso Exterior", description: "Antideslizante y resistente a la intemperie", category: "pisos" },
    ],
  },
  {
    id: "morteros",
    name: "Morteros en Polvo",
    description: "Mezclas en polvo para construcción y reparación",
    products: [
      { id: "mortero-reparacion", name: "Mortero de Reparación", description: "Para arreglo de grietas y fisuras", category: "morteros" },
      { id: "pegamento-ceramicos", name: "Pegamento para Cerámicos", description: "Adhesivo de alta adherencia", category: "morteros" },
      { id: "nivelador", name: "Nivelador de Pisos", description: "Autonivelante para pisos irregulares", category: "morteros" },
    ],
  },
]

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
