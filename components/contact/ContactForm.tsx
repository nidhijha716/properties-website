"use client"

import type React from "react"
import { useState } from "react"
import { Send, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

// Budget Options
const buySellBudgets = [
  { value: "under-20-lakh", label: "Under ₹20 Lakh" },
  { value: "20-35-lakh", label: "₹20 Lakh - ₹35 Lakh" },
  { value: "35-50-lakh", label: "₹35 Lakh - ₹50 Lakh" },
  { value: "50-75-lakh", label: "₹50 Lakh - ₹75 Lakh" },
  { value: "75-lakh-1-cr", label: "₹75 Lakh - ₹1 Cr" },
]

const rentBudgets = [
  { value: "under-5k", label: "Under ₹5,000/month" },
  { value: "5k-10k", label: "₹5,000 - ₹10,000/month" },
  { value: "10k-15k", label: "₹10,000 - ₹15,000/month" },
  { value: "15k-25k", label: "₹15,000 - ₹25,000/month" },
  { value: "25k-plus", label: "Above ₹25,000/month" },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, phone, email, propertyType, budget, message } = formData

    const whatsappMessage = `New Inquiry from Raj Properties:\n\nFull Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPurpose: ${propertyType}\nBudget: ${budget}\nMessage: ${message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    window.open(`https://wa.me/919810233615?text=${encodedMessage}`, "_blank")

    // Reset form after sending
    setFormData({
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      budget: "",
      message: "",
      newsletter: false,
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // reset budget if propertyType changes
      ...(name === "propertyType" && { budget: "" }),
    }))
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="mb-8">
        <h2 className="font-playfair text-3xl font-bold text-light-gray mb-4">Send Us a Message</h2>
        <p className="text-medium-gray">
          Fill out the form below and we'll get back to you within 2 hours during business hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Full Name *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
              required
            />
          </div>
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Phone Number *</label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 12345 67890"
              className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Email Address *</label>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Property Purpose</label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full bg-black/50 border border-dark-gray rounded-lg px-3 py-2 text-light-gray"
            >
              <option value="">Select purpose</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div>
            <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-black/50 border border-dark-gray rounded-lg px-3 py-2 text-light-gray"
            >
              <option value="">Select budget range</option>
              {(formData.propertyType === "rent" ? rentBudgets : buySellBudgets).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-montserrat text-sm font-medium text-light-gray mb-2">Message</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements, preferred location, or any specific questions..."
            rows={5}
            className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray resize-none"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={formData.newsletter}
            onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
          />
          <label htmlFor="newsletter" className="text-medium-gray text-sm cursor-pointer">
            Subscribe to our newsletter for latest property updates and insights
          </label>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            className="bg-light-gray text-pure-black hover:bg-medium-gray font-montserrat font-semibold flex-1"
          >
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <div className="flex gap-3">
            <Button type="button" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <a href="https://wa.me/919810233615" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              className="border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black"
              asChild
            >
              <a href="tel:+919810233615">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}






