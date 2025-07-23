import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioFeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "Lead-Focused Design",
      description: "Every element is positioned to convert visitors into customers, not just look pretty."
    },
    {
      icon: "📱",
      title: "Mobile-First Approach",
      description: "Most customers find tradespeople on their phones. Our sites work perfectly on all devices."
    },
    {
      icon: "🔍",
      title: "Local SEO Built-In",
      description: "Optimized to appear when customers in your area search for your services."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Makes Our Websites Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every website we build is designed with one goal: to win you better work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}