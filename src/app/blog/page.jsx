import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Blog - Expert Tips for UK Tradespeople | Tradesman Web Solutions",
  description:
    "Get expert advice on growing your trade business online. Tips on websites, SEO, marketing, and digital presence for UK tradespeople.",
  keywords:
    "tradesman blog, UK trade business tips, tradesman marketing, local SEO, trade websites, West Midlands tradespeople",
  openGraph: {
    title: "Blog - Expert Tips for UK Tradespeople",
    description:
      "Get expert advice on growing your trade business online with our comprehensive blog.",
    url: "https://tradesmanwebsolutions.co.uk/blog",
    siteName: "Tradesman Web Solutions",
    locale: "en_GB",
    type: "website",
  },
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "2025-uk-tradesperson-report",
      title: "The 2025 UK Tradesperson's Report: A Definitive Guide to Earnings, Demand, and Business Growth",
      excerpt:
        "Comprehensive data-backed analysis revealing unprecedented opportunities for UK tradespeople. Discover your true market value and strategic pathway to business success.",
      category: "Industry Report",
      readTime: "25 min read",
      publishDate: "2025-07-29",
      author: "Bilaal Ishtiaq",
      featured: true,
      image: "/blog/Hero.jpg",
    },
    {
      slug: "why-tradespeople-need-websites-2024",
      title: "Why Every UK Tradesperson Needs a Professional Website in 2024",
      excerpt:
        "Discover why having your own website is crucial for trade businesses in today's digital landscape. Learn how it can transform your lead generation.",
      category: "Business Growth",
      readTime: "8 min read",
      publishDate: "2024-01-15",
      author: "Bilaal Ishtiaq",
      featured: true,
      image: "/blog/tradesman-website-2024.jpg",
    },
    {
      slug: "birmingham-tradespeople-digital-marketing",
      title:
        "Digital Marketing for Birmingham Tradespeople: Complete 2024 Guide",
      excerpt:
        "Comprehensive digital marketing strategies for Birmingham-based tradespeople. From social media to Google Ads, dominate your local market.",
      category: "SEO & Marketing",
      readTime: "11 min read",
      publishDate: "2024-01-20",
      author: "Bilaal Ishtiaq",
      featured: true,
      image: "/blog/birmingham-digital-marketing.jpg",
    },
    {
      slug: "trade-directories-vs-websites",
      title: "Trade Directories vs Your Own Website: The Truth About ROI",
      excerpt:
        "Honest comparison of trade directories like Checkatrade vs having your own website. Which gives better return on investment?",
      category: "Business Strategy",
      readTime: "10 min read",
      publishDate: "2024-01-05",
      author: "James Thompson",
      featured: false,
      image: "/blog/directories-vs-websites.png",
    },
    {
      slug: "google-my-business-tradespeople",
      title: "Google My Business Optimization for UK Tradespeople",
      excerpt:
        "Step-by-step guide to optimizing your Google My Business profile to attract more local customers and improve your online visibility.",
      category: "SEO & Marketing",
      readTime: "7 min read",
      publishDate: "2023-12-28",
      author: "Emma Clarke",
      featured: false,
      image: "/blog/google-my-business.jpg",
    },
    {
      slug: "website-content-tradespeople",
      title: "What Content Should Your Trade Website Include?",
      excerpt:
        "Essential pages and content every tradesperson's website needs to convert visitors into customers. Complete content strategy guide.",
      category: "Website Tips",
      readTime: "9 min read",
      publishDate: "2023-12-20",
      author: "Michael Roberts",
      featured: false,
      image: "/blog/website-content.webp",
    },
    {
      slug: "mobile-first-trade-websites",
      title: "Why Mobile-First Design is Critical for Trade Websites",
      excerpt:
        "Over 70% of trade customers search on mobile. Learn why mobile-first design is essential for your trade business website.",
      category: "Website Design",
      readTime: "6 min read",
      publishDate: "2023-12-15",
      author: "Lisa Anderson",
      featured: false,
      image: "/blog/mobile-first-design.png",
    },

    {
      slug: "customer-reviews-west-midlands-trades",
      title:
        "How to Get More Customer Reviews: West Midlands Tradespeople Guide",
      excerpt:
        "Master the art of getting genuine customer reviews. Proven strategies for building trust and attracting more customers in the West Midlands.",
      category: "Business Growth",
      readTime: "9 min read",
      publishDate: "2024-01-18",
      author: "Bilaal Ishtiaq",
      featured: false,
      image: "/blog/customer-reviews-guide.jpg",
    },
    {
      slug: "emergency-callout-websites-uk-trades",
      title: "Emergency Callout Websites: Converting Urgent Customers 24/7",
      excerpt:
        "Design your website to capture emergency callouts effectively. Essential features and strategies for UK tradespeople offering emergency services.",
      category: "Website Tips",
      readTime: "8 min read",
      publishDate: "2024-01-12",
      author: "Tom Harris",
      featured: false,
      image: "/blog/emergency-callout-websites.jpg",
    },
    {
      slug: "social-media-tradespeople-west-midlands",
      title: "Social Media Marketing for West Midlands Tradespeople",
      excerpt:
        "Leverage Facebook, Instagram, and LinkedIn to grow your trade business. Local social media strategies that actually work for tradespeople.",
      category: "SEO & Marketing",
      readTime: "10 min read",
      publishDate: "2024-01-08",
      author: "Bilaal Ishtiaq",
      featured: false,
      image: "/blog/social-media-tradespeople.jpg",
    },
  ];

  const categories = [
    "All",
    "Industry Report",
    "Business Growth",
    "SEO & Marketing",
    "Business Strategy",
    "Website Tips",
    "Website Design",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="blog" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Expert Tips for{" "}
              <span className="text-blue-600">Growing Your Trade Business</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Get practical advice on websites, marketing, and digital growth
              strategies specifically for UK tradespeople. Learn from real
              examples and proven techniques.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Expert Insights
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Updated Weekly
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Quick Reads
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <Card
                  key={post.slug}
                  className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.publishDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Button
                      variant="outline"
                      className="hover:bg-blue-600 hover:text-black hover:border-blue-600 transition-colors"
                      asChild
                    >
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600">
              Browse our complete collection of trade business insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card
                key={post.slug}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700"
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>
                      Read Article <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100">
              Get the latest tips and insights delivered to your inbox. No spam,
              just valuable content for growing your trade business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4"
                asChild
              >
                <Link href="/contact#contact-form">Get Website Tips</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
