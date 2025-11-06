'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">IMOG</h3>
            <p className="text-gray-400 text-sm mb-4">
              I Am OG. Culture. Attitude. Identity.
            </p>
            <p className="text-gray-500 text-xs">
              Made in India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demo2" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/demo2/store" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/demo2/products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/demo2/hackers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hackers
                </Link>
              </li>
              <li>
                <Link href="/demo2/developers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Developers
                </Link>
              </li>
              <li>
                <Link href="/demo2/gym-freaks" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gym Freaks
                </Link>
              </li>
              <li>
                <Link href="/demo2/party-people" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Party People
                </Link>
              </li>
              <li>
                <Link href="/demo2/heavy-fits" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Heavy Fits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@imog.in</li>
              <li>Phone: +91 1800-IMOG</li>
              <li>Address: India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IMOG. All rights reserved. | Made with ❤️ in India
          </p>
          <p className="text-gray-500 text-xs mt-2">
            GSTIN: 29XXXXXXXXXXXX | CIN: UXXXXXXXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}

