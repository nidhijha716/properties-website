import { Shield, Clock, Award, Users, HeadphonesIcon, TrendingUp } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description:
      "No hidden charges or surprises. We prioritize clear communication and honest dealings in every transaction.",
  },
  {
    icon: Clock,
    title: "Quick Response Time",
    description:
      "We respect your time. Expect responses within 2 hours and consistent support throughout your property journey.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "With over 25 years in the industry and 500+ happy clients, our success speaks for our service and results.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description:
      "Every client receives dedicated attention and tailored recommendations based on budget and lifestyle goals.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Whether it's a question or concern, we’re here to help—any time, any day.",
  },
  {
    icon: TrendingUp,
    title: "Local Market Expertise",
    description:
      "Our deep knowledge of East Delhi & Noida helps you make confident, informed property decisions.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-40" />
      <div className="circular-overlay top-20 right-20 animate-float" />
      <div className="circular-overlay bottom-20 left-20 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-4">
            Why Choose Raj Properties?
          </h2>
          <p className="font-montserrat text-lg text-medium-gray max-w-2xl mx-auto">
            Discover why hundreds of families across East Delhi and Noida trust us with their most valuable investments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover-lift stagger-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-light-gray to-medium-gray rounded-2xl flex items-center justify-center mb-6">
                <reason.icon className="w-8 h-8 text-pure-black" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-light-gray mb-4">{reason.title}</h3>
              <p className="text-medium-gray leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
