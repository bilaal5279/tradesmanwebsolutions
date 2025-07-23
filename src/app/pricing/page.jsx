"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyButton from "@/components/CalendlyButton";
import { openCalendlyPopup } from "@/lib/calendly";

export default function PricingPage() {
  const starterFeatures = [
    "Up to 5 Pages",
    "Bespoke Design",
    "Mobile Responsive",
    "Basic Local SEO",
    "Professional Copywriting",
    "Contact Form",
    "Google My Business Setup",
    "SSL Certificate",
    "Basic Analytics",
    "Monthly Performance Report",
  ];

  const businessFeatures = [
    "Up to 10 Pages",
    "Premium Bespoke Design",
    "Mobile Responsive",
    "Advanced Local SEO",
    "Professional Copywriting",
    "Advanced Contact Forms",
    "Google My Business Optimization",
    "SSL Certificate",
    "Advanced Analytics & Tracking",
    "Weekly Performance Reports",
    "Social Media Integration",
    "Customer Review System",
    "Online Booking System",
    "Priority Support",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="pricing" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Simple, Honest Pricing.{" "}
              <span className="text-blue-600">
                No Setup Fees. No Hidden Costs.
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose the plan that's right for your business. Both are designed
              to get you online professionally without the huge upfront cost,
              just like your other essential business subscriptions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                £0 Setup Fee
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                No Hidden Costs
              </div>
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2 text-green-500" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative group">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Starter Plan
                </CardTitle>
                <p className="text-gray-600 mb-6">
                  Perfect for getting your business online professionally
                </p>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-gray-900">£129</div>
                  <div className="text-gray-600">/month + VAT</div>
                  <div className="text-sm text-gray-500 mt-2">
                    After 12 months: £49.99/mo + VAT
                  </div>
                  <Badge
                    variant="secondary"
                    className="mt-2 bg-green-100 text-green-700"
                  >
                    Most Popular
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full text-lg py-6 cursor-pointer" 
                  size="lg"
                  onClick={openCalendlyPopup}
                >
                  Request a Call - Starter Plan
                </Button>
                <p className="text-center text-sm text-gray-500">
                  Perfect for established tradespeople who want a professional
                  online presence
                </p>
              </CardContent>
            </Card>

            {/* Business Growth Plan */}
            <Card className="relative group border-2 border-blue-200 bg-gradient-to-b from-blue-50/30 to-white">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                  Recommended
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  Business Growth Plan
                </CardTitle>
                <p className="text-gray-600 mb-6">
                  For tradespeople ready to scale their business
                </p>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-blue-600">£189</div>
                  <div className="text-gray-600">/month + VAT</div>
                  <div className="text-sm text-gray-500 mt-2">
                    After 12 months: £69.99/mo + VAT
                  </div>
                  <Badge
                    variant="outline"
                    className="mt-2 border-blue-200 text-blue-600 bg-blue-50"
                  >
                    Best Value
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {businessFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 cursor-pointer"
                  size="lg"
                  onClick={openCalendlyPopup}
                >
                  Request a Call - Business Growth
                </Button>
                <p className="text-center text-sm text-gray-500">
                  Ideal for growing businesses that want to dominate their local
                  market
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What's the Difference?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Both plans get you a professional website. Here's how to choose:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Choose Starter Plan if:
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You're an established tradesperson with steady work
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You want a professional online presence
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You get most work through word-of-mouth
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You need a simple, effective website
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="p-8 border-2 border-blue-200 bg-gradient-to-b from-blue-50/30 to-white">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-600">
                  Choose Business Growth Plan if:
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You want to grow your business significantly
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You're competing in a busy market
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You want to dominate local search results
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    You need advanced features like online booking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Why monthly pricing instead of a one-off fee?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your website needs ongoing maintenance, security updates, and
                  support. Monthly pricing ensures your site stays fast, secure,
                  and up-to-date without surprise bills.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What happens after 12 months?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your website is built and optimized. The monthly cost drops
                  significantly for hosting, security, and support - that's
                  still less than most directory fees!
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Can I cancel anytime?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, there are no long-term contracts. However, we're
                  confident you'll see the value in having a professional
                  website that works for your business.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Why do you offer consultations instead of instant signup?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every tradesperson's business is different. We want to
                  understand your specific needs and recommend the right plan
                  for your goals, not just sell you a package.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Do I own the website?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Unlike directory listings, this is your website. You own
                  the domain, the content, and all the leads it generates.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  How long does it take to build?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Most websites are completed within 2-3 weeks. We'll keep you
                  updated throughout the process and get you online as quickly
                  as possible.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  What if I need changes?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Minor updates and changes are included in your monthly plan.
                  We want your website to work perfectly for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Choose your plan and we'll have you online professionally in just
              a few weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <CalendlyButton 
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-white/10 backdrop-blur-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                07979 468826
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                hello@tradesmanweb.co.uk
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
