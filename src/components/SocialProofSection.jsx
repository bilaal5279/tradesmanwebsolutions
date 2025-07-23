import { Card, CardContent } from "@/components/ui/card"

export default function SocialProofSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Websites Built to Build Trust</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Here's what our client says</p>
        </div>
        <div className="flex justify-center mb-16 max-w-6xl mx-auto">
          <Card className="p-8 group max-w-2xl">
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                "Working with Tradesman Web Solutions has been fantastic. They created a professional website that perfectly represents my air conditioning business. The site looks great and has helped me attract better quality customers who value professional service."
              </blockquote>
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Asif Mughal</p>
                  <p className="text-sm text-gray-500">Green Air Conditioning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}