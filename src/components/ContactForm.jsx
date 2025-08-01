"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
  console.log("reCAPTCHA executeRecaptcha available:", !!executeRecaptcha);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business: "",
    location: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      console.error('Missing required fields')
      return
    }

    try {
      // Get reCAPTCHA token if available
      let recaptchaToken = null;
      if (executeRecaptcha) {
        try {
          recaptchaToken = await executeRecaptcha('contact_form');
        } catch (recaptchaError) {
          console.warn('reCAPTCHA execution failed:', recaptchaError);
          // Continue without reCAPTCHA token - let server handle it
        }
      } else {
        console.warn('reCAPTCHA not available');
      }
      
      console.log('Submitting form data:', formData)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      })

      console.log('Response status:', response.status)
      
      if (response.ok) {
        const result = await response.json()
        console.log('Success response:', result)
        
        setSubmitStatus('success')
        setFormData({
          name: '',
          phone: '',
          email: '',
          business: '',
          location: '',
          message: ''
        })
        
        // Trigger Google Ads conversion tracking
        if (typeof window !== 'undefined' && window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }
      } else {
        const errorData = await response.json().catch(() => ({}))
        console.error('Error response:', response.status, errorData)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="border-2 border-gray-200 hover:border-blue-200 transition-colors duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
          <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
          Send Us a Message
        </CardTitle>
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="business">Business/Trade</Label>
            <Input
              id="business"
              placeholder="e.g., Plumbing, Electrical, Building"
              value={formData.business}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              placeholder="e.g., Birmingham, Manchester, London"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your business and what you're looking for..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="w-full text-lg py-6" size="lg" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <div className="flex items-center justify-center space-x-2 mt-2">
            {executeRecaptcha && (
              <div className="flex items-center space-x-1 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Protected by reCAPTCHA</span>
              </div>
            )}
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </form>
        
        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-green-800 font-medium">Message sent successfully!</p>
            <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-800 font-medium">Failed to send message.</p>
            <p className="text-red-600 text-sm">Please try again or call us directly.</p>
          </div>
        )}
        
        <p className="text-sm text-gray-500 text-center">
          We'll respond within 24 hours and never share your information.
        </p>
      </CardContent>
    </Card>
  );
}
