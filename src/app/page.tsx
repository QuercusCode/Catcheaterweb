
'use client';

import { useState } from 'react';
import ResearchKit from '@/components/sections/ResearchKit';
import OrderForm from '@/components/sections/OrderForm';
import SystemInfo from '@/components/sections/SystemInfo';
import Mechanisms from '@/components/sections/Mechanisms';
import ContactSupportModal from '@/components/ContactSupportModal';
import WaitlistModal from '@/components/WaitlistModal';

export default function Home() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <ContactSupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />

      {/* 1. Dashboard Header (Removed - Merged into Navbar) */}

      <div className="w-full max-w-[1920px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* 2. Left Sidebar (Promo & Help) */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-32 space-y-6">

              {/* Promo Banner (Revamped) */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden shadow-xl group cursor-pointer transition-transform hover:scale-[1.02]"
                onClick={() => setIsWaitlistOpen(true)}
              >
                {/* Background with Gradient & Texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 transition-all duration-500 group-hover:scale-105" />

                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-block px-2 py-1 bg-indigo-500/50 border border-indigo-400/30 text-[10px] font-bold rounded text-white backdrop-blur-md uppercase tracking-wider shadow-sm">
                      New Program
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 font-display tracking-tight text-white drop-shadow-md">
                    Early Access
                  </h3>

                  <p className="mb-6 text-indigo-100/90 text-sm leading-relaxed font-medium">
                    Get priority sequencing and <span className="text-purple-300 font-bold decoration-purple-400 underline decoration-2 underline-offset-2">50% off</span> your first evaluation kit.
                  </p>

                  <button className="w-full bg-white text-indigo-900 py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-900/20 hover:bg-indigo-50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    Join Waitlist <span className="text-lg">✨</span>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-12 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
              </div>

              {/* Contact Card (Colorized) */}
              <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 shadow-sm relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-bold mb-2 text-indigo-900 text-sm">Need Help?</h4>
                  <p className="text-xs text-indigo-700/80 mb-3 leading-relaxed">
                    Contact our science team for custom plasmid design support.
                  </p>
                  <button
                    onClick={() => setIsSupportOpen(true)}
                    className="text-indigo-600 text-xs font-bold hover:text-indigo-800 hover:underline transition-colors flex items-center gap-1"
                  >
                    Contact Support &rarr;
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100/50 rounded-full blur-2xl -mr-10 -mt-10" />
              </div>
            </div>
          </div>

          {/* 3. Right Main Feed (Results) */}
          <div className="md:col-span-8 lg:col-span-9 space-y-8">

            {/* Order Form (Legacy Config) - TOP PRIORITY */}
            <OrderForm />

            {/* System Info (Compact) */}
            <SystemInfo />

            {/* Scientific Mechanisms (Scrollytelling) */}
            <div className="rounded-3xl border border-slate-200 shadow-sm bg-slate-50">
              <Mechanisms />
            </div>

            {/* Result List */}
            <ResearchKit />

          </div>

        </div>
      </div>
    </main>
  );
}
