import { AlertTriangle, CheckCircle, Clock, PoundSterling, Users } from "lucide-react"

export default function ProblemSolutionSection() {
  const problems = [
    {
      icon: PoundSterling,
      text: "High monthly directory fees"
    },
    {
      icon: Users,
      text: "Competing with dozens of others"
    },
    {
      icon: Clock,
      text: "Less time on profitable work"
    }
  ]

  const solutions = [
    {
      icon: CheckCircle,
      text: "Own your digital presence"
    },
    {
      icon: CheckCircle,
      text: "Work for you 24/7"
    },
    {
      icon: CheckCircle,
      text: "Attract quality customers"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem Section */}
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <AlertTriangle className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Tired of Expensive Directory Fees and{" "}
              <span className="text-blue-600">DIY Website Headaches?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              You're an expert at your trade, but you're also a business owner. That means less time on the tools and
              more time spent on admin, quoting for jobs you don't want.
            </p>
            
            {/* Problem Points */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <problem.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{problem.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Section */}
          <div className="relative">
            {/* Connecting Arrow */}
            <div className="flex justify-center mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
                Tradesman Web Solutions gives you back control.
              </h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                We build you a professional website that you own—a digital asset that works for you 24/7 to build trust
                and bring in better quality leads.
              </p>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 mb-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600 mb-3">Average Results After 3 Months:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600">3.2x</div>
                      <div className="text-sm text-gray-600">More Qualified Leads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">£2,400</div>
                      <div className="text-sm text-gray-600">Average Monthly Increase</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Points */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-blue-100">
                    <solution.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{solution.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}