"use client"

import { useEffect, useState } from "react"
import { Building, Users, Calendar, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 1000,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied customers who found their dream homes",
  },
  {
    icon: Calendar,
    number: 25,
    suffix: "+",
    label: "Years Experience",
    description: "Decades of excellence in real estate",
  },
  {
    icon: Building,
    number: 100,
    suffix: "+",
    label: "Properties Sold",
    description: "Successful property transactions completed",
  },
  {
    icon: MapPin,
    number: 5,
    suffix: "+",
    label: "Locations Covered",
    description: "Prime locations across NCR region",
  },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="font-playfair text-4xl md:text-5xl font-bold text-light-gray">
      {count}
      {suffix}
    </span>
  )
}

export default function Statistics() {
  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-4">Our Achievements</h2>
          <p className="font-montserrat text-lg text-medium-gray max-w-2xl mx-auto">
            Numbers that speak for our commitment and success in the real estate industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 text-center hover-lift stagger-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-light-gray to-medium-gray rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-pure-black" />
              </div>
              <div className="mb-4">
                <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-light-gray mb-2">{stat.label}</h3>
              <p className="text-medium-gray text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
