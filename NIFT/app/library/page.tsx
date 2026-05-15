import { LibraryShell } from '@/components/library-shell';
import { SiteNav } from '@/components/site-nav';

export const metadata = {
  title: 'Fabric Library — The Thread of the Land',
  description: 'Discover curated textiles, refined filters, and a premium archive experience for fashion research.'
};

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SiteNav />
      <section className="bg-canvas pb-12 pt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-xl border border-white/70 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Fabric Library</p>
            <h1 className="mt-4 text-4xl font-semibold text-ink">Search the Textile Archive</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
              Filter curated fabrics across region, material, collection, and dye methods while maintaining an editorial studio experience.
            </p>
          </div>
        </div>
      </section>
      <LibraryShell />
    </main>
  );
}
