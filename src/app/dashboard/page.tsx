'use client';

import { Activity, Package, AlertCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

'use client';

import { Activity, ShieldCheck, Moon, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardOverview() {
    return (
        <div className="space-y-8 h-full flex flex-col">
            {/* Header with 'Zen' Vibe */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-display font-bold text-slate-800">Peace of Mind Mode</h1>
                    <p className="text-slate-500">System status overview.</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full border border-emerald-100">
                    <Moon size={16} />
                    <span className="text-sm font-bold">Night Watch Active</span>
                </div>
            </div>

            {/* MAIN VISUAL: The 'System Heartbeat' */}
            <div className="flex-1 min-h-[400px] bg-slate-900 rounded-3xl relative overflow-hidden flex items-center justify-center border border-slate-800 shadow-2xl">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-90"></div>

                {/* Center Pulse Animation */}
                <div className="relative z-10 flex flex-col items-center text-center p-8">
                    <div className="relative mb-12">
                        {/* Outer Ripples */}
                        <motion.div
                            className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-emerald-500/10 rounded-full blur-2xl"
                            animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        />

                        {/* Core Shield */}
                        <div className="w-48 h-48 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.4)] relative z-20 border-4 border-emerald-300/20 backdrop-blur-sm">
                            <ShieldCheck size={80} className="text-white drop-shadow-md" />
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                        System Secure
                    </h2>
                    <p className="text-emerald-200/80 text-xl font-light mb-8 max-w-lg mx-auto leading-relaxed">
                        Bioreactors 1-4 are operating at 100% stability.
                        <br />Zero mutations detected.
                    </p>

                    <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 backdrop-blur-md">
                        <Wind className="text-emerald-400 animate-pulse" size={20} />
                        <span className="text-slate-300 font-medium tracking-wide">
                            "You can go home. We are watching the cells."
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer Stats - Minimalist */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-slate-50 text-slate-400 rounded-xl">
                        <Activity size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Genetic Drift</div>
                        <div className="text-2xl font-bold text-slate-800">0.00%</div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Enforcer Status</div>
                        <div className="text-2xl font-bold text-slate-800">Standby</div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <Moon size={24} />
                    </div>
                    <div>
                        <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Est. Sleep Time</div>
                        <div className="text-2xl font-bold text-slate-800">8h 00m</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
