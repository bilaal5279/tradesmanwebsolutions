import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TWS</span>
              </div>
              <span className="font-bold text-lg">Tradesman Web Solutions</span>
            </div>
            <p className="text-gray-400">
              Professional websites for UK tradespeople. Built to win you better work.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/why-us" className="hover:text-white">
                  Why Us?
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />07979 468826
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />hello@tradesmanweb.co.uk
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />United Kingdom
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tradesman Web Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}