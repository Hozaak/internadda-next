"use client";

import React, { useState, useEffect } from 'react';
import InternshipCard from '@/components/ui/InternshipCard';
import { MOCK_INTERNSHIPS, CATEGORIES } from '@/constants';
import { Search, RotateCcw, ShieldCheck, Award, Zap } from 'lucide-react';

export default function InternshipsPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Internships');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredInternships, setFilteredInternships] = useState(MOCK_INTERNSHIPS);

  const types = ['All', 'Remote', 'On-site', 'Hybrid'];

  useEffect(() => {
    let results = MOCK_INTERNSHIPS;

    if (search) {
      results = results.filter(internship =>
        internship.title.toLowerCase().includes(search.toLowerCase()) ||
        internship.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All Internships') {
      results = results.filter(internship => internship.category === selectedCategory);
    }

    if (selectedType !== 'All') {
      results = results.filter(internship => internship.type === selectedType);
    }

    setFilteredInternships(results);
  }, [search, selectedCategory, selectedType]);

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <div className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
            Verified <span className="text-indigo-500">Professional</span> Internships
          </h1>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Join 7,000+ students in our ecosystem. Get certified by MSME recognized partners.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search by role or skills (e.g. React, Python)..."
              className="w-full pl-14 pr-6 py-5 rounded-2xl text-slate-900 bg-white shadow-2xl outline-none font-bold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div className="w-full">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-4">Select Domain</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="flex-1 lg:w-48">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-2">Work Type</label>
                <select 
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 text-sm outline-none"
                >
                  {types.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <button
                onClick={() => { setSearch(''); setSelectedCategory('All Internships'); setSelectedType('All'); }}
                className="mt-6 p-3 bg-slate-100 text-slate-500 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map(internship => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </div>
  );
}
