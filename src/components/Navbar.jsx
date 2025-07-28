"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import ContactButton from "@/components/ContactButton"

export default function Navbar({ currentPage = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/pricing", label: "Pricing", id: "pricing" },
    { href: "/why-us", label: "Why Us?", id: "why-us" },
    { href: "/portfolio", label: "Our Work", id: "portfolio" },
    { href: "/blog", label: "Blog", id: "blog" },
    { href: "/contact", label: "Contact", id: "contact" },
  ]

  return (
    <>
      <header className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">TWS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-tight">Tradesman Web Solutions</span>
                <span className="text-xs text-gray-500 hidden sm:block">Professional Websites for Tradespeople</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={link.href} 
                  className={`font-medium transition-colors duration-200 ${
                    currentPage === link.id 
                      ? "text-blue-600" 
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ContactButton 
                size="sm" 
                variant="outline" 
                className="ml-4 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Request a Call Back
              </ContactButton>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 z-50 relative"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu Content */}
          <div className="absolute inset-0 bg-white">
            <div className="flex flex-col h-full">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">TWS</span>
                  </div>
                  <span className="font-bold text-xl text-gray-900">Tradesman Web Solutions</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              {/* Navigation */}
              <nav className="flex-1 flex flex-col justify-center px-8">
                <div className="space-y-8">
                  {navLinks.map((link, index) => (
                    <Link 
                      key={link.id}
                      href={link.href}
                      className={`block text-2xl font-semibold transition-all duration-300 transform hover:translate-x-2 ${
                        currentPage === link.id 
                          ? "text-blue-600" 
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={closeMenu}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'slideInLeft 0.5s ease-out forwards'
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
              
              {/* Call to Action */}
              <div className="p-8 space-y-6 border-t border-gray-100">
                <ContactButton 
                  size="lg" 
                  variant="default"
                  className="w-full text-lg py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  onClick={closeMenu}
                >
                  Request a Call Back
                </ContactButton>
                
                <div className="text-center space-y-2 text-gray-600">
                  <div className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">07979 468826</span>
                  </div>
                  <p className="text-xs text-gray-500">Free consultation available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}