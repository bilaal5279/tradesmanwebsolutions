"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, TrendingUp, Users, MessageCircle, Shield, Rocket, Settings, PoundSterling } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Elevate Your Brand",
      description: "Stand out from competitors with a professionally designed website that showcases your expertise."
    },
    {
      icon: Users,
      title: "Expand Your Reach",
      description: "Reach a wider audience online with a custom site and attract potential customers beyond your local area."
    },
    {
      icon: MessageCircle,
      title: "Customer Engagement",
      description: "Make it effortless for clients to find and connect with you, increasing enquiries and bookings."
    },
    {
      icon: Shield,
      title: "Build Trust and Credibility",
      description: "A sleek and modern website instils confidence in your services, encouraging more conversions."
    },
    {
      icon: Rocket,
      title: "Stay Ahead of the Curve",
      description: "Embrace the digital age and stay ahead of competitors by establishing a strong online presence."
    },
    {
      icon: Settings,
      title: "Hassle-Free Maintenance",
      description: "Enjoy peace of mind with ongoing support and maintenance, leaving you free to focus on your trade."
    },
    {
      icon: TrendingUp,
      title: "Increase Efficiency",
      description: "Save time and effort with integrated features designed to streamline your business operations."
    },
    {
      icon: PoundSterling,
      title: "Cost-Effective Solution",
      description: "Affordable pricing plans with transparent costs, ensuring you get the most value for your investment."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInUp className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Unlock the Power of a Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits that come with a dedicated online platform tailored to your trade.
            </p>
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
          </FadeInUp>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="space-y-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group cursor-pointer h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}