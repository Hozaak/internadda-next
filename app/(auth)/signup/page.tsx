"use client";
import React from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Create Account</h1>
        <p className="text-slate-500 font-medium mb-8">Join the InternAdda ecosystem today.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none" />
          <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none" />
          <input type="password" placeholder="Password" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none" />
          <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black">Sign Up</button>
        </form>
        <p className="text-center mt-6 text-sm font-bold text-slate-500">
          Already have an account? <Link href="/login" className="text-indigo-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
