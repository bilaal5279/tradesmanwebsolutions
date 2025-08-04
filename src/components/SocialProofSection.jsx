"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join 500+ Trades Growing with Tradesman Web Solutions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to take your trade business to new heights? Get started today and unlock the potential of a professional online presence!
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
            asChild
          >
            <Link href="/contact#contact-form">Get Started</Link>
          </Button>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto">
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <blockquote className="text-white text-lg leading-relaxed text-center">
                "The impact the website has had for us is huge, going forward. The reason I got with Tradesman Web Solutions is because they were going to make me stick out, and they do."
              </blockquote>
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/20">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="text-blue-600 font-bold">AM</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white">Asif Mughal</p>
                  <p className="text-sm text-blue-200">Director, Green Air Conditioning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}