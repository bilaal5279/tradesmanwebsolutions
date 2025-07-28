import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, CheckCircle, FileText, Users, Phone, Shield } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactButton from "@/components/ContactButton"
import BlogCTA from "@/components/BlogCTA"

export const metadata = {
  title: "What Content Should Your Trade Website Include? | Tradesman Web Solutions",
  description: "Essential pages and content every tradesperson's website needs to convert visitors into customers. Complete content strategy guide for UK trade businesses.",
  keywords: "tradesman website content, trade website pages, tradesman website structure, trade business website content, UK tradesman web content",
  openGraph: {
    title: "What Content Should Your Trade Website Include?",
    description: "Essential pages and content every tradesperson's website needs to convert visitors into customers.",
    url: "https://tradesmanwebsolutions.co.uk/blog/website-content-tradespeople",
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
                20 December 2023
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                9 min read
                <span className="mx-2">•</span>
                Website Tips
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                What Content Should Your Trade Website Include?
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your website content can make or break customer conversions. Here's the complete guide to essential pages and content every tradesperson's website needs to turn visitors into paying customers.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By <span className="font-medium text-gray-700">Michael Roberts</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/website-content.webp"
                alt="Website content strategy for tradespeople"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                "What should I put on my website?" This is the question every tradesperson asks when building their online presence. The answer isn't just about listing your services—it's about creating content that builds trust, demonstrates expertise, and guides visitors toward contacting you.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Content That Converts</h3>
                    <ul className="text-blue-700 space-y-2">
                      <li>• 68% of customers research tradespeople online before calling</li>
                      <li>• Websites with complete information get 3x more inquiries</li>
                      <li>• Trust-building content increases conversion rates by 40%</li>
                      <li>• Clear service descriptions reduce time-waster calls by 60%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Pages Every Trade Website Needs</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your website architecture should guide visitors through a logical journey from discovery to contact. Here are the must-have pages:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Homepage: Your Digital Storefront</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your homepage has 8 seconds to convince visitors they're in the right place. Here's what it must include:
              </p>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Homepage Essentials</h4>
                <ul className="text-green-700 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Clear headline:</strong> "Birmingham's Trusted Emergency Plumber" not "Welcome to Our Website"
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Prominent phone number:</strong> Large, clickable, above the fold
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Service overview:</strong> What you do in simple terms
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Service area:</strong> Where you work geographically
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Trust indicators:</strong> Certifications, insurance, years in business
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Social proof:</strong> Customer reviews or testimonials
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services Pages: Your Expertise Showcase</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Don't just list what you do—explain how you solve customer problems. Create separate pages for each major service:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Service Page Structure</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Problem the service solves</li>
                    <li>• Your approach/process</li>
                    <li>• What's included in the service</li>
                    <li>• Typical timeframes</li>
                    <li>• Pricing guidance (if appropriate)</li>
                    <li>• Before/after photos</li>
                    <li>• Call-to-action</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Example Service Pages</h4>
                  <ul className="text-purple-700 space-y-2">
                    <li>• Emergency Plumbing Repairs</li>
                    <li>• Boiler Installation & Repair</li>
                    <li>• Bathroom Renovations</li>
                    <li>• Central Heating Systems</li>
                    <li>• Drain Cleaning & Unblocking</li>
                    <li>• Gas Safety Certificates</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. About Page: Building Trust and Connection</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your About page is often the second most visited page. Use it to build trust and show your human side:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Story</h4>
                  <p className="text-gray-700">
                    How you got started, why you chose this trade, what drives you to do quality work. Keep it personal but professional.
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Qualifications & Experience</h4>
                  <p className="text-gray-700">
                    Certifications, training, years in business, notable projects. Include photos of certificates and team members.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Your Values</h4>
                  <p className="text-gray-700">
                    What you stand for: quality workmanship, fair pricing, reliability, customer service. Make it specific to your business.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Portfolio/Gallery: Proof of Quality</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Visual proof of your work is incredibly powerful. Organize your portfolio strategically:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Portfolio Best Practices</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Before/after photos:</strong> Show the transformation you create
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Categorize by service:</strong> Separate galleries for different types of work
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Include context:</strong> Brief description of each project
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>High-quality images:</strong> Good lighting, clean work areas
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Recent work:</strong> Keep portfolio current and relevant
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Testimonials/Reviews: Social Proof</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Customer testimonials are your most powerful sales tool. Present them effectively:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">What Makes a Good Testimonial</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Specific details about the work</li>
                    <li>• Customer's full name and location</li>
                    <li>• Photo of the customer (if possible)</li>
                    <li>• Mentions of your professionalism</li>
                    <li>• Results achieved or problems solved</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Testimonial Display Tips</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Feature on multiple pages</li>
                    <li>• Include star ratings</li>
                    <li>• Link to full Google reviews</li>
                    <li>• Use video testimonials when possible</li>
                    <li>• Update regularly with fresh reviews</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Page: Making It Easy to Reach You</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your contact page should remove all barriers to getting in touch:
              </p>

              <div className="bg-orange-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">Contact Page Essentials</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Contact Information</h5>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Primary phone number</li>
                      <li>• Emergency/out-of-hours number</li>
                      <li>• Email address</li>
                      <li>• Business address (if applicable)</li>
                      <li>• Service areas covered</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Additional Features</h5>
                    <ul className="text-orange-700 space-y-1 text-sm">
                      <li>• Contact form</li>
                      <li>• Business hours</li>
                      <li>• Response time expectations</li>
                      <li>• Map showing service area</li>
                      <li>• Social media links</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Additional Pages That Build Trust</h2>
              
              <h3 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">Insurance & Certifications Page</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Customers want to know they're protected. Create a dedicated page showing:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Insurance Coverage</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Public liability insurance details
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Professional indemnity coverage
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Tool and equipment insurance
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Vehicle insurance
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Certifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Gas Safe registration (for gas work)</li>
                    <li>• NICEIC/NAPIT certification (electrical)</li>
                    <li>• City & Guilds qualifications</li>
                    <li>• Manufacturer training certificates</li>
                    <li>• Health & safety certifications</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">FAQ Page: Answering Common Questions</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                An FAQ page reduces phone calls from time-wasters and helps serious customers understand your service:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Essential FAQ Topics</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Service Questions</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Do you offer emergency callouts?</li>
                      <li>• What areas do you cover?</li>
                      <li>• Do you provide free quotes?</li>
                      <li>• How quickly can you respond?</li>
                      <li>• Do you guarantee your work?</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Business Questions</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Are you fully insured?</li>
                      <li>• What payment methods do you accept?</li>
                      <li>• Do you clean up after work?</li>
                      <li>• Can you work evenings/weekends?</li>
                      <li>• Do you offer payment plans?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Content That Converts: Writing Tips</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Write for Your Customer, Not Yourself</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Industry Jargon Example</h4>
                  <p className="text-red-700 italic mb-3">
                    "We provide comprehensive HVAC solutions including installation, commissioning, and maintenance of heating, ventilation, and air conditioning systems to BS EN standards."
                  </p>
                  <p className="text-red-700 text-sm">Problem: Too technical, doesn't explain customer benefits</p>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Customer-Focused Example</h4>
                  <p className="text-green-700 italic mb-3">
                    "Keep your home comfortable year-round with our heating and cooling services. We install, repair, and maintain boilers, radiators, and air conditioning systems so your family stays warm in winter and cool in summer."
                  </p>
                  <p className="text-green-700 text-sm">Strengths: Clear benefits, everyday language, focuses on customer needs</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use Local Keywords Naturally</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Include location-based keywords throughout your content, but make it natural:
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Local Keyword Integration</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• "Serving Birmingham and surrounding areas since 2015"</li>
                  <li>• "Emergency plumber covering Solihull, Sutton Coldfield, and West Bromwich"</li>
                  <li>• "Trusted by homeowners across the West Midlands"</li>
                  <li>• "Based in Birmingham with fast response times throughout the region"</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Content Maintenance: Keeping It Fresh</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your website content isn't set-and-forget. Regular updates improve SEO and keep customers engaged:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Monthly Updates</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Add new customer testimonials
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Update portfolio with recent work
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Review and update pricing
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Check all contact information
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Quarterly Reviews</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Update service descriptions
                    </li>
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Refresh FAQ based on common questions
                    </li>
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Review and update certifications
                    </li>
                    <li className="flex items-start">
                      <Phone className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Analyze which content converts best
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Content That Wins Business</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Great website content does more than inform—it builds trust, demonstrates expertise, and guides visitors toward contacting you. Every page should answer the question: "Why should I choose you over your competitors?"
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Remember, your website works 24/7 to represent your business. Invest in content that reflects the quality and professionalism of your work, and it will become your most effective sales tool.
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