"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  MapPin, Clock, Award, Briefcase, 
  CheckCircle2, ArrowLeft, Zap, ShieldCheck 
} from 'lucide-react';
import { MOCK_INTERNSHIPS } from '@/constants';

export default function InternshipDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  // Find the internship based on the dynamic ID in the URL
  const internship = MOCK_INTERNSHIPS.find(i => i.id === params.id);

  if (!internship) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Internship Not Found</h2>
        <Link href="/internships" className="text-indigo-600 font-bold hover:underline">
          Back to all internships
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* Navigation Header */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Listings
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                <img 
                  src={internship.image} 
                  alt={internship.company} 
                  className="w-24 h-24 rounded-2xl object-cover border border-slate-100"
                />
                <div>
                  <h1 className="text-3xl font-black text-slate-900 mb-2">{internship.title}</h1>
                  <p className="text-lg font-bold text-indigo-600">{internship.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-100 mb-8">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <MapPin size={16} className="text-indigo-500" /> {internship.location}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Type</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Clock size={16} className="text-indigo-500" /> {internship.type}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Stipend</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Award size={16} className="text-indigo-500" /> {internship.stipend}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Category</p>
                  <div className="flex items-center gap-2 text-slate-700 font-bold">
                    <Briefcase size={16} className="text-indigo-500" /> {internship.category}
                  </div>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-bold text-slate-900 mb-4">About the Role</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{internship.description}</p>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-xl text-sm font-bold border border-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Program Benefits Section */}
            <div className="bg-indigo-900 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-black mb-6">InternAdda Benefits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: "AI-Powered Matching", desc: "Our engine matches your test scores directly with hiring managers." },
                  { icon: ShieldCheck, title: "Verified Certificate", desc: "MSME recognized certification upon successful completion." },
                  { icon: CheckCircle2, title: "Direct Placement", desc: "High performers get direct interview calls from partner firms." },
                  { icon: Award, title: "Industry Mentorship", desc: "Weekly sessions with industry experts in your domain." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><item.icon size={20} className="text-indigo-400" /></div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className="text-indigo-200 text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Action Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-24">
              <h4 className="text-lg font-black text-slate-900 mb-2">Ready to start?</h4>
              <p className="text-sm text-slate-500 mb-6">Complete the assessment to unlock this opportunity.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div className="bg-emerald-500 p-1 rounded-full text-white">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-xs font-bold text-emerald-700">Application Open</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-medium">Processing Fee</span>
                  <span className="font-black text-slate-900">₹199</span>
                </div>
              </div>

              <Link 
                href={`/apply/${internship.id}`}
                className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 text-white rounded-2xl font-black hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
              >
                Apply Now <ArrowRight size={18} />
              </Link>
              
              <p className="mt-6 text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                By applying, you agree to our <br/> Terms & Selection Process
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
