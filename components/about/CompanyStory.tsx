import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver personalized and transparent real estate services that go beyond transactions—ensuring every client feels informed, valued, and supported at every step.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted and preferred real estate consultancy across East Delhi and Noida, known for our expertise, reliability, and commitment to client success.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "We believe in transparency, honesty, and building long-term relationships with our clients. Every transaction is handled with care, attention to detail, and unwavering dedication of doing what's right for our clients.",
  },
]

export default function CompanyStory() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-8 text-center">Our Story</h2>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <p className="text-medium-gray text-lg leading-relaxed mb-6">
              Raj Properties was established in 2001 with a clear mission—to simplify property buying, selling, and renting across East Delhi and Noida. Starting as a local consultancy in New Ashok Nagar, we’ve grown into a trusted name with over 1000 happy clients across New Ashok Nagar, Mayur Vihar, Vasundhara Enclave, Noida and Greater Noida. Our commitment to personalized service and transparency sets us apart in the local real estate market.

            </p>
            <p className="text-medium-gray text-lg leading-relaxed mb-6">
              Our journey began when our founder, Mr. Sunil Verma, recognized the need for a more personalized and transparent approach to real estate. With a clear vision and deep commitment to client satisfaction, he established Raj Properties to offer exceptional service that goes beyond just buying and selling. Even today, he continues to own and run the business almost single-handedly, ensuring every client receives the same level of dedication and trust that defined our beginnings.

            </p>
            <p className="text-medium-gray text-lg leading-relaxed">
             Today, we continue to uphold these founding principles while embracing innovation and technology to better serve our clients. Every property transaction reflects our dedication to excellence, transparency, and personal attention. At Raj Properties, we remain committed to helping people not just find properties—but discover homes where they truly belong.

            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
