'use client';

import { motion } from 'framer-motion';

export default function GrowthCrashChart() {
    return (
        <div className="relative w-full h-full bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex flex-col p-6">
            <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Production Yield</h4>
                <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Standard
                    </span>
                    <span className="flex items-center gap-1.5 text-white">
                        <span className="w-2 h-2 rounded-full bg-indigo-500"></span> Catcheater
                    </span>
                </div>
            </div>

            <div className="relative flex-1 w-full">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-px bg-slate-500"></div>
                    ))}
                </div>

                {/* Standard Line (Crash) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="crashGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,20 C100,20 150,20 200,150 C250,280 300,300 400,300"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M0,20 C100,20 150,20 200,150 C250,280 300,300 400,300 L400,400 L0,400 Z"
                        fill="url(#crashGradient)"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                </svg>

                {/* Catcheater Line (Stable) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="stableGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M0,20 C150,15 300,10 400,5"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 1, ease: "linear" }}
                    />
                    <motion.path
                        d="M0,20 C150,15 300,10 400,5 L400,400 L0,400 Z"
                        fill="url(#stableGradient)"
                        stroke="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 1.5 }}
                    />
                </svg>

                {/* Labels */}
                <div className="absolute top-[50%] left-[50%] -translate-y-full translate-x-4 bg-red-950/50 border border-red-500/30 text-red-200 text-xs px-2 py-1 rounded backdrop-blur-sm">
                    Production Crash
                </div>
            </div>

            <div className="flex justify-between text-xs text-slate-600 font-mono mt-4">
                <span>Start (Day 0)</span>
                <span>Gen 50</span>
                <span>Gen 100</span>
            </div>
        </div>
    );
}
