import { SiteNav } from '@/components/site-nav';
import { SwatchViewer } from '@/components/swatch-viewer';

export const metadata = {
  title: 'Swatch Kit \u2014 The Thread of the Land',
  description: 'View and manage your curated fabric selections before requesting a physical swatch kit.'
};

export default function SwatchPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SiteNav />
      <section className="bg-canvas pb-12 pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Studio Portfolio</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink">Your Swatch Kit</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              Curate your textile archive with up to 5 fabrics. Once you reach your selection, request a physical swatch kit for your design studio.
            </p>
          </div>
        </div>
      </section>
      <SwatchViewer />
    </main>
  );
}
