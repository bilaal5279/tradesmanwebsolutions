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
  title: "Professional Websites for Carpenters | Tradesman Web Solutions",
  description: "Get more carpentry leads with a professional website designed for carpenters. Custom designs, mobile-responsive, SEO optimized. No setup fees, UK support.",
  keywords: "carpenter websites UK, carpentry website design, joiner websites, professional carpenter web design, woodworking contractor marketing",
  openGraph: {
    title: "Professional Websites for Carpenters",
    description: "Get more carpentry leads with a professional website designed for carpenters.",
    url: "https://tradesmanwebsolutions.co.uk/carpenters",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for Carpenters",
    description: "Get more carpentry leads with a professional website designed for carpenters.",
  },
}

export default function CarpentersPage() {
  const tradeData = {
    trade: "Carpenters",
    tradeLower: "carpenters",
    services: ["Kitchen Fitting", "Built-in Wardrobes", "Flooring", "Door Installation", "Bespoke Furniture", "Home Extensions"],
    heroTitle: "Professional Websites for Carpenters",
    heroSubtitle: "Get more carpentry leads with a website that showcases your craftsmanship and attention to detail.",
    features: [
      {
        title: "Craftsmanship Portfolio",
        description: "Showcase your finest carpentry work with high-quality photo galleries and project details."
      },
      {
        title: "Custom Project Quotes",
        description: "Detailed quote request forms for bespoke carpentry projects and custom furniture."
      },
      {
        title: "Material Expertise",
        description: "Highlight your knowledge of different wood types and sustainable materials."
      },
      {
        title: "Process Transparency",
        description: "Show your carpentry process from initial consultation to final installation."
      }
    ]
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tradesman Web Solutions - Carpenter Websites",
    "url": "https://tradesmanwebsolutions.co.uk/carpenters",
    "description": "Professional websites for UK carpenters. Custom designs for carpentry and joinery specialists.",
    "service": {
      "@type": "Service",
      "name": "Professional Website Design for Carpenters",
      "description": "Custom website design and development for UK carpenters including joinery and woodworking specialists",
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
      <TradeLinksSection currentTrade="carpenters" />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}