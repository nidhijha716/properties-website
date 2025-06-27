import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import PropertiesHeader from "@/components/properties/PropertiesHeader"
import PropertyFilters from "@/components/properties/PropertyFilters"
import PropertyGrid from "@/components/properties/PropertyGrid"

export const metadata = {
  title: "Properties - Raj Properties",
  description: "Browse our extensive collection of premium properties in Noida, Greater Noida, and Indirapuram.",
}

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-pure-black">
      <Navigation />
      <PropertiesHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <PropertyFilters />
          </div>
          <div className="lg:col-span-3">
            <PropertyGrid />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
