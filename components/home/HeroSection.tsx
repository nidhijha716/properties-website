"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/image/img1.jpg?height=800&width=1200",
      title: "DISCOVER YOUR DREAM PROPERTY",
      subtitle: "Luxury Living Redefined",
    },
    {
      image: "/image/img2.jpg?height=800&width=1200",
      title: "PREMIUM REAL ESTATE SOLUTIONS",
      subtitle: "Your Trusted Property Partner",
    },
    {
      image: "/image/img3.jpg?height=800&width=1200",
      title: "EXCLUSIVE PROPERTIES AWAIT",
      subtitle: "Experience Excellence in Every Detail",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Circular Overlays */}
      <div className="circular-overlay top-20 left-10 animate-float" />
      <div className="circular-overlay bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-light-gray mb-6 stagger-animation">
              {slides[currentSlide].title}
            </h1>
            <p
              className="font-montserrat text-xl md:text-2xl text-medium-gray mb-8 stagger-animation"
              style={{ animationDelay: "0.2s" }}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* Search Bar */}
            <div
              className="glass-card rounded-2xl p-6 mb-8 max-w-2xl mx-auto stagger-animation"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by location, property type..."
                    className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray h-12"
                  />
                </div>
                <Button className="bg-light-gray text-pure-black hover:bg-medium-gray h-12 px-8">
                  <Search className="w-5 h-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center stagger-animation"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-light-gray text-pure-black hover:bg-medium-gray font-montserrat font-semibold px-8"
              >
                Explore Properties
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-light-gray text-light-gray hover:bg-light-gray hover:text-pure-black font-montserrat font-semibold px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-medium-gray text-sm mb-2 font-montserrat">Scroll to explore</p>
        <ChevronDown className="w-6 h-6 text-medium-gray animate-bounce mx-auto" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-light-gray" : "bg-dark-gray"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
