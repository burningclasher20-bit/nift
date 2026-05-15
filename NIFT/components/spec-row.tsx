interface SpecRowProps {
  label: string;
  value: string;
}

export function SpecRow({ label, value }: SpecRowProps) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:bg-white hover:shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 font-medium font-mono">{label}</p>
      <p className="mt-2 font-semibold text-ink text-sm">{value}</p>
    </div>
  );
}
