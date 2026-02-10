// internadda-next/app/about/page.tsx
import React from 'react';
import { ShieldCheck, Award, Users } from 'lucide-react';

export const metadata = {
  title: "About InternAdda | Our Mission & Impact",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Our Story</span>
        <h1 className="text-5xl font-black text-slate-900 mt-4 mb-8">Empowering 7,000+ students to learn, intern, and earn.</h1>
        <div className="prose prose-lg text-slate-600">
          <p>InternAdda is an MSME Registered platform dedicated to bridging the gap between academic theory and corporate reality.</p>
          {/* Add your mission details here */}
        </div>
      </div>
    </div>
  );
}
