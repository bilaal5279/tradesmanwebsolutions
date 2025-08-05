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
  title: "Professional Websites for Electricians | Tradesman Web Solutions",
  description: "Get more electrical work leads with a professional website designed for electricians. Custom designs, mobile-responsive, SEO optimized. No setup fees, UK support.",
  keywords: "electrician websites UK, electrical contractor website design, professional electrician web design, electrical services marketing",
  openGraph: {
    title: "Professional Websites for Electricians",
    description: "Get more electrical work leads with a professional website designed for electricians.",
    url: "https://tradesmanwebsolutions.co.uk/electricians",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for Electricians",
    description: "Get more electrical work leads with a professional website designed for electricians.",
  },
}

export default function ElectriciansPage() {
  const tradeData = {
    trade: "Electricians",
    tradeLower: "electricians",
    services: ["Rewiring", "Electrical Installations", "Fault Finding", "Consumer Unit Upgrades", "PAT Testing", "Emergency Callouts"],
    heroTitle: "Professional Websites for Electricians",
    heroSubtitle: "Get more electrical work leads with a website that highlights your safety expertise and professional qualifications.",
    features: [
      {
        title: "Safety-First Messaging",
        description: "Emphasize your commitment to electrical safety and compliance with current regulations."
      },
      {
        title: "Emergency Response System",
        description: "Dedicated emergency contact system for urgent electrical faults and power outages."
      },
      {
        title: "Qualification Showcase",
        description: "Display your electrical qualifications, certifications, and professional memberships prominently."
      },
      {
        title: "Before/After Galleries",
        description: "Show your electrical installation work with professional before and after photo galleries."
      }
    ]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tradesman Web Solutions - Electrician Websites",
    "url": "https://tradesmanwebsolutions.co.uk/electricians",
    "description": "Professional websites for UK electricians. Custom designs for electrical contractors and specialists.",
    "service": {
      "@type": "Service",
      "name": "Professional Website Design for Electricians",
      "description": "Custom website design and development for UK electricians including electrical contractors and specialists",
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
      <TradeLinksSection currentTrade="electricians" />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}