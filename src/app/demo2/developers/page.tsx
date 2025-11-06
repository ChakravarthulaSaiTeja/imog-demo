'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/components/Footer';
import CartIcon from '@/components/CartIcon';
import Toast from '@/components/Toast';
import SizeSelector from '@/components/SizeSelector';
import { allProducts } from '@/data/products';

export default function DevelopersPage() {
  // Get products from centralized data to ensure slugs are available
  const products = allProducts.filter(p => p.category === 'Developers');

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const getSelectedSize = (productId: number) => {
    return selectedSizes[productId] || 'M';
  };

  const setSelectedSize = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const addToCart = (product: typeof products[0], size?: string) => {
    const selectedSize = size || getSelectedSize(product.id);
    const cart = JSON.parse(localStorage.getItem('imog-cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id && item.size === selectedSize);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1, size: selectedSize });
    }
    
    localStorage.setItem('imog-cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show toast notification
    setToastMessage(product.name);
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/demo2/store" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to Store
          </Link>
          <h1 className="text-xl font-bold text-white">IMOG</h1>
          <CartIcon />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-black/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 tracking-tight"
                style={{
                  textShadow: '0 0 20px rgba(214, 0, 0, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
                }}>
              DEVELOPERS COLLECTION
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-6"></div>
            <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto font-semibold leading-relaxed">
              Code in style with minimalist essentials. Clean design meets functional comfort for the modern developer.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Link
                  href={`/demo2/products/${product.slug}`}
                  className="block"
                >
                  <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden mb-4 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'brightness(0.6) contrast(1.1)' }}
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      View Details
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">{product.name}</h3>
                  <p className="text-gray-400 font-semibold mb-3">{product.price}</p>
                </Link>
                <SizeSelector
                  selectedSize={getSelectedSize(product.id)}
                  onChange={(size) => setSelectedSize(product.id, size)}
                />
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition-colors text-sm"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

