"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function PropertyFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [filters, setFilters] = useState({
    location: "",
    priceRange: "",
    propertyType: [],
    bhk: [],
    amenities: [],
  })

  const locations = [
    "Sector 62, Noida",
    "Greater Noida West",
    "Indirapuram",
    "Sector 137, Noida",
    "Sector 120, Noida",
    "Alpha 1, Greater Noida",
  ]

  const propertyTypes = ["Apartment", "Villa", "Penthouse", "Independent House", "Studio"]

  const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK"]

  const amenities = ["Swimming Pool", "Gym", "Parking", "Security", "Garden", "Club House", "Power Backup", "Lift"]

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <Button onClick={() => setIsOpen(!isOpen)} className="w-full bg-dark-gray text-light-gray hover:bg-medium-gray">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block glass-card rounded-2xl p-6 sticky top-24`}>
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h3 className="font-montserrat text-lg font-semibold text-light-gray">Filters</h3>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-5 h-5 text-medium-gray" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Search Location</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-medium-gray" />
              <Input
                placeholder="Enter location..."
                className="pl-10 bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              />
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-3">Price Range</label>
            <div className="space-y-2">
              {["Under ₹50 Lakh", "₹50 Lakh - ₹1 Cr", "₹1 Cr - ₹2 Cr", "₹2 Cr - ₹5 Cr", "Above ₹5 Cr"].map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <Checkbox id={range} />
                  <label htmlFor={range} className="text-sm text-medium-gray cursor-pointer">
                    {range}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-3">Property Type</label>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <label htmlFor={type} className="text-sm text-medium-gray cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* BHK */}
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-3">BHK Configuration</label>
            <div className="grid grid-cols-2 gap-2">
              {bhkOptions.map((bhk) => (
                <div key={bhk} className="flex items-center space-x-2">
                  <Checkbox id={bhk} />
                  <label htmlFor={bhk} className="text-sm text-medium-gray cursor-pointer">
                    {bhk}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-3">Amenities</label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={amenity} />
                  <label htmlFor={amenity} className="text-sm text-medium-gray cursor-pointer">
                    {amenity}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <Button
            variant="outline"
            className="w-full border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black"
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </>
  )
}
