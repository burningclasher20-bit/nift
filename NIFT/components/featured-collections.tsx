'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LazyImage } from '@/components/lazy-image';

interface FeaturedCollectionProps {
  title: string;
  description: string;
  image: string;
  link: string;
  accent: string;
}

function FeaturedCollection({ title, description, image, link, accent }: FeaturedCollectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl bg-white/90 shadow-soft backdrop-blur-sm transition-all duration-500 hover:shadow-xl"
    >
      <Link href={link} className="block" aria-label={`Explore ${title}`}>
        <div className="relative h-80 overflow-hidden">
          <LazyImage
            src={image}
            alt={title}
            className="h-full w-full"
            skeletonClassName="rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
              {accent}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-ink mb-3">{title}</h3>
          <p className="text-slate-600 leading-relaxed">{description}</p>
          <div className="mt-6 flex items-center text-sm font-medium text-terracotta group-hover:text-terracotta/80">
            Explore Collection
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedCollections() {
  const collections = [
    {
      title: "Kashmiri Series",
      description: "Silent mountains, soft wool, and walnut-dyed sophistication. Textiles built for deep editorial storytelling with traditional Kashmiri craftsmanship.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80",
      link: "/library?collection=Kashmiri%20Series",
      accent: "Heritage Craft"
    },
    {
      title: "Banaras Series",
      description: "Brocade and satin textiles with museum-quality detail, rooted in sacred looms and palace palettes of Varanasi's rich weaving tradition.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      link: "/library?collection=Banaras%20Series",
      accent: "Ceremonial Weave"
    },
    {
      title: "Eco Series",
      description: "Modern material research and slow luxury in plant-based fibers and mindful finishing. Sustainable textiles for conscious design.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      link: "/library?collection=Eco%20Series",
      accent: "Sustainable Future"
    }
  ];

  return (
    <section id="collections" className="bg-canvas py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Featured Collections</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink">Curated Textile Stories</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
            Discover our carefully selected collections, each representing the finest traditions of Indian textile craftsmanship.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeaturedCollection {...collection} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}