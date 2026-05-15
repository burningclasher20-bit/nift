import { HeroSection } from '@/components/hero-section';
import { FeaturedCollections } from '@/components/featured-collections';
import { SiteNav } from '@/components/site-nav';

export const metadata = {
  title: 'Thread of the Land — Textile Archive',
  description: 'A premium digital archive of Indian textiles, heritage craftsmanship, and curated fabric stories.'
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SiteNav />
      <HeroSection />
      <FeaturedCollections />
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
          <div className="rounded-xl border border-white/70 bg-white/90 p-10 shadow-soft backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Research & Atmosphere</p>
            <h2 className="mt-4 text-4xl font-semibold text-ink">A tactile environment for fashion archive discovery</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              Each page is designed as a quiet studio reference, blending airy editorial spacing with the intimacy of artisan documentation.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-xl border border-white/70 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Studio Tools</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">Swatch Boxes, filters, and archive sheets</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Explore refined interactions designed for textile labs and runway concept curations.
              </p>
            </div>
            <div className="rounded-xl border border-white/70 bg-white/90 p-8 shadow-soft backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Immersive Details</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">Drape video and tactile zoom</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Engage material motion and microscopic weave character in every fabric detail page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
