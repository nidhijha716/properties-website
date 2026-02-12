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

// ✅ Demo contact constants
const DEMO_WHATSAPP_NUMBER = "919000000002"
const DEMO_PHONE_TEL = "+919000000001"

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

    const whatsappMessage = `New Inquiry (Demo):\n\nFull Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPurpose: ${propertyType}\nBudget: ${budget}\nMessage: ${message}`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    // ✅ Demo WhatsApp redirect (fake number)
    window.open(`https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        {/* (same inputs as your code) */}

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
              <a href={`https://wa.me/${DEMO_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
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
              <a href={`tel:${DEMO_PHONE_TEL}`}>
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
