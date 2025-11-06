'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Footer from '@/components/Footer';
import CartIcon from '@/components/CartIcon';
import Toast from '@/components/Toast';
import SizeSelector from '@/components/SizeSelector';

export default function AllProductsPage() {
  // Available images pool for reuse - only verified working images
  const availableImages = [
    '/images/imog/img/Gemini_Generated_Image_6hpzec6hpzec6hpz.png',
    '/images/imog/img/Gemini_Generated_Image_9z37029z37029z37.png',
    '/images/imog/img/Gemini_Generated_Image_b3r47gb3r47gb3r4.png',
    '/images/imog/img/Gemini_Generated_Image_cs6bqccs6bqccs6b.png',
    '/images/imog/img/Gemini_Generated_Image_d0n7i2d0n7i2d0n7.png',
    '/images/imog/img/Gemini_Generated_Image_e1uoue1uoue1uoue.png',
    '/images/imog/img/Gemini_Generated_Image_e6fgxpe6fgxpe6fg.png',
    '/images/imog/img/Gemini_Generated_Image_fwms8bfwms8bfwms.png',
    '/images/imog/img/Gemini_Generated_Image_j9nl31j9nl31j9nl.png',
    '/images/imog/img/Gemini_Generated_Image_o9qipdo9qipdo9qi.png',
    '/images/imog/img/Gemini_Generated_Image_uy4gx8uy4gx8uy4g.png',
    '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm.png',
    '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-2.png',
    '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-3.png',
    '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-4.png',
    '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-5.png',
    '/images/imog/img/Gemini_Generated_Image_wsyewqwsyewqwsye.png',
    '/images/imog/img/Gemini_Generated_Image_xjh9k3xjh9k3xjh9.png',
    '/images/imog/img/Gemini_Generated_Image_xl2bs9xl2bs9xl2b.png',
    '/images/imog/img/Gemini_Generated_Image_yn7x2iyn7x2iyn7x.png',
    '/images/imog/img/Gemini_Generated_Image_z25t5fz25t5fz25t.png',
    '/images/imog/img/Gemini_Generated_Image_1452kb1452kb1452.png',
    '/images/imog/img/Gemini_Generated_Image_2jwol22jwol22jwo.png',
    '/images/imog/img/Gemini_Generated_Image_3a2khg3a2khg3a2k.png',
    '/images/imog/img/Gemini_Generated_Image_3ukrbi3ukrbi3ukr.png',
    '/images/imog/img/Gemini_Generated_Image_41jtuf41jtuf41jt.png',
    '/images/imog/img/Gemini_Generated_Image_423iwf423iwf423i.png',
    '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx.png',
    '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx-2.png',
    '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx-3.png',
  ];

  // Helper function to get image, cycling through available images if needed
  const getImage = (index: number) => availableImages[index % availableImages.length];

  // All products from all categories
  const allProducts = [
    // Hackers products
    { id: 1, name: 'Tech Hoodie', price: '₹1,899', category: 'Hackers', image: getImage(0) },
    { id: 2, name: 'Terminal Tee', price: '₹1,499', category: 'Hackers', image: getImage(1) },
    { id: 3, name: 'Code Cargo', price: '₹2,499', category: 'Hackers', image: getImage(2) },
    { id: 4, name: 'Hacker Cap', price: '₹799', category: 'Hackers', image: getImage(3) },
    { id: 5, name: 'Digital Jacket', price: '₹3,299', category: 'Hackers', image: getImage(4) },
    { id: 6, name: 'System Pants', price: '₹1,999', category: 'Hackers', image: getImage(5) },
    // Developers products
    { id: 7, name: 'Code Tee', price: '₹799', category: 'Developers', image: getImage(6) },
    { id: 8, name: 'Function Hoodie', price: '₹1,499', category: 'Developers', image: getImage(7) },
    { id: 9, name: 'Minimal Pants', price: '₹1,299', category: 'Developers', image: getImage(8) },
    { id: 10, name: 'Dev Cap', price: '₹599', category: 'Developers', image: getImage(9) },
    { id: 11, name: 'Clean Jacket', price: '₹2,299', category: 'Developers', image: getImage(10) },
    { id: 12, name: 'Syntax Tee', price: '₹899', category: 'Developers', image: getImage(11) },
    // Gym Freaks products
    { id: 13, name: 'Performance Set', price: '₹1,499', category: 'Gym Freaks', image: getImage(12) },
    { id: 14, name: 'Training Hoodie', price: '₹1,799', category: 'Gym Freaks', image: getImage(13) },
    { id: 15, name: 'Workout Tee', price: '₹999', category: 'Gym Freaks', image: getImage(14) },
    { id: 16, name: 'Gains Shorts', price: '₹1,299', category: 'Gym Freaks', image: getImage(15) },
    { id: 17, name: 'Lift Jacket', price: '₹1,999', category: 'Gym Freaks', image: getImage(16) },
    { id: 18, name: 'Flex Pants', price: '₹1,599', category: 'Gym Freaks', image: getImage(17) },
    // Party People products
    { id: 19, name: 'Night Out Fit', price: '₹1,999', category: 'Party People', image: getImage(18) },
    { id: 20, name: 'Bass Drop Tee', price: '₹1,499', category: 'Party People', image: getImage(19) },
    { id: 21, name: 'Club Jacket', price: '₹3,299', category: 'Party People', image: getImage(20) },
    { id: 22, name: 'Energy Pants', price: '₹2,499', category: 'Party People', image: getImage(21) },
    { id: 23, name: 'Vibe Hoodie', price: '₹2,799', category: 'Party People', image: getImage(22) },
    { id: 24, name: 'Statement Set', price: '₹2,999', category: 'Party People', image: getImage(23) },
    // Heavy Fits products
    { id: 25, name: 'Oversized Drop', price: '₹2,499', category: 'Heavy Fits', image: getImage(24) },
    { id: 26, name: 'Heavy Hoodie', price: '₹2,999', category: 'Heavy Fits', image: getImage(25) },
    { id: 27, name: 'Baggy Cargo', price: '₹3,299', category: 'Heavy Fits', image: getImage(26) },
    { id: 28, name: 'Max Comfort Tee', price: '₹1,799', category: 'Heavy Fits', image: getImage(27) },
    { id: 29, name: 'Heavy Weight Jacket', price: '₹3,999', category: 'Heavy Fits', image: getImage(28) },
    { id: 30, name: 'Oversized Pants', price: '₹2,799', category: 'Heavy Fits', image: getImage(29) },
  ];

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const getSelectedSize = (productId: number) => {
    return selectedSizes[productId] || 'M';
  };

  const setSelectedSize = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const addToCart = (product: typeof allProducts[0], size?: string) => {
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

  const getCategoryPath = (categoryName: string) => {
    const paths: { [key: string]: string } = {
      'Hackers': '/demo2/hackers',
      'Developers': '/demo2/developers',
      'Gym Freaks': '/demo2/gym-freaks',
      'Party People': '/demo2/party-people',
      'Heavy Fits': '/demo2/heavy-fits',
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
          <h1 className="text-xl font-bold text-white">IMOG - All Products</h1>
          <CartIcon />
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-purple-500 tracking-tight"
              style={{
                textShadow: '0 0 20px rgba(214, 0, 0, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
              }}>
            ALL PRODUCTS
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-6"></div>
          <p className="text-gray-200 text-xl md:text-2xl max-w-2xl mx-auto font-semibold leading-relaxed">
            Browse our complete collection. Every piece designed for those who refuse to blend in.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group">
              <Link
                href={`/demo2/products/${product.slug}`}
                className="text-left cursor-pointer w-full block"
              >
                <div className="aspect-square bg-gray-900 rounded-lg mb-4 overflow-hidden relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: 'brightness(0.7) contrast(1.1)' }}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </div>
                </div>
                <div className="product-info transition-transform duration-300">
                  <p className="text-gray-500 text-sm mb-1">{product.category}</p>
                  <h3 className="text-xl font-bold mb-1 text-white group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 font-semibold mb-3">{product.price}</p>
                </div>
              </Link>
              <div onClick={(e) => e.stopPropagation()}>
                <SizeSelector
                  selectedSize={getSelectedSize(product.id)}
                  onChange={(size) => setSelectedSize(product.id, size)}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-gray-200 transition-colors text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
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

      <style jsx>{`
        .group:hover .product-info {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
      `}</style>
    </div>
  );
}

