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
  title: "Professional Websites for Builders | Tradesman Web Solutions",
  description: "Get more building leads with a professional website designed for builders. Custom designs, mobile-responsive, SEO optimized. No setup fees, UK support.",
  keywords: "builder websites UK, construction company website design, building contractor websites, professional builder web design, construction marketing",
  openGraph: {
    title: "Professional Websites for Builders",
    description: "Get more building leads with a professional website designed for builders.",
    url: "https://tradesmanwebsolutions.co.uk/builders",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for Builders",
    description: "Get more building leads with a professional website designed for builders.",
  },
}

export default function BuildersPage() {
  const tradeData = {
    trade: "Builders",
    tradeLower: "builders",
    services: ["Home Extensions", "Loft Conversions", "Kitchen Extensions", "New Builds", "Renovations", "Groundwork"],
    heroTitle: "Professional Websites for Builders",
    heroSubtitle: "Get more building leads with a website that demonstrates your construction expertise and project management skills.",
    features: [
      {
        title: "Project Showcase",
        description: "Display your major building projects with detailed case studies and transformation photos."
      },
      {
        title: "Planning Permission Guidance",
        description: "Offer guidance on planning permission and building regulations to add value for customers."
      },
      {
        title: "Multi-Trade Coordination",
        description: "Highlight your ability to coordinate multiple trades and manage complex building projects."
      },
      {
        title: "Insurance & Guarantees",
        description: "Prominently display your insurance coverage and work guarantees to build trust."
      }
    ]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tradesman Web Solutions - Builder Websites",
    "url": "https://tradesmanwebsolutions.co.uk/builders",
    "description": "Professional websites for UK builders. Custom designs for construction companies and building contractors.",
    "service": {
      "@type": "Service",
      "name": "Professional Website Design for Builders",
      "description": "Custom website design and development for UK builders including construction companies and building contractors",
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
      <TradeLinksSection currentTrade="builders" />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}