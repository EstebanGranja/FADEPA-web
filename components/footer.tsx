import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

const categories = [
  "Látex",
  "Esmaltes",
  "Impermeabilizantes",
  "Industrial",
  "Maderas",
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-secondary-foreground">
                FADEPA
              </span>
              <span className="ml-2 text-xs font-medium tracking-widest text-secondary-foreground/70">PINTURAS</span>
            </Link>
            <p className="text-sm leading-relaxed text-secondary-foreground/70">
              Soluciones en pinturas, revestimientos y productos para el hogar y la industria en Alta Gracia, Córdoba.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/fadepa.pinturas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100057578284156"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/70 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation & Categories Wrapper - Side by side on mobile, separate on desktop */}
          <div className="flex flex-row gap-8 md:contents">
            {/* Navigation */}
            <div className="flex-1 md:flex-none">
              <h3 className="mb-4 text-sm font-semibold text-secondary-foreground">Navegación</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Categories */}
            <div className="flex-1 md:flex-none">
              <h3 className="mb-4 text-sm font-semibold text-secondary-foreground">Categorías</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href="#"
                      className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-secondary-foreground">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/70">
                  Av. Hipólito Yrigoyen 1200, Alta Gracia, Córdoba
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <Link
                  href="tel:+543535657327"
                  className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                >
                  +54 3535 657327
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <Link
                  href="mailto:fadepa@pinturasfadepa.com.ar"
                  className="text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                >
                  fadepa@pinturasfadepa.com.ar
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
