import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Raj Properties - Premium Real Estate Solutions",
  description:
    "Discover your dream property with Raj Properties. Premium real estate consultancy in New Ashok Nagar, Eastend apts, Vasundhara Enclave, Mayur Vihar, Noida and Greater Noida",
  keywords: "New Ashok Nagar, Eastend apts, Vasundhara Enclave, Mayur Vihar, Noida, Greater Noida",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    


    <html lang="en" className="dark">
  <head>
    <link rel="icon" href="/image/logo.png" type="image/png" />
  </head>
  <body
    className={`${playfair.variable} ${montserrat.variable} ${inter.variable} font-inter bg-black text-light-gray antialiased`}
  >
    {children}
  </body>
</html>
  )
}
