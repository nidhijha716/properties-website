"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Bath, Square, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Sector 62",
    location: "Sector 62, Noida",
    price: "₹2.8 Cr",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 4,
    bathrooms: 3,
    area: "2500 sq ft",
    type: "4BHK Villa",
    featured: true,
  },
  {
    id: 2,
    title: "Premium Apartment in Indirapuram",
    location: "Indirapuram, Ghaziabad",
    price: "₹1.5 Cr",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq ft",
    type: "3BHK Apartment",
    featured: false,
  },
  {
    id: 3,
    title: "Modern Penthouse in Greater Noida",
    location: "Greater Noida West",
    price: "₹3.2 Cr",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 5,
    bathrooms: 4,
    area: "3200 sq ft",
    type: "5BHK Penthouse",
    featured: true,
  },
  {
    id: 4,
    title: "Elegant Flat in Sector 137",
    location: "Sector 137, Noida",
    price: "₹95 Lakh",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq ft",
    type: "2BHK Apartment",
    featured: false,
  },
  {
    id: 5,
    title: "Spacious Villa in Alpha 1",
    location: "Alpha 1, Greater Noida",
    price: "₹2.2 Cr",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 4,
    bathrooms: 3,
    area: "2200 sq ft",
    type: "4BHK Villa",
    featured: false,
  },
  {
    id: 6,
    title: "Luxury Apartment in Sector 120",
    location: "Sector 120, Noida",
    price: "₹1.8 Cr",
    image: "/placeholder.svg?height=300&width=400",
    bedrooms: 3,
    bathrooms: 2,
    area: "1600 sq ft",
    type: "3BHK Apartment",
    featured: true,
  },
]

export default function PropertyGrid() {
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="font-montserrat text-xl font-semibold text-light-gray">
            {properties.length} Properties Found
          </h2>
          <p className="text-medium-gray text-sm">Showing premium properties in your area</p>
        </div>

        <div className="flex items-center space-x-4">
          <select
            className="bg-dark-gray border border-medium-gray rounded-lg px-3 py-2 text-light-gray text-sm"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="glass-card rounded-2xl overflow-hidden hover-lift group">
            <div className="relative">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />

              {/* Property Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-light-gray text-pure-black px-3 py-1 rounded-full text-sm font-semibold">
                  {property.type}
                </span>
              </div>

              {/* Featured Badge */}
              {property.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-500 text-pure-black px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="glass-effect rounded-full p-2 hover:bg-dark-gray">
                  <Heart className="w-4 h-4 text-light-gray" />
                </button>
                <button className="glass-effect rounded-full p-2 hover:bg-dark-gray">
                  <Share2 className="w-4 h-4 text-light-gray" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-playfair text-xl font-bold text-light-gray mb-2 line-clamp-2">{property.title}</h3>

              <div className="flex items-center text-medium-gray mb-4">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
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
                <Button size="sm" className="bg-light-gray text-pure-black hover:bg-medium-gray" asChild>
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button
          size="lg"
          variant="outline"
          className="border-light-gray text-light-gray hover:bg-light-gray hover:text-pure-black font-montserrat font-semibold px-8"
        >
          Load More Properties
        </Button>
      </div>
    </div>
  )
}
