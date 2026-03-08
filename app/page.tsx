import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Droplets, Shield, Paintbrush, Sparkles } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Pinturas de Calidad",
    description: "Amplia variedad de pinturas látex, esmaltes y revestimientos de las mejores marcas.",
    image: "/images/pinturas.jpeg",
  },
  {
    icon: Shield,
    title: "Impermeabilizantes",
    description: "Protección total para techos, paredes y superficies contra la humedad.",
    image: "/images/impermeabilizantes.jpeg",
  },
  {
    icon: Paintbrush,
    title: "Productos Industriales",
    description: "Soluciones especializadas para proyectos industriales y profesionales.",
    image: "/images/industriales.jpeg",
  },
  {
    icon: Sparkles,
    title: "Asesoramiento Experto",
    description: "Te ayudamos a elegir el producto ideal para cada proyecto.",
    image: "/images/asesoramiento.jpeg",
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
      <section className="relative overflow-hidden bg-primary pb-16 pt-12 lg:pb-20 lg:pt-16">
        {/* Three diagonal wavy lines from top-right to bottom-left */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Line 1 - Top */}
          <path
            d="M1300 -50 Q1000 100 800 150 Q600 200 400 250 Q200 300 0 200"
            stroke="white"
            strokeWidth="3"
            fill="none"
            opacity="0.3"
          />
          {/* Line 2 - Middle */}
          <path
            d="M1350 50 Q1050 200 850 280 Q650 360 450 380 Q250 400 -50 350"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            opacity="0.2"
          />
          {/* Line 3 - Bottom */}
          <path
            d="M1400 180 Q1100 350 900 420 Q700 490 500 520 Q300 550 -100 500"
            stroke="white"
            strokeWidth="2"
            fill="none"
            opacity="0.15"
          />
        </svg>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              <span className="text-balance">FADEPA Pinturería</span>
            </h1>
            <p className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold leading-snug text-white drop-shadow-md sm:text-2xl lg:text-3xl">
              Soluciones en pinturas, revestimientos y productos para el hogar y la industria
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-white drop-shadow-sm sm:text-lg">
              En FADEPA encontrás una amplia gama de productos de pintura, revestimientos, aditivos y soluciones para pintura con excelente atención al cliente en Alta Gracia y alrededores.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/productos">
                <Button size="lg" className="cursor-pointer bg-secondary text-white hover:bg-secondary/90">
                  Ver productos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10">
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Features Section */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Más de 25 años brindando soluciones en pintura para hogares e industrias
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative h-60 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:h-68"
              >
                {/* Background Image */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/85 group-hover:via-black/50" />
                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/85 drop-shadow-sm">{feature.description}</p>
                </div>
              </div>
            ))}
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
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Escribinos por WhatsApp
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white/10">
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
