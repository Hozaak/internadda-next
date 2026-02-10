import React from 'react';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';

// Define the shape of params as a Promise for Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  // Await the params before using them
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 font-bold mb-12 hover:text-indigo-600 transition-all">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <span className="text-xs font-black text-indigo-600 uppercase tracking-widest px-3 py-1 bg-indigo-50 rounded-full">Career Advice</span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-8 leading-tight">Post Title for: {slug}</h1>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-bold mb-12 border-b border-slate-100 pb-8">
          <span className="flex items-center gap-2"><User size={16} /> Lucky Tiwari</span>
          <span className="flex items-center gap-2"><Calendar size={16} /> Feb 10, 2026</span>
          <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
        </div>
        <article className="prose prose-lg prose-indigo max-w-none text-slate-600 font-medium">
          <p>This content is dynamically loaded for the slug: {slug}.</p>
        </article>
      </div>
    </div>
  );
}
