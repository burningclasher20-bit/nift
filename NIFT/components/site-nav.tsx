'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSwatch } from './swatch-provider';

export function SiteNav() {
  const { count, isHydrated } = useSwatch();

  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <Link href="/" className="text-2xl font-semibold uppercase tracking-[0.45em] text-ink">
        Thread of the Land
      </Link>
      <div className="flex items-center gap-6">
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-sm uppercase tracking-[0.3em] text-ink/80 md:flex">
          <Link href="/">Home</Link>
          <Link href="/library">Library</Link>
        </nav>
        <Link href="/swatch" className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-soft transition-all duration-300 hover:border-terracotta hover:shadow-lg">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">Swatch</span>
          {isHydrated ? (
            <motion.span
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full bg-terracotta px-3 text-sm font-semibold text-white"
            >
              {count}
            </motion.span>
          ) : (
            <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
          )}
        </Link>
      </div>
    </header>
  );
}
