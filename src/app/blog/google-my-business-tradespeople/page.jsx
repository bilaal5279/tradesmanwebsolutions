import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, CheckCircle, Star, MapPin, Camera, MessageSquare } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactButton from "@/components/ContactButton"
import BlogCTA from "@/components/BlogCTA"

export const metadata = {
  title: "Google My Business Optimization for UK Tradespeople | Tradesman Web Solutions",
  description: "Step-by-step guide to optimizing your Google My Business profile to attract more local customers and improve your online visibility as a UK tradesperson.",
  keywords: "Google My Business tradespeople, GMB optimization trades, local SEO tradespeople, Google Business Profile trades, UK tradesman Google listing",
  openGraph: {
    title: "Google My Business Optimization for UK Tradespeople",
    description: "Step-by-step guide to optimizing your Google My Business profile to attract more local customers.",
    url: "https://tradesmanwebsolutions.co.uk/blog/google-my-business-tradespeople",
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
                28 December 2023
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                7 min read
                <span className="mx-2">•</span>
                SEO & Marketing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Google My Business Optimization for UK Tradespeople
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your Google My Business profile is often the first impression potential customers have of your trade business. Here's your complete guide to optimizing it for maximum visibility, trust, and lead generation.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By <span className="font-medium text-gray-700">Emma Clarke</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/google-my-business.jpg"
                alt="Google My Business optimization for UK tradespeople"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                When someone searches for "plumber near me" or "electrician Birmingham," your Google My Business (GMB) profile is your digital storefront. It's free, powerful, and for many tradespeople, it's the difference between a phone that rings constantly and one that stays silent.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Why GMB Matters for Tradespeople</h3>
                    <ul className="text-blue-700 space-y-2">
                      <li>• 76% of local searches result in a phone call within 24 hours</li>
                      <li>• GMB listings appear in Google Maps and local search results</li>
                      <li>• Customers can see reviews, photos, and contact info instantly</li>
                      <li>• It's completely free to set up and maintain</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 1: Claiming and Verifying Your Profile</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Before you can optimize anything, you need to claim your Google My Business profile. Many tradespeople are surprised to find Google has already created a basic listing for them.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">How to Claim Your Profile</h4>
                <ol className="text-gray-700 space-y-2">
                  <li>1. Go to business.google.com</li>
                  <li>2. Search for your business name and location</li>
                  <li>3. If it exists, click "Claim this business"</li>
                  <li>4. If not, click "Add your business to Google"</li>
                  <li>5. Follow the verification process (usually by postcard)</li>
                  <li>6. Wait 5-7 days for verification to complete</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 2: Complete Your Business Information</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Google rewards complete profiles with better visibility. Here's what you must include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Essential Information</h4>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Business name (exactly as registered)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Complete address (if you have premises)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Phone number (local number preferred)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Website URL
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      Business category (be specific)
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Additional Details</h4>
                  <ul className="text-blue-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Business hours (including emergency hours)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Service areas (where you work)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Business description (160 characters)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Services offered
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Payment methods accepted
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Choosing the Right Business Category</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your primary category is crucial for local search rankings. Be as specific as possible:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Category Examples for Tradespeople</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Instead of "Contractor":</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Plumbing contractor</li>
                      <li>• Electrical contractor</li>
                      <li>• HVAC contractor</li>
                      <li>• Roofing contractor</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Even More Specific:</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Emergency plumber</li>
                      <li>• Boiler repair service</li>
                      <li>• Bathroom renovation specialist</li>
                      <li>• Solar panel installer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 3: Optimize Your Business Description</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You have 750 characters to tell potential customers what makes your business special. Make every word count:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Weak Description Example</h4>
                  <p className="text-red-700 italic mb-3">
                    "We are a plumbing company that has been in business for 10 years. We do all types of plumbing work and are available for emergencies."
                  </p>
                  <p className="text-red-700 text-sm">Problems: Generic, no location, no unique value, boring</p>
                </div>

                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Strong Description Example</h4>
                  <p className="text-green-700 italic mb-3">
                    "Birmingham's trusted emergency plumber since 2014. Specializing in boiler repairs, bathroom installations & burst pipe emergencies. Gas Safe registered, fully insured, 24/7 callouts across West Midlands. Free quotes, fixed prices, no hidden charges. Call now!"
                  </p>
                  <p className="text-green-700 text-sm">Strengths: Location-specific, services listed, credentials mentioned, clear call-to-action</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 4: Add High-Quality Photos</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Businesses with photos receive 42% more requests for directions and 35% more click-throughs to their websites. Here's what to include:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Essential Photo Types</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Professional logo/profile photo
                    </li>
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Your work van/vehicle
                    </li>
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Before/after project photos
                    </li>
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      You and your team at work
                    </li>
                    <li className="flex items-start">
                      <Camera className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Tools and equipment
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Photo Quality Tips</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Use good lighting (natural light is best)</li>
                    <li>• Keep photos recent (within 6 months)</li>
                    <li>• Show your face - people trust people</li>
                    <li>• Include your business name/logo when possible</li>
                    <li>• Upload regularly (monthly is ideal)</li>
                    <li>• Use high resolution (minimum 720px)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 5: Manage and Respond to Reviews</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Reviews are the lifeblood of local businesses. Here's how to build and maintain a strong review profile:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Getting More Reviews</h3>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Review Generation Strategy</h4>
                <ol className="text-blue-700 space-y-3">
                  <li>
                    <strong>1. Ask at the right moment:</strong> When the customer is clearly satisfied with your work
                  </li>
                  <li>
                    <strong>2. Make it easy:</strong> Show them exactly how to leave a review on their phone
                  </li>
                  <li>
                    <strong>3. Follow up:</strong> Send a text with your review link 24 hours later
                  </li>
                  <li>
                    <strong>4. Provide value first:</strong> Give maintenance tips or warranty info, then ask for review
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Responding to Reviews</h3>
              
              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Positive Review Response</h4>
                  <p className="text-gray-700 mb-3">Keep it brief, personal, and professional:</p>
                  <p className="text-gray-700 italic text-sm">
                    "Thanks John! Really pleased you're happy with the new boiler installation. Don't hesitate to call if you need anything else. - Mike"
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Negative Review Response</h4>
                  <p className="text-gray-700 mb-3">Stay professional, acknowledge the issue, offer to resolve:</p>
                  <p className="text-gray-700 italic text-sm">
                    "Hi Sarah, I'm sorry you weren't completely satisfied. I'd like to make this right - please call me directly on [number] so we can discuss how to resolve this. - Mike"
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 6: Use Google Posts Effectively</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Google Posts appear directly in your GMB listing and can drive engagement. Use them to:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">Post Ideas for Tradespeople</h4>
                  <ul className="text-purple-700 space-y-2">
                    <li className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      Recent project completions
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      Seasonal maintenance tips
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      Special offers or promotions
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      Emergency availability updates
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                      New certifications or training
                    </li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Posting Best Practices</h4>
                  <ul className="text-orange-700 space-y-2 text-sm">
                    <li>• Post weekly for best results</li>
                    <li>• Include high-quality images</li>
                    <li>• Add clear call-to-action buttons</li>
                    <li>• Keep text under 300 characters</li>
                    <li>• Use local keywords naturally</li>
                    <li>• Posts expire after 7 days</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Step 7: Monitor Your Performance</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Google My Business provides valuable insights about how customers find and interact with your business:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics to Track</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Visibility Metrics</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Total views of your listing</li>
                      <li>• How customers found you (search vs maps)</li>
                      <li>• Search queries that led to your listing</li>
                      <li>• Photo views and engagement</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Action Metrics</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Phone calls from your listing</li>
                      <li>• Direction requests</li>
                      <li>• Website clicks</li>
                      <li>• Message inquiries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common GMB Mistakes to Avoid</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">Critical Mistakes</h4>
                  <ul className="text-red-700 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Inconsistent NAP:</strong> Name, Address, Phone must match everywhere online
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Ignoring reviews:</strong> Not responding to reviews (positive or negative)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Outdated information:</strong> Wrong hours, old phone numbers, closed services
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Poor quality photos:</strong> Blurry, dark, or irrelevant images
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advanced GMB Strategies</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Area Optimization</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For mobile tradespeople, properly setting your service areas is crucial:
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Service Area Best Practices</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• List specific towns/areas rather than just postcodes</li>
                  <li>• Include travel time in your service radius</li>
                  <li>• Update seasonally if your coverage changes</li>
                  <li>• Be realistic about emergency response areas</li>
                  <li>• Consider different areas for different services</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Q&A Section Management</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Q&A section lets you proactively answer common customer questions:
              </p>

              <div className="bg-green-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Common Questions to Pre-Answer</h4>
                <ul className="text-green-700 space-y-2">
                  <li>• "Do you offer emergency callouts?"</li>
                  <li>• "Are you Gas Safe registered?"</li>
                  <li>• "Do you provide free quotes?"</li>
                  <li>• "What areas do you cover?"</li>
                  <li>• "Do you offer guarantees on your work?"</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Long-Term GMB Strategy</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Google My Business optimization isn't a one-time task—it's an ongoing process that compounds over time. Businesses that consistently maintain and improve their GMB profiles see:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  Higher local search rankings
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  More phone calls and inquiries
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  Better quality leads from local customers
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  Increased trust and credibility
                </li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Your GMB profile works 24/7 to attract local customers. Invest the time to optimize it properly, and it will become one of your most valuable marketing assets.
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