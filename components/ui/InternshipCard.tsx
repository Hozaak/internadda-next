"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Award, ArrowRight } from 'lucide-react';
import { Internship } from '@/types';

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={internship.image} 
          alt={internship.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-indigo-600 uppercase tracking-wider shadow-sm">
            {internship.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
          {internship.title}
        </h3>
        <p className="text-sm font-semibold text-slate-500 mb-4">{internship.company}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-slate-500">
            <MapPin size={16} className="text-indigo-500" />
            <span className="text-xs font-medium">{internship.location}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Clock size={16} className="text-indigo-500" />
            <span className="text-xs font-medium">{internship.type}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Award size={16} className="text-indigo-500" />
            <span className="text-xs font-medium">{internship.stipend}</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link 
            href={`/internships/${internship.id}`}
            className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            View Details <ArrowRight size={16} />
          </Link>
          <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">
            {internship.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;
