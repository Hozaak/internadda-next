"use client";

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { CATEGORY_QUESTIONS } from '@/constants';
import { ArrowLeft, CheckCircle2, XCircle, Award } from 'lucide-react';

// Define the interface for Next.js 15 dynamic params
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PracticeTestPage({ params }: PageProps) {
  // Next.js 15 fix: unwrap the params promise using React.use()
  const { id } = use(params);
  const router = useRouter();
  
  // Format the ID back to the constant key (e.g., 'python' -> 'Python')
  const categoryKey = Object.keys(CATEGORY_QUESTIONS).find(
    key => key.toLowerCase().replace(' ', '-') === id
  ) || "Web Development";

  const questions = CATEGORY_QUESTIONS[categoryKey];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (optionIdx: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(optionIdx);
    if (optionIdx === questions[currentIdx].correctAnswer) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1200);
  };

  if (showResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="bg-white rounded-[2.5rem] p-12 max-w-lg w-full text-center border border-slate-200 shadow-sm">
          <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-6">
            <Award size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Practice Complete!</h2>
          <p className="text-slate-500 font-bold mb-8">You scored {score} out of {questions.length}</p>
          <button 
            onClick={() => router.push('/tests')}
            className="w-full py-4 bg-indigo-600 text-white rounded-xl font-black shadow-lg"
          >
            Back to Assessment Center
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => router.back()} className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <ArrowLeft size={16} /> Quit Practice
          </button>
          <div className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-black text-slate-400">
            QUESTION {currentIdx + 1} / {questions.length}
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
          <h3 className="text-2xl font-black text-slate-900 mb-10 leading-snug">
            {currentQuestion.text}
          </h3>

          <div className="grid gap-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                disabled={selectedAnswer !== null}
                onClick={() => handleAnswer(idx)}
                className={`p-6 rounded-2xl text-left font-bold transition-all border-2 flex items-center justify-between ${
                  selectedAnswer === idx 
                    ? idx === currentQuestion.correctAnswer ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-red-500 bg-red-50 text-red-900'
                    : selectedAnswer !== null && idx === currentQuestion.correctAnswer 
                      ? 'border-emerald-500 bg-emerald-50' 
                      : 'border-slate-100 bg-slate-50 text-slate-700 hover:border-indigo-300 hover:bg-white'
                }`}
              >
                <span>{option}</span>
                {selectedAnswer === idx && (
                  idx === currentQuestion.correctAnswer ? <CheckCircle2 size={20} /> : <XCircle size={20} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
