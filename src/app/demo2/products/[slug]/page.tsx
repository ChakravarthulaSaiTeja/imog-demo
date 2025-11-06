'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import CartIcon from '@/components/CartIcon';
import Toast from '@/components/Toast';
import SizeSelector from '@/components/SizeSelector';
import { getProductBySlug } from '@/data/products';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [product, setProduct] = useState<ReturnType<typeof getProductBySlug>>(undefined);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const foundProduct = getProductBySlug(slug);
    if (!foundProduct) {
      router.push('/demo2/store');
      return;
    }
    setProduct(foundProduct);
  }, [slug, router]);

  const addToCart = () => {
    if (!product) return;
    
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

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const getCategoryPath = (categoryName: string) => {
    const paths: { [key: string]: string } = {
      'Hackers': '/demo2/hackers',
      'Developers': '/demo2/developers',
      'Gym Freaks': '/demo2/gym-freaks',
      'Party People': '/demo2/party-people',
      'Heavy Fits': '/demo2/heavy-fits',
      'Techwear': '/demo2/hackers',
      'Essentials': '/demo2/developers',
      'Streetwear': '/demo2/store',
      'Accessories': '/demo2/store',
    };
    return paths[categoryName] || '/demo2/store';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 py-4 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/demo2/store" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to Store
          </Link>
          <h1 className="text-xl font-bold text-white">IMOG</h1>
          <CartIcon />
        </div>
      </nav>

      {/* Product Detail Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.7) contrast(1.1)' }}
              unoptimized
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-sm mb-2">{product.category}</p>
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">
              {product.name}
            </h1>
            <p className="text-3xl font-bold mb-6 text-white">{product.price}</p>
            
            {/* Size Selector */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-3">Select Size</p>
              <SizeSelector
                selectedSize={selectedSize}
                onChange={setSelectedSize}
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={addToCart}
              className="w-full bg-white text-black py-4 rounded font-bold hover:bg-gray-200 transition-colors text-lg mb-6"
            >
              Add to Cart
            </button>

            {/* Product Description */}
            <div className="border-t border-gray-800 pt-6">
              <h2 className="text-xl font-bold mb-4">Product Details</h2>
              <p className="text-gray-400 leading-relaxed">
                Premium quality {product.name.toLowerCase()} from the {product.category} collection. 
                Crafted with attention to detail and designed for those who refuse to blend in.
              </p>
            </div>

            {/* Back to Category Link */}
            <Link
              href={getCategoryPath(product.category)}
              className="text-gray-400 hover:text-white transition-colors text-sm mt-6"
            >
              ← View more {product.category} products
            </Link>
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

