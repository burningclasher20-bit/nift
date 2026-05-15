'use client';

import { useState, type ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  skeletonClassName?: string;
}

export function LazyImage({ src, alt, className = '', skeletonClassName = '', ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`block h-full w-full object-cover transition duration-700 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        {...props}
      />
      {!loaded ? (
        <div className={`absolute inset-0 animate-pulse rounded-3xl bg-slate-200/70 ${skeletonClassName}`} aria-hidden="true" />
      ) : null}
    </div>
  );
}
