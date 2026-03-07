import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, MapPin, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Nosotros | FADEPA Pinturería",
  description: "Conocé nuestra historia y compromiso con la calidad en pinturas y revestimientos en Alta Gracia, Córdoba.",
}

const values = [
  {
    icon: Award,
    title: "Calidad",
    description: "Trabajamos únicamente con productos de primera calidad de marcas reconocidas.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente es único y merece un asesoramiento adaptado a sus necesidades.",
  },
  {
    icon: MapPin,
    title: "Compromiso Local",
    description: "Orgullosos de servir a Alta Gracia y localidades vecinas desde hace años.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y eso se refleja en cada recomendación que damos.",
  },
]

export default function NosotrosPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Sobre Nosotros
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Somos una pinturería familiar ubicada en el corazón de Alta Gracia, Córdoba, dedicada a brindar las mejores soluciones en pinturas y revestimientos para hogares e industrias.
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
                  FADEPA nació con la visión de ofrecer productos de pintura de alta calidad junto con un servicio de asesoramiento personalizado. Desde nuestros inicios, nos hemos comprometido a entender las necesidades de cada cliente y brindar soluciones efectivas.
                </p>
                <p className="leading-relaxed">
                  A lo largo de los años, hemos crecido junto a la comunidad de Alta Gracia, expandiendo nuestra oferta de productos para incluir desde pinturas tradicionales hasta las últimas innovaciones en revestimientos y productos industriales.
                </p>
                <p className="leading-relaxed">
                  Hoy, FADEPA es sinónimo de confianza y calidad en pinturería, atendiendo tanto a profesionales de la construcción como a particulares que buscan transformar sus espacios.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-muted">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <span className="font-[family-name:var(--font-display)] text-6xl font-bold text-primary">FADEPA</span>
                    <p className="mt-2 text-muted-foreground">Alta Gracia, Córdoba</p>
                  </div>
                </div>
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
              Los principios que guían nuestro trabajo día a día
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Mission Section */}
      <section className="bg-foreground py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-background sm:text-3xl">
              Nuestra Misión
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-background/80">
              Brindar a nuestros clientes las mejores soluciones en pinturas y revestimientos, combinando productos de calidad superior con un asesoramiento experto y una atención cercana que nos distingue.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary">+500</span>
                <p className="mt-1 text-sm text-background/70">Productos disponibles</p>
              </div>
              <div className="text-center">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary">17</span>
                <p className="mt-1 text-sm text-background/70">Categorías</p>
              </div>
              <div className="text-center">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary">+1000</span>
                <p className="mt-1 text-sm text-background/70">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
