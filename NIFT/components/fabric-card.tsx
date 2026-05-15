'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { type Fabric } from '@/types/fabric';
import { SecondaryButton } from '@/components/ui/secondary-button';
import { LazyImage } from '@/components/lazy-image';

interface FabricCardProps {
  fabric: Fabric;
  onAddToSwatch: () => void;
}

export function FabricCard({ fabric, onAddToSwatch }: FabricCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-xl border border-white/70 bg-white/95 shadow-soft transition-all duration-300 hover:border-terracotta/30 hover:shadow-lg"
    >
      <Link href={`/fabric/${fabric.id}`} className="block overflow-hidden">
        <div className="relative h-72 overflow-hidden bg-slate-100">
          <LazyImage
            src={fabric.images[0]}
            alt={fabric.name}
            className="h-full w-full"
            skeletonClassName="rounded-none"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#EFEBE0]/95 to-transparent" />
        </div>
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{fabric.collection}</span>
          <span className="rounded-full border border-terracotta/20 bg-terracotta/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-terracotta">
            {fabric.region}
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-ink leading-tight">{fabric.name}</h3>
          <p className="text-sm leading-6 text-slate-600">{fabric.material} • {fabric.dyeType}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">GSM</p>
            <p className="text-lg font-semibold text-ink">{fabric.gsm}</p>
          </div>
          <SecondaryButton className="rounded-full px-4 py-2 text-sm" onClick={onAddToSwatch}>
            Add to Box
          </SecondaryButton>
        </div>
      </div>
    </motion.article>
  );
}

