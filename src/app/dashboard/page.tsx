'use client';

import { Activity, Zap, Dna, Crosshair, Server, Lock } from 'lucide-react';

export default function DashboardOverview() {
    return (
        <div className="min-h-full bg-slate-950 text-white p-6 rounded-3xl font-sans relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 flex justify-between items-end mb-10 border-b border-white/10 pb-6">
                <div>
                    <h1 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Bio-OS v2.4
                    </h1>
                    <p className="text-slate-400 mt-1 font-mono text-xs tracking-widest uppercase">
                        System Integrity: <span className="text-emerald-400">Secure</span> • Connectivity: <span className="text-emerald-400">Online</span>
                    </p>
                </div>
                <div className="flex gap-4">
                    <StatusBadge label="Network" status="Encrypted" icon={<Lock size={12} />} />
                    <StatusBadge label="Latency" status="12ms" icon={<Zap size={12} />} />
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Visualizer Panel (Large) */}
                <div className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col min-h-[400px]">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                            <Dna size={20} className="text-emerald-400" />
                            Population Dynamics
                        </h3>
                        <div className="flex gap-2">
                            <span className="text-xs font-mono text-slate-400 bg-black/20 px-2 py-1 rounded">t = 48h</span>
                            <span className="text-xs font-mono text-slate-400 bg-black/20 px-2 py-1 rounded">Gen: 104</span>
                        </div>
                    </div>

                    {/* The Cell Grid Visualization */}
                    <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden group">
                        {/* Simulation of cells */}
                        <div className="grid grid-cols-12 gap-2 h-full w-full opacity-80">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`rounded-sm transition-all duration-1000 ${i % 20 === 0 ? 'bg-indigo-500/50 animate-pulse' : // Rare variant
                                            'bg-emerald-500/40 hover:bg-emerald-400' // Standard cell
                                        }`}
                                    style={{
                                        opacity: Math.random() * 0.5 + 0.5,
                                    }}
                                ></div>
                            ))}
                        </div>

                        {/* Overlay Data */}
                        <div className="absolute bottom-4 left-4 font-mono text-xs">
                            <div className="text-emerald-400">Mutant Load: 0.00%</div>
                            <div className="text-indigo-400">Protein Exp: 98.2%</div>
                        </div>
                    </div>
                </div>

                {/* Side Stats Panel */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Key Metric 1 */}
                    <StatCard
                        title="Fermentation Yield"
                        value="4.2g/L"
                        subtitle="Projected: 5.8g/L"
                        pulseColor="bg-emerald-500"
                    />

                    {/* Key Metric 2 */}
                    <StatCard
                        title="ATP Consumption"
                        value="Normal"
                        subtitle="Metabolic Load: Optimized"
                        pulseColor="bg-indigo-500"
                    />

                    {/* Action Panel */}
                    <div className="bg-gradient-to-br from-indigo-900/50 to-indigo-950/50 border border-indigo-500/20 rounded-2xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-300">
                                <Server size={20} />
                            </div>
                            <h3 className="font-bold text-indigo-100">Quick Actions</h3>
                        </div>
                        <div className="space-y-3">
                            <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors text-left flex justify-between items-center group">
                                Initiate Sequencing
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                            <button className="w-full py-2 px-4 bg-white/5 hover:bg-white/10 text-slate-300 rounded-lg text-sm font-medium transition-colors text-left">
                                Download Batch Log
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Components
function StatusBadge({ label, status, icon }: any) {
    return (
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <span className="text-slate-400 text-xs">{icon}</span>
            <div className="flex flex-col leading-none">
                <span className="text-[10px] text-slate-500 uppercase font-bold">{label}</span>
                <span className="text-xs font-mono text-slate-200">{status}</span>
            </div>
        </div>
    );
}

function StatCard({ title, value, subtitle, pulseColor }: any) {
    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div className={`absolute top-0 left-0 w-1 h-full ${pulseColor} opacity-50`}></div>
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</h4>
                <div className={`w-2 h-2 rounded-full ${pulseColor} shadow-[0_0_10px_currentColor] animate-pulse`}></div>
            </div>
            <div className="text-3xl font-display font-bold text-white mb-1 group-hover:scale-105 transition-transform origin-left">
                {value}
            </div>
            <p className="text-slate-500 text-sm">{subtitle}</p>
        </div>
    );
}
