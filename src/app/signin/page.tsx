'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; size: number; duration: number; direction: string }>>([]);

  useEffect(() => {
    // Create floating particles - distributed all over the page, starting from all edges
    const particleCount = 80;
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
      let left, top, direction;
      
      if (edge === 0) { // Top edge
        left = Math.random() * 100;
        top = 0;
        direction = 'down';
      } else if (edge === 1) { // Right edge
        left = 100;
        top = Math.random() * 100;
        direction = 'left';
      } else if (edge === 2) { // Bottom edge
        left = Math.random() * 100;
        top = 100;
        direction = 'up';
      } else { // Left edge
        left = 0;
        top = Math.random() * 100;
        direction = 'right';
      }
      
      return {
        id: i,
        left,
        top,
        delay: Math.random() * 20,
        size: Math.random() * 3 + 1, // Random size between 1-4px
        duration: 15 + Math.random() * 15, // Random duration between 15-30s
        direction,
      };
    });
    setParticles(newParticles);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    alert('Sign in functionality coming soon!');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden auth-animated-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Animated Grid Overlay */}
      <div className="auth-animated-bg"></div>
      
      {/* Floating Particles - Distributed all over the page */}
      <div className="auth-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`auth-particle particle-${particle.direction}`}
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-3 text-white auth-title-glow">
              SIGN IN
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-6"></div>
            <p className="text-2xl md:text-3xl font-bold auth-text-shimmer mb-8">
              Welcome back
            </p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl auth-form-slide">
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all auth-input-glow"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all auth-input-glow"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2 w-4 h-4 accent-red-600" />
                <span className="text-sm text-gray-400">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-gray-400 hover:text-red-500 transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-lg font-black text-lg hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg auth-button-pulse"
            >
              SIGN IN
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-red-500 font-bold hover:text-red-400 transition-colors">
                SIGN UP
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors text-sm flex items-center justify-center gap-2">
              <span>←</span> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

