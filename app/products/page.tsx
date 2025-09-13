export default function Products() {
  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Books',
    'Beauty',
    'Toys',
    'Automotive'
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Headphones',
      price: 99.00,
      category: 'Electronics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.00,
      category: 'Electronics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 3,
      name: 'Wireless Speaker',
      price: 299.00,
      category: 'Electronics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 4,
      name: 'Laptop Stand',
      price: 49.00,
      category: 'Electronics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 5,
      name: 'Cotton T-Shirt',
      price: 29.00,
      category: 'Clothing',
      image: '/api/placeholder/300/200'
    },
    {
      id: 6,
      name: 'Denim Jeans',
      price: 79.00,
      category: 'Clothing',
      image: '/api/placeholder/300/200'
    },
    {
      id: 7,
      name: 'Garden Tools Set',
      price: 89.00,
      category: 'Home & Garden',
      image: '/api/placeholder/300/200'
    },
    {
      id: 8,
      name: 'Yoga Mat',
      price: 39.00,
      category: 'Sports',
      image: '/api/placeholder/300/200'
    },
    {
      id: 9,
      name: 'Programming Book',
      price: 59.00,
      category: 'Books',
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="flex gap-8">
        {/* Sidebar - Categories */}
        <div className="w-64 bg-white border border-gray-200 rounded-lg p-6 h-fit">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search and Filter Bar */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Sort by Price</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name A-Z</option>
                  <option>Name Z-A</option>
                </select>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <nav className="flex space-x-2">
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Previous</button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-md">1</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">2</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">Next</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
