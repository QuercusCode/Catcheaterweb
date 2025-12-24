'use client';

import { AlertOctagon, TrendingUp, Activity, Lock } from 'lucide-react';

export default function Technology() {
    return (
        <section id="technology" className="py-24 bg-background relative border-t border-glass-border">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* The Problem */}
                    <div className="glass rounded-2xl p-8 border border-glass-border">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">The Problem</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Type-2 cheater cells sabotage protein production by creating toxic, misfolded proteins.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-destructive/10 text-destructive mt-1 shadow-[0_0_15px_rgba(255,49,49,0.3)]">
                                    <AlertOctagon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Eliminates cheater populations</h4>
                                    <p className="text-sm text-muted-foreground">Stops non-productive cells from taking over.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">&gt;10x productive cell enrichment</h4>
                                    <p className="text-sm text-muted-foreground">Maximize bioreactor output efficiency.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* How It Works */}
                    <div className="glass rounded-2xl p-8 border border-glass-border">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">How It Works</h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Native stress sensors detect proteotoxic stress and trigger elimination of non-productive cells.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-secondary/10 text-secondary mt-1 shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Dual stress sensors (σ32, σE/Cpx)</h4>
                                    <p className="text-sm text-muted-foreground">Detects both cytosolic and envelope stress.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-white/10 text-white mt-1 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                    <Lock size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Irreversible elimination latch</h4>
                                    <p className="text-sm text-muted-foreground">Permanent removal of low-performing variants.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
