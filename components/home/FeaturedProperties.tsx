"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Bed, Bath, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in Sector 62",
    location: "Sector 62, Noida",
    price: "₹2.8 Cr",
    image: "/placeholder.svg?height=400&width=600",
    bedrooms: 4,
    bathrooms: 3,
    area: "2500 sq ft",
    type: "4BHK Villa",
  },
  {
    id: 2,
    title: "Premium Apartment in Indirapuram",
    location: "Indirapuram, Ghaziabad",
    price: "₹1.5 Cr",
    image: "/placeholder.svg?height=400&width=600",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq ft",
    type: "3BHK Apartment",
  },
  {
    id: 3,
    title: "Modern Penthouse in Greater Noida",
    location: "Greater Noida West",
    price: "₹3.2 Cr",
    image: "/placeholder.svg?height=400&width=600",
    bedrooms: 5,
    bathrooms: 4,
    area: "3200 sq ft",
    type: "5BHK Penthouse",
  },
  {
    id: 4,
    title: "Elegant Flat in Sector 137",
    location: "Sector 137, Noida",
    price: "₹95 Lakh",
    image: "/placeholder.svg?height=400&width=600",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq ft",
    type: "2BHK Apartment",
  },
]

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProperties.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProperties.length) % featuredProperties.length)
  }

  return (
    <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-4">Featured Properties</h2>
          <p className="font-montserrat text-lg text-medium-gray max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that define luxury living
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredProperties.map((property) => (
                <div key={property.id} className="w-full flex-shrink-0">
                  <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-80 md:h-96">
                        <Image
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-light-gray text-pure-black px-3 py-1 rounded-full text-sm font-semibold">
                            {property.type}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="font-playfair text-2xl font-bold text-light-gray mb-2">{property.title}</h3>
                          <div className="flex items-center text-medium-gray mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="font-montserrat">{property.location}</span>
                          </div>
                          <div className="flex items-center space-x-6 mb-6">
                            <div className="flex items-center text-medium-gray">
                              <Bed className="w-4 h-4 mr-1" />
                              <span className="text-sm">{property.bedrooms}</span>
                            </div>
                            <div className="flex items-center text-medium-gray">
                              <Bath className="w-4 h-4 mr-1" />
                              <span className="text-sm">{property.bathrooms}</span>
                            </div>
                            <div className="flex items-center text-medium-gray">
                              <Square className="w-4 h-4 mr-1" />
                              <span className="text-sm">{property.area}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-playfair text-3xl font-bold text-light-gray">{property.price}</p>
                          </div>
                          <Button className="bg-light-gray text-pure-black hover:bg-medium-gray">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-light-gray" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-light-gray" />
          </button>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid gap-6">
          {featuredProperties.slice(0, 2).map((property) => (
            <div key={property.id} className="glass-card rounded-2xl overflow-hidden hover-lift">
              <div className="relative h-64">
                <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-light-gray text-pure-black px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-light-gray mb-2">{property.title}</h3>
                <div className="flex items-center text-medium-gray mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-montserrat text-sm">{property.location}</span>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-medium-gray">
                    <Bed className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center text-medium-gray">
                    <Bath className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center text-medium-gray">
                    <Square className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-playfair text-2xl font-bold text-light-gray">{property.price}</p>
                  <Button size="sm" className="bg-light-gray text-pure-black hover:bg-medium-gray">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredProperties.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-light-gray" : "bg-dark-gray"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-light-gray text-light-gray hover:bg-light-gray hover:text-pure-black font-montserrat font-semibold px-8"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
