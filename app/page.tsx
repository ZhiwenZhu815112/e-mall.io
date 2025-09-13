export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Search Section */}
      <div className="bg-gray-50 py-8 mb-8 rounded-lg">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Find Your Perfect Product</h2>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="hero-section bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 rounded-lg mb-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
          <p className="text-xl mb-8">Discover quality products and enjoy shopping</p>
          <a 
            href="/products" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Shopping
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Premium Headphones</h3>
          <p className="text-gray-600 mb-4">High-quality wireless headphones with noise cancellation and superior sound quality.</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">$99.00</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Smart Watch</h3>
          <p className="text-gray-600 mb-4">Advanced smartwatch with health monitoring, GPS, and long-lasting battery life.</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">$199.00</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Wireless Speaker</h3>
          <p className="text-gray-600 mb-4">Portable Bluetooth speaker with 360-degree sound and waterproof design.</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-600">$299.00</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Same-day shipping, 3-5 days delivery</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">100% authentic products, 30-day return policy</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer service</p>
          </div>
        </div>
      </div>
    </div>
  )
}

