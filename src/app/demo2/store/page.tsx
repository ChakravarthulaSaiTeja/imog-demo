'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import CartIcon from '@/components/CartIcon';
import Toast from '@/components/Toast';
import SizeSelector from '@/components/SizeSelector';
import { allProducts, Product } from '@/data/products';

export default function StorePage() {
  // Background images for each category that rotate
  const categoryImages = {
    hacker: [
      '/images/imog/img/Gemini_Generated_Image_2jwol22jwol22jwo.png',
      '/images/imog/img/Gemini_Generated_Image_e6fgxpe6fgxpe6fg.png',
      '/images/imog/img/Gemini_Generated_Image_fwms8bfwms8bfwms.png',
    ],
    developer: [
      '/images/imog/img/Gemini_Generated_Image_3a2khg3a2khg3a2k.png',
      '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-2.png',
      '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-3.png',
    ],
    gym: [
      '/images/imog/img/Gemini_Generated_Image_3ukrbi3ukrbi3ukr.png',
      '/images/imog/img/Gemini_Generated_Image_xl2bs9xl2bs9xl2b.png',
      '/images/imog/img/Gemini_Generated_Image_yn7x2iyn7x2iyn7x.png',
    ],
    party: [
      '/images/imog/img/Gemini_Generated_Image_41jtuf41jtuf41jt.png',
      '/images/imog/img/hyper-realistic%20streetwear%20fashion%20editorial%20photography%2C%20model%20wearing%20IMOG%20brand%20clothing%2C%20bold%20oversized%20graphic%20tee%20with%20%E2%80%9CIMOG%E2%80%9D%20typography%20logo%2C%20modern%20techwear%20street%20core%20ae…-4.png',
      '/images/imog/img/hyper_realistic_streetwear_fashion_editorial_photography__model_wearing_IMOG_brand_clothing__bold_ov.png',
    ],
    heavy: [
      '/images/imog/img/Gemini_Generated_Image_423iwf423iwf423i.png',
      '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx.png',
      '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx-2.png',
    ],
  };

  const [currentImageIndices, setCurrentImageIndices] = useState({
    hacker: 0,
    developer: 0,
    gym: 0,
    party: 0,
    heavy: 0,
  });

  useEffect(() => {
    const intervals: { [key: string]: NodeJS.Timeout } = {};
    
    Object.keys(categoryImages).forEach((vibe) => {
      intervals[vibe] = setInterval(() => {
        setCurrentImageIndices((prev) => ({
          ...prev,
          [vibe]: (prev[vibe as keyof typeof prev] + 1) % categoryImages[vibe as keyof typeof categoryImages].length,
        }));
      }, 5000); // Change image every 5 seconds
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);
  const categories = [
    { 
      name: 'Hackers', 
      color: 'from-cyan-500 to-blue-600',
      description: 'Tech-forward gear for the digital underground',
      count: 12,
      vibe: 'hacker',
      vibeText: [
        '$ sudo hack.exe',
        '> Access granted',
        '> System compromised',
        '$ cat /etc/passwd'
      ]
    },
    { 
      name: 'Developers', 
      color: 'from-purple-500 to-pink-600',
      description: 'Code in style with minimalist essentials',
      count: 8,
      vibe: 'developer',
      vibeText: [
        'function create() {',
        '  return identity;',
        '}',
        'const style = "code";'
      ]
    },
    { 
      name: 'Gym Freaks', 
      color: 'from-red-500 to-orange-600',
      description: 'Performance meets streetwear aesthetic',
      count: 15,
      vibe: 'gym',
      vibeText: [
        'REPS: 100',
        'SETS: 10',
        'GAINS: MAX',
        'LIFT HARD'
      ]
    },
    { 
      name: 'Party People', 
      color: 'from-yellow-500 to-pink-600',
      description: 'Bold statement pieces for nightlife',
      count: 10,
      vibe: 'party',
      vibeText: [
        'BASS DROP',
        'NIGHT MODE',
        'VIBE CHECK',
        'ENERGY: 100%'
      ]
    },
    { 
      name: 'Heavy Fits', 
      color: 'from-gray-700 to-black',
      description: 'Oversized comfort for maximum impact',
      count: 7,
      vibe: 'heavy',
      vibeText: [
        'OVERSIZED',
        'MAX COMFORT',
        'HEAVY WEIGHT',
        'BAGGY VIBES'
      ]
    },
  ];

  // Available images pool for reuse
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
    '/images/imog/img/Gemini_Generated_Image_1452kb1452kb1452.png',
    '/images/imog/img/Gemini_Generated_Image_2jwol22jwol22jwo.png',
    '/images/imog/img/Gemini_Generated_Image_3a2khg3a2khg3a2k.png',
    '/images/imog/img/Gemini_Generated_Image_3ukrbi3ukrbi3ukr.png',
    '/images/imog/img/Gemini_Generated_Image_41jtuf41jtuf41jt.png',
    '/images/imog/img/Gemini_Generated_Image_423iwf423iwf423i.png',
    '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx.png',
    '/images/imog/img/Gemini_Generated_Image_xl2bs9xl2bs9xl2b.png',
    '/images/imog/img/Gemini_Generated_Image_yn7x2iyn7x2iyn7x.png',
    '/images/imog/img/Gemini_Generated_Image_z25t5fz25t5fz25t.png',
    '/images/imog/img/Gemini_Generated_Image_wsyewqwsyewqwsye.png',
    '/images/imog/img/Gemini_Generated_Image_xjh9k3xjh9k3xjh9.png',
  ];

  // Latest Drops products (IDs 31-36)
  const products = allProducts.filter(p => p.id >= 31 && p.id <= 36);

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  const getSelectedSize = (productId: number) => {
    return selectedSizes[productId] || 'M';
  };

  const setSelectedSize = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const addToCart = (product: Product, size?: string) => {
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

  const handleCategoryClick = (categoryName: string) => {
    window.location.href = getCategoryPath(categoryName);
  };

  const handleProductClick = (productId: number) => {
    alert(`Viewing ${products.find(p => p.id === productId)?.name}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 py-4 sticky top-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/demo2" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Back to Landing
          </Link>
          <h1 className="text-xl font-bold text-white">IMOG</h1>
          <CartIcon />
        </div>
      </nav>

      {/* Find Your Tribe Categories Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white tracking-tight">
              MY OG'S
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-500 to-purple-500">
                FIND YOUR TRIBE
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-semibold">
              Explore collections designed for your lifestyle. Each category represents a different tribe, a different way of being.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`w-full h-64 rounded-xl bg-gradient-to-br ${category.color} cursor-pointer hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-white flex flex-col items-center justify-center group relative overflow-hidden ${
                  category.vibe === 'hacker' ? 'hacker-vibe-card' : 
                  category.vibe === 'developer' ? 'developer-vibe-card' :
                  category.vibe === 'gym' ? 'gym-vibe-card' :
                  category.vibe === 'party' ? 'party-vibe-card' :
                  category.vibe === 'heavy' ? 'heavy-vibe-card' : ''
                }`}
              >
                {/* Hacker image background */}
                {category.vibe === 'hacker' && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      {categoryImages.hacker.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndices.hacker ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Hacker ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{
                              filter: 'brightness(0.6) contrast(1.1) grayscale(0.1)',
                            }}
                            unoptimized
                          />
                        </div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/50 via-cyan-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 opacity-30 font-mono text-xs text-green-400 p-4 flex flex-col justify-center items-center space-y-1 hacker-terminal-text z-10">
                      {category.vibeText.map((line, i) => (
                        <div key={i} className="w-full text-left">{line}</div>
                      ))}
                    </div>
                  </>
                )}
                {/* Developer image background */}
                {category.vibe === 'developer' && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      {categoryImages.developer.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndices.developer ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Developer ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{
                              filter: 'brightness(0.6) contrast(1.1) grayscale(0.1)',
                            }}
                            unoptimized
                          />
                        </div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-pink-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 opacity-30 font-mono text-xs text-purple-300 p-4 flex flex-col justify-center items-center space-y-1 developer-code-text z-10">
                      {category.vibeText.map((line, i) => (
                        <div key={i} className="w-full text-left">{line}</div>
                      ))}
                    </div>
                  </>
                )}
                {/* Gym image background */}
                {category.vibe === 'gym' && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      {categoryImages.gym.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndices.gym ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Gym ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{
                              filter: 'brightness(0.65) contrast(1.1) grayscale(0.1)',
                            }}
                            unoptimized
                          />
                        </div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/50 via-orange-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 opacity-30 font-bold text-xs text-orange-300 p-4 flex flex-col justify-center items-center space-y-1 gym-text z-10">
                      {category.vibeText.map((line, i) => (
                        <div key={i} className="w-full text-left">{line}</div>
                      ))}
                    </div>
                  </>
                )}
                {/* Party image background */}
                {category.vibe === 'party' && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      {categoryImages.party.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndices.party ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Party ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{
                              filter: 'brightness(0.7) contrast(1.1) grayscale(0.05)',
                            }}
                            unoptimized
                          />
                        </div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 via-pink-900/20 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 opacity-35 font-bold text-xs text-yellow-300 p-4 flex flex-col justify-center items-center space-y-1 party-text z-10">
                      {category.vibeText.map((line, i) => (
                        <div key={i} className="w-full text-left">{line}</div>
                      ))}
                    </div>
                  </>
                )}
                {/* Heavy Fits image background */}
                {category.vibe === 'heavy' && (
                  <>
                    <div className="absolute inset-0 overflow-hidden">
                      {categoryImages.heavy.map((image, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentImageIndices.heavy ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Heavy Fits ${index + 1}`}
                            fill
                            className="object-cover"
                            style={{
                              filter: 'brightness(0.6) contrast(1.1) grayscale(0.2)',
                            }}
                            unoptimized
                          />
                        </div>
                      ))}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 opacity-30 font-bold text-xs text-gray-400 p-4 flex flex-col justify-center items-center space-y-1 heavy-text z-10">
                      {category.vibeText.map((line, i) => (
                        <div key={i} className="w-full text-left">{line}</div>
                      ))}
                    </div>
                  </>
                )}
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-3xl font-black text-white drop-shadow-lg z-10">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mt-2 z-10 hidden group-hover:block">
                  {category.count} items
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Latest Drops
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fresh releases that set the standard. Limited quantities. Unlimited style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link
                href={`/demo2/products/${product.slug}`}
                className="text-left cursor-pointer block"
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
                  <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
        <div className="text-center mt-12 flex gap-4 justify-center flex-wrap">
          <button 
            onClick={() => {
              const findYourTribe = document.querySelector('section');
              if (findYourTribe) {
                findYourTribe.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-block px-8 py-3 border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
          >
            View All Categories
          </button>
          <Link 
            href="/demo2/products"
            className="inline-block px-8 py-3 border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-black transition-all duration-300 font-semibold"
          >
            View All Products
          </Link>
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .group:hover .product-info {
          transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
        }
      `}</style>
    </div>
  );
}

