export default function ProcessSection() {
  const whatYouGet = [
    "Bespoke design tailored to your trade and area",
    "Professional copywriting that converts",
    "Local SEO optimization for your service area",
    "Mobile-responsive design that works everywhere",
    "Contact forms and booking systems"
  ]

  const processSteps = [
    "Discovery call to understand your business",
    "Custom design and content creation",
    "Review and refinement based on your feedback",
    "Launch and ongoing support"
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Website Will Be Just as Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These demos show the quality and attention to detail you can expect for your own business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">What You Get:</h3>
              <ul className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">The Process:</h3>
              <ul className="space-y-4">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-sm">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}