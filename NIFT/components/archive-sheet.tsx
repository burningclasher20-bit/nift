import { type Fabric } from '@/types/fabric';
import { SpecRow } from '@/components/spec-row';

interface ArchiveSheetProps {
  fabric: Fabric;
}

export function ArchiveSheet({ fabric }: ArchiveSheetProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Museum Archive</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">{fabric.name}</h2>
            </div>
            <div className="rounded-2xl bg-slate-100 px-4 py-2 text-xs font-mono uppercase tracking-[0.25em] text-slate-600">
              {fabric.id}
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-600">{fabric.description}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ['Region', fabric.region],
            ['Material', fabric.material],
            ['Collection', fabric.collection],
            ['Dye', fabric.dyeType],
            ['GSM', `${fabric.gsm} gsm`],
            ['Thread Count', `${fabric.threadCount}`],
            ['Price/m', fabric.pricePerMeter],
            ['Sustainability', `${fabric.sustainabilityScore}%`]
          ].map(([label, value]) => (
            <SpecRow key={label} label={label} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
