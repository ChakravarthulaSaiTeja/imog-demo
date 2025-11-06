'use client';

import { useState } from 'react';

interface SizeSelectorProps {
  selectedSize: string;
  onChange: (size: string) => void;
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export default function SizeSelector({ selectedSize, onChange }: SizeSelectorProps) {
  return (
    <div className="mb-3">
      <div className="flex gap-2 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`
              px-4 py-2 rounded font-semibold text-sm transition-colors
              ${selectedSize === size
                ? 'bg-white text-black'
                : 'bg-gray-900 text-white border border-gray-700 hover:border-gray-500'
              }
            `}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

