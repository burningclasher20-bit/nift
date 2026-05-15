'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { LazyImage } from '@/components/lazy-image';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-canvas">
      {/* Parallax Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <LazyImage
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80"
          alt="Textile loom in traditional Indian workshop"
          className="h-full w-full"
          skeletonClassName="rounded-none"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/90 via-canvas/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/95 via-transparent to-canvas/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
              className="font-display text-6xl font-bold leading-tight text-ink sm:text-7xl lg:text-8xl"
            >
              The Thread of the Land
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-700 sm:text-2xl"
            >
              A digital archive for heritage Indian textiles and artisan fabrics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <Link
                href="/library"
                className="inline-flex items-center rounded-full bg-terracotta px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#9e4e3a] hover:shadow-lg hover:scale-105"
                aria-label="Explore the textile library"
              >
                Explore Library
              </Link>
              <button
                type="button"
                onClick={() => {
                  document.getElementById('collections')?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
                className="text-lg font-semibold text-ink/80 transition-colors hover:text-ink"
                aria-label="Scroll to featured collections"
              >
                View Collections ↓
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-ink/60">
          <span className="text-sm uppercase tracking-[0.2em]">Scroll</span>
          <div className="h-8 w-px bg-ink/30" />
        </div>
      </motion.div>
    </section>
  );
}
