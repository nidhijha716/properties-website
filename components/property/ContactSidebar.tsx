import Image from "next/image"
import { Phone, MessageCircle, Mail, MapPin, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Agent Card */}
      <div className="glass-card rounded-2xl p-6">
        <div className="text-center mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Agent"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-montserrat text-lg font-semibold text-light-gray mb-1">Raj Kumar</h3>
          <p className="text-medium-gray text-sm">Property Consultant</p>
          <p className="text-medium-gray text-sm">10+ Years Experience</p>
        </div>

        <div className="space-y-3 mb-6">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white" asChild>
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button className="w-full bg-light-gray text-pure-black hover:bg-medium-gray" asChild>
            <a href="tel:+911234567890">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center text-medium-gray">
            <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>+91 123 456 7890</span>
          </div>
          <div className="flex items-center text-medium-gray">
            <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
            <span>raj@rajproperties.com</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-montserrat text-lg font-semibold text-light-gray mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black"
          >
            <Heart className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-medium-gray text-medium-gray hover:bg-medium-gray hover:text-pure-black col-span-2"
          >
            <MapPin className="w-4 h-4 mr-2" />
            View on Map
          </Button>
        </div>
      </div>

      {/* Contact Form */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-montserrat text-lg font-semibold text-light-gray mb-4">Get More Information</h3>
        <form className="space-y-4">
          <Input
            placeholder="Your Name"
            className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray"
          />
          <Textarea
            placeholder="Your Message"
            rows={4}
            className="bg-black/50 border-dark-gray text-light-gray placeholder:text-medium-gray resize-none"
          />
          <Button className="w-full bg-light-gray text-pure-black hover:bg-medium-gray">Send Message</Button>
        </form>
      </div>

      {/* Property Stats */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="font-montserrat text-lg font-semibold text-light-gray mb-4">Property Stats</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-medium-gray">Listed</span>
            <span className="text-light-gray">2 days ago</span>
          </div>
          <div className="flex justify-between">
            <span className="text-medium-gray">Views</span>
            <span className="text-light-gray">127</span>
          </div>
          <div className="flex justify-between">
            <span className="text-medium-gray">Inquiries</span>
            <span className="text-light-gray">8</span>
          </div>
          <div className="flex justify-between">
            <span className="text-medium-gray">Property ID</span>
            <span className="text-light-gray">RP001</span>
          </div>
        </div>
      </div>
    </div>
  )
}
