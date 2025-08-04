"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Palette, Smartphone, Search, Clock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Palette,
      title: "Tailored Design",
      description: "Personalised websites reflecting your trade's unique personality and brand."
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Seamlessly accessible on any device, enhancing user experience for all customers."
    },
    {
      icon: Search,
      title: "SEO Optimised",
      description: "Boost your online visibility and attract more potential customers through search."
    },
    {
      icon: Clock,
      title: "24/7 Marketing",
      description: "Your website works around the clock to generate leads while you sleep."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Stand Out Online with Your Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital world, your online presence is paramount. We craft bespoke websites tailored to your vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Don't know where to start?
            </h3>
            <p className="text-lg text-gray-600">
              You just need to answer a few questions, we do the rest.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <Link href="/contact#contact-form">
                <Phone className="w-5 h-5 mr-2" />Request Callback
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}