import { Shield, Clock, Users } from "lucide-react"

export default function ValuePropositionSection() {
  const values = [
    {
      icon: Shield,
      title: "Own Your Digital Asset",
      description: "Build equity in your online presence instead of renting space from others"
    },
    {
      icon: Clock,
      title: "Stay On The Tools",
      description: "Focus on profitable work while we handle your online presence"
    },
    {
      icon: Users,
      title: "Attract Better Customers",
      description: "Professional websites attract customers who value quality over price"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The Smart Choice for Serious Tradespeople
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Stop competing on price in directories. Stop wasting time on DIY builders. Get a professional website that
            positions you as the premium choice in your area.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}