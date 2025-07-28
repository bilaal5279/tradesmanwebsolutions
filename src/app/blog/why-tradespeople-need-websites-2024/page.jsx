import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactButton from "@/components/ContactButton";
import BlogCTA from "@/components/BlogCTA";

export const metadata = {
  title:
    "Why Every UK Tradesperson Needs a Professional Website in 2024 | Tradesman Web Solutions",
  description:
    "Discover why having your own website is crucial for trade businesses in 2024. Learn how professional websites transform lead generation and business growth for UK tradespeople.",
  keywords:
    "tradesman website 2024, UK trade business website, professional website tradespeople, trade business online presence, tradesman digital marketing",
  openGraph: {
    title: "Why Every UK Tradesperson Needs a Professional Website in 2024",
    description:
      "Discover why having your own website is crucial for trade businesses in today's digital landscape.",
    url: "https://tradesmanwebsolutions.co.uk/blog/why-tradespeople-need-websites-2024",
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
                <Calendar className="w-4 h-4 mr-2" />
                15 January 2024
                <span className="mx-2">•</span>
                <Clock className="w-4 h-4 mr-2" />8 min read
                <span className="mx-2">•</span>
                Business Growth
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Why Every UK Tradesperson Needs a Professional Website in 2024
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                The digital landscape has transformed how customers find and
                choose tradespeople. Here's why having your own professional
                website is no longer optional—it's essential for business
                survival and growth.
              </p>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden">
              <img
                src="/blog/tradesman-website-2024.jpg"
                alt="Professional tradesman website design 2024"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                If you're a tradesperson in the UK and you don't have a
                professional website yet, you're not just missing out on
                opportunities—you're actively losing business to competitors who
                do. The statistics are stark:{" "}
                <strong>
                  89% of consumers research businesses online before making
                  contact
                </strong>
                , and{" "}
                <strong>
                  75% judge a company's credibility based on their website
                  design
                </strong>
                .
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Harsh Reality: Your Customers Have Already Gone Digital
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's start with some uncomfortable truths about how your
                potential customers behave in 2024:
              </p>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">
                      What Happens When Customers Can't Find You Online
                    </h3>
                    <ul className="text-red-700 space-y-2">
                      <li>
                        • They assume you're not established or professional
                      </li>
                      <li>
                        • They can't verify your credentials or see your work
                      </li>
                      <li>
                        • They move on to competitors who do have websites
                      </li>
                      <li>
                        • You lose the opportunity before you even know it
                        existed
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Directory Trap: Why Relying on Others is Risky Business
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many tradespeople think being on Checkatrade, MyBuilder, or
                Rated People is enough. Here's why that's a dangerous
                assumption:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Directory Problems
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      You're competing with 10+ other tradespeople on the same
                      page
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Customers often choose based on price alone
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      You don't own your profile—they can change rules anytime
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Monthly fees can reach £200+ per directory
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Your Website Advantages
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      You're the only business featured
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Customers choose you based on quality and trust
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      You own everything—complete control
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      One predictable monthly cost
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Real-World Impact: What a Professional Website Does for Your
                Business
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1. Instant Credibility and Trust
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When potential customers land on your professional website, they
                immediately see you as an established, trustworthy business.
                Your website becomes your 24/7 salesperson, showcasing your
                expertise, testimonials, and portfolio even when you're on-site
                with other customers.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2. Higher Quality Leads
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A well-designed website naturally filters out price shoppers and
                attracts customers who value quality. When someone takes the
                time to browse your website, read about your services, and view
                your work, they're already pre-qualified and more likely to
                become a good customer.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                3. Local SEO Dominance
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With proper local SEO, your website can appear at the top of
                Google searches for "plumber near me" or "electrician
                Birmingham." This organic visibility is incredibly valuable and
                costs nothing once established, unlike paid directory listings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                4. Complete Control Over Your Brand
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your website tells your story exactly how you want it told. You
                control the messaging, the imagery, the customer journey, and
                most importantly, you own all the leads it generates. No
                third-party platform can change their rules and affect your
                business overnight.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Cost of Waiting: What Delayed Action Really Costs You
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every month without a professional website, you're losing
                potential customers to competitors who do have one. Consider
                this:
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  Monthly Opportunity Cost
                </h3>
                <p className="text-yellow-700 mb-4">
                  If a professional website could generate just 2 additional
                  quality jobs per month at £500 each, that's £1,000 in extra
                  revenue monthly, or £12,000 annually.
                </p>
                <p className="text-yellow-700">
                  Meanwhile, the cost of a professional website is typically
                  less than what you'd spend on directory fees, but with
                  infinitely better returns.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                What Makes a Website "Professional" for Tradespeople?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not all websites are created equal. A professional trade website
                needs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Essential Features
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Mobile-responsive design
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Fast loading speeds
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Clear contact information
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Professional photography
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Customer testimonials
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Advanced Features
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Local SEO optimization
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Online booking system
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Service area mapping
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Before/after galleries
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      Emergency contact features
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                The Bottom Line: Your Website is Your Digital Storefront
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In 2024, your website is as important as your van, your tools,
                or your qualifications. It's often the first impression
                potential customers have of your business, and in many cases, it
                determines whether they contact you or move on to a competitor.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The question isn't whether you can afford to have a professional
                website—it's whether you can afford not to have one. Every day
                without a professional online presence is a day you're losing
                business to competitors who understand the digital landscape.
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
