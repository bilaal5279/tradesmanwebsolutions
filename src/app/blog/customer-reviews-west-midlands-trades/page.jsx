import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, CheckCircle, Star, MessageSquare, Shield } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactButton from "@/components/ContactButton"
import BlogCTA from "@/components/BlogCTA"

export const metadata = {
  title: "How to Get More Customer Reviews: West Midlands Tradespeople Guide | Tradesman Web Solutions",
  description: "Master the art of getting genuine customer reviews. Proven strategies for building trust and attracting more customers across the West Midlands trade market.",
  keywords: "customer reviews tradespeople, West Midlands trade reviews, Google reviews tradespeople, online reputation management trades, Birmingham tradesman reviews",
  openGraph: {
    title: "How to Get More Customer Reviews: West Midlands Tradespeople Guide",
    description: "Master the art of getting genuine customer reviews. Proven strategies for building trust and attracting more customers.",
    url: "https://tradesmanwebsolutions.co.uk/blog/customer-reviews-west-midlands-trades",
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
                18 January 2024
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                9 min read
                <span className="mx-2">•</span>
                Business Growth
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                How to Get More Customer Reviews: West Midlands Tradespeople Guide
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Customer reviews are the lifeblood of trade businesses in the digital age. Learn the proven strategies West Midlands tradespeople use to build trust, attract quality customers, and dominate their local markets through authentic reviews.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By <span className="font-medium text-gray-700">Bilaal Ishtiaq</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/customer-reviews-guide.jpg"
                alt="Customer reviews guide for West Midlands tradespeople"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                In the West Midlands trade market, your reputation is everything. With 92% of customers reading online reviews before choosing a tradesperson, and 88% trusting online reviews as much as personal recommendations, your review strategy can make or break your business.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">The Review Reality Check</h3>
                    <ul className="text-yellow-700 space-y-2">
                      <li>• Businesses with 5+ reviews get 35% more clicks</li>
                      <li>• 4.0+ star rating increases conversion by 25%</li>
                      <li>• Recent reviews (within 3 months) carry 3x more weight</li>
                      <li>• Responding to reviews increases customer trust by 40%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Psychology of Review Requests: Why Customers Don't Leave Reviews</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before diving into strategies, understand why most satisfied customers don't leave reviews:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Customers Don't Review</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      They forget once the job is done
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      They don't know how to leave reviews
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      They assume you don't need them
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      They're busy with their own lives
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Solution Strategy</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Make it part of your process
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Provide clear, simple instructions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Explain why reviews help your business
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Time your requests perfectly
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Perfect Review Request System</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 1: Set Expectations Early</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Plant the seed during your initial conversation or quote. Here's what successful West Midlands tradespeople say:
              </p>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Script Example</h4>
                <p className="text-blue-700 italic">
                  "I take great pride in my work and my reputation in the Birmingham area. If you're happy with the job, I'd really appreciate if you could leave a quick review online. It helps other local families find reliable tradespeople like myself."
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 2: The Golden Moment - Job Completion</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The best time to ask for a review is immediately after completing excellent work, when satisfaction is highest:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">The Face-to-Face Ask</h4>
                  <p className="text-gray-700 mb-3">When the customer is clearly satisfied:</p>
                  <p className="text-gray-700 italic">
                    "I'm so glad you're happy with the work! Would you mind taking 2 minutes to leave a quick review? It really helps my small business here in [Birmingham/Solihull/etc.]. I can show you exactly how to do it on your phone right now."
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Make It Easy</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Have your Google My Business review link ready on your phone</li>
                    <li>• Show them exactly where to click</li>
                    <li>• Offer to help them navigate the process</li>
                    <li>• Thank them genuinely for their time</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Step 3: The Follow-Up System</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not everyone will leave a review immediately. A gentle follow-up system increases your success rate by 60%:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">The 3-Touch Follow-Up</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">24 Hours Later: Text Message</h5>
                      <p className="text-gray-700 text-sm mt-1">
                        "Hi [Name], thanks again for choosing us for your [job type]. If you have 2 minutes, a review would mean the world to us: [link]"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">1 Week Later: Email</h5>
                      <p className="text-gray-700 text-sm mt-1">
                        More detailed email with photos of their completed work and easy review instructions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-800">1 Month Later: Final Follow-Up</h5>
                      <p className="text-gray-700 text-sm mt-1">
                        Check if everything is still working well and gentle review reminder
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Platform-Specific Strategies</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Google Reviews: Your Priority Platform</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Google reviews appear in search results and Google Maps, making them crucial for West Midlands tradespeople:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Google Reviews Matter Most</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Appear in local search results
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Influence Google Maps rankings
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Most trusted by customers
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      Free and widely used
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Getting Your Review Link</h4>
                  <ol className="space-y-2 text-gray-700 text-sm">
                    <li>1. Go to your Google My Business dashboard</li>
                    <li>2. Click "Get more reviews"</li>
                    <li>3. Copy the short link</li>
                    <li>4. Save it in your phone for easy sharing</li>
                    <li>5. Create a QR code for business cards</li>
                  </ol>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Facebook Reviews: Building Community Trust</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Facebook reviews are particularly powerful in West Midlands communities where local Facebook groups are active:
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Facebook Review Strategy</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• Enable reviews on your Facebook business page</li>
                  <li>• Share positive reviews in local community groups (with permission)</li>
                  <li>• Use Facebook reviews in your website testimonials</li>
                  <li>• Respond to all Facebook reviews promptly</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Handling Negative Reviews Like a Pro</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Negative reviews happen to every business. How you handle them shows your professionalism and can actually improve your reputation:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">The Professional Response Formula</h4>
                  <div className="space-y-3 text-red-700">
                    <p><strong>1. Acknowledge:</strong> "Thank you for taking the time to share your feedback"</p>
                    <p><strong>2. Apologize:</strong> "I'm sorry you weren't completely satisfied with our service"</p>
                    <p><strong>3. Take Responsibility:</strong> "We take all feedback seriously and want to make this right"</p>
                    <p><strong>4. Offer Solution:</strong> "Please contact me directly so we can resolve this"</p>
                    <p><strong>5. Show Improvement:</strong> "We've used your feedback to improve our processes"</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">What This Achieves</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Shows potential customers you care about service</li>
                    <li>• Demonstrates professionalism under pressure</li>
                    <li>• Often leads to the customer updating their review</li>
                    <li>• Builds trust with future customers reading reviews</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced Review Strategies for West Midlands Trades</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Review Card System</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Create professional review request cards to leave with customers:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Review Card Content</h4>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Front:</strong> "Loved our service? Help other West Midlands families find us!"</p>
                  <p><strong>Back:</strong> QR codes for Google, Facebook, and your website reviews</p>
                  <p><strong>Include:</strong> Simple step-by-step instructions</p>
                  <p><strong>Personal touch:</strong> "Thank you! - [Your name]"</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">The Photo Review Strategy</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Encourage customers to include photos in their reviews - these are incredibly powerful:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Photo Reviews Work</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Visual proof of quality work
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Higher engagement rates
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Stand out from competitors
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Build stronger trust
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Encourage Photo Reviews</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Take before/after photos during the job</li>
                    <li>• Offer to send photos to the customer</li>
                    <li>• Suggest they include photos in their review</li>
                    <li>• Show examples of other photo reviews</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Measuring Your Review Success</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Track these metrics to improve your review generation:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Review Metrics</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Quantity Metrics</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Reviews per month</li>
                      <li>• Review request to actual review ratio</li>
                      <li>• Platform distribution (Google vs Facebook vs others)</li>
                      <li>• Response rate to follow-up requests</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Quality Metrics</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Average star rating</li>
                      <li>• Review length and detail</li>
                      <li>• Keyword mentions (reliable, professional, etc.)</li>
                      <li>• Photo review percentage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Long-Term Review Strategy</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Building a strong review profile takes time, but the results compound. West Midlands tradespeople with 50+ positive reviews typically see:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  40% more inquiries from local search
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  Higher conversion rates on quotes
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  Ability to charge premium prices
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  Reduced reliance on paid advertising
                </li>
              </ul>

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