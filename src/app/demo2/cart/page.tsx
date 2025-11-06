'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import CartIcon from '@/components/CartIcon';

interface CartItem {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  quantity: number;
  size?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  const calculateTotal = (items: CartItem[]) => {
    const totalAmount = items.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('₹', '').replace(',', ''));
      return sum + (price * item.quantity);
    }, 0);
    setTotal(totalAmount);
  };

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('imog-cart') || '[]');
    setCartItems(cart);
    calculateTotal(cart);
  };

  useEffect(() => {
    loadCart();
    
    // Listen for cart updates from other pages
    window.addEventListener('cartUpdated', loadCart);
    
    return () => {
      window.removeEventListener('cartUpdated', loadCart);
    };
  }, []);

  const updateQuantity = (id: number, size: string | undefined, change: number) => {
    const itemSize = size || 'M';
    const updatedCart = cartItems.map(item => {
      if (item.id === id && (item.size || 'M') === itemSize) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('imog-cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id: number, size: string | undefined) => {
    const itemSize = size || 'M';
    const updatedCart = cartItems.filter(item => !(item.id === id && (item.size || 'M') === itemSize));
    setCartItems(updatedCart);
    localStorage.setItem('imog-cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const updateSize = (id: number, oldSize: string | undefined, newSize: string) => {
    const oldItemSize = oldSize || 'M';
    const cart = [...cartItems];
    
    // Find the item being updated
    const itemIndex = cart.findIndex(item => item.id === id && (item.size || 'M') === oldItemSize);
    if (itemIndex === -1) return;
    
    const item = cart[itemIndex];
    const quantity = item.quantity;
    
    // Check if an item with the new size already exists
    const existingItemWithNewSize = cart.find(
      cartItem => cartItem.id === id && (cartItem.size || 'M') === newSize
    );
    
    if (existingItemWithNewSize && existingItemWithNewSize !== item) {
      // Merge quantities if item with new size already exists
      existingItemWithNewSize.quantity += quantity;
      // Remove the old item
      cart.splice(itemIndex, 1);
    } else {
      // Update the size of the current item
      cart[itemIndex] = { ...item, size: newSize };
    }
    
    setCartItems(cart);
    localStorage.setItem('imog-cart', JSON.stringify(cart));
    calculateTotal(cart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const formatPrice = (price: string) => {
    return price;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 py-4 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/demo2/store" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to Store
          </Link>
          <h1 className="text-xl font-bold text-white">IMOG - Cart</h1>
          <CartIcon />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400 mb-4">Your cart is empty</p>
            <Link
              href="/demo2/store"
              className="inline-block px-8 py-3 border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div key={`${item.id}-${item.size || 'M'}-${index}`} className="bg-gray-900 rounded-lg p-6 flex gap-6">
                  <div className="w-32 h-32 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                    
                    {/* Size Selector */}
                    <div className="mb-4">
                      <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider font-semibold">Size</p>
                      <div className="flex gap-2 flex-wrap">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => {
                          const isSelected = (item.size || 'M') === size;
                          return (
                            <button
                              key={size}
                              onClick={() => updateSize(item.id, item.size, size)}
                              className={`
                                w-10 h-10 rounded font-semibold text-sm transition-all duration-200
                                ${isSelected
                                  ? 'bg-white text-black shadow-lg scale-105'
                                  : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-500 hover:text-white hover:bg-gray-700'
                                }
                              `}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    
                    <p className="text-2xl font-bold mb-4">{item.price}</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 border border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="px-3 py-1 text-white hover:bg-gray-800 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="px-3 py-1 text-white hover:bg-gray-800 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>₹{total > 5000 ? '0' : '199'}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>GST (18%)</span>
                    <span>₹{(total * 0.18).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>₹{(total + (total > 5000 ? 0 : 199) + (total * 0.18)).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition-colors mb-4">
                  Proceed to Checkout
                </button>
                
                <Link
                  href="/demo2/store"
                  className="block text-center text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

