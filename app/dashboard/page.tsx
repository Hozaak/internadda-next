"use client";

import React from 'react';
import Link from 'next/link';
import { 
  LayoutDashboard, FileText, Zap, 
  Clock, ArrowRight, ExternalLink 
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:row items-end justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Student Dashboard</h1>
            <p className="text-slate-500 font-medium">Track your internships and test performances.</p>
          </div>
          <Link href="/internships" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-black text-sm shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
            Browse New Roles
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-black text-slate-900 flex items-center gap-2">
                  <FileText size={20} className="text-indigo-600" /> Active Applications
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { role: "Python Developer", company: "TechFlow", status: "In Review", date: "Feb 10" },
                  { role: "Web Intern", company: "Nexus Digital", status: "Interviewing", date: "Feb 08" }
                ].map((app, i) => (
                  <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div>
                      <h4 className="font-bold text-slate-900">{app.role}</h4>
                      <p className="text-xs text-slate-500 font-medium">{app.company} • Applied on {app.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-indigo-100">
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Tests */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-900 mb-6 flex items-center gap-2">
                <Zap size={20} className="text-amber-500" /> Pending Tasks
              </h3>
              <div className="space-y-4">
                <Link href="/tests" className="block p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-300 transition-all group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black text-indigo-600 uppercase tracking-widest">Aptitude Test</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Complete your baseline assessment</p>
                </Link>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-100">
              <h4 className="font-black text-sm uppercase tracking-widest mb-4">Certification</h4>
              <p className="text-emerald-100 text-sm font-medium mb-6 leading-relaxed">
                You have 1 verified certificate ready for download.
              </p>
              <Link href="/offer-letter" className="flex items-center gap-2 text-sm font-bold bg-white text-emerald-600 px-4 py-2 rounded-xl justify-center">
                View Certificate <ExternalLink size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
