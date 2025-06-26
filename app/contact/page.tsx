import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import OfficeLocation from "@/components/contact/OfficeLocation"

export const metadata = {
  title: "Contact Us - Raj Properties",
  description:
    "Get in touch with Raj Properties for all your real estate needs. Visit our office in Sector 62, Noida or contact us via phone, email, or WhatsApp.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pure-black">
      <Navigation />
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
            <OfficeLocation />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
