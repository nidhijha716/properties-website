

import { MapPin, Building, Users, TrendingUp } from "lucide-react"

const serviceAreas = [
  {
    name: "New Ashok Nagar",
    // properties: "150+",
    // avgPrice: "₹80 Lakh",
    description: "Well-connected locality with a mix of builder floors and residential apartments",
  },
  {
    name: "Mayur Vihar Phase 1",
    // properties: "120+",
    // avgPrice: "₹1.4 Cr",
    description: "Established neighborhood with schools, metro access, and commercial hubs",
  },
  {
    name: "Vasundhara Enclave",
    // properties: "90+",
    // avgPrice: "₹1.1 Cr",
    description: "Peaceful residential area near Noida border with green spaces and amenities",
  },
  {
    name: "Noida",
    // properties: "100+",
    // avgPrice: "₹1.5 Cr",
    description: "Popular residential area with malls, schools, and smooth connectivity",
  },
  
  {
    name: "Greater Noida",
    // properties: "130+",
    // avgPrice: "₹85 Lakh",
    description: "Rapidly growing hub with modern townships and infrastructure",
  },
]

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-4">Our Service Areas</h2>
          <p className="font-montserrat text-lg text-medium-gray max-w-2xl mx-auto">
            We specialize in key areas across East Delhi and Noida, offering unmatched local expertise and client trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift stagger-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pure-black" />
                </div>
              
              </div>

              <h3 className="font-montserrat text-lg font-bold text-light-gray mb-2">{area.name}</h3>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-medium-gray">
                 
                </div>
              </div>

              <p className="text-medium-gray text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 glass-card rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-pure-black" />
              </div>
              <p className="font-playfair text-2xl font-bold text-light-gray mb-1">5+</p>
              <p className="font-montserrat font-semibold text-light-gray mb-2">Locations</p>
              <p className="text-medium-gray text-sm">Across East Delhi & Noida</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-pure-black" />
              </div>
              <p className="font-playfair text-2xl font-bold text-light-gray mb-1">100+</p>
              <p className="font-montserrat font-semibold text-light-gray mb-2">Properties</p>
              <p className="text-medium-gray text-sm">Sold or Rented</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-pure-black" />
              </div>
              <p className="font-playfair text-2xl font-bold text-light-gray mb-1">1000+</p>
              <p className="font-montserrat font-semibold text-light-gray mb-2">Happy Clients</p>
              <p className="text-medium-gray text-sm">Across NCR</p>
            </div>
            <div>
             
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
