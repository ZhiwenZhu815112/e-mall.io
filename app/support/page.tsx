export default function Support() {
  const faqItems = [
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive tracking information via email once your order ships."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in original condition with tags attached. Some items like electronics may have different return terms."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. International shipping may take 7-14 business days."
    },
    {
      question: "Can I change my order after it's placed?",
      answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team for assistance."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination. Check our shipping page for more details."
    }
  ];

  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: "💬",
      action: "Start Chat"
    },
    {
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      icon: "📧",
      action: "Send Email"
    },
    {
      title: "Phone Support",
      description: "Call us for immediate assistance",
      icon: "📞",
      action: "Call Now"
    }
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Customer Support</h1>
      
      {/* Contact Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{method.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
            <p className="text-gray-600 mb-4">{method.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {method.action}
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button className="w-full px-6 py-4 text-left font-medium hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                <div className="flex justify-between items-center">
                  <span>{item.question}</span>
                  <span className="text-gray-400">+</span>
                </div>
              </button>
              <div className="px-6 pb-4 text-gray-600">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea 
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please describe your issue or question..."
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
