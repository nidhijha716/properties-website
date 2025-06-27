import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

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
              Your trusted partner in finding the perfect property. We specialize in premium real estate solutions
              across Eastend apts, Vasundhra Enclave, New Ashok Nagar, Noida and Greater Noida.
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
                  B-294, Shop No. 4 <br />
                  New Ashok Nagar, Opp. East End Apts.<br />
                  New Delhi - 110096
                </p>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-medium-gray flex-shrink-0" />
                <a
                  href="tel:+919810233615"
                  className="text-medium-gray hover:text-light-gray transition-colors text-sm"
                >
                  +91 9810233615
                </a>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-medium-gray flex-shrink-0" />
                <a
                  href="tel:+919810233625"
                  className="text-medium-gray hover:text-light-gray transition-colors text-sm"
                >
                  +91 9810233625
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-medium-gray flex-shrink-0" />
                <a
                  href="mailto:sunilverma3625@gmail.com"
                  className="text-medium-gray hover:text-light-gray transition-colors text-sm"
                >
                  sunilverma3625@gmail.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919810233615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-400 transition-colors text-sm"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}









