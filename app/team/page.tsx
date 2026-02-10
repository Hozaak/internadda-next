// internadda-next/app/team/page.tsx
import React from 'react';
import { Users, Linkedin, Github } from 'lucide-react';

export const metadata = {
  title: "Meet the Team | InternAdda",
  description: "The innovators and educators behind India's largest internship ecosystem.",
};

export default function TeamPage() {
  const team = [
    { name: "Lucky Tiwari", role: "Founder & CEO", img: "https://iili.io/fmKACQa.md.jpg" },
    // Add other team members here
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4">Our Visionary Team</h1>
        <p className="text-slate-500 mb-16 max-w-2xl mx-auto">Building the future of EdTech, one internship at a time.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <img src={member.img} alt={member.name} className="w-32 h-32 rounded-3xl mx-auto mb-6 object-cover" />
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-indigo-600 font-bold text-sm mb-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
