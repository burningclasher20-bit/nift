'use client';

import { useMemo, useState } from 'react';
import { fabrics } from '@/lib/data';
import { FabricCard } from '@/components/fabric-card';
import { SidebarFilter } from '@/components/sidebar-filter';
import { SwatchBox } from '@/components/swatch-box';
import { useSwatch } from './swatch-provider';

export function LibraryShell() {
  const { items, addFabric } = useSwatch();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [gsmMin, setGsmMin] = useState('');
  const [gsmMax, setGsmMax] = useState('');

  const filtered = useMemo(() => {
    return fabrics.filter((fabric) => {
      const gsm = fabric.gsm;
      const minGsm = gsmMin ? parseInt(gsmMin) : 0;
      const maxGsm = gsmMax ? parseInt(gsmMax) : Infinity;
      return (
        (!selectedRegion || fabric.region === selectedRegion) &&
        (!selectedMaterial || fabric.material === selectedMaterial) &&
        gsm >= minGsm && gsm <= maxGsm
      );
    });
  }, [selectedRegion, selectedMaterial, gsmMin, gsmMax]);

  const handleFilterChange = ({ key, value }: { key: string; value: string }) => {
    if (key === 'region') setSelectedRegion(value);
    if (key === 'material') setSelectedMaterial(value);
    if (key === 'gsmMin') setGsmMin(value);
    if (key === 'gsmMax') setGsmMax(value);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <div className="space-y-8">
          <SwatchBox count={items.length} />
          <SidebarFilter
            fabrics={fabrics}
            selectedRegion={selectedRegion}
            selectedMaterial={selectedMaterial}
            gsmMin={gsmMin}
            gsmMax={gsmMax}
            onChange={handleFilterChange}
          />
        </div>
        <div className="space-y-8">
          <div className="rounded-xl border border-white/70 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Fabric Library</p>
                <h1 className="mt-3 text-3xl font-semibold text-ink">Curated Textile Stories</h1>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-600">
                Filters update instantly so the archive remains focused, editorial, and ready for studio review.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((fabric) => (
              <FabricCard key={fabric.id} fabric={fabric} onAddToSwatch={() => addFabric(fabric)} />
            ))}
          </div>
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-slate-200 bg-white/90 p-8 text-center text-slate-700 shadow-soft">
              No fabrics match your selection. Try resetting the filters or broadening the search.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
