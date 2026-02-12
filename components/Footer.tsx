import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const DEMO_PHONE_1 = "+91 90000 00001"
const DEMO_PHONE_2 = "+91 90000 00002"
const DEMO_EMAIL = "info@rajproperties-demo.com"
const DEMO_WHATSAPP = "919000000002"

export default function Footer() {
  return (
    <footer className="bg-pure-black border-t border-dark-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-light-gray to-medium-gray rounded-lg flex items-center justify-center">
                <span className="text-pure-black font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-light-gray">Raj Properties</h3>
                <p className="text-xs text-medium-gray">Premium Real Estate Solutions</p>
              </div>
            </div>
            <p className="text-medium-gray text-sm leading-relaxed">
              Your trusted partner in premium real estate solutions across top residential and commercial locations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-lg font-semibold text-light-gray">Quick Links</h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/properties", label: "Properties" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-medium-gray hover:text-light-gray transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-lg font-semibold text-light-gray">Services</h4>
            <div className="space-y-2">
              {[
                "Property Buying",
                "Property Selling",
                "Property Investment",
                "Legal Assistance",
                "Property Management",
              ].map((service) => (
                <p key={service} className="text-medium-gray text-sm">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-montserrat text-lg font-semibold text-light-gray">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-medium-gray mt-1 flex-shrink-0" />
                <p className="text-medium-gray text-sm">
                  221 Business Avenue <br />
                  Sector 99, Metro City <br />
                  India - 999999
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-medium-gray flex-shrink-0" />
                <a href="tel:+919000000001" className="text-medium-gray hover:text-light-gray transition-colors text-sm">
                  {DEMO_PHONE_1}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-medium-gray flex-shrink-0" />
                <a href="tel:+919000000002" className="text-medium-gray hover:text-light-gray transition-colors text-sm">
                  {DEMO_PHONE_2}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-medium-gray flex-shrink-0" />
                <a href={`mailto:${DEMO_EMAIL}`} className="text-medium-gray hover:text-light-gray transition-colors text-sm">
                  {DEMO_EMAIL}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a
                  href={`https://wa.me/${DEMO_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors text-sm"
                >
                  WhatsApp (Demo)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
