import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';

export const metadata = {
  title: "Career Guides & EdTech Insights | InternAdda Blog",
  description: "Expert advice on landing internships, mastering new skills, and navigating the professional world.",
};

export default function BlogListingPage() {
  const posts = [
    {
      slug: "land-first-tech-internship",
      title: "How to Land Your First Tech Internship in 2026",
      excerpt: "Step-by-step guide to building a portfolio and acing technical interviews.",
      author: "Lucky Tiwari",
      date: "Feb 10, 2026",
      readTime: "5 min read"
    },
    {
      slug: "top-skills-data-science",
      title: "Top 5 Skills for Data Science Success",
      excerpt: "The most in-demand libraries and tools you need to master this year.",
      author: "InternAdda Team",
      date: "Feb 05, 2026",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">InternAdda <span className="text-indigo-600">Insights</span></h1>
          <p className="text-lg text-slate-500 font-medium">Your ultimate guide to professional growth and career excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm mb-8 line-clamp-3 font-medium">{post.excerpt}</p>
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <Link href={`/blog/${post.slug}`} className="text-sm font-black text-indigo-600 flex items-center gap-2 group">
                    Read Full Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
