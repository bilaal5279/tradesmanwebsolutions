import Navbar from "@/components/Navbar"
import TradeHeroSection from "@/components/TradeHeroSection"
import TradeFeaturesSection from "@/components/TradeFeaturesSection"
import BenefitsSection from "@/components/BenefitsSection"
import SocialProofSection from "@/components/SocialProofSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import PricingPreviewSection from "@/components/PricingPreviewSection"
import TradeLinksSection from "@/components/TradeLinksSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import StructuredData from "@/components/StructuredData"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata = {
  title: "Professional Websites for HVAC Engineers | Tradesman Web Solutions",
  description: "Get more heating and cooling leads with a professional website designed for HVAC engineers. Custom designs, mobile-responsive, SEO optimized. No setup fees, UK support.",
  keywords: "HVAC websites UK, heating engineer website design, air conditioning websites, professional HVAC web design, heating contractor marketing",
  openGraph: {
    title: "Professional Websites for HVAC Engineers",
    description: "Get more heating and cooling leads with a professional website designed for HVAC engineers.",
    url: "https://tradesmanwebsolutions.co.uk/hvac",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for HVAC Engineers",
    description: "Get more heating and cooling leads with a professional website designed for HVAC engineers.",
  },
}

export default function HVACPage() {
  const tradeData = {
    trade: "HVAC Engineers",
    tradeLower: "hvac",
    services: ["Boiler Installation", "Air Conditioning", "Central Heating", "Heat Pumps", "Boiler Repairs", "System Maintenance"],
    heroTitle: "Professional Websites for HVAC Engineers",
    heroSubtitle: "Get more heating and cooling leads with a website that demonstrates your technical expertise and reliability.",
    features: [
      {
        title: "Emergency Callout Features",
        description: "Highlight your 24/7 emergency heating services with prominent contact options and response times."
      },
      {
        title: "Energy Efficiency Focus",
        description: "Showcase your expertise in energy-efficient heating solutions and green technology."
      },
      {
        title: "Certification Display",
        description: "Prominently display your Gas Safe registration and other professional certifications."
      },
      {
        title: "Seasonal Service Reminders",
        description: "Automated features to remind customers about annual boiler services and maintenance."
      }
    ]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tradesman Web Solutions - HVAC Websites",
    "url": "https://tradesmanwebsolutions.co.uk/hvac",
    "description": "Professional websites for UK HVAC engineers. Custom designs for heating and cooling specialists.",
    "service": {
      "@type": "Service",
      "name": "Professional Website Design for HVAC Engineers",
      "description": "Custom website design and development for UK HVAC engineers including heating and air conditioning specialists",
      "provider": {
        "@type": "Organization",
        "name": "Tradesman Web Solutions"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <StructuredData data={structuredData} />
      <Navbar currentPage="home" />
      <TradeHeroSection tradeData={tradeData} />
      <TradeFeaturesSection tradeData={tradeData} />
      <BenefitsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <TradeLinksSection currentTrade="hvac" />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}