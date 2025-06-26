import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import HeroSection from "@/components/home/HeroSection"
import FeaturedProperties from "@/components/home/FeaturedProperties"
import CompanyValues from "@/components/home/CompanyValues"
import Statistics from "@/components/home/Statistics"
import ContactCTA from "@/components/home/ContactCTA"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pure-black">
      <Navigation />
      <HeroSection />
      <FeaturedProperties />
      <CompanyValues />
      <Statistics />
      <ContactCTA />
      <Footer />
    </main>
  )
}
