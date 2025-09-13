export default function Orders() {
  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 397.00,
      items: 3
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 199.00,
      items: 1
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 89.00,
      items: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Shipped':
        return 'bg-blue-100 text-blue-800';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Order History</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {orders.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <p className="text-gray-500 text-lg">No orders found</p>
              <a href="/e-mall.io/products/" className="text-blue-600 hover:underline mt-2 inline-block">
                Start Shopping
              </a>
            </div>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">Placed on {order.date}</p>
                    <p className="text-sm text-gray-500">{order.items} item(s)</p>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-lg font-semibold">${order.total.toFixed(2)}</p>
                    <div className="flex gap-2 mt-2">
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                      {order.status === 'Delivered' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Reorder
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Order Status Legend */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold mb-4">Order Status Guide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <span className="text-sm">Processing - Order is being prepared</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm">Shipped - Order is on its way</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm">Delivered - Order has arrived</span>
          </div>
        </div>
      </div>
    </div>
  )
}
