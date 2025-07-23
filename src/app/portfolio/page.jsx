"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Eye, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import PortfolioCard from "@/components/PortfolioCard"
import PortfolioFeaturesSection from "@/components/PortfolioFeaturesSection"
import ProcessSection from "@/components/ProcessSection"

export default function PortfolioPage() {
  const portfolioProjects = [
    {
      id: "green-air-conditioning",
      title: "Green Air Conditioning",
      location: "Birmingham",
      trade: "Air Conditioning",
      description: "A modern, professional website for an air conditioning specialist in Birmingham. Features online booking, service area mapping, and emergency call-out functionality.",
      image: "/Images/GreenAIR.png",
      tags: ["Air Conditioning", "Birmingham", "Emergency Services"],
      features: ["Online Booking", "Service Areas", "Emergency Callouts", "Customer Reviews"],
      url: "https://greenairconditioning.netlify.app/",
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="portfolio" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Websites That{" "}
              <span className="text-blue-600">Work as Hard as You Do</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Here's an example of the professional, lead-generating websites we build. This project showcases the quality and attention to detail you can expect for your own business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-600" />Click to View Live Demos
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-5 h-5 mr-2 text-blue-600" />See What You'll Get
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
            ))}
            
            {/* Coming Soon Section */}
            <div className="text-center py-12">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">More Projects Coming Soon</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're currently working on several exciting projects for tradespeople across the UK. 
                  Check back soon to see more examples of our professional websites in action.
                </p>
                <div className="flex justify-center">
                  <Button asChild>
                    <Link href="/pricing">
                      Get Your Website Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <PortfolioFeaturesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready for Your Professional Website?</h2>
            <p className="text-xl text-blue-100">
              See how a professional website can transform your business. Book a free consultation to discuss your
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link href="/pricing">View Our Packages</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    if (window.Calendly) {
                      window.Calendly.initPopupWidget({ url: 'https://calendly.com/bilaal5279' })
                    } else {
                      const script = document.createElement('script')
                      script.src = 'https://assets.calendly.com/assets/external/widget.js'
                      script.async = true
                      script.onload = () => {
                        window.Calendly.initPopupWidget({ url: 'https://calendly.com/bilaal5279' })
                      }
                      document.head.appendChild(script)
                    }
                  }
                }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />07979 468826
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />hello@tradesmanweb.co.uk
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}