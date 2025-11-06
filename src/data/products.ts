// Centralized product data
export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  slug: string;
}

// Helper function to generate slug from product name
function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

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

const getImage = (index: number) => availableImages[index % availableImages.length];

// All products consolidated from all pages
export const allProducts: Product[] = [
  // Hackers products
  { id: 1, name: 'Tech Hoodie', price: '₹1,899', category: 'Hackers', image: '/images/imog/img/Gemini_Generated_Image_e6fgxpe6fgxpe6fg.png', slug: generateSlug('Tech Hoodie') },
  { id: 2, name: 'Terminal Tee', price: '₹1,499', category: 'Hackers', image: '/images/imog/img/Gemini_Generated_Image_fwms8bfwms8bfwms.png', slug: generateSlug('Terminal Tee') },
  { id: 3, name: 'Code Cargo', price: '₹2,499', category: 'Hackers', image: '/images/imog/img/Gemini_Generated_Image_j9nl31j9nl31j9nl.png', slug: generateSlug('Code Cargo') },
  { id: 4, name: 'Hacker Cap', price: '₹799', category: 'Hackers', image: '/images/imog/img/Gemini_Generated_Image_o9qipdo9qipdo9qi.png', slug: generateSlug('Hacker Cap') },
  { id: 5, name: 'Digital Jacket', price: '₹3,299', category: 'Hackers', image: '/images/imog/img/Gemini_Generated_Image_uy4gx8uy4gx8uy4g.png', slug: generateSlug('Digital Jacket') },
  { id: 6, name: 'System Pants', price: '₹1,999', category: 'Hackers', image: '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm.png', slug: generateSlug('System Pants') },
  // Developers products
  { id: 7, name: 'Code Tee', price: '₹799', category: 'Developers', image: '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-2.png', slug: generateSlug('Code Tee') },
  { id: 8, name: 'Function Hoodie', price: '₹1,499', category: 'Developers', image: '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-3.png', slug: generateSlug('Function Hoodie') },
  { id: 9, name: 'Minimal Pants', price: '₹1,299', category: 'Developers', image: '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-4.png', slug: generateSlug('Minimal Pants') },
  { id: 10, name: 'Dev Cap', price: '₹599', category: 'Developers', image: '/images/imog/img/Gemini_Generated_Image_v9mm83v9mm83v9mm-5.png', slug: generateSlug('Dev Cap') },
  { id: 11, name: 'Clean Jacket', price: '₹2,299', category: 'Developers', image: '/images/imog/img/Gemini_Generated_Image_wsyewqwsyewqwsye.png', slug: generateSlug('Clean Jacket') },
  { id: 12, name: 'Syntax Tee', price: '₹899', category: 'Developers', image: '/images/imog/img/Gemini_Generated_Image_xjh9k3xjh9k3xjh9.png', slug: generateSlug('Syntax Tee') },
  // Gym Freaks products
  { id: 13, name: 'Performance Set', price: '₹1,499', category: 'Gym Freaks', image: getImage(12), slug: generateSlug('Performance Set') },
  { id: 14, name: 'Training Hoodie', price: '₹1,799', category: 'Gym Freaks', image: getImage(13), slug: generateSlug('Training Hoodie') },
  { id: 15, name: 'Workout Tee', price: '₹999', category: 'Gym Freaks', image: getImage(14), slug: generateSlug('Workout Tee') },
  { id: 16, name: 'Gains Shorts', price: '₹1,299', category: 'Gym Freaks', image: getImage(15), slug: generateSlug('Gains Shorts') },
  { id: 17, name: 'Lift Jacket', price: '₹1,999', category: 'Gym Freaks', image: getImage(16), slug: generateSlug('Lift Jacket') },
  { id: 18, name: 'Flex Pants', price: '₹1,599', category: 'Gym Freaks', image: getImage(17), slug: generateSlug('Flex Pants') },
  // Party People products
  { id: 19, name: 'Night Out Fit', price: '₹1,999', category: 'Party People', image: getImage(18), slug: generateSlug('Night Out Fit') },
  { id: 20, name: 'Bass Drop Tee', price: '₹1,499', category: 'Party People', image: getImage(19), slug: generateSlug('Bass Drop Tee') },
  { id: 21, name: 'Club Jacket', price: '₹3,299', category: 'Party People', image: getImage(20), slug: generateSlug('Club Jacket') },
  { id: 22, name: 'Energy Pants', price: '₹2,499', category: 'Party People', image: getImage(21), slug: generateSlug('Energy Pants') },
  { id: 23, name: 'Vibe Hoodie', price: '₹2,799', category: 'Party People', image: getImage(22), slug: generateSlug('Vibe Hoodie') },
  { id: 24, name: 'Statement Set', price: '₹2,999', category: 'Party People', image: getImage(23), slug: generateSlug('Statement Set') },
  // Heavy Fits products
  { id: 25, name: 'Oversized Drop', price: '₹2,499', category: 'Heavy Fits', image: '/images/imog/img/Gemini_Generated_Image_3ukrbi3ukrbi3ukr.png', slug: generateSlug('Oversized Drop') },
  { id: 26, name: 'Heavy Hoodie', price: '₹2,999', category: 'Heavy Fits', image: '/images/imog/img/Gemini_Generated_Image_41jtuf41jtuf41jt.png', slug: generateSlug('Heavy Hoodie') },
  { id: 27, name: 'Baggy Cargo', price: '₹3,299', category: 'Heavy Fits', image: '/images/imog/img/Gemini_Generated_Image_423iwf423iwf423i.png', slug: generateSlug('Baggy Cargo') },
  { id: 28, name: 'Max Comfort Tee', price: '₹1,799', category: 'Heavy Fits', image: '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx.png', slug: generateSlug('Max Comfort Tee') },
  { id: 29, name: 'Heavy Weight Jacket', price: '₹3,999', category: 'Heavy Fits', image: '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx-2.png', slug: generateSlug('Heavy Weight Jacket') },
  { id: 30, name: 'Oversized Pants', price: '₹2,799', category: 'Heavy Fits', image: '/images/imog/img/Gemini_Generated_Image_61lxge61lxge61lx-3.png', slug: generateSlug('Oversized Pants') },
  // Store page products (Latest Drops)
  { id: 31, name: 'OG Tech Hoodie', price: '₹1,899', category: 'Techwear', image: availableImages[0], slug: generateSlug('OG Tech Hoodie') },
  { id: 32, name: 'Identity Cargo Pants', price: '₹2,499', category: 'Streetwear', image: availableImages[1], slug: generateSlug('Identity Cargo Pants') },
  { id: 33, name: 'Original Tee', price: '₹799', category: 'Essentials', image: availableImages[2], slug: generateSlug('Original Tee') },
  { id: 34, name: 'Heavy Oversized Jacket', price: '₹3,299', category: 'Heavy Fits', image: availableImages[3], slug: generateSlug('Heavy Oversized Jacket') },
  { id: 35, name: 'Statement Cap', price: '₹599', category: 'Accessories', image: availableImages[4], slug: generateSlug('Statement Cap') },
  { id: 36, name: 'OG Track Pants', price: '₹1,499', category: 'Streetwear', image: availableImages[5], slug: generateSlug('OG Track Pants') },
];

export function getProductById(id: number): Product | undefined {
  return allProducts.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

