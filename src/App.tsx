import React from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import ProductCard from './components/ProductCard';

const featuredProducts = [
  {
    title: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    seller: "Tech Haven",
    rating: 4.5
  },
  {
    title: "Handcrafted Leather Backpack",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    seller: "Artisan Goods",
    rating: 4.8
  },
  {
    title: "Smart Fitness Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
    seller: "FitGear Pro",
    rating: 4.3
  },
  {
    title: "Vintage Camera",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848",
    seller: "Retro Tech",
    rating: 4.7
  },
  {
    title: "Minimalist Desk Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
    seller: "Modern Home",
    rating: 4.6
  },
  {
    title: "Organic Coffee Beans",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    seller: "Coffee Culture",
    rating: 4.9
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <div className="relative rounded-xl overflow-hidden h-[400px] mb-8">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Marketplace Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/80 to-purple-600/80 flex items-center">
              <div className="max-w-2xl mx-auto text-center px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                  Discover Unique Items from Around the World
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Join our community of buyers and sellers
                </p>
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Shopping
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About MarketHub</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Safety Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Community Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Install App</h3>
              <p className="text-gray-300 mb-4">Get the best MarketHub experience on your phone</p>
              <div className="space-y-2">
                <button className="bg-white text-gray-800 w-full py-2 rounded-lg hover:bg-gray-100">
                  App Store
                </button>
                <button className="bg-white text-gray-800 w-full py-2 rounded-lg hover:bg-gray-100">
                  Google Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;