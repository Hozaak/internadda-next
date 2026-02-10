import React from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, Users, Building2, ArrowRight, 
  Award, Briefcase, Zap, Clock, FileCheck, 
  Globe, LayoutGrid, BookOpen
} from 'lucide-react';
import InternshipCard from '@/components/ui/InternshipCard';
import { MOCK_INTERNSHIPS, CATEGORIES } from '@/constants';

// Metadata for this specific page to boost SEO
export const metadata = {
  title: "InternAdda | India's Largest Dedicated Internship Ecosystem",
  description: "Join 7,000+ students. Access verified corporate internships with transparent stipends and direct interviews.",
};

export default function Home() {
  // Show only top 3 internships on home page as per your design
  const displayedInternships = MOCK_INTERNSHIPS.slice(0, 3);

  const students = [
    { name: "Ravi", img: "https://iili.io/fmKACQa.md.jpg" },
    { name: "Priya", img: "https://iili.io/fmKMLV2.md.jpg" },
    { name: "Amit", img: "https://iili.io/fmKMQPS.jpg" },
    { name: "Neha", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs mb-6 uppercase tracking-wider">
                <CheckCircle2 size={14} /> 
                MSME Registered: UDYAM-MH-08-XXXXXXXX
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                India's Largest Dedicated <br/>
                <span className="text-indigo-600">Internship Ecosystem.</span>
              </h1>
              
              <p className="text-base text-slate-500 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
                Skip the generic job boards. Access a streamlined pipeline of verified corporate partners. 
                Focus on skill-based hiring with transparent stipends.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/internships" className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-bold text-sm hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-sm">
                  Find Internships <ArrowRight size={16} />
                </Link>
                <Link href="/tests" className="px-6 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-bold text-sm hover:bg-slate-50 transition-all">
                  Practice Mode
                </Link>
              </div>

              <div className="mt-8 flex flex-col items-center lg:items-start gap-4 text-slate-400">
                <div className="flex -space-x-2">
                  {students.map((s, i) => (
                    <img 
                      key={i} 
                      src={s.img} 
                      alt={s.name}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest">7,000+ Students Placed</p>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xl aspect-[4/3] flex items-center justify-center">
                <img 
                  src="https://iili.io/fbukYXt.png" 
                  alt="InternAdda Collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY METRICS */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Roles', value: '300+', icon: Briefcase },
              { label: 'Corporate Partners', value: '150+', icon: Building2 },
              { label: 'Avg. Stipend', value: '₹6,500', icon: Award },
              { label: 'Hiring Time', value: '48 Hours', icon: Clock },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="p-2 bg-slate-50 rounded-lg text-indigo-600 border border-slate-100">
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. INTERNSHIP MARKETPLACE */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Featured Opportunities</h2>
          <p className="text-sm text-slate-500">Top internships this week • Verified & Active</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedInternships.map(internship => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link 
            href="/internships" 
            className="group flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-lg font-bold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
          >
            <LayoutGrid size={16} className="text-indigo-600" />
            View All Internships ({MOCK_INTERNSHIPS.length})
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 4. NEW: BLOG SECTION (ULTRA PRO SEO) */}
      <section className="py-16 bg-indigo-50/50 border-y border-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Career Guide & Insights</h2>
          <p className="text-slate-500 mb-10">Master the art of getting hired with our latest articles.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "How to Land Your First Tech Internship", cat: "Career Advice" },
              { title: "Top 5 Skills for Data Science in 2026", cat: "Learning" },
              { title: "Why Stipends Matter for Your Professional Growth", cat: "Insights" }
            ].map((post, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 text-left hover:shadow-lg transition-all">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{post.cat}</span>
                <h4 className="font-bold text-lg text-slate-900 mt-2 mb-4">{post.title}</h4>
                <Link href="/blog" className="text-sm font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VERIFICATION WORKFLOW */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">How we ensure quality.</h2>
              <div className="space-y-6">
                {[
                  { title: "Manual Employer Audit", desc: "Every company is verified through MCA/MSME records before listing.", icon: FileCheck },
                  { title: "Direct Interview Routing", desc: "Our platform routes your assessment directly to the decision maker.", icon: Zap },
                  { title: "Certificate Ledger", desc: "Blockchain-ready certificates recognized by 150+ companies.", icon: Award }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 text-indigo-400"><step.icon size={20} /></div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">{step.title}</h4>
                      <p className="text-slate-400 text-sm mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
              <div className="flex items-center gap-2 mb-6">
                <Globe size={16} className="text-indigo-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Global Recognition</span>
              </div>
              <p className="text-xl font-medium text-slate-300 leading-relaxed italic">
                "Internadda has built a transparent ecosystem that significantly reduces hiring friction for early-stage startups."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
