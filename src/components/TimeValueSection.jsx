export default function TimeValueSection() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-8 mb-12 shadow-inner">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The True Cost of DIY</h3>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="space-y-3">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">⏱️</span>
          </div>
          <div className="text-4xl font-bold text-blue-600">40+ Hours</div>
          <p className="text-gray-700 leading-relaxed">Learning and building your website</p>
        </div>
        <div className="space-y-3">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">💷</span>
          </div>
          <div className="text-4xl font-bold text-blue-600">£50/hour</div>
          <p className="text-gray-700 leading-relaxed">Your typical hourly rate</p>
        </div>
        <div className="space-y-3">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-2xl">📉</span>
          </div>
          <div className="text-4xl font-bold text-red-600">£2,000+</div>
          <p className="text-gray-700 leading-relaxed">Lost income opportunity</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600 font-medium">Plus ongoing maintenance, updates, and troubleshooting...</p>
      </div>
    </div>
  )
}