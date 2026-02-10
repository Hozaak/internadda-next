import React from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blog" className="flex items-center gap-2 text-slate-500 font-bold mb-12">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        <h1 className="text-5xl font-black text-slate-900 mb-6">How to Land Your First Tech Internship</h1>
        <div className="flex gap-6 text-sm text-slate-400 font-bold mb-12 border-b pb-8">
          <span className="flex items-center gap-2"><Calendar size={16} /> Feb 10, 2026</span>
          <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
        </div>
        <div className="prose prose-lg prose-indigo">
          {/* Article Content */}
        </div>
      </div>
    </div>
  );
}
