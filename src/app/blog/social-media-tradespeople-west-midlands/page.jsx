import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle,
  Users,
  Share2,
  Heart,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactButton from "@/components/ContactButton";
import BlogCTA from "@/components/BlogCTA";

export const metadata = {
  title:
    "Social Media Marketing for West Midlands Tradespeople | Tradesman Web Solutions",
  description:
    "Leverage Facebook, Instagram, and LinkedIn to grow your trade business. Local social media strategies that actually work for West Midlands tradespeople.",
  keywords:
    "social media marketing tradespeople, Facebook marketing trades, Instagram for tradespeople, West Midlands social media, Birmingham tradesman marketing",
  openGraph: {
    title: "Social Media Marketing for West Midlands Tradespeople",
    description:
      "Leverage Facebook, Instagram, and LinkedIn to grow your trade business. Local social media strategies that work.",
    url: "https://tradesmanwebsolutions.co.uk/blog/social-media-tradespeople-west-midlands",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "article",
  },
};

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
              <Button
                variant="ghost"
                className="p-0 h-auto text-blue-600 hover:text-blue-700"
                asChild
              >
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />8 January 2024
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />
                10 min read
                <span className="mx-2">•</span>
                SEO & Marketing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Social Media Marketing for West Midlands Tradespeople
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Social media isn't just for teenagers and influencers. When done
                right, it's one of the most powerful tools for West Midlands
                tradespeople to build trust, showcase work, and attract local
                customers. Here's your complete strategy.
              </p>
              <div className="mt-6 text-sm text-gray-500">
                By{" "}
                <span className="font-medium text-gray-700">
                  Bilaal Ishtiaq
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/social-media-tradespeople.jpg"
                alt="Social media marketing for West Midlands tradespeople"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                "I don't have time for social media." That's what most West
                Midlands tradespeople say. But while you're dismissing it, your
                competitors are using Facebook and Instagram to build
                relationships with customers, showcase their expertise, and
                generate leads. The question isn't whether you have time—it's
                whether you can afford to ignore it.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      West Midlands Social Media Reality
                    </h3>
                    <ul className="text-blue-700 space-y-2">
                      <li>
                        • 78% of West Midlands residents use Facebook daily
                      </li>
                      <li>
                        • 65% check local Facebook groups for recommendations
                      </li>
                      <li>• 43% follow local businesses on Instagram</li>
                      <li>
                        • Social media referrals convert 3x better than cold
                        leads
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Platform Strategy: Where to Focus Your Efforts
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You don't need to be on every platform. Focus on the ones where
                your West Midlands customers actually spend time:
              </p>

              <div className="space-y-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">f</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Facebook - Your Priority Platform
                      </h3>
                      <p className="text-gray-600">
                        Best for: Local community engagement, reviews,
                        recommendations
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Why Facebook Works for Trades
                      </h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Active local community groups</li>
                        <li>• Older demographic with disposable income</li>
                        <li>• Strong word-of-mouth culture</li>
                        <li>• Built-in review system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Content Strategy
                      </h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Before/after project photos</li>
                        <li>• Customer testimonials and reviews</li>
                        <li>• Behind-the-scenes work content</li>
                        <li>• Local area tips and advice</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">📷</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Instagram - Showcase Your Craftsmanship
                      </h3>
                      <p className="text-gray-600">
                        Best for: Visual trades, younger homeowners, portfolio
                        building
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Perfect for Visual Trades
                      </h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Bathroom and kitchen fitters</li>
                        <li>• Landscapers and gardeners</li>
                        <li>• Painters and decorators</li>
                        <li>• Builders and renovators</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Content Types
                      </h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• High-quality finished work photos</li>
                        <li>• Time-lapse videos of projects</li>
                        <li>• Stories showing daily work life</li>
                        <li>• Customer home transformations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">in</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        LinkedIn - B2B and Commercial Work
                      </h3>
                      <p className="text-gray-600">
                        Best for: Commercial contracts, property developers,
                        networking
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Focus here if you do commercial work, want to connect with
                    property developers, or offer specialized trade services to
                    businesses.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Facebook Strategy: Dominating Local Communities
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1. Optimize Your Business Page
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your Facebook business page is your social media headquarters.
                Here's how to set it up for success:
              </p>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Facebook Page Essentials
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Basic Information
                    </h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Professional profile and cover photos</li>
                      <li>• Complete contact information</li>
                      <li>• Service areas clearly listed</li>
                      <li>• Business hours including emergency availability</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Advanced Features
                    </h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Enable reviews and recommendations</li>
                      <li>• Add call-to-action buttons</li>
                      <li>• Create service highlights</li>
                      <li>• Link to your website and other platforms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2. Join and Engage in Local Groups
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This is where the real magic happens. West Midlands Facebook
                groups are goldmines for tradespeople:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    High-Value West Midlands Groups
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Birmingham Buy & Sell groups</li>
                    <li>
                      • Local area community groups (Solihull, Sutton Coldfield,
                      etc.)
                    </li>
                    <li>• West Midlands property and renovation groups</li>
                    <li>• Nextdoor neighborhood groups</li>
                    <li>• Local homeowner and landlord groups</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Group Engagement Rules
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Give value first:</strong> Answer questions and
                      provide helpful advice
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Follow group rules:</strong> Many have specific
                      days for business posts
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Be authentic:</strong> Share genuine experiences
                      and advice
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <strong>Build relationships:</strong> Engage with others'
                      posts regularly
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                3. Content That Converts
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not all content is created equal. Here's what actually drives
                business for West Midlands tradespeople:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">
                    High-Performing Content Types
                  </h4>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Before/after transformation photos
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Customer testimonial videos
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Behind-the-scenes work content
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Local area tips and advice
                    </li>
                    <li className="flex items-start">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      Seasonal maintenance reminders
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">
                    Content to Avoid
                  </h4>
                  <ul className="text-red-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Constant sales pitches
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Poor quality photos
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Political or controversial topics
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Overly technical jargon
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Negative comments about competitors
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Instagram Strategy: Visual Storytelling
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Creating Instagram-Worthy Content
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Instagram is all about visual appeal. Here's how to make your
                trade work look amazing:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">
                    Photography Tips for Tradespeople
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Technical Tips
                      </h5>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Use natural light when possible</li>
                        <li>• Clean the work area before photos</li>
                        <li>• Take multiple angles of finished work</li>
                        <li>• Use your phone's portrait mode for depth</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">
                        Composition Tips
                      </h5>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Show the full transformation context</li>
                        <li>• Include some of the surrounding area</li>
                        <li>• Focus on the quality details</li>
                        <li>• Capture the customer's reaction if possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-pink-800 mb-3">
                    Instagram Stories Strategy
                  </h4>
                  <p className="text-pink-700 mb-3">
                    Stories are perfect for showing your daily work life:
                  </p>
                  <ul className="text-pink-700 space-y-2">
                    <li>• Morning setup and tool preparation</li>
                    <li>• Progress updates throughout the day</li>
                    <li>• Problem-solving moments</li>
                    <li>• Customer interactions (with permission)</li>
                    <li>• End-of-day completion shots</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                West Midlands Instagram Hashtag Strategy
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Use a mix of local, trade-specific, and general hashtags to
                maximize reach:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Hashtag Categories
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Location Tags
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      #Birmingham #WestMidlands #Solihull #SuttonColdfield
                      #Edgbaston #Moseley
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Trade-Specific
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      #BirminghamPlumber #WestMidlandsElectrician
                      #LocalTradespeople #BirminghamBuilder
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      General Trade
                    </h5>
                    <p className="text-gray-700 text-sm mb-2">
                      #TradesmanLife #QualityWork #HomeImprovement
                      #BeforeAndAfter
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Content Calendar: Consistency is Key
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sporadic posting kills social media success. Here's a simple
                weekly content schedule:
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">
                  Weekly Content Schedule
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-20 text-sm font-semibold text-blue-700 mr-4">
                      Monday:
                    </div>
                    <div className="text-blue-700">
                      Motivation Monday - Inspirational before/after or team
                      photo
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 text-sm font-semibold text-blue-700 mr-4">
                      Tuesday:
                    </div>
                    <div className="text-blue-700">
                      Tip Tuesday - Helpful maintenance advice for homeowners
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 text-sm font-semibold text-blue-700 mr-4">
                      Wednesday:
                    </div>
                    <div className="text-blue-700">
                      Work Wednesday - Behind-the-scenes content from current
                      jobs
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 text-sm font-semibold text-blue-700 mr-4">
                      Thursday:
                    </div>
                    <div className="text-blue-700">
                      Throwback Thursday - Previous projects or company history
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 text-sm font-semibold text-blue-700 mr-4">
                      Friday:
                    </div>
                    <div className="text-blue-700">
                      Feature Friday - Customer testimonial or team spotlight
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Turning Social Media Followers into Customers
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Social media success isn't measured in likes—it's measured in
                leads and customers. Here's how to convert:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Engagement Strategies
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Respond to all comments within 2 hours
                    </li>
                    <li className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Ask questions to encourage interaction
                    </li>
                    <li className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Share user-generated content
                    </li>
                    <li className="flex items-start">
                      <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      Run local contests and giveaways
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Conversion Tactics
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Share2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Include clear calls-to-action in posts
                    </li>
                    <li className="flex items-start">
                      <Share2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Use "DM for quote" strategically
                    </li>
                    <li className="flex items-start">
                      <Share2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Link to your website in bio
                    </li>
                    <li className="flex items-start">
                      <Share2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Offer social media exclusive discounts
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Measuring Social Media Success
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Track metrics that matter to your business, not just vanity
                metrics:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Performance Indicators
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Business Metrics
                    </h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Inquiries generated from social media</li>
                      <li>• Quotes requested through social channels</li>
                      <li>• Jobs booked from social media leads</li>
                      <li>• Revenue attributed to social media</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">
                      Engagement Metrics
                    </h5>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Local follower growth rate</li>
                      <li>• Engagement rate on posts</li>
                      <li>• Website clicks from social media</li>
                      <li>• Share rate in local groups</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Common Social Media Mistakes to Avoid
              </h2>

              <div className="space-y-6 mb-8">
                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-red-800 mb-3">
                    The Biggest Mistakes
                  </h4>
                  <ul className="text-red-700 space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Inconsistent posting:</strong> Posting daily for
                        a week then disappearing for a month
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Ignoring comments:</strong> Not responding to
                        questions or engagement
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Poor photo quality:</strong> Blurry, dark, or
                        unprofessional images
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <div>
                        <strong>Over-selling:</strong> Every post being a sales
                        pitch
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Long-Term Social Media Strategy
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Social media marketing for tradespeople isn't about going
                viral—it's about building genuine relationships with your local
                community. When done consistently, it becomes one of your most
                valuable marketing channels, generating high-quality leads from
                people who already know, like, and trust you.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Start small, be consistent, and focus on providing value. Your
                West Midlands community is waiting to discover the quality
                tradesperson they can rely on—make sure they find you first.
              </p>

              <BlogCTA />
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
