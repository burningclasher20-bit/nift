'use client';

import { useMemo } from 'react';
import { type Fabric } from '@/types/fabric';

type FilterOption = {
  label: string;
  value: string;
};

interface FilterSidebarProps {
  fabrics: Fabric[];
  selectedRegion: string;
  selectedMaterial: string;
  selectedCollection: string;
  selectedDye: string;
  onChange: (filter: { key: string; value: string }) => void;
}

function buildOptions(values: string[]) {
  return Array.from(new Set(values)).map((value) => ({ label: value, value }));
}

export function FilterSidebar({ fabrics, selectedRegion, selectedMaterial, selectedCollection, selectedDye, onChange }: FilterSidebarProps) {
  const regionOptions = useMemo(() => buildOptions(fabrics.map((fabric) => fabric.region)), [fabrics]);
  const materialOptions = useMemo(() => buildOptions(fabrics.map((fabric) => fabric.material)), [fabrics]);
  const collectionOptions = useMemo(() => buildOptions(fabrics.map((fabric) => fabric.collection)), [fabrics]);
  const dyeOptions = useMemo(() => buildOptions(fabrics.map((fabric) => fabric.dyeType)), [fabrics]);

  return (
    <aside className="space-y-8 rounded-[36px] border border-white/80 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
      <div>
        <h3 className="text-sm uppercase tracking-[0.35em] text-slate-500">Filters</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">Narrow the archive by region, fiber, collection, or dye methodology.</p>
      </div>

      {[
        { title: 'Collection', value: selectedCollection, options: collectionOptions, key: 'collection' },
        { title: 'Region', value: selectedRegion, options: regionOptions, key: 'region' },
        { title: 'Material', value: selectedMaterial, options: materialOptions, key: 'material' },
        { title: 'Dye', value: selectedDye, options: dyeOptions, key: 'dyeType' }
      ].map((group) => (
        <div key={group.title} className="space-y-3">
          <h4 className="text-xs uppercase tracking-[0.35em] text-slate-500">{group.title}</h4>
          <select
            value={group.value}
            onChange={(event) => onChange({ key: group.key, value: event.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/20"
          >
            <option value="">All {group.title}</option>
            {group.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </aside>
  );
}
