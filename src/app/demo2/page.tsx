'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Demo2Page() {
  // Hero background images that rotate
  const heroImages = [
    '/images/imog/img/Gemini_Generated_Image_1452kb1452kb1452.png',
    '/images/imog/img/Gemini_Generated_Image_2jwol22jwol22jwo.png',
    '/images/imog/img/Gemini_Generated_Image_3a2khg3a2khg3a2k.png',
    '/images/imog/img/Gemini_Generated_Image_3ukrbi3ukrbi3ukr.png',
    '/images/imog/img/Gemini_Generated_Image_41jtuf41jtuf41jt.png',
    '/images/imog/img/Gemini_Generated_Image_423iwf423iwf423i.png',
    '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx.png',
    '/images/imog/img/Gemini_Generated_Image_6hpzec6hpzec6hpz.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Cinematic Hero Section - Full Screen Landing */}
      <section className="hero-grunge-bg min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
        {/* Rotating Background Images */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`IMOG Hero ${index + 1}`}
                fill
                className="object-cover"
                style={{
                  filter: 'brightness(0.7) contrast(1.1)',
                }}
                priority={index === 0}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/20"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center z-10 max-w-4xl mx-auto space-y-6 relative">
          {/* Headline */}
          <h1 
            className="hero-text-brush text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-[#d60000] mb-4"
            data-text="I M OG"
          >
            I M OG
          </h1>

          {/* Subheading */}
          <h2 className="hero-text-subheading text-lg sm:text-xl md:text-2xl text-[#ff4d35] mb-8">
            STAY ORIGINAL.
          </h2>

          {/* CTA Button */}
          <div className="pt-4">
            <Link 
              href="/demo2/store"
              className="hero-cta-button inline-block cursor-pointer"
            >
              ENTER STORE
            </Link>
          </div>
        </div>

        {/* Navigation - Positioned absolutely over hero */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="w-20"></div>
            <h1 className="text-xl font-bold text-white">IMOG</h1>
            <div className="w-20"></div>
          </div>
        </nav>
      </section>
    </div>
  );
}

