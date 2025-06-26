import { MapPin, Calendar, Building, User } from "lucide-react"

export default function PropertyDetails() {
  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="mb-6">
        <h1 className="font-playfair text-3xl md:text-4xl font-bold text-light-gray mb-4">Luxury Villa in Sector 62</h1>
        <div className="flex items-center text-medium-gray mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <span className="font-montserrat text-lg">Sector 62, Noida, Uttar Pradesh</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-playfair text-4xl font-bold text-light-gray">₹2.8 Cr</p>
          <div className="text-right">
            <p className="text-medium-gray text-sm">Price per sq ft</p>
            <p className="font-montserrat text-lg font-semibold text-light-gray">₹11,200</p>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-gray pt-6">
        <h2 className="font-montserrat text-xl font-semibold text-light-gray mb-4">Property Description</h2>
        <p className="text-medium-gray leading-relaxed mb-6">
          Experience luxury living at its finest in this exquisite 4BHK villa located in the prestigious Sector 62,
          Noida. This meticulously designed property offers spacious interiors, premium finishes, and modern amenities
          that cater to your every need. The villa features a contemporary architectural design with large windows that
          flood the space with natural light, creating an ambiance of warmth and elegance.
        </p>
        <p className="text-medium-gray leading-relaxed">
          The property is strategically located with excellent connectivity to major business hubs, educational
          institutions, and healthcare facilities. With its prime location and exceptional features, this villa
          represents the perfect blend of comfort, convenience, and luxury living.
        </p>
      </div>

      <div className="border-t border-dark-gray pt-6 mt-6">
        <h2 className="font-montserrat text-xl font-semibold text-light-gray mb-4">Property Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-3">
            <Building className="w-5 h-5 text-medium-gray" />
            <div>
              <p className="text-medium-gray text-sm">Property Type</p>
              <p className="font-montserrat font-semibold text-light-gray">Independent Villa</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-medium-gray" />
            <div>
              <p className="text-medium-gray text-sm">Year Built</p>
              <p className="font-montserrat font-semibold text-light-gray">2022</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-medium-gray" />
            <div>
              <p className="text-medium-gray text-sm">Ownership</p>
              <p className="font-montserrat font-semibold text-light-gray">Freehold</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Building className="w-5 h-5 text-medium-gray" />
            <div>
              <p className="text-medium-gray text-sm">Furnishing</p>
              <p className="font-montserrat font-semibold text-light-gray">Semi-Furnished</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
