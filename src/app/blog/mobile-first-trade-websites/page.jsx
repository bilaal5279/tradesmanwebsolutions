import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, CheckCircle, Smartphone, Zap, TrendingUp, Users } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ContactButton from "@/components/ContactButton"
import BlogCTA from "@/components/BlogCTA"

export const metadata = {
  title: "Why Mobile-First Design is Critical for Trade Websites | Tradesman Web Solutions",
  description: "Over 70% of trade customers search on mobile. Learn why mobile-first design is essential for your trade business website and how to get it right.",
  keywords: "mobile-first design trades, mobile website tradespeople, responsive design trades, mobile SEO tradespeople, mobile optimization trades",
  openGraph: {
    title: "Why Mobile-First Design is Critical for Trade Websites",
    description: "Over 70% of trade customers search on mobile. Learn why mobile-first design is essential for your trade business.",
    url: "https://tradesmanwebsolutions.co.uk/blog/mobile-first-trade-websites",
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
                15 December 2023
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                6 min read
                <span className="mx-2">•</span>
                Website Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Why Mobile-First Design is Critical for Trade Websites
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your customers are searching for tradespeople on their phones, not their computers. If your website isn't mobile-first, you're losing customers before they even call. Here's why mobile design can make or break your trade business.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By <span className="font-medium text-gray-700">Lisa Anderson</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/mobile-first-design.png"
                alt="Mobile-first design for trade websites"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                It's 9 PM on a Tuesday. A homeowner's boiler has just broken down, and they're frantically searching for an emergency plumber on their phone. They find your website, but it's slow to load, hard to navigate, and your phone number is buried somewhere they can't find. They hit the back button and call your competitor instead.
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <div className="flex items-start">
                  <Smartphone className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">The Mobile Reality for Tradespeople</h3>
                    <ul className="text-red-700 space-y-2">
                      <li>• 73% of trade-related searches happen on mobile devices</li>
                      <li>• 61% of users won't return to a mobile site they had trouble accessing</li>
                      <li>• 40% will visit a competitor's site instead</li>
                      <li>• Mobile users are 5x more likely to abandon a task if the site isn't mobile-optimized</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Mobile-First Actually Means</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mobile-first isn't just about making your website "work" on phones. It's about designing the entire experience around mobile users first, then enhancing it for larger screens.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Mobile-Responsive (Old Approach)</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Design for desktop first</li>
                    <li>• Squeeze content to fit mobile</li>
                    <li>• Hide elements on smaller screens</li>
                    <li>• Often slow and clunky on mobile</li>
                    <li>• Mobile feels like an afterthought</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Mobile-First (Modern Approach)</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Design for mobile first</li>
                    <li>• Prioritize essential content</li>
                    <li>• Add features for larger screens</li>
                    <li>• Fast and intuitive on mobile</li>
                    <li>• Mobile experience is the priority</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Trade Customers Are Mobile-First</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding when and why customers search for tradespeople on mobile helps explain why mobile-first design is crucial:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Emergency Situations</h3>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-yellow-800 mb-3">Common Mobile Search Scenarios</h4>
                <ul className="text-yellow-700 space-y-3">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Burst pipe at 11 PM:</strong> Homeowner needs emergency plumber immediately
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Power cut during dinner:</strong> Family searching for emergency electrician
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Boiler breakdown in winter:</strong> Urgent heating repair needed
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Blocked drain flooding bathroom:</strong> Need immediate drainage help
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">On-the-Go Research</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Even for planned work, customers often research tradespeople while:
              </p>

              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  Commuting to/from work
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  During lunch breaks
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  Waiting for appointments
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  In the evening while watching TV
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Essential Mobile-First Features for Trade Websites</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. One-Tap Calling</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your phone number should be clickable and prominent on every page. When someone taps it, their phone should immediately start dialing.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Phone Number Best Practices</h4>
                <ul className="text-blue-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Sticky header:</strong> Phone number always visible as user scrolls
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Large, tappable buttons:</strong> Minimum 44px height for easy tapping
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Contrasting colors:</strong> Make the call button stand out
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Clear labeling:</strong> "Call Now" or "Emergency Callout"
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Fast Loading Speed</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mobile users expect websites to load in under 3 seconds. Every additional second increases bounce rate by 32%.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">Speed Optimization</h4>
                  <ul className="text-green-700 space-y-2">
                    <li>• Optimize images for mobile</li>
                    <li>• Minimize code and scripts</li>
                    <li>• Use fast, reliable hosting</li>
                    <li>• Enable browser caching</li>
                    <li>• Compress files automatically</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">Speed Impact</h4>
                  <ul className="text-orange-700 space-y-2 text-sm">
                    <li>• 1-3 seconds: Good user experience</li>
                    <li>• 3-5 seconds: 32% increase in bounce rate</li>
                    <li>• 5-7 seconds: 90% increase in bounce rate</li>
                    <li>• 7+ seconds: Most users abandon</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Thumb-Friendly Navigation</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mobile users navigate with their thumbs. Your website should be designed around natural thumb movements and reach zones.
              </p>

              <div className="bg-purple-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-purple-800 mb-3">Mobile Navigation Principles</h4>
                <ul className="text-purple-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Bottom navigation:</strong> Important actions within thumb reach
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Large touch targets:</strong> Buttons and links easy to tap
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Adequate spacing:</strong> Prevent accidental taps
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Simple menu structure:</strong> Maximum 5-7 main navigation items
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">4. Readable Text Without Zooming</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If users have to pinch and zoom to read your content, they'll leave. Text should be easily readable on mobile screens.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Mobile Typography Guidelines</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Font Sizes</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Body text: Minimum 16px</li>
                      <li>• Headings: 24px or larger</li>
                      <li>• Phone numbers: 18px or larger</li>
                      <li>• Button text: 16px minimum</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">Readability</h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• High contrast colors</li>
                      <li>• Adequate line spacing</li>
                      <li>• Short paragraphs</li>
                      <li>• Bullet points for lists</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mobile-First Content Strategy</h2>
              
              <h3 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">Prioritize Essential Information</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mobile screens have limited space. Lead with what matters most to your customers:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Above the Fold (First Screen)</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• What you do (in simple terms)</li>
                    <li>• Where you work (service area)</li>
                    <li>• Phone number (large and clickable)</li>
                    <li>• Emergency availability (if applicable)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Second Screen</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Key services offered</li>
                    <li>• Trust indicators (certifications, insurance)</li>
                    <li>• Customer reviews/testimonials</li>
                    <li>• Years in business</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibent text-gray-900 mt-8 mb-4">Scannable Content Format</h3>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Mobile users scan rather than read. Format your content for quick consumption:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Mobile-Unfriendly</h4>
                  <ul className="text-red-700 space-y-2 text-sm">
                    <li>• Long paragraphs</li>
                    <li>• Dense blocks of text</li>
                    <li>• Complex sentences</li>
                    <li>• Technical jargon</li>
                    <li>• No visual breaks</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Mobile-Friendly</h4>
                  <ul className="text-green-700 space-y-2 text-sm">
                    <li>• Short paragraphs (2-3 sentences)</li>
                    <li>• Bullet points and lists</li>
                    <li>• Clear headings</li>
                    <li>• Simple language</li>
                    <li>• Plenty of white space</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mobile SEO Considerations</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Google uses mobile-first indexing, meaning it primarily uses the mobile version of your site for ranking and indexing.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Mobile SEO Essentials</h4>
                <ul className="text-blue-700 space-y-2">
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Page speed:</strong> Core Web Vitals are ranking factors
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Mobile usability:</strong> No mobile usability errors in Search Console
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Local optimization:</strong> Mobile searches are often location-based
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <strong>Structured data:</strong> Help Google understand your business
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Testing Your Mobile Experience</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Regular testing ensures your mobile experience stays optimal:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-3">Monthly Mobile Checks</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Test on different devices and screen sizes</li>
                    <li>• Check loading speed on mobile networks</li>
                    <li>• Verify all buttons and links work properly</li>
                    <li>• Ensure forms are easy to complete</li>
                    <li>• Test the phone calling functionality</li>
                    <li>• Review Google Search Console mobile usability reports</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Mobile-First Advantage</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tradespeople who embrace mobile-first design don't just avoid losing customers—they gain a significant competitive advantage. When your website works perfectly on mobile while your competitors' sites are clunky and slow, the choice is obvious.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Mobile-first isn't just about technology—it's about understanding how your customers behave and meeting them where they are. In an emergency at 11 PM, they're not sitting at a desktop computer. They're on their phone, and they need help now.
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