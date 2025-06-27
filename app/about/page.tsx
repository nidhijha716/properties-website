import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import AboutHero from "@/components/about/AboutHero"
import CompanyStory from "@/components/about/CompanyStory"
import FounderProfile from "@/components/about/FounderProfile"
import ServiceAreas from "@/components/about/ServiceAreas"
import WhyChooseUs from "@/components/about/WhyChooseUs"

export const metadata = {
  title: "About Us - Raj Properties",
  description:
    "Learn about Raj Properties, our mission, vision, and commitment to providing premium real estate solutions since 2014.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pure-black">
      <Navigation />
      <AboutHero />
      <CompanyStory />
      <FounderProfile />
      <ServiceAreas />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
