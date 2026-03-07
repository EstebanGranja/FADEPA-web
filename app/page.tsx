import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Droplets, Shield, Paintbrush, Sparkles } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Pinturas de Calidad",
    description: "Amplia variedad de pinturas látex, esmaltes y revestimientos de las mejores marcas.",
  },
  {
    icon: Shield,
    title: "Impermeabilizantes",
    description: "Protección total para techos, paredes y superficies contra la humedad.",
  },
  {
    icon: Paintbrush,
    title: "Productos Industriales",
    description: "Soluciones especializadas para proyectos industriales y profesionales.",
  },
  {
    icon: Sparkles,
    title: "Asesoramiento Experto",
    description: "Te ayudamos a elegir el producto ideal para cada proyecto.",
  },
]

const categories = [
  { name: "Látex", color: "bg-chart-1" },
  { name: "Esmaltes", color: "bg-chart-2" },
  { name: "Impermeabilizantes", color: "bg-chart-3" },
  { name: "Industrial", color: "bg-chart-4" },
  { name: "Maderas", color: "bg-chart-5" },
  { name: "Revestimientos", color: "bg-primary" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              <span className="text-balance">FADEPA Pinturería</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 sm:text-xl">
              Soluciones en pinturas, revestimientos y productos para el hogar y la industria
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/80">
              En FADEPA encontrás una amplia gama de productos de pintura, revestimientos, aditivos y soluciones para pintura con excelente atención al cliente en Alta Gracia y alrededores.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/productos">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Ver productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Más de años brindando soluciones en pintura para hogares e industrias
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border bg-card transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Nuestras Categorías
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explorá nuestro amplio catálogo de productos
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link key={category.name} href="/productos">
                <Card className="group cursor-pointer border-border bg-card transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`mx-auto h-16 w-16 rounded-full ${category.color} opacity-80 transition-opacity group-hover:opacity-100`} />
                    <h3 className="mt-4 font-medium text-card-foreground">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/productos">
              <Button variant="outline" size="lg">
                Ver todas las categorías
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-secondary px-8 py-16 text-center lg:px-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
              ¿Tenés un proyecto en mente?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-secondary-foreground/80">
              Contactanos y te ayudamos a encontrar los productos perfectos para tu obra. Ofrecemos asesoramiento personalizado.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://wa.me/543535657327"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Escribinos por WhatsApp
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                  Ver información de contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
