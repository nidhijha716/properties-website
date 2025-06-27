import { Bed, Bath, Square, Car, Home, TreePine } from "lucide-react"

const specifications = [
  {
    icon: Bed,
    label: "Bedrooms",
    value: "4",
    description: "Spacious bedrooms with attached bathrooms",
  },
  {
    icon: Bath,
    label: "Bathrooms",
    value: "3",
    description: "Modern bathrooms with premium fixtures",
  },
  {
    icon: Square,
    label: "Built-up Area",
    value: "2,500 sq ft",
    description: "Total built-up area including all spaces",
  },
  {
    icon: Home,
    label: "Plot Area",
    value: "3,000 sq ft",
    description: "Total plot area with garden space",
  },
  {
    icon: Car,
    label: "Parking",
    value: "2 Cars",
    description: "Covered parking for two vehicles",
  },
  {
    icon: TreePine,
    label: "Garden",
    value: "Private",
    description: "Landscaped private garden area",
  },
]

export default function PropertySpecs() {
  return (
    <div className="glass-card rounded-2xl p-8">
      <h2 className="font-montserrat text-2xl font-semibold text-light-gray mb-6">Property Specifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specifications.map((spec, index) => (
          <div key={index} className="glass-effect rounded-xl p-6 hover-lift">
            <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mb-4">
              <spec.icon className="w-6 h-6 text-pure-black" />
            </div>
            <h3 className="font-montserrat font-semibold text-light-gray mb-1">{spec.label}</h3>
            <p className="font-playfair text-xl font-bold text-light-gray mb-2">{spec.value}</p>
            <p className="text-medium-gray text-sm">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
