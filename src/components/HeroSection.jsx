"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with a{" "}
                <span className="text-blue-600">Professional Website</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your gateway to online success starts here. Get more quality leads with a website that works 24/7 to grow your trade business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <Link href="/contact#contact-form">
                  <Phone className="w-5 h-5 mr-2" />Request Callback
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                asChild
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />UK-based support
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />Built in weeks
              </div>
            </div>
          </div>
          <div className="relative mx-4 sm:mx-6 lg:mx-0">
            <Image
              src="/Images/GreenAIR.png"
              alt="Green Air Conditioning website - Professional tradesman website example"
              width={700}
              height={800}
              className="w-full h-auto rounded-lg shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
              priority
              sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 45vw, 700px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}