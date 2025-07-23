import { Card, CardContent } from "@/components/ui/card"

export default function CostComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">The Real Cost Comparison</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-red-200 bg-gradient-to-b from-red-50/30 to-white">
              <CardContent className="text-center space-y-6">
                <h4 className="text-xl font-bold text-red-800">Multiple Directories</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="flex justify-between">
                    <span>Checkatrade:</span>
                    <span className="font-semibold">£50-150/month</span>
                  </p>
                  <p className="flex justify-between">
                    <span>MyBuilder:</span>
                    <span className="font-semibold">£40-120/month</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Rated People:</span>
                    <span className="font-semibold">£30-100/month</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Local directories:</span>
                    <span className="font-semibold">£20-80/month</span>
                  </p>
                </div>
                <div className="border-t border-red-200 pt-6">
                  <p className="text-3xl font-bold text-red-600">£140-450/month</p>
                  <p className="text-sm text-gray-500 mt-2">And you own nothing</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 border-green-200 bg-gradient-to-b from-green-50/30 to-white">
              <CardContent className="text-center space-y-6">
                <h4 className="text-xl font-bold text-green-800">Your Own Website</h4>
                <div className="space-y-3 text-gray-700">
                  <p className="flex justify-between">
                    <span>Professional website</span>
                    <span className="text-green-600">✓</span>
                  </p>
                  <p className="flex justify-between">
                    <span>SEO optimization</span>
                    <span className="text-green-600">✓</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Ongoing support</span>
                    <span className="text-green-600">✓</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Complete ownership</span>
                    <span className="text-green-600">✓</span>
                  </p>
                </div>
                <div className="border-t border-green-200 pt-6">
                  <p className="text-3xl font-bold text-green-600">£129-189/month</p>
                  <p className="text-sm text-gray-500 mt-2">You own a digital asset</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}