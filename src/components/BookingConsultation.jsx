import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function BookingConsultation() {
  const consultationPoints = [
    "Your current online presence",
    "Your business goals and challenges", 
    "Which package suits your needs",
    "Timeline and next steps"
  ]

  return (
    <Card className="border-2 border-blue-200 bg-gradient-to-b from-blue-50/30 to-white hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-blue-600" />
          Book a Free Consultation
        </CardTitle>
        <p className="text-gray-600">
          Prefer to talk? Book a 10-minute call to discuss your website needs and see if we're a good fit.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">What We'll Cover:</h3>
          <ul className="space-y-3 text-gray-700">
            {consultationPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-3 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Calendar Embed Placeholder */}
        <div className="bg-white rounded-xl p-8 border border-blue-200 text-center shadow-sm">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 mb-2">Choose Your Time</h4>
          <p className="text-gray-600 mb-6">Select a time that works for you from our available slots.</p>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" size="lg">
            Book Your Free Call
          </Button>
          <p className="text-sm text-gray-500 mt-3">Available Monday-Friday, 9am-5pm GMT</p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Can't find a suitable time?{" "}
            <Link href="tel:08001234567" className="text-blue-600 hover:underline font-medium">
              Call us directly
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}