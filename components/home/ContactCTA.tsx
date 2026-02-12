import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

// ✅ Centralized demo constants
const DEMO_PHONE = "+91 90000 00001"
const DEMO_TEL = "+919000000001"
const DEMO_EMAIL = "contact@rajproperties-demo.com"
const DEMO_ADDRESS = "221 Business Avenue, Sector 99, Metro City"
const DEMO_WHATSAPP = "919000000002"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      <div className="absolute inset-0 gradient-overlay opacity-50" />
      <div className="circular-overlay top-20 left-10 animate-float" />
      <div
        className="circular-overlay bottom-20 right-10 animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-6">
              Ready to Find Your Dream Property?
            </h2>

            <p className="font-montserrat text-lg text-medium-gray mb-8 max-w-2xl mx-auto">
              Let our expert team help you discover the perfect property that matches your vision and budget.
              Contact us today for a personalized consultation.
            </p>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="glass-effect rounded-xl p-6 hover-lift">
                <Phone className="w-8 h-8 text-light-gray mx-auto mb-3" />
                <h3 className="font-montserrat font-semibold text-light-gray mb-2">
                  Call Us
                </h3>
                <p className="text-medium-gray text-sm">{DEMO_PHONE}</p>
              </div>

              <div className="glass-effect rounded-xl p-6 hover-lift">
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-montserrat font-semibold text-light-gray mb-2">
                  WhatsApp
                </h3>
                <p className="text-medium-gray text-sm">Quick Response (Demo)</p>
              </div>

              <div className="glass-effect rounded-xl p-6 hover-lift">
                <Mail className="w-8 h-8 text-light-gray mx-auto mb-3" />
                <h3 className="font-montserrat font-semibold text-light-gray mb-2">
                  Email
                </h3>
                <p className="text-medium-gray text-sm">{DEMO_EMAIL}</p>
              </div>

              <div className="glass-effect rounded-xl p-6 hover-lift">
                <MapPin className="w-8 h-8 text-light-gray mx-auto mb-3" />
                <h3 className="font-montserrat font-semibold text-light-gray mb-2">
                  Visit Us
                </h3>
                <p className="text-medium-gray text-sm">{DEMO_ADDRESS}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-montserrat font-semibold px-8"
                asChild
              >
                <a
                  href={`https://wa.me/${DEMO_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-light-gray text-pure-black hover:bg-medium-gray font-montserrat font-semibold px-8"
                asChild
              >
                <a href={`tel:${DEMO_TEL}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
