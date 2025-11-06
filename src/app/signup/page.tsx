'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle sign up logic here
    alert('Sign up functionality coming soon!');
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
              JOIN THE TRIBE
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Create your account and become OG</p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl auth-form-slide">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all auth-input-glow"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all auth-input-glow"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-bold mb-2 text-gray-300 uppercase tracking-wide">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all auth-input-glow"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="terms" required className="mr-2 mt-1 w-4 h-4 accent-red-600" />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the{' '}
                <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-lg font-black text-lg hover:bg-gray-200 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg auth-button-pulse"
            >
              SIGN UP
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/signin" className="text-red-500 font-bold hover:text-red-400 transition-colors">
                SIGN IN
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

