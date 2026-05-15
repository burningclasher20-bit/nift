'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface SwatchBoxProps {
  count: number;
}

export function SwatchBox({ count }: SwatchBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-xl border border-slate-200 bg-white/90 p-5 shadow-soft backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Swatch Box</p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">{count} Piece{count === 1 ? '' : 's'}</h3>
        </div>
        <Link href="/swatch">
          <Button variant="ghost" className="rounded-full px-4 py-2 text-sm text-ink/90">
            View Archive
          </Button>
        </Link>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        Keep a curated selection of archival textiles for studio review and palette planning.
      </p>
      {count === 5 ? (
        <p className="mt-4 rounded-2xl bg-terracotta/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-terracotta">
          Ready to Request Physical Swatch Kit
        </p>
      ) : null}
    </motion.div>
  );
}
