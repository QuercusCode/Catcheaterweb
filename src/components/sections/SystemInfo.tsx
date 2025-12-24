'use client';

import { Activity, Zap } from 'lucide-react';

export default function SystemInfo() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* The Problem */}
                    <div className="card bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all group">
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-50 text-orange-600 mb-3 border border-orange-100 group-hover:bg-orange-100 transition-colors">
                                <Activity size={20} />
                            </span>
                            <h3 className="text-lg font-bold font-display text-foreground mb-2">The Problem</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Type-2 cheater cells sabotage protein production by creating toxic, misfolded proteins.
                            </p>
                        </div>

                        <ul className="space-y-3 border-t border-border/50 pt-4">
                            <li className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                Eliminates cheater populations
                            </li>
                            <li className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                                &gt;10x productive cell enrichment
                            </li>
                        </ul>
                    </div>

                    {/* How It Works (The Solution) */}
                    <div className="card bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all group">
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 mb-3 border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
                                <Zap size={20} />
                            </span>
                            <h3 className="text-lg font-bold font-display text-foreground mb-2">How It Works</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Native stress sensors detect proteotoxic stress and trigger elimination of non-productive cells.
                            </p>
                        </div>

                        <ul className="space-y-3 border-t border-border/50 pt-4">
                            <li className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                Dual stress sensors (σ32, σE/Cpx)
                            </li>
                            <li className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                                Irreversible elimination latch
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 3. Empty Column */}
                <div className="hidden lg:block lg:col-span-1" />
            </div>
        </section>
    );
}
