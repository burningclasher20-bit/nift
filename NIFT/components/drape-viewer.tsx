'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface DrapeViewerProps {
  src: string;
  label?: string;
}

export function DrapeViewer({ src, label = 'Drape Movement' }: DrapeViewerProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-[0_32px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Drape Viewer</p>
          <h3 className="mt-2 text-xl font-semibold text-ink">{label}</h3>
        </div>
        <span className="rounded-full border border-terracotta/20 bg-terracotta/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-terracotta">
          Autoplay Loop
        </span>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 shadow-inner">
        {!loaded ? (
          <div className="absolute inset-0 z-10 animate-pulse bg-slate-900/75" aria-hidden="true" />
        ) : null}
        <motion.video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
          className="h-full w-full min-h-[280px] object-cover transition-opacity duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <div className="mt-5 rounded-3xl bg-slate-50/80 p-4 text-sm leading-6 text-slate-600 shadow-sm">
        <p className="font-medium text-ink">Studio drape study</p>
        <p className="mt-2">A responsive film frame designed for slow-motion textile playback, with a subtle shadowed gallery presentation.</p>
      </div>
    </motion.section>
  );
}
