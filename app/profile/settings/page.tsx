"use client";
import React from 'react';
import { Settings, Shield, Bell } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-black text-slate-900 mb-8">Account Settings</h1>
        <div className="bg-white rounded-3xl border border-slate-200 divide-y">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Shield className="text-indigo-600" />
              <div>
                <p className="font-bold">Security</p>
                <p className="text-xs text-slate-500 font-medium">Manage your password and sessions</p>
              </div>
            </div>
            <button className="text-sm font-bold text-indigo-600">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}
