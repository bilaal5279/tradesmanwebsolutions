import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, CheckCircle, X, TrendingUp, DollarSign, Users } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactButton from "@/components/ContactButton"
import BlogCTA from "@/components/BlogCTA"

export const metadata = {
  title: "Trade Directories vs Your Own Website: The Truth About ROI | Tradesman Web Solutions",
  description: "Honest comparison of trade directories like Checkatrade vs having your own website. Which gives better return on investment for UK tradespeople?",
  keywords: "trade directories vs website, Checkatrade vs website, MyBuilder vs website, trade directory ROI, tradesman website ROI, UK trade marketing",
  openGraph: {
    title: "Trade Directories vs Your Own Website: The Truth About ROI",
    description: "Honest comparison of trade directories vs having your own website. Which gives better return on investment?",
    url: "https://tradesmanwebsolutions.co.uk/blog/trade-directories-vs-websites",
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
                5 January 2024
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                10 min read
                <span className="mx-2">•</span>
                Business Strategy
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Trade Directories vs Your Own Website: The Truth About ROI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Every tradesperson faces this decision: invest in directory listings or build your own website? After analyzing hundreds of trade businesses, here's the honest comparison that reveals which strategy actually delivers better returns.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By <span className="font-medium text-gray-700">James Thompson</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/directories-vs-websites.png"
                alt="Trade directories vs websites ROI comparison"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                "Should I spend £200 a month on Checkatrade or invest in my own website?" This question comes up in every trade business forum, Facebook group, and coffee shop conversation. The answer isn't what most tradespeople expect—and it could save you thousands while dramatically improving your business.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start">
                  <DollarSign className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">The Real Cost Comparison</h3>
                    <ul className="text-yellow-700 space-y-2">
                      <li>• Average directory spend: £150-300/month (£1,800-3,600/year)</li>
                      <li>• Professional website: £100-200/month (£1,200-2,400/year)</li>
                      <li>• But the ROI difference is where it gets interesting...</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Directory Reality Check</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's start with what trade directories actually deliver—and what they don't tell you in their sales pitches:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Directories Do Well</h3>
              
              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Directory Advantages</h4>
                <ul className="text-green-700 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Immediate visibility:</strong> Get listed and start receiving leads within days
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Built-in trust:</strong> Customers trust established directory brands
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>No technical knowledge required:</strong> They handle the website side
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Review system:</strong> Built-in customer feedback mechanism
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Hidden Directory Costs</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Here's what the directory sales teams don't emphasize during their pitch:
              </p>

              <div className="bg-red-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Directory Disadvantages</h4>
                <ul className="text-red-700 space-y-3">
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>You're competing with 10+ other tradespeople</strong> on the same page
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Price-focused customers:</strong> Many choose based on lowest quote
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>No control:</strong> They can change rules, prices, or algorithms anytime
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Lead quality varies:</strong> Many leads are just price shopping
                  </li>
                  <li className="flex items-start">
                    <X className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Ongoing costs:</strong> Stop paying, lose all visibility immediately
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Your Own Website: The Long-Term Winner</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A professional website requires more upfront investment in time and money, but the long-term returns tell a different story:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Website Advantages</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Immediate Benefits</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      You're the only business featured
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Complete control over messaging
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Professional credibility boost
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Better quality leads
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Long-Term Benefits</h4>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      SEO value compounds over time
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      You own all customer data
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      No ongoing lead fees
                    </li>
                    <li className="flex items-start">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Asset that increases in value
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Website Challenges (And Solutions)</h3>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge: Takes Time to Build Traffic</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Reality:</strong> SEO results typically take 3-6 months to show significant impact.
                  </p>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Start with local SEO and Google My Business optimization for faster results. Use the website to convert directory leads better while organic traffic builds.
                  </p>
                </div>

                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge: Requires Marketing Knowledge</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Reality:</strong> You need to understand basic SEO, content creation, and online marketing.
                  </p>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Work with professionals who understand trade businesses. The investment in expertise pays for itself quickly.
                  </p>
                </div>

                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge: Higher Upfront Investment</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Reality:</strong> Professional website design and setup costs more initially than directory signup.
                  </p>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> View it as buying vs renting. You're building an asset, not paying ongoing fees forever.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The ROI Breakdown: Real Numbers</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's look at actual ROI over a 2-year period for a typical trade business:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">2-Year Investment Comparison</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-red-800 mb-3">Directory Route</h5>
                    <ul className="text-red-700 space-y-2 text-sm">
                      <li>• Monthly fees: £200 x 24 months = £4,800</li>
                      <li>• Lead conversion rate: ~15%</li>
                      <li>• Average job value: £400 (price competition)</li>
                      <li>• Leads generated: ~240 over 2 years</li>
                      <li>• Jobs won: ~36</li>
                      <li>• Revenue: £14,400</li>
                      <li><strong>• ROI: 200% (but ongoing costs forever)</strong></li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-3">Website Route</h5>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Setup + monthly: £150 x 24 months = £3,600</li>
                      <li>• Lead conversion rate: ~35%</li>
                      <li>• Average job value: £650 (quality leads)</li>
                      <li>• Leads generated: ~180 over 2 years</li>
                      <li>• Jobs won: ~63</li>
                      <li>• Revenue: £40,950</li>
                      <li><strong>• ROI: 1,037% (and growing)</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Hybrid Approach: Best of Both Worlds</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The smartest tradespeople don't choose one or the other—they use a strategic combination:
              </p>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">The Smart Strategy</h4>
                <div className="space-y-4 text-blue-700">
                  <div>
                    <strong>Phase 1 (Months 1-6):</strong> Launch professional website + maintain 1-2 best-performing directories
                  </div>
                  <div>
                    <strong>Phase 2 (Months 6-12):</strong> Focus on SEO and content marketing while monitoring directory ROI
                  </div>
                  <div>
                    <strong>Phase 3 (Year 2+):</strong> Reduce directory spend as website traffic grows, reinvest savings in website marketing
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Customer Quality: The Hidden Difference</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Beyond the numbers, there's a crucial difference in customer quality that affects your entire business:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Directory Customers</h4>
                  <ul className="text-red-700 space-y-2">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      Often price shopping multiple tradespeople
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      May not value quality as highly
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      Less likely to become repeat customers
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                      More likely to negotiate on price
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Website Customers</h4>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Have researched you specifically
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Value professionalism and quality
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      More likely to become loyal customers
                    </li>
                    <li className="flex items-start">
                      <Users className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Accept fair pricing for quality work
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Making the Right Choice for Your Business</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The decision depends on your business stage and goals:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">Choose Directories If:</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• You're just starting and need immediate leads</li>
                    <li>• You have no marketing budget or knowledge</li>
                    <li>• You're testing demand in a new area</li>
                    <li>• You plan to sell the business within 2 years</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Choose Your Own Website If:</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• You're building a long-term business</li>
                    <li>• You want to control your brand and pricing</li>
                    <li>• You're tired of competing solely on price</li>
                    <li>• You want to build a valuable business asset</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Bottom Line</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Trade directories serve a purpose, especially for new businesses needing immediate leads. But if you're serious about building a sustainable, profitable trade business, your own professional website isn't just better—it's essential.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The tradespeople who thrive long-term are those who stop renting their online presence and start owning it. They build websites that work 24/7, attract quality customers, and become more valuable every year.
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