import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-Commerce Store',
  description: 'Full-stack e-commerce website - Next.js + React + TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">E-Commerce Store</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="/e-mall.io/" className="hover:text-blue-200">Home</a>
              <a href="/e-mall.io/products/" className="hover:text-blue-200">Products</a>
              <a href="/e-mall.io/cart/" className="hover:text-blue-200">Cart</a>
              <a href="/e-mall.io/orders/" className="hover:text-blue-200">Orders</a>
              <a href="/e-mall.io/account/" className="hover:text-blue-200">Account</a>
              <a href="/e-mall.io/support/" className="hover:text-blue-200">Support</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
