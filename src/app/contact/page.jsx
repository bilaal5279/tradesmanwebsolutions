import { Button } from "@/components/ui/button"
import { Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import ContactDetailsSection from "@/components/ContactDetailsSection"
import ContactFAQSection from "@/components/ContactFAQSection"
import CalendlyWidget from "@/components/CalendlyWidget"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="contact" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Let's Talk About{" "}
              <span className="text-blue-600">Growing Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to get started or have a few questions? Book a free, no-obligation 10-minute chat to see if we're a
              good fit.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />10-Minute Call
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />No Obligation
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />Free Consultation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            <div className="border-2 border-blue-200 bg-gradient-to-b from-blue-50/30 to-white rounded-2xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Free Consultation</h3>
                <p className="text-gray-600">Choose a time that works for you</p>
              </div>
              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <ContactDetailsSection />

      {/* FAQ Section */}
      <ContactFAQSection />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100">
              Don't let another day pass without a professional website working for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
                onClick={() => window.location.href = "#calendly-widget"}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}