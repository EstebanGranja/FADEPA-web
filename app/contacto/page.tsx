import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | FADEPA Pinturería",
  description: "Contactanos para consultas sobre pinturas y revestimientos. Estamos en Av. Hipólito Yrigoyen 1200, Alta Gracia, Córdoba.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Av. Hipólito Yrigoyen 1200",
    subtitle: "Alta Gracia, Córdoba, Argentina",
    href: "https://maps.google.com/?q=Av.+Hipólito+Yrigoyen+1200,+Alta+Gracia,+Córdoba,+Argentina",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+54 3535 657327",
    subtitle: "Llamanos o escribinos por WhatsApp",
    href: "tel:+543535657327",
  },
  {
    icon: Mail,
    title: "Email",
    content: "fadepa@pinturasfadepa.com.ar",
    subtitle: "Respondemos en menos de 24 horas",
    href: "mailto:fadepa@pinturasfadepa.com.ar",
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    content: "Lunes a Viernes: 8:00 - 12:30 / 16:30 - 20:00",
    subtitle: "Sábados: 8:00 - 12:30",
    href: null,
  },
]

const socialLinks = [
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/fadepa.pinturas/",
    handle: "@fadepa.pinturas",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100057578284156",
    handle: "FADEPA Pinturería",
  },
]

export default function ContactoPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            ¿Tenés alguna consulta? Estamos para ayudarte. Contactanos por el medio que prefieras.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://wa.me/543535657327?text=Hola!%20Quiero%20hacer%20una%20consulta%20sobre%20productos%20de%20pintura."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90">
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribinos por WhatsApp
            </Button>
          </Link>
        </div>

        {/* Contact Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <Card key={item.title} className="border-border bg-card transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
              <CardHeader className="pb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-base font-semibold text-card-foreground">
                  {item.title}
                </CardTitle>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-2 block text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.content}
                  </Link>
                ) : (
                  <p className="mt-2 text-sm text-foreground">{item.content}</p>
                )}
                <p className="mt-1 text-xs text-muted-foreground">{item.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-12">
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
            Seguinos en Redes Sociales
          </h2>
          <div className="mt-6 flex justify-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="border-border bg-card transition-all hover:shadow-md hover:-translate-y-1">
                  <CardContent className="flex items-center gap-3 p-4">
                    <social.icon className="h-6 w-6 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{social.name}</p>
                      <p className="text-xs text-muted-foreground">{social.handle}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h2 className="text-center font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
            Nuestra Ubicación
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Visitanos en nuestra tienda en Alta Gracia
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.2!2d-64.4297!3d-31.6697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d7de5bcb70f9f%3A0x4ccfe0f0f0f0f0f0!2sAv.%20Hip%C3%B3lito%20Yrigoyen%201200%2C%20Alta%20Gracia%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de FADEPA Pinturería"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
