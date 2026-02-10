"use client";

import React from 'react';
import { 
  User as UserIcon, Mail, Briefcase, 
  MapPin, Calendar, ShieldCheck, Award 
} from 'lucide-react';
import { User } from '@/types';

export default function ProfilePage() {
  // Logic to fetch user from Supabase or Global State goes here
  const user: User = {
    id: '1',
    name: 'Lucky Tiwari',
    email: 'lucky@internadda.com',
    domain: 'Full Stack Developer',
    avatar: ''
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header Card */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
            
            <div className="relative z-10 flex flex-col md:row items-center gap-8">
              <div className="w-32 h-32 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-100 border-4 border-white">
                <UserIcon size={64} />
              </div>
              
              <div className="text-center md:text-left flex-grow">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">{user.name}</h1>
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-100 flex items-center gap-1">
                    <ShieldCheck size={12} /> Verified Student
                  </span>
                </div>
                <p className="text-lg font-bold text-indigo-600 mb-6">{user.domain || 'Aspiring Professional'}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <Mail size={18} className="text-slate-400" /> {user.email}
                  </div>
                  <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <Briefcase size={18} className="text-slate-400" /> 3 Applications Active
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6">Badges & Achievements</h3>
                <div className="flex gap-4">
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center w-24">
                    <Award size={32} className="text-amber-500 mx-auto mb-2" />
                    <span className="text-[10px] font-black text-amber-700 uppercase">Top 1%</span>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-center w-24">
                    <ShieldCheck size={32} className="text-indigo-500 mx-auto mb-2" />
                    <span className="text-[10px] font-black text-indigo-700 uppercase">Verified</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-indigo-900 rounded-3xl p-8 text-white">
                <h4 className="font-black text-sm uppercase tracking-widest mb-4">Quick Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-300 text-xs font-bold">Avg. Test Score</span>
                    <span className="font-black">88%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-300 text-xs font-bold">Courses Done</span>
                    <span className="font-black">4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
