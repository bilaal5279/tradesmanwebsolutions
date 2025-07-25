"use client"

import { Button } from "@/components/ui/button"
import { Check, X, Phone, Mail, Shield, Calendar, Star, Target, Building, Users2, Award } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CalendlyButton from "@/components/CalendlyButton"
import CostComparisonSection from "@/components/CostComparisonSection"
import TimeValueSection from "@/components/TimeValueSection"
import ValuePropositionSection from "@/components/ValuePropositionSection"

export default function WhyUsPage() {
  const keyBenefits = [
    {
      icon: Shield,
      title: "Own Your Digital Asset",
      description: "Your website belongs to you forever. No risk of suspension or losing your online presence.",
      stats: "100% Ownership"
    },
    {
      icon: Target,
      title: "Attract Quality Leads",
      description: "Professional design filters out price shoppers and attracts customers who value quality.",
      stats: "Higher Quality Jobs"
    },
    {
      icon: Award,
      title: "Build Your Reputation",
      description: "Every visitor strengthens your brand instead of building someone else's platform.",
      stats: "Your Brand Only"
    }
  ]

  const directoryProblems = [
    { text: "Listed with 10+ competitors", impact: "High Competition" },
    { text: "£50-200+ monthly per directory", impact: "Expensive" },
    { text: "Don't own your profile", impact: "No Control" },
    { text: "Compete on price only", impact: "Race to Bottom" },
    { text: "Build their brand, not yours", impact: "No Brand Value" }
  ]

  const websiteBenefits = [
    { text: "You're the only business featured", impact: "Zero Competition" },
    { text: "One predictable monthly cost", impact: "Cost Effective" },
    { text: "You own everything completely", impact: "Full Control" },
    { text: "Customers choose you on quality", impact: "Premium Pricing" },
    { text: "Build your own brand & reputation", impact: "Long-term Value" }
  ]

  const diyStats = [
    { label: "Hours Wasted", value: "40+", description: "Time you could spend earning" },
    { label: "Learning Curve", value: "Steep", description: "Frustration guaranteed" },
    { label: "Design Quality", value: "Generic", description: "Looks like everyone else" },
    { label: "SEO Results", value: "Poor", description: "Won't be found online" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="why-us" />

      {/* Modern Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              The Smart Choice for UK Tradespeople
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Why Your Own Website{" "}
              <span className="text-blue-600 relative">
                Beats Everything Else
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full"></div>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stop renting your online presence from directories. Stop wasting time on DIY builders.
              Get a professional website that works exclusively for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits - Modern Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Key Advantages of Your Own Website
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every successful tradesperson needs these advantages to grow their business
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {keyBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {benefit.stats}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Directory vs Website Comparison - Unique Design */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Directories vs Your Own Website
            </h2>
            <p className="text-xl text-gray-600">Stop paying to compete with your competition</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Directory Problems - Left Side */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                    <Building className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Directory Problems</h3>
                  <p className="text-gray-600">Why directories hurt your business</p>
                </div>

                <div className="space-y-4">
                  {directoryProblems.map((problem, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-red-400 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start">
                            <X className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-800 font-medium">{problem.text}</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-full ml-3">
                          {problem.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Website Benefits - Right Side */}
              <div className="space-y-6">
                <div className="text-center lg:text-left mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Website Advantage</h3>
                  <p className="text-gray-600">Why your own website wins</p>
                </div>

                <div className="space-y-4">
                  {websiteBenefits.map((benefit, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-blue-400 shadow-sm">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start">
                            <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-800 font-medium">{benefit.text}</span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full ml-3">
                          {benefit.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Done-For-You - Stats Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              DIY vs Done-For-You Service
            </h2>
            <p className="text-xl text-gray-600">Your time is too valuable to be a part-time web designer</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* DIY Problems - Stats Grid */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-4">
                  <Users2 className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The DIY Reality</h3>
                <p className="text-gray-600">What DIY website builders actually cost you</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {diyStats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-white border border-orange-200 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solution - Feature Highlight */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Done-For-You Solution</h3>
                <p className="text-xl text-blue-100 mb-8">
                  We handle everything while you focus on what you do best - your trade
                </p>

                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">0 Hours</div>
                    <div className="text-blue-100">Of your time required</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Professional</div>
                    <div className="text-blue-100">Design & copywriting</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-2">Full Support</div>
                    <div className="text-blue-100">Ongoing maintenance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <CostComparisonSection />

      {/* Time Value Calculation */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              <CalendlyButton
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Call
              </CalendlyButton>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />07979 468826
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />sales@tradesmanweb.co.uk
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}