import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import PropertyDetails from "@/components/property/PropertyDetails"
import PropertyGallery from "@/components/property/PropertyGallery"
import PropertySpecs from "@/components/property/PropertySpecs"
import PropertyAmenities from "@/components/property/PropertyAmenities"
import ContactSidebar from "@/components/property/ContactSidebar"

export const metadata = {
  title: "Property Details - Raj Properties",
  description:
    "Detailed information about this premium property including specifications, amenities, and contact details.",
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-pure-black">
      <Navigation />
      <div className="pt-20">
        <PropertyGallery />
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <PropertyDetails />
              <PropertySpecs />
              <PropertyAmenities />
            </div>
            <div className="lg:col-span-1">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
