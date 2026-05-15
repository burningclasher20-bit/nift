'use client';

import { useState } from 'react';
import { LazyImage } from '@/components/lazy-image';

interface ImageGalleryProps {
  images: string[];
  alt: string;
  orientation?: 'horizontal' | 'vertical';
}

export function ImageGallery({ images, alt, orientation = 'horizontal' }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const isVertical = orientation === 'vertical';

  return (
    <div className={isVertical ? 'grid gap-4 lg:grid-cols-[94px_minmax(0,1fr)]' : 'space-y-4'}>
      {isVertical && images.length > 1 ? (
        <div className="flex flex-col gap-3 overflow-y-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`h-24 overflow-hidden rounded-3xl border-2 transition-all duration-200 ${
                selectedIndex === index ? 'border-terracotta shadow-lg' : 'border-slate-200 hover:border-slate-300'
              }`}
              aria-label={`Show image ${index + 1} of ${images.length}`}
            >
              <LazyImage
                src={image}
                alt={`${alt} ${index + 1}`}
                className="h-full w-full"
                skeletonClassName="rounded-none"
              />
            </button>
          ))}
        </div>
      ) : null}

      <div className="rounded-3xl overflow-hidden bg-slate-100 shadow-soft">
        <LazyImage
          src={images[selectedIndex]}
          alt={alt}
          className="w-full h-[520px]"
          skeletonClassName="rounded-none"
        />
      </div>

      {!isVertical && images.length > 1 ? (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedIndex === index ? 'border-terracotta shadow-md' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <LazyImage
                src={image}
                alt={`${alt} ${index + 1}`}
                className="w-20 h-20"
                skeletonClassName="rounded-none"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
