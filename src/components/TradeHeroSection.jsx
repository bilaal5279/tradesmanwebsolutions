"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone } from "lucide-react"
import { FadeInLeft, FadeInRight, FadeInUp } from "@/components/AnimatedSection"
import { motion } from "framer-motion"
import FloatingElements from "@/components/FloatingElements"

export default function TradeHeroSection({ tradeData }) {
  const { trade, heroTitle, heroSubtitle, services } = tradeData

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
      <FloatingElements />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInLeft className="space-y-8">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                {heroTitle}
              </motion.h1>
              <FadeInUp delay={0.4}>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {heroSubtitle}
                </p>
              </FadeInUp>
            </div>
            <FadeInUp delay={0.6} className="flex flex-col sm:flex-row gap-4">
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                  asChild
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </motion.div>
            </FadeInUp>
            <FadeInUp delay={0.8} className="space-y-4">
              <p className="text-sm font-medium text-gray-700">Perfect for {trade} offering:</p>
              <div className="grid grid-cols-2 gap-2">
                {services.slice(0, 6).map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                    {service}
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </FadeInLeft>
          <FadeInRight delay={0.3} className="relative mx-4 sm:mx-6 lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
              className="relative"
            >
              <Image
                src="/images/hero.jpg"
                alt={`Professional ${trade.toLowerCase()} website example`}
                width={700}
                height={800}
                className="w-full h-auto rounded-lg shadow-2xl object-cover transition-all duration-500"
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 85vw, (max-width: 1024px) 45vw, 700px"
              />
            </motion.div>
          </FadeInRight>
        </div>
      </div>
    </section>
  )
}