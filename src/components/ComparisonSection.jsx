import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Image from "next/image"

export default function ComparisonSection({ 
  title, 
  subtitle, 
  problemTitle, 
  problemDescription, 
  problemIcon: ProblemIcon,
  problemBgColor = "bg-red-50",
  problemBorderColor = "border-red-200",
  problemIconBg = "bg-red-100",
  problemIconColor = "text-red-600",
  problemTextColor = "text-red-800",
  problemDescColor = "text-red-700",
  solutionTitle, 
  solutionDescription, 
  solutionIcon: SolutionIcon,
  solutionBgColor = "bg-green-50",
  solutionBorderColor = "border-green-200",
  solutionIconBg = "bg-green-100",
  solutionIconColor = "text-green-600",
  solutionTextColor = "text-green-800",
  solutionDescColor = "text-green-700",
  leftCard,
  rightCard
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Problem Statement */}
          <div className={`${problemBgColor} border ${problemBorderColor} rounded-2xl p-8 mb-12`}>
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${problemIconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <ProblemIcon className={`w-6 h-6 ${problemIconColor}`} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${problemTextColor} mb-4`}>{problemTitle}</h3>
                <p className={`${problemDescColor} text-lg leading-relaxed`}>{problemDescription}</p>
              </div>
            </div>
          </div>

          {/* Solution Statement */}
          <div className={`${solutionBgColor} border ${solutionBorderColor} rounded-2xl p-8 mb-12`}>
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${solutionIconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                <SolutionIcon className={`w-6 h-6 ${solutionIconColor}`} />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${solutionTextColor} mb-4`}>{solutionTitle}</h3>
                <p className={`${solutionDescColor} text-lg leading-relaxed`}>{solutionDescription}</p>
              </div>
            </div>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {leftCard}
            {rightCard}
          </div>
        </div>
      </div>
    </section>
  )
}