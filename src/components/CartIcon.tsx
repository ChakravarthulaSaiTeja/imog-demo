'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function CartIcon() {
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      // Get cart count from localStorage or context
      const cart = JSON.parse(localStorage.getItem('imog-cart') || '[]');
      setCartCount(cart.length);

      // Listen for cart updates
      const handleStorageChange = () => {
        const updatedCart = JSON.parse(localStorage.getItem('imog-cart') || '[]');
        setCartCount(updatedCart.length);
      };

      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('cartUpdated', handleStorageChange);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('cartUpdated', handleStorageChange);
      };
    }
  }, []);

  return (
    <Link href="/demo2/cart" className="relative">
      <div className="relative">
        <svg
          className="w-6 h-6 text-white hover:text-gray-300 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {mounted && cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount > 9 ? '9+' : cartCount}
          </span>
        )}
      </div>
    </Link>
  );
}

export default CartIcon;

