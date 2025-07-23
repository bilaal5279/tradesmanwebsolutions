import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactDetailsSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "07979 468826",
      secondary: "Monday-Friday, 9am-5pm GMT",
      tertiary: "Free consultation calls available",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      primaryColor: "text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Us", 
      primary: "hello@tradesmanweb.co.uk",
      secondary: "We respond within 24 hours",
      tertiary: "Perfect for detailed questions",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      primaryColor: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Based In",
      primary: "United Kingdom",
      secondary: "Serving tradespeople nationwide",
      tertiary: "UK-based support team",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      primaryColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help grow your business</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 md:p-8 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="space-y-4 md:space-y-6">
                  <div className={`w-20 h-20 ${method.bgColor} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <method.icon className={`w-10 h-10 ${method.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                  <div className="space-y-2">
                    <p className={`text-base md:text-lg font-semibold ${method.primaryColor} break-words leading-tight`}>{method.primary}</p>
                    <p className="text-gray-600 text-sm md:text-base">{method.secondary}</p>
                    <p className="text-xs md:text-sm text-gray-500">{method.tertiary}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}