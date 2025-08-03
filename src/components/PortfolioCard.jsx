import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioCard({ project, index }) {
  return (
    <Card className="overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 group hover:shadow-xl">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} website screenshot`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300" />
            <div className="absolute top-4 right-4">
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <Badge className="bg-white/95 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm cursor-pointer transition-all duration-200 hover:scale-105">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Demo
                </Badge>
              </Link>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  {project.trade}
                </Badge>
                <Badge variant="outline" className="text-gray-600 border-gray-200">
                  {project.location}
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="flex-1">
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <Eye className="w-4 h-4 mr-2" />
                  View Live Website
                </Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link href="/pricing">Get Your Website</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}