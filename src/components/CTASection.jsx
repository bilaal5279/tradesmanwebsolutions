"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar } from "lucide-react"
import ContactButton from "@/components/ContactButton"

export default function CTASection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Own Your Online Presence?</h2>
          <p className="text-xl text-blue-100">
            Stop competing on price and start competing on quality. Get a professional website that works as hard as
            you do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link href="/pricing">View Pricing & Plans</Link>
            </Button>
            <ContactButton
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5 mr-2" />Request a Call Back
            </ContactButton>
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
  )
}