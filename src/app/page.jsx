import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ProblemSolutionSection from "@/components/ProblemSolutionSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import SocialProofSection from "@/components/SocialProofSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import StructuredData from "@/components/StructuredData"
import WhatsAppButton from "@/components/WhatsAppButton"

export const metadata = {
  title: "Professional Websites for UK Tradespeople | Tradesman Web Solutions",
  description: "Get more quality leads with professional websites for UK tradespeople. Custom designs for plumbers, electricians, builders. No setup fees, UK support.",
  keywords: "UK tradesman websites, plumber website design, electrician websites, builder web design, professional trade websites UK, tradesman marketing",
  openGraph: {
    title: "Professional Websites for UK Tradespeople",
    description: "Get more quality leads with professional websites designed specifically for UK tradespeople.",
    url: "https://tradesmanwebsolutions.co.uk",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Websites for UK Tradespeople",
    description: "Get more quality leads with professional websites designed specifically for UK tradespeople.",
  },
}

export default function Homepage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tradesman Web Solutions",
    "url": "https://tradesmanwebsolutions.co.uk",
    "logo": "https://tradesmanwebsolutions.co.uk/logo.png",
    "description": "Professional websites for UK tradespeople. Custom designs for plumbers, electricians, builders.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
      "addressRegion": "United Kingdom"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7979-468826",
      "email": "sales@tradesmanweb.co.uk",
      "contactType": "sales",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "sameAs": [],
    "service": {
      "@type": "Service",
      "name": "Professional Website Design for Tradespeople",
      "description": "Custom website design and development for UK tradespeople including plumbers, electricians, and builders",
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
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}