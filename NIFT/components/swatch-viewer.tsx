'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSwatch } from './swatch-provider';
import { Button } from './ui/button';
import { LazyImage } from './lazy-image';

export function SwatchViewer() {
  const { items, removeFabric, count, isHydrated } = useSwatch();

  // Show loading while hydrating
  if (!isHydrated) {
    return (
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-soft backdrop-blur-sm"
        >
          <div className="mx-auto max-w-xl">
            <div className="h-8 w-32 mx-auto rounded-lg bg-slate-200 animate-pulse" />
            <div className="mt-6 h-6 w-48 mx-auto rounded-lg bg-slate-200 animate-pulse" />
          </div>
        </motion.div>
      </div>
    );
  }

  // Show empty state only if truly no items after hydration
  if (!items || items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white/90 p-12 text-center shadow-soft backdrop-blur-sm"
        >
          <div className="mx-auto max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Empty Archive</p>
            <h2 className="mt-4 text-3xl font-semibold text-ink">No fabrics selected yet</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Begin by exploring our curated textile library. Add up to 5 fabrics that speak to your design vision.
            </p>
            <Link href="/library">
              <Button className="mt-8 w-full sm:w-auto">
                Explore Library
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Swatch Selection</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">{count} of 5 Fabrics</h2>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3">
              <div className="h-3 w-3 rounded-full bg-terracotta" />
              <span className="text-sm font-semibold text-ink">
                {count === 5 ? 'Ready to Request' : `${5 - count} slot${5 - count === 1 ? '' : 's'} available`}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((fabric, index) => (
            <motion.article
              key={fabric.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-soft transition-all duration-300 hover:shadow-lg hover:border-slate-300"
            >
              <Link href={`/fabric/${fabric.id}`} className="block">
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <LazyImage
                    src={fabric.images[0]}
                    alt={fabric.name}
                    className="h-full w-full group-hover:scale-105"
                    skeletonClassName="rounded-none"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#EFEBE0]/95 to-transparent" />
                </div>
              </Link>

              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{fabric.collection}</p>
                    <h3 className="mt-2 truncate text-lg font-semibold text-ink">{fabric.name}</h3>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-terracotta/10 px-3 py-1 text-xs font-medium text-terracotta">
                    {index + 1}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-slate-600">
                  <p>{fabric.material}</p>
                  <p className="font-medium text-ink">{fabric.pricePerMeter}</p>
                </div>

                <button
                  onClick={() => removeFabric(fabric.id)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700"
                >
                  Remove from Kit
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {count === 5 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl border border-terracotta/20 bg-terracotta/5 p-8 shadow-soft"
          >
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-terracotta">Kit Complete</p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">Ready to Request Physical Swatch Kit</h3>
                <p className="mt-3 leading-7 text-slate-700">
                  Your curated selection is complete. Request a physical swatch kit and take your textile research to the studio.
                </p>
              </div>
              <Button className="flex-shrink-0 w-full sm:w-auto">
                Request Kit
              </Button>
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
