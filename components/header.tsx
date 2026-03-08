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
    <header className="sticky top-0 z-50 w-full bg-[#019191] shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
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
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menú"
            className="text-white hover:bg-white/10"
          >
            <Menu className="h-6 w-6" />
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
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-[#019991] px-6 py-6 shadow-lg">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/fadepa-logo-header.jpeg"
                  alt="FADEPA Pinturas"
                  width={240}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="text-white hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors hover:bg-white/10 hover:text-white ${
                        pathname === item.href
                          ? "bg-white/20 text-white"
                          : "text-white/80"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
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
        </div>
      )}
    </header>
  )
}
