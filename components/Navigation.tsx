"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <img
    src="/image/logo.png"
    alt="Raj Properties Logo"
    className="w-10 h-10 rounded-lg object-contain"
  />
  <div>
    <h1 className="font-playfair text-xl md:text-2xl font-bold text-light-gray">Raj Properties</h1>
    <p className="text-xs text-medium-gray hidden md:block">Premium Real Estate Solutions</p>
  </div>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-montserrat text-sm font-medium transition-colors hover:text-light-gray ${
                  pathname === item.href ? "text-light-gray" : "text-medium-gray"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              size="sm"
              variant="outline"
              className="border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black"
              asChild
            >
              <a href="tel:+919810233615">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/919810233615" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-light-gray" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-montserrat text-sm font-medium transition-colors hover:text-light-gray ${
                    pathname === item.href ? "text-light-gray" : "text-medium-gray"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex space-x-3 pt-4 border-t border-dark-gray">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black flex-1"
                  asChild
                >
                  <a href="tel:+919810233615">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </a>
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white flex-1" asChild>
                  <a href="https://wa.me/919810233615" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
