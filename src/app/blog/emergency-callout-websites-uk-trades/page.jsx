import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle, Phone, Zap } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactButton from "@/components/ContactButton"
import BlogCTA from "@/components/BlogCTA"

export const metadata = {
  title: "Emergency Callout Websites: Converting Urgent Customers 24/7 | Tradesman Web Solutions",
  description: "Design your website to capture emergency callouts effectively. Essential features and strategies for UK tradespeople offering emergency services to convert urgent customers.",
  keywords: "emergency callout website, 24/7 tradesman website, emergency plumber website, urgent repair website, emergency electrician website, UK emergency trades",
  openGraph: {
    title: "Emergency Callout Websites: Converting Urgent Customers 24/7",
    description: "Design your website to capture emergency callouts effectively. Essential features and strategies for UK tradespeople.",
    url: "https://tradesmanwebsolutions.co.uk/blog/emergency-callout-websites-uk-trades",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "article",
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Article Header */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700" asChild>
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                12 January 2024
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                8 min read
                <span className="mx-2">•</span>
                Website Tips
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Emergency Callout Websites: Converting Urgent Customers 24/7
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                When customers have emergencies, they need immediate reassurance and clear action steps. Learn how to design your website to capture urgent callouts effectively and convert stressed customers into loyal clients.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By <span className="font-medium text-gray-700">Tom Harris</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/emergency-callout-websites.jpg"
                alt="Emergency callout websites for UK tradespeople"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                It's 2 AM on a Sunday. A pipe has burst in someone's kitchen, flooding their home. They're panicked, stressed, and desperately searching for help on their phone. Your website has 10 seconds to convince them you're the right choice. Are you ready for this moment?
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">The Emergency Customer Mindset</h3>
                    <ul className="text-red-700 space-y-2">
                      <li>• They're stressed and need immediate reassurance</li>
                      <li>• They want to know you're available RIGHT NOW</li>
                      <li>• Price is secondary to speed and reliability</li>
                      <li>• They'll choose the first trustworthy option they find</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The 10-Second Emergency Website Test</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When someone lands on your website in an emergency, they need to know three things within 10 seconds:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. You're Available</h3>
                  <p className="text-gray-700 text-sm">Clear 24/7 availability messaging</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. You're Fast</h3>
                  <p className="text-gray-700 text-sm">Response time guarantees</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl text-center">
                  <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. You're Trustworthy</h3>
                  <p className="text-gray-700 text-sm">Credentials and social proof</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Emergency Website Features</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Prominent Emergency Contact Information</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your phone number should be the most visible element on your website. Here's how to do it right:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Emergency Contact Best Practices</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Large, clickable phone number</strong> in the header (minimum 18px font size)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Sticky contact bar</strong> that follows users as they scroll
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>"CALL NOW" buttons</strong> in contrasting colors (red or orange)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Multiple contact options</strong> - phone, WhatsApp, emergency form
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Clear Availability Messaging</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Customers need to know exactly when you're available. Ambiguity kills conversions in emergency situations:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Vague Messaging</h4>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>• "Available for emergencies"</li>
                    <li>• "Call for urgent repairs"</li>
                    <li>• "Emergency service available"</li>
                    <li>• "24/7 service" (without details)</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Clear Messaging</h4>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>• "24/7 Emergency Response - Call Now"</li>
                    <li>• "Available Right Now - 30 Min Response"</li>
                    <li>• "Emergency Callouts: Evenings, Weekends, Bank Holidays"</li>
                    <li>• "Live Answer 24/7 - No Voicemail"</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Response Time Guarantees</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Emergency customers want to know exactly when help will arrive. Be specific with your promises:
              </p>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Effective Response Time Messaging</h4>
                <div className="space-y-3 text-blue-700">
                  <p><strong>Phone Response:</strong> "Live answer within 3 rings - no automated systems"</p>
                  <p><strong>Arrival Time:</strong> "On-site within 60 minutes for genuine emergencies"</p>
                  <p><strong>Assessment:</strong> "Free emergency assessment and quote on arrival"</p>
                  <p><strong>Work Start:</strong> "Most emergency repairs started same day"</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Emergency-Specific Landing Pages</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Create dedicated pages for different emergency scenarios. This improves SEO and provides targeted messaging:
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-red-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Plumbing Examples</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• /emergency-plumber-birmingham</li>
                    <li>• /burst-pipe-repair</li>
                    <li>• /blocked-drain-emergency</li>
                    <li>• /boiler-breakdown-repair</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Emergency Electrical Examples</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• /emergency-electrician-west-midlands</li>
                    <li>• /power-cut-repair</li>
                    <li>• /electrical-fault-finding</li>
                    <li>• /fuse-box-problems</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mobile-First Emergency Design</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                85% of emergency searches happen on mobile devices. Your emergency website must be mobile-optimized:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Emergency Essentials</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      One-tap calling from any page
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Large, thumb-friendly buttons
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Fast loading (under 3 seconds)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Minimal scrolling required
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Emergency Form Design</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Maximum 4 fields (name, phone, location, issue)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Auto-location detection
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Dropdown for common emergencies
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Instant confirmation message
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building Trust in Crisis Moments</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Emergency customers are vulnerable and need extra reassurance. Build trust quickly with:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Instant Trust Builders</h4>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Professional certifications</strong> prominently displayed
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Insurance details</strong> and public liability coverage
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Recent emergency testimonials</strong> with photos
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Years of experience</strong> in emergency work
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Local area knowledge</strong> and coverage map
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Emergency Testimonial Example</h4>
                  <p className="text-blue-700 italic mb-3">
                    "Called at 11 PM on a Saturday with a burst pipe flooding our kitchen. John answered immediately and was at our house within 45 minutes. Professional, efficient, and saved our home from major damage. Couldn't recommend more highly!"
                  </p>
                  <p className="text-blue-700 text-sm">- Sarah M., Edgbaston (verified customer)</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Emergency Pricing Strategy</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Emergency customers expect to pay more, but they want transparency. Here's how to handle pricing:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What to Include</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Clear callout fee structure
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      "No hidden charges" guarantee
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Payment options available
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Free quote/assessment policy
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What to Avoid</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Hiding emergency rates
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Complex pricing structures
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      "Call for pricing" only
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Unclear additional charges
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Emergency SEO: Being Found in Crisis</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Emergency searches have specific patterns. Optimize for these high-intent keywords:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">High-Converting Emergency Keywords</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Time-Based Searches</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• "24 hour plumber [location]"</li>
                      <li>• "Emergency electrician now"</li>
                      <li>• "Weekend plumber [area]"</li>
                      <li>• "Out of hours heating repair"</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Problem-Based Searches</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• "Burst pipe repair [location]"</li>
                      <li>• "No hot water emergency"</li>
                      <li>• "Power cut electrician"</li>
                      <li>• "Blocked drain urgent"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Emergency Website Success</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Track these specific metrics for your emergency website performance:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Conversion Metrics</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Phone calls from emergency pages</li>
                    <li>• Emergency form submissions</li>
                    <li>• Time spent on emergency pages</li>
                    <li>• Bounce rate on emergency content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Business Impact</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Emergency callout conversion rate</li>
                    <li>• Average emergency job value</li>
                    <li>• Customer retention from emergencies</li>
                    <li>• Emergency customer referrals</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Emergency Opportunity</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Emergency work often leads to the most loyal customers. Someone who calls you in a crisis and receives excellent service becomes a customer for life. They'll recommend you to friends, call you for planned work, and trust you with their most important repairs.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                But this only happens if your website can capture them in that crucial first moment when they're searching for help. Every element of your emergency website should be designed with one goal: getting that phone to ring.
              </p>

              <BlogCTA />
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}