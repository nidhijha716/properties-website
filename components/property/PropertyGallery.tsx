"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"

const images = [
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

export default function PropertyGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Main Image */}
        <div className="relative h-full">
          <Image src={images[currentImage] || "/placeholder.svg"} alt="Property Image" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-light-gray" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-light-gray" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
        >
          <Maximize2 className="w-5 h-5 text-light-gray" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-4 glass-effect rounded-full px-4 py-2">
          <span className="text-light-gray text-sm font-medium">
            {currentImage + 1} / {images.length}
          </span>
        </div>

        {/* Thumbnail Strip */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex space-x-2">
          {images.slice(0, 5).map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImage ? "border-light-gray" : "border-transparent"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                width={64}
                height={48}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
          {images.length > 5 && (
            <div className="w-16 h-12 rounded-lg glass-effect flex items-center justify-center">
              <span className="text-light-gray text-xs font-medium">+{images.length - 5}</span>
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors z-10"
          >
            <X className="w-6 h-6 text-light-gray" />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-4">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt="Property Image"
              fill
              className="object-contain"
            />

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-light-gray" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect rounded-full p-3 hover:bg-dark-gray transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-light-gray" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
