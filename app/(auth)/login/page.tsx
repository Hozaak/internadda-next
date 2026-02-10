"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side: Auth Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 mt-2 font-medium">Continue your professional journey with InternAdda.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 py-3 border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Chrome size={20} className="text-blue-500" /> Continue with Google
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold tracking-widest">Or email</span></div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative mt-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="email" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="password" 
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-4 focus:ring-indigo-500/10 transition-all font-medium"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center text-sm font-bold text-slate-500">
            New to InternAdda? <Link href="/signup" className="text-indigo-600 hover:underline">Create Account</Link>
          </p>
        </div>
      </div>

      {/* Right Side: Branding/Visual */}
      <div className="hidden lg:flex bg-indigo-600 items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 max-w-sm">
          <h2 className="text-4xl font-black mb-6 leading-tight">Join 7,000+ Students Ranking Higher.</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-black">01</div>
              <p className="text-indigo-100 font-medium">Complete assessments designed by industry veterans.</p>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center font-black">02</div>
              <p className="text-indigo-100 font-medium">Unlock verified certificates recognized by 150+ partners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
