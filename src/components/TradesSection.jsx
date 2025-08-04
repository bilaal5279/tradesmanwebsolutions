"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Wrench, Zap, Hammer, Paintbrush, Droplets, Thermometer } from "lucide-react"

export default function TradesSection() {
  const trades = [
    { icon: Wrench, name: "Plumbers" },
    { icon: Zap, name: "Electricians" },
    { icon: Hammer, name: "Builders" },
    { icon: Paintbrush, name: "Decorators" },
    { icon: Droplets, name: "Roofers" },
    { icon: Thermometer, name: "Heating Engineers" }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trades We've Helped Grow
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {trades.map((trade, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <trade.icon className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{trade.name}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
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