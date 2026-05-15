'use client';

import { Button } from './ui/button';
import { useSwatch } from './swatch-provider';
import type { Fabric } from '@/types/fabric';

interface FabricSwatchActionsProps {
  fabric: Fabric;
}

export function FabricSwatchActions({ fabric }: FabricSwatchActionsProps) {
  const { count, addFabric } = useSwatch();

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Technical ID</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">Fabric Information</h2>
          <p className="mt-3 text-sm font-mono uppercase tracking-[0.3em] text-slate-500">{fabric.id}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-mono">GSM</p>
            <p className="mt-2 text-lg font-semibold text-ink">{fabric.gsm}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-mono">Thread Count</p>
            <p className="mt-2 text-lg font-semibold text-ink">{fabric.threadCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-mono">Dye Type</p>
            <p className="mt-2 text-lg font-semibold text-ink">{fabric.dyeType}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-mono">Price / Meter</p>
            <p className="mt-2 text-lg font-semibold text-ink">{fabric.pricePerMeter}</p>
          </div>
          <div className="sm:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-mono">Sustainability Score</p>
            <p className="mt-2 text-lg font-semibold text-ink">{fabric.sustainabilityScore}%</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-medium text-ink">Swatch kit status</p>
          <p className="mt-2">{count >= 5 ? 'Ready to Request Physical Swatch Kit' : `${count} / 5 items selected`}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="w-full sm:w-auto" type="button" onClick={() => addFabric(fabric)}>
            Add to Swatch Box
          </Button>
          <Button variant="ghost" className="w-full sm:w-auto" type="button">
            Inquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
