"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Wrench, Zap, Hammer, Paintbrush, Droplets, Thermometer } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"
import { motion } from "framer-motion"

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
          <FadeInUp>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trades We've Helped Grow
            </h2>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {trades.map((trade, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <trade.icon className="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                    {trade.name}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.8}>
            <div className="pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact#contact-form">
                    <Phone className="w-5 h-5 mr-2" />Request Callback
                  </Link>
                </Button>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}