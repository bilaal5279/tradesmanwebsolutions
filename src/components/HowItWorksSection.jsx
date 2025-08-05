"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection"
import { motion } from "framer-motion"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Choose Your Plan",
      description: "Pick one of our simple, no-fuss monthly packages that fits your business needs and budget."
    },
    {
      number: "2", 
      title: "We Build Your Site",
      description: "We do all the heavy lifting, from design to launch, in just a few weeks with your input."
    },
    {
      number: "3",
      title: "Start Winning Better Work", 
      description: "Your new website goes live, ready to attract and convert your ideal customers 24/7."
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simple, no-fuss process to get your professional website live</p>
        </FadeInUp>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" staggerDelay={0.2}>
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="text-center p-8 group relative overflow-hidden h-full border-2 border-transparent hover:border-blue-200 transition-all duration-300">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardContent className="space-y-6 relative z-10">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}