"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { CATEGORY_QUESTIONS } from '@/constants';

export default function ProfessionalTestPage() {
  const params = useParams();
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-2xl font-black">Professional Assessment</h1>
        <div className="px-6 py-2 bg-red-500 rounded-xl font-black">
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
        </div>
      </div>
      {/* Test Logic Similar to Practice Engine but with strict submission */}
    </div>
  );
}
