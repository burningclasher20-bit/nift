'use client';

import { useMemo } from 'react';
import { type Fabric } from '@/types/fabric';

type FilterOption = {
  label: string;
  value: string;
};

interface SidebarFilterProps {
  fabrics: Fabric[];
  selectedRegion: string;
  selectedMaterial: string;
  gsmMin: string;
  gsmMax: string;
  onChange: (filter: { key: string; value: string }) => void;
}

function buildOptions(values: string[]) {
  return Array.from(new Set(values)).map((value) => ({ label: value, value }));
}

export function SidebarFilter({ fabrics, selectedRegion, selectedMaterial, gsmMin, gsmMax, onChange }: SidebarFilterProps) {
  const regionOptions = useMemo(() => buildOptions(fabrics.map((fabric) => fabric.region)), [fabrics]);
  const materialOptions = useMemo(() => buildOptions(fabrics.map((fabric) => fabric.material)), [fabrics]);

  return (
    <aside className="space-y-8 rounded-xl border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
      <div>
        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-500">Filters</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">Narrow the archive by region, material, or GSM range.</p>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-[0.35em] text-slate-500">Region</h4>
        <select
          value={selectedRegion}
          onChange={(event) => onChange({ key: 'region', value: event.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition-all duration-200 focus:border-sage focus:ring-2 focus:ring-sage/20 hover:border-slate-300"
        >
          <option value="">All Regions</option>
          {regionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-[0.35em] text-slate-500">Material</h4>
        <select
          value={selectedMaterial}
          onChange={(event) => onChange({ key: 'material', value: event.target.value })}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition-all duration-200 focus:border-sage focus:ring-2 focus:ring-sage/20 hover:border-slate-300"
        >
          <option value="">All Materials</option>
          {materialOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <h4 className="text-xs uppercase tracking-[0.35em] text-slate-500">GSM Range</h4>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={gsmMin}
            onChange={(event) => onChange({ key: 'gsmMin', value: event.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition-all duration-200 focus:border-sage focus:ring-2 focus:ring-sage/20 hover:border-slate-300"
          />
          <input
            type="number"
            placeholder="Max"
            value={gsmMax}
            onChange={(event) => onChange({ key: 'gsmMax', value: event.target.value })}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition-all duration-200 focus:border-sage focus:ring-2 focus:ring-sage/20 hover:border-slate-300"
          />
        </div>
      </div>
    </aside>
  );
}
