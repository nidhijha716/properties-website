import Image from "next/image"
import { Award, Users, Calendar, TrendingUp } from "lucide-react"

const achievements = [
  {
    icon: Users,
    number: "1000+",
    label: "Happy Clients",
    description: "Families who found their dream homes",
  },
  {
    icon: Calendar,
    number: "20+",
    label: "Years Experience",
    description: "Two Decades of real estate expertise",
  },
  
]

export default function FounderProfile() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-20" />
      <div className="circular-overlay top-10 left-10 animate-float" />
      <div className="circular-overlay bottom-10 right-10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-16 text-center">
            Meet Our Founder
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-card rounded-2xl p-8 hover-lift">
              <div className="relative w-full h-96 rounded-xl overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Raj Kumar - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-bold text-light-gray mb-2">Raj Kumar</h3>
                <p className="font-montserrat text-medium-gray mb-4">Founder & CEO</p>
                <p className="text-medium-gray text-sm">"Building dreams, one property at a time"</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-montserrat text-2xl font-bold text-light-gray mb-4">A Visionary Leader</h3>
                <p className="text-medium-gray leading-relaxed mb-4">
               Mr. Sunil Verma founded Raj Properties in 20__ with a vision to offer a more transparent, personalized, and reliable real estate experience. His expertise spans both residential and commercial properties, with a strong presence in Eastend Apartments, Vasundhara Enclave, New Ashok Nagar, Mayur Vihar, Noida, and Greater Noida. Under his dedicated leadership, Raj Properties has become a trusted name known for its commitment to honesty, client satisfaction, and long-term relationships.


                </p>
                <p className="text-medium-gray leading-relaxed mb-4">
                 His expertise covers both residential and commercial properties, with a special focus on premium and builder-floor developments. Under his leadership, Raj Properties has built a reputation for honesty, client-first service, and long-term relationships that go beyond just transactions.

                </p>
                <p className="text-medium-gray leading-relaxed">
                 Mr.Sunil Verma believes that every client deserves personalized attention and expert guidance throughout their property journey. His hands-on approach, transparent communication, and commitment to long-term relationships have earned him the trust of hundreds of satisfied clients across East Delhi and Noida.

                </p>
              </div>

              
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover-lift stagger-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-pure-black" />
                </div>
                <p className="font-playfair text-2xl font-bold text-light-gray mb-1">{achievement.number}</p>
                <h4 className="font-montserrat font-semibold text-light-gray mb-2">{achievement.label}</h4>
                <p className="text-medium-gray text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
