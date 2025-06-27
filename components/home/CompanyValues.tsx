import { Shield, Award, Users, Clock } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "We believe in complete transparency in all our dealings, ensuring you make informed decisions with confidence.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description:
      "Our commitment to excellence drives us to deliver exceptional service that exceeds your expectations.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "Your needs are our priority. We tailor our services to match your unique requirements and preferences.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We value your time and ensure all processes are completed efficiently without compromising on quality.",
  },
]

export default function CompanyValues() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-30" />
      <div className="circular-overlay top-10 right-20 animate-float" />
      <div className="circular-overlay bottom-10 left-20 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-4">Our Core Values</h2>
          <p className="font-montserrat text-lg text-medium-gray max-w-2xl mx-auto">
            Built on a foundation of trust, excellence, and unwavering commitment to our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 text-center hover-lift stagger-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-light-gray to-medium-gray rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-pure-black" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-light-gray mb-4">{value.title}</h3>
              <p className="text-medium-gray leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
