import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Zap, Layers, Headphones, Truck, Lightbulb, Target, Eye } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nosotros | FADEPA - Fábrica Argentina de Pinturas y Afines",
  description: "Conocé la historia de FADEPA S.A., fábrica argentina de pinturas y afines desde 1989 en Villa Nueva, Córdoba.",
}

const values = [
  {
    icon: Award,
    title: "Excelencia en Productos",
    description: "Elaboramos productos de primera calidad que cumplen los más altos estándares.",
  },
  {
    icon: Zap,
    title: "Calidad-Precio",
    description: "Competitividad en la ecuación calidad-precio para cada uno de nuestros productos.",
  },
  {
    icon: Layers,
    title: "Línea Completa",
    description: "Ofrecemos una línea completa de productos para el hogar y la obra.",
  },
  {
    icon: Headphones,
    title: "Atención Técnica",
    description: "Asesoramiento técnico personalizado para cada proyecto y necesidad.",
  },
  {
    icon: Truck,
    title: "Rápida Entrega",
    description: "Compromiso con la puntualidad y agilidad en cada despacho.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Sostenida",
    description: "Apostamos a la innovación tecnológica de forma continua.",
  },
]

export default function NosotrosPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Nuestra Empresa
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">FADEPA S.A.</span> — Fábrica Argentina de Pinturas y Afines. Desde 1989 elaboramos pinturas de calidad en Villa Nueva, Córdoba, para hogares y obras de todo el país.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="mt-16 bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Nuestra Historia
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  FADEPA nace en <span className="font-semibold text-foreground">1989</span>, en la localidad de Villa Nueva, provincia de Córdoba. Se origina como un pequeño emprendimiento que elabora una reducida línea de productos.
                </p>
                <p className="leading-relaxed">
                  A lo largo de más de tres décadas de trayectoria, la empresa ha desarrollado un crecimiento continuo y sólido, incorporando artículos hasta ofrecer una línea completa de productos que satisfacen todas las necesidades del hogar y de la obra.
                </p>
                <p className="leading-relaxed">
                  Hoy, FADEPA S.A. es una alternativa confiable en pinturas, presente en el mercado nacional por su permanencia, calidad, precios competitivos, puntualidad en la entrega y asesoramiento técnico personalizado.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-primary">
                <Image
                  src="/images/local.jpeg"
                  alt="FADEPA Pinturas y Afines"
                  width={600}
                  height={600}
                  className="h-72 w-full object-cover sm:h-80 lg:h-96"
                />
                <p className="py-3 text-center text-sm text-primary-foreground/80">
                  Av. Hipólito Yrigoyen 1200, Alta Gracia, Córdoba
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Nuestros Valores
            </h2>
            <p className="mt-4 text-muted-foreground">
              Los pilares que sustentan nuestra presencia en el mercado
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="border-border bg-card text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
