"use client";

import React from 'react';
import Link from 'next/link';
import { Zap, Play, Target, ShieldCheck, Award } from 'lucide-react';
import { CATEGORIES } from '@/constants';

export default function TestsSelectionPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Skill Assessment Center</h1>
          <p className="text-lg text-slate-500 font-medium">
            Validate your expertise. Higher scores unlock exclusive interviews with our partner companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Practice Mode Card */}
          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm hover:border-indigo-300 transition-all group">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
              <Target size={32} />
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Practice Mode</h2>
            <p className="text-slate-500 mb-8 font-medium">Unlimited attempts. Perfect for learning the test format and sharpening your domain knowledge.</p>
            <div className="space-y-4">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-1">Select Domain</label>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.slice(1).map((cat) => (
                  <Link 
                    key={cat}
                    href={`/tests/practice/${cat.toLowerCase().replace(' ', '-')}`}
                    className="py-3 px-4 bg-slate-50 border border-slate-100 rounded-xl text-center text-xs font-bold text-slate-700 hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Professional Test Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full -mr-16 -mt-16 blur-3xl opacity-20"></div>
            <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center text-indigo-400 mb-8">
              <Zap size={32} />
            </div>
            <h2 className="text-2xl font-black mb-4">Professional Assessment</h2>
            <p className="text-slate-400 mb-8 font-medium">One-time hiring test. High scores are directly sent to hiring managers at top startups.</p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm font-medium"><ShieldCheck className="text-emerald-400" size={16} /> Locked Environment</li>
                <li className="flex items-center gap-3 text-sm font-medium"><Award className="text-amber-400" size={16} /> Verified Score Certificate</li>
              </ul>
            </div>
            <Link 
              href="/internships"
              className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 transition-all"
            >
              Start Real Test <Play size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
