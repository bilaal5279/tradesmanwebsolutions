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
  title: "Professional Websites for Roofers | Tradesman Web Solutions",
  description: "Get more roofing leads with a professional website designed specifically for roofers. Custom designs, mobile-responsive, SEO optimized. No setup fees, UK support.",
  keywords: "roofer websites UK, roofing company website design, roof repair websites, professional roofer web design, roofing contractor marketing",
  openGraph: {
    title: "Professional Websites for Roofers",
    description: "Get more roofing leads with a professional website designed specifically for roofers.",
    url: "https://tradesmanwebsolutions.co.uk/roofers",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for Roofers",
    description: "Get more roofing leads with a professional website designed specifically for roofers.",
  },
}

export default function RoofersPage() {
  const tradeData = {
    trade: "Roofers",
    tradeLower: "roofers",
    services: ["Roof Repairs", "New Roof Installation", "Guttering", "Chimney Work", "Flat Roofing", "Tile Replacement"],
    heroTitle: "Professional Websites for Roofers",
    heroSubtitle: "Get more quality roofing leads with a website that showcases your expertise and builds trust with homeowners.",
    features: [
      {
        title: "Showcase Your Roofing Projects",
        description: "Display before/after photos of your best roofing work to build credibility and trust."
      },
      {
        title: "Emergency Roof Repair Forms",
        description: "Capture urgent repair leads with dedicated emergency contact forms and quick response promises."
      },
      {
        title: "Service Area Mapping",
        description: "Show exactly which areas you cover for roofing services with interactive maps."
      },
      {
        title: "Weather-Resistant Branding",
        description: "Professional design that reflects the durability and reliability of your roofing services."
      }
    ]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tradesman Web Solutions - Roofer Websites",
    "url": "https://tradesmanwebsolutions.co.uk/roofers",
    "description": "Professional websites for UK roofers. Custom designs for roofing companies and contractors.",
    "service": {
      "@type": "Service",
      "name": "Professional Website Design for Roofers",
      "description": "Custom website design and development for UK roofers including roof repair companies and roofing contractors",
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
      <TradeLinksSection currentTrade="roofers" />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}