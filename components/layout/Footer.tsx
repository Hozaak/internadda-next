import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                INTERN<span className="text-indigo-600">ADDA</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-6">
              India's premier dedicated internship ecosystem. We bridge the gap between 
              academic learning and professional excellence through verified opportunities.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/internships" className="text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">Internships</Link></li>
              <li><Link href="/success-stories" className="text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">Success Stories</Link></li>
              <li><Link href="/hiring-process" className="text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">Hiring Process</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">About Us</Link></li>
              <li><Link href="/team" className="text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">Our Team</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-indigo-600 text-sm font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-bold">© 2026 InternAdda. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-400 hover:text-slate-600 text-xs font-bold">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-slate-600 text-xs font-bold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
