import { MapPin, Navigation, Train } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfficeLocation() {
  return (
    <div className="glass-card rounded-2xl p-8">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-light-gray to-medium-gray rounded-xl flex items-center justify-center mr-4">
          <MapPin className="w-6 h-6 text-pure-black" />
        </div>
        <h3 className="font-montserrat text-2xl font-bold text-light-gray">Office Location</h3>
      </div>

      {/* Office Address */}
      <div className="space-y-6">
        <div>
          <h4 className="font-montserrat font-semibold text-light-gray mb-2">Raj Properties Head Office</h4>
          <p className="text-medium-gray leading-relaxed">
            B-294, Shop No. 4
            <br />
            New Ashok Nagar, Opp. East End Apts.
            <br />
            Delhi-110096
            <br />
            India
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="relative h-48 rounded-xl overflow-hidden">
  <iframe
    title="Raj Properties Location"
    src="https://www.google.com/maps?q=B-294,+Shop+No.+4,+New+Ashok+Nagar,+Opp.+East+End+Apts,+Delhi+110096&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        {/* Directions Button */}
        <Button
          className="w-full bg-light-gray text-pure-black hover:bg-medium-gray font-montserrat font-semibold"
          asChild
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=B-294,+Shop+No.+4,+New+Ashok+Nagar,+Opp.+East+End+Apts,+Delhi+110096"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </a>
        </Button>

        {/* How to Reach Section */}
        <div className="space-y-4">
          <h4 className="font-montserrat font-semibold text-light-gray">How to Reach</h4>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Train className="w-5 h-5 text-medium-gray mt-1 flex-shrink-0" />
              <div>
                <p className="font-montserrat font-medium text-light-gray">By Metro</p>
                <p className="text-medium-gray text-sm">
                  Nearest metro station: New Ashok Nagar (Blue Line) – 5 minutes walk from Gate No.2.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
