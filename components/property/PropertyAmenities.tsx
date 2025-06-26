import {
  Waves,
  Dumbbell,
  Shield,
  Zap,
  Wifi,
  Car,
  TreePine,
  Building,
  Users,
  PlayCircle,
  ShoppingCart,
  Stethoscope,
} from "lucide-react"

const amenities = [
  { icon: Waves, name: "Swimming Pool", available: true },
  { icon: Dumbbell, name: "Gymnasium", available: true },
  { icon: Shield, name: "24/7 Security", available: true },
  { icon: Zap, name: "Power Backup", available: true },
  { icon: Wifi, name: "High-Speed Internet", available: true },
  { icon: Car, name: "Covered Parking", available: true },
  { icon: TreePine, name: "Landscaped Gardens", available: true },
  { icon: Building, name: "Club House", available: true },
  { icon: Users, name: "Community Hall", available: false },
  { icon: PlayCircle, name: "Children's Play Area", available: true },
  { icon: ShoppingCart, name: "Shopping Complex", available: false },
  { icon: Stethoscope, name: "Medical Center", available: false },
]

export default function PropertyAmenities() {
  return (
    <div className="glass-card rounded-2xl p-8">
      <h2 className="font-montserrat text-2xl font-semibold text-light-gray mb-6">Amenities & Features</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className={`glass-effect rounded-xl p-4 text-center transition-all ${
              amenity.available ? "hover-lift border border-green-500/20" : "opacity-50 border border-red-500/20"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                amenity.available ? "bg-gradient-to-br from-light-gray to-medium-gray" : "bg-dark-gray"
              }`}
            >
              <amenity.icon className={`w-5 h-5 ${amenity.available ? "text-pure-black" : "text-medium-gray"}`} />
            </div>
            <p
              className={`font-montserrat text-sm font-medium ${
                amenity.available ? "text-light-gray" : "text-medium-gray"
              }`}
            >
              {amenity.name}
            </p>
            {amenity.available && <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2" />}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 glass-effect rounded-xl">
        <p className="text-medium-gray text-sm">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Available amenities are included with the property
        </p>
      </div>
    </div>
  )
}
