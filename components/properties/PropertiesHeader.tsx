export default function PropertiesHeader() {
  return (
    <section className="pt-24 pb-12 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-light-gray mb-4">Premium Properties</h1>
          <p className="font-montserrat text-lg text-medium-gray max-w-2xl mx-auto">
            Discover exceptional properties that redefine luxury living across prime locations in NCR
          </p>
        </div>
      </div>
    </section>
  )
}
