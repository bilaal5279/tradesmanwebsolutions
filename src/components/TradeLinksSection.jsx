"use client"

import Link from "next/link"
import { FadeInUp } from "@/components/AnimatedSection"
import { motion } from "framer-motion"

export default function TradeLinksSection({ currentTrade }) {
  const trades = [
    { name: "Roofers", url: "/roofers", description: "Professional websites for roofing contractors" },
    { name: "HVAC Engineers", url: "/hvac", description: "Websites for heating and cooling specialists" },
    { name: "Electricians", url: "/electricians", description: "Professional sites for electrical contractors" },
    { name: "Carpenters", url: "/carpenters", description: "Websites showcasing carpentry craftsmanship" },
    { name: "Builders", url: "/builders", description: "Professional sites for construction companies" }
  ]

  // Filter out the current trade
  const otherTrades = trades.filter(trade => trade.url !== `/${currentTrade}`)

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInUp className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            We Also Specialize In Other Trades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional website solutions tailored for different trade specialties
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {otherTrades.map((trade, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link 
                  href={trade.url}
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                    {trade.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {trade.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}