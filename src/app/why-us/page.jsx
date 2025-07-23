"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X, Phone, Mail, Shield, Clock, Users, PoundSterling, Calendar } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ComparisonSection from "@/components/ComparisonSection"
import CostComparisonSection from "@/components/CostComparisonSection"
import TimeValueSection from "@/components/TimeValueSection"
import ValuePropositionSection from "@/components/ValuePropositionSection"

export default function WhyUsPage() {
  // Directory comparison cards
  const directoryLeftCard = (
    <Card className="border-2 border-red-200 bg-gradient-to-b from-red-50/30 to-white">
      <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
        <CardTitle className="text-center text-red-800">
          Directory Sites
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          "Listed alongside 10+ competitors",
          "£50-200+ monthly fees per directory",
          "You don't own your profile",
          "Customers compare you on price",
          "Building their brand, not yours",
          "Limited customization options",
          "Can suspend your account anytime"
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )

  const directoryRightCard = (
    <Card className="border-2 border-green-200 bg-gradient-to-b from-green-50/30 to-white">
      <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
        <CardTitle className="text-center text-green-800">
          Your Own Website
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          "You're the only business featured",
          "One predictable monthly cost",
          "You own your website and domain",
          "Customers choose you on quality",
          "Building your brand and reputation",
          "Fully customized to your business",
          "Complete control and ownership"
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )

  // DIY comparison cards
  const diyLeftCard = (
    <Card className="border-2 border-orange-200 bg-gradient-to-b from-orange-50/30 to-white">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
        <CardTitle className="text-center text-orange-800">
          DIY Builders
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          "40+ hours of your time",
          "Learning curve and frustration",
          "Generic templates and designs",
          "Poor SEO out of the box",
          "You write all the content",
          "Ongoing maintenance headaches",
          "No professional support"
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <X className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )

  const diyRightCard = (
    <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50/30 to-white">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
        <CardTitle className="text-center text-blue-800">
          Done-For-You Service
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        {[
          "Zero hours of your time",
          "Professional experts handle everything",
          "Bespoke design for your business",
          "Professional SEO optimization",
          "Professional copywriting included",
          "Ongoing maintenance included",
          "Dedicated UK-based support"
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="why-us" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why a Custom Website{" "}
              <span className="text-blue-600">Beats Directories and DIY Builders</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stop renting your online presence. Build a digital asset that works for your business, not against it.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />You Own It
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />Save Time
              </div>
              <div className="flex items-center">
                <PoundSterling className="w-5 h-5 mr-2 text-blue-600" />Better ROI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Comparison */}
      <ComparisonSection
        title="Tradesman Web Solutions vs. Directories"
        subtitle="Stop paying to compete with your competition"
        problemTitle="The Directory Problem"
        problemDescription="Stop renting your online space. Directories are great for leads, but you're paying high monthly fees to be listed right next to your competition. You don't own your profile, and you're building their brand, not yours."
        problemIcon={X}
        solutionTitle="Our Solution"
        solutionDescription="We build you a permanent digital asset that you own. All leads come directly to you, with no middleman. Your website works 24/7 to build your brand and attract your ideal customers."
        solutionIcon={Check}
        leftCard={directoryLeftCard}
        rightCard={directoryRightCard}
      />

      {/* Cost Comparison */}
      <CostComparisonSection />

      {/* DIY Comparison */}
      <ComparisonSection
        title="Tradesman Web Solutions vs. DIY Builders"
        subtitle="Your time is too valuable to be a part-time web designer"
        problemTitle="The DIY Problem"
        problemDescription="Your time is too valuable to be a part-time web designer. DIY builders seem cheap, but they cost you dozens of hours in learning, designing, and writing—time you could be spending on profitable jobs."
        problemIcon={Clock}
        problemBgColor="bg-orange-50"
        problemBorderColor="border-orange-200"
        problemIconBg="bg-orange-100"
        problemIconColor="text-orange-600"
        problemTextColor="text-orange-800"
        problemDescColor="text-orange-700"
        solutionTitle="Our Solution"
        solutionDescription="We are your 'done-for-you' solution. We handle all the technical work so you can stay on the tools. Professional design, copywriting, and SEO—all handled by experts while you focus on what you do best."
        solutionIcon={Users}
        solutionBgColor="bg-blue-50"
        solutionBorderColor="border-blue-200"
        solutionIconBg="bg-blue-100"
        solutionIconColor="text-blue-600"
        solutionTextColor="text-blue-800"
        solutionDescColor="text-blue-700"
        leftCard={diyLeftCard}
        rightCard={diyRightCard}
      />

      {/* Time Value Calculation - Insert this before the DIY comparison cards */}
      <section className="py-0 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <TimeValueSection />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <ValuePropositionSection />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Own Your Online Presence?</h2>
            <p className="text-xl text-blue-100">
              Stop paying to compete with your competition. Get a website that works exclusively for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link href="/pricing">See Our Packages</Link>
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