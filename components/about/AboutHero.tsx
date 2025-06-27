export default function AboutHero() {
  return (
    <section className="pt-24 pb-16 bg-pure-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-overlay opacity-40" />
      <div className="circular-overlay top-20 right-20 animate-float" />
      <div className="circular-overlay bottom-20 left-20 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-light-gray mb-6 stagger-animation">
            About Raj Properties
          </h1>
          <p
            className="font-montserrat text-xl md:text-2xl text-medium-gray mb-8 stagger-animation"
            style={{ animationDelay: "0.2s" }}
          >
            Your Trusted Partner in Premium Real Estate Solutions
          </p>
          <p
            className="text-medium-gray text-lg leading-relaxed max-w-3xl mx-auto stagger-animation"
            style={{ animationDelay: "0.4s" }}
          >
            Established in 2001, Raj Properties has built a reputation for guiding families and investors to the right properties across New Ashok Nagar, Mayur Vihar, and nearby areas in Noida and Delhi NCR. Our dedication to transparency, client satisfaction, and local expertise makes us a trusted name in real estate.

          </p>
        </div>
      </div>
    </section>
  )
}
