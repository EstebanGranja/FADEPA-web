"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Productos", href: "/productos" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00918e] shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 lg:px-8 lg:py-1">
        <div className="flex lg:flex-1">
          <Link href="/" className="block">
            <Image
              src="/images/fadepa-logo-header.jpeg"
              alt="FADEPA Pinturas"
              width={240}
              height={80}
              className="h-16 w-auto lg:h-[5rem]"
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:items-center">
          {navigation.map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && (
                <div className="mx-5 h-4 w-px bg-white/40" />
              )}
              <Link
                href={item.href}
                className={`cursor-pointer text-sm font-medium transition-colors hover:text-white ${
                  pathname === item.href
                    ? "text-white underline underline-offset-4 decoration-2"
                    : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://wa.me/543535657327"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 text-white shadow-[0_0_12px_rgba(37,211,102,0.4),0_2px_8px_rgba(0,0,0,0.35)] transition-all hover:bg-green-700 hover:shadow-[0_0_18px_rgba(37,211,102,0.6),0_3px_10px_rgba(0,0,0,0.4)]">
              <Image src="/images/whatsapp.png" alt="" width={20} height={20} className="mr-1 h-5 w-5" />
              WhatsApp
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 px-4 py-4 bg-[#00918e]">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-white/10 hover:text-white ${
                  pathname === item.href
                    ? "bg-white/20 text-white"
                    : "text-white/80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-white/20 pt-4 mt-2">
              <Link
                href="https://wa.me/543535657327"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-green-600 text-white shadow-[0_0_12px_rgba(37,211,102,0.4),0_2px_8px_rgba(0,0,0,0.35)] transition-all hover:bg-green-700 hover:shadow-[0_0_18px_rgba(37,211,102,0.6),0_3px_10px_rgba(0,0,0,0.4)]">
                  <Image src="/images/whatsapp.png" alt="" width={20} height={20} className="mr-1 h-5 w-5" />
                  WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </header>
  )
}
