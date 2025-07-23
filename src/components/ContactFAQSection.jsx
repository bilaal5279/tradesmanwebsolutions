import Link from "next/link"

export default function ContactFAQSection() {
  const faqs = [
    {
      question: "How quickly can you get started?",
      answer: "We can typically start your project within 1-2 weeks of our initial consultation and agreement."
    },
    {
      question: "Do you work with all types of trades?",
      answer: "Yes! We work with plumbers, electricians, builders, roofers, landscapers, and all other UK tradespeople."
    },
    {
      question: "What if I'm not tech-savvy?",
      answer: "Perfect! That's exactly why we exist. We handle all the technical work so you can focus on your trade."
    },
    {
      question: "Is there really no setup fee?",
      answer: "Absolutely no setup fees. You just pay the monthly subscription and we handle everything else."
    },
    {
      question: "Can I see examples of your work?",
      answer: (
        <>
          Yes! Check out our{" "}
          <Link href="/portfolio" className="text-blue-600 hover:underline font-medium">
            portfolio page
          </Link>{" "}
          to see live demo websites we've created.
        </>
      )
    },
    {
      question: "What happens during the consultation?",
      answer: "We'll discuss your business, current online presence, goals, and recommend the best package for your needs."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Common Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to help you get started</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}