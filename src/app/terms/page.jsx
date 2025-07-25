import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Terms of Service | Tradesman Web Solutions",
  description: "Terms of Service for Tradesman Web Solutions - Professional websites for UK tradespeople.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the services provided by Tradesman Web Solutions ("we," "our," or "us"), 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tradesman Web Solutions provides website design, development, and maintenance services 
                  specifically for UK tradespeople. Our services include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Custom website design and development</li>
                  <li>Content creation and copywriting</li>
                  <li>Search engine optimization (SEO)</li>
                  <li>Website hosting and maintenance</li>
                  <li>Technical support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided on a monthly subscription basis. Payment terms include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Monthly payments are due in advance</li>
                  <li>No setup fees apply to our standard packages</li>
                  <li>Payments are processed automatically via direct debit or card payment</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may cancel your subscription at any time with 30 days' written notice. 
                  Upon cancellation, your website will remain active until the end of your current billing period. 
                  We will provide you with all necessary files and access to maintain your website independently.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  Upon full payment, you own the website content, images, and domain name. 
                  We retain rights to our proprietary development frameworks and tools. 
                  You grant us permission to showcase your website in our portfolio and marketing materials.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our liability is limited to the amount paid for services in the preceding 12 months. 
                  We are not liable for indirect, incidental, or consequential damages. 
                  We make no guarantees regarding website performance, search engine rankings, or business results.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand 
                  how we collect, use, and protect your information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. 
                  We will notify you of significant changes via email or through our website. 
                  Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p className="text-gray-700"><strong>Email:</strong> sales@tradesmanweb.co.uk</p>
                  <p className="text-gray-700"><strong>Phone:</strong> 07979 468826</p>
                  <p className="text-gray-700"><strong>Address:</strong> United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}