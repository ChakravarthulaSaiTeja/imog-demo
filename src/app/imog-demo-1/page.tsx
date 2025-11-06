import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function IMOGDemo1Page() {
  return (
    <div className="min-h-screen bg-pure-black text-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-mono text-xl font-bold text-white tracking-wider">
            IMOG
          </div>
          <button className="font-mono text-sm text-white tracking-wider uppercase hover:text-neon-green transition-colors duration-300 text-neon-glow-hover">
            MENU
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Headline */}
              <h1 className="font-mono text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none glitch-subtle">
                IMOG
              </h1>

              {/* Subheadline */}
              <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-light text-white tracking-wide">
                We Don't Follow Trends. We Create Identity.
              </h2>

              {/* Subtext */}
              <p className="font-sans text-sm md:text-base text-white/60 font-light tracking-wide max-w-md mx-auto lg:mx-0">
                Designed for the ones who already know who they are.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button href="#collections" variant="primary">
                  Explore Collections
                </Button>
                <Button href="#lookbook" variant="secondary">
                  Lookbook
                </Button>
              </div>
            </div>

            {/* Right: Model Image Container */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <div className="relative w-full h-full rounded-sm overflow-hidden border border-neon-green/20 shadow-[0_0_30px_rgba(57,255,20,0.1)]">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=1200&fit=crop&q=80"
                  alt="IMOG Model - Streetwear Fashion"
                  fill
                  className="object-cover"
                  style={{
                    filter: 'brightness(0.4) contrast(1.3) grayscale(0.2)',
                  }}
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 border border-neon-green/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-wider">
            Identity Defined
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&q=80"
                alt="IMOG Techwear Collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'brightness(0.35) contrast(1.2) grayscale(0.1)',
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 2 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop&q=80"
                alt="IMOG Minimal Streetwear"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'brightness(0.35) contrast(1.2) grayscale(0.1)',
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 3 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop&q=80"
                alt="IMOG Urban Fashion"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'brightness(0.35) contrast(1.2) grayscale(0.1)',
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 4 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop&q=80"
                alt="IMOG Street Style"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'brightness(0.35) contrast(1.2) grayscale(0.1)',
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 5 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1520975916090-3105954fa657?w=600&h=800&fit=crop&q=80"
                alt="IMOG Contemporary Fashion"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'brightness(0.35) contrast(1.2) grayscale(0.1)',
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Image 6 */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300 group">
              <Image
                src="https://images.unsplash.com/photo-1485963631004-f2f00b1d9d3d?w=600&h=800&fit=crop&q=80"
                alt="IMOG Modern Streetwear"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{
                  filter: 'brightness(0.35) contrast(1.2) grayscale(0.1)',
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-sm text-white/40 tracking-wide">
            © 2024 IMOG. Identity Defined.
          </p>
        </div>
      </footer>
    </div>
  );
}

