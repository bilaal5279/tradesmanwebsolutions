"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Check } from "lucide-react";

export default function PricingPreviewSection() {
  const features = [
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

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Stand out from your competitors
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Professional websites that work as hard as you do
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
            {/* Pricing Card */}
            <div className="order-2 lg:order-1">
              <Card className="relative border-2 border-blue-200 shadow-xl bg-gradient-to-b from-blue-50/30 to-white">
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-lg">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center space-y-3 sm:space-y-4 pb-4 sm:pb-6 pt-6 sm:pt-8 px-4 sm:px-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                    Starter Plan
                  </CardTitle>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Perfect for getting your business online professionally
                  </p>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-4xl sm:text-5xl font-bold text-gray-900">
                      £99
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base">
                      /month
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      After 12 months: £49.99/mo
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                  <div className="space-y-2.5 sm:space-y-3">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2.5 sm:space-x-3"
                      >
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                    <Button
                      size="lg"
                      className="w-full text-sm sm:text-lg py-4 sm:py-6 bg-blue-600 hover:bg-blue-700 transition-colors"
                      asChild
                    >
                      <Link href="/contact#contact-form">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span className="hidden sm:inline">
                          Request Callback - Starter Plan
                        </span>
                        <span className="sm:hidden">Get Started</span>
                      </Link>
                    </Button>

                    <div className="text-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                        asChild
                      >
                        <Link href="/pricing">View All Plans</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="text-center text-xs sm:text-sm text-gray-500 pt-3 sm:pt-4 border-t border-gray-200">
                    <p className="leading-relaxed">
                      ✓ £0 Setup Fee ✓ No Hidden Costs ✓ Cancel Anytime
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Website Example */}
            <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="text-center lg:text-left px-2 sm:px-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  See What We Built for Green Air Conditioning
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  A professional website that showcases their expertise and
                  attracts quality customers in Birmingham.
                </p>
              </div>

              <div className="relative mx-4 sm:mx-6 md:mx-8 lg:mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                <Image
                  src="/Images/GreenAIR.png"
                  alt="Green Air Conditioning website - Professional tradesman website example"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-2xl border border-gray-200 transform hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>

              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 mx-2 sm:mx-0">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-base sm:text-lg">
                      GA
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      Green Air Conditioning
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Birmingham
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                  "The website has transformed our business. We're getting
                  better quality enquiries and customers see us as the
                  professional choice."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
