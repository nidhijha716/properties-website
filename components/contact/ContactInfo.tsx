import { Phone, Mail, MessageCircle, Clock } from "lucide-react"

// ✅ Demo constants
const DEMO_PHONE = "+91 90000 00001"
const DEMO_WHATSAPP_NUMBER = "919000000002"
const DEMO_EMAIL = "info@rajproperties-demo.com"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: DEMO_PHONE,
    description: "Call us for immediate assistance (Demo)",
    action: "tel:+919000000001",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 90000 00002",
    description: "Quick response via WhatsApp (Demo)",
    action: `https://wa.me/${DEMO_WHATSAPP_NUMBER}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: DEMO_EMAIL,
    description: "Send us your detailed requirements (Demo)",
    action: `mailto:${DEMO_EMAIL}`,
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
]

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="glass-card rounded-2xl p-8">
        <h3 className="font-montserrat text-2xl font-bold text-light-gray mb-6">
          Contact Information
        </h3>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              target={method.action.startsWith("http") ? "_blank" : undefined}
              rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-start space-x-4 p-4 glass-effect rounded-xl hover-lift transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center flex-shrink-0">
                <method.icon className="w-6 h-6 text-pure-black" />
              </div>

              <div>
                <h4 className="font-montserrat font-semibold text-light-gray mb-1">{method.title}</h4>
                <p className="font-montserrat text-light-gray mb-1">{method.value}</p>
                <p className="text-medium-gray text-sm">{method.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <div className="glass-card rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mr-4">
            <Clock className="w-6 h-6 text-pure-black" />
          </div>
          <h3 className="font-montserrat text-2xl font-bold text-light-gray">Business Hours</h3>
        </div>

        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-dark-gray last:border-b-0"
            >
              <span className="font-montserrat text-medium-gray">{schedule.day}</span>
              <span className="font-montserrat font-semibold text-light-gray">{schedule.hours}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 glass-effect rounded-xl">
          <p className="text-medium-gray text-sm">
            <strong className="text-light-gray">Emergency Contact:</strong> Demo support available 24/7 via WhatsApp
          </p>
        </div>
      </div>
    </div>
  )
}
