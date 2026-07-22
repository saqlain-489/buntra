import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { demos, demoBySlug } from '@/lib/demos';

export function generateStaticParams() {
  return demos.filter((d) => d.live).map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = demoBySlug(slug);
  if (!d) return {};
  return {
    title: `${d.name} — ${d.tagline}`,
    description: `${d.name}: ${d.tagline}. A concept build by Buntra Web Studio.`,
  };
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = demoBySlug(slug);
  if (!d || !d.live || !d.load) notFound();
  const { default: Site } = await d.load();
  return <Site />;
}
