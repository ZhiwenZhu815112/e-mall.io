export default function Help() {
  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        "How to create an account",
        "How to place your first order",
        "Understanding our website",
        "Account verification process"
      ]
    },
    {
      title: "Shopping & Orders",
      icon: "🛒",
      articles: [
        "How to search for products",
        "Adding items to cart",
        "Checkout process",
        "Order confirmation",
        "Order modifications"
      ]
    },
    {
      title: "Shipping & Delivery",
      icon: "📦",
      articles: [
        "Shipping options",
        "Delivery timeframes",
        "Tracking your order",
        "International shipping",
        "Delivery issues"
      ]
    },
    {
      title: "Returns & Refunds",
      icon: "↩️",
      articles: [
        "Return policy",
        "How to return items",
        "Refund process",
        "Exchange policy",
        "Damaged items"
      ]
    },
    {
      title: "Payment & Billing",
      icon: "💳",
      articles: [
        "Accepted payment methods",
        "Payment security",
        "Billing questions",
        "Promo codes",
        "Gift cards"
      ]
    },
    {
      title: "Account & Security",
      icon: "🔒",
      articles: [
        "Password reset",
        "Account settings",
        "Privacy policy",
        "Data protection",
        "Two-factor authentication"
      ]
    }
  ];

  const popularArticles = [
    "How to track your order",
    "Return and refund policy",
    "Shipping information",
    "Account setup guide",
    "Payment methods accepted"
  ];

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Help Center</h1>
      
      {/* Search Bar */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-center mb-4">How can we help you?</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search help articles..." 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularArticles.map((article, index) => (
            <a 
              key={index}
              href="#" 
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-blue-600 hover:underline">{article}</h3>
            </a>
          ))}
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {helpCategories.map((category, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.articles.map((article, articleIndex) => (
                <li key={articleIndex}>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:underline text-sm block py-1"
                  >
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Still need help?</h2>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Our support team is here to help you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/support" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
          <a 
            href="mailto:support@ecommerce.com" 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  )
}
