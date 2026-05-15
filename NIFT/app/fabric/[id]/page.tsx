import { notFound } from 'next/navigation';
import { SiteNav } from '@/components/site-nav';
import { ArchiveSheet } from '@/components/archive-sheet';
import { DrapeViewer } from '../../../components/drape-viewer';
import { ImageGallery } from '@/components/image-gallery';
import { FabricSwatchActions } from '../../../components/fabric-swatch-actions';
import { LazyImage } from '@/components/lazy-image';
import { fabrics } from '@/lib/data';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return fabrics.map((fabric) => ({ id: fabric.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const fabric = fabrics.find((item) => item.id === params.id);
  if (!fabric) return { title: 'Fabric not found' };

  return {
    title: fabric.name,
    description: fabric.description
  };
}

export default function FabricDetailPage({ params }: PageProps) {
  const fabric = fabrics.find((item) => item.id === params.id);
  if (!fabric) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-canvas text-ink">
      <SiteNav />
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
              <div className="hidden lg:block">
                <ImageGallery images={fabric.images} alt={fabric.name} orientation="vertical" />
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Macro Weave</p>
                  <LazyImage
                    src={fabric.macroImage}
                    alt={`${fabric.name} macro weave`}
                    className="mt-6 h-[420px] w-full rounded-3xl"
                    skeletonClassName="rounded-3xl"
                  />
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-soft backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Artisan Image</p>
                    <LazyImage
                      src={fabric.artisanImage}
                      alt={`${fabric.artisanName} at work`}
                      className="mt-6 h-72 w-full rounded-3xl"
                      skeletonClassName="rounded-3xl"
                    />
                  </div>
                  <DrapeViewer src={fabric.drapeVideo} />
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <ImageGallery images={fabric.images} alt={fabric.name} orientation="horizontal" />
            </div>
          </div>

          <aside className="space-y-8">
            <ArchiveSheet fabric={fabric} />

            <FabricSwatchActions fabric={fabric} />
          </aside>
        </div>
      </section>
    </main>
  );
}
