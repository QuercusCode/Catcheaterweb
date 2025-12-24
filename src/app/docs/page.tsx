'use client';

import { Book, FileText, AlertTriangle, Search } from 'lucide-react';
import Link from 'next/link';

export default function Documentation() {
    return (
        <div className="min-h-screen bg-background font-sans max-w-7xl mx-auto">
            <div className="px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* LEFT SIDEBAR NAV */}
                    <div className="hidden md:block col-span-1 border-r border-border pr-6">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-wider text-muted mb-4">Getting Started</h4>
                                <ul className="space-y-2">
                                    <li><a href="#intro" className="block text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-lg">Introduction</a></li>
                                    <li><a href="#quickstart" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Quick Start Guide</a></li>
                                    <li><a href="#compatibility" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">System Compatibility</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-wider text-muted mb-4">Protocols</h4>
                                <ul className="space-y-2">
                                    <li><a href="#transfection" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Transfection</a></li>
                                    <li><a href="#induction" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Induction Guidelines</a></li>
                                    <li><a href="#harvest" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Harvesting</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-wider text-muted mb-4">Support</h4>
                                <ul className="space-y-2">
                                    <li><a href="#troubleshooting" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Troubleshooting</a></li>
                                    <li><a href="#safety" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Safety Data (SDS)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-12">

                        {/* Section: Intro */}
                        <section id="intro" className="space-y-4">
                            <h1 className="text-4xl font-display font-bold text-foreground">Introduction to Catcheater</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Catcheater system is a genetic quality control circuit designed to autonomously detect and eliminate non-productive &quot;cheater&quot; cells in bacterial fermentation.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 border border-border rounded-xl bg-surface">
                                    <Book className="text-primary mb-2" size={20} />
                                    <h3 className="font-bold text-foreground">For New Users</h3>
                                    <p className="text-xs text-muted-foreground mt-1">Learn the basics of the dual-sensor architecture.</p>
                                </div>
                                <div className="p-4 border border-border rounded-xl bg-surface">
                                    <FileText className="text-emerald-600 mb-2" size={20} />
                                    <h3 className="font-bold text-foreground">Full Datasheet</h3>
                                    <p className="text-xs text-muted-foreground mt-1">Download technical specifications PDF.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* Section: Quick Start */}
                        <section id="quickstart" className="space-y-6">
                            <h2 className="text-2xl font-bold text-foreground">Quick Start Guide</h2>
                            <p className="text-muted-foreground">Follow these steps to integrate the Catcheater system into your workflow.</p>

                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 bg-surface border border-border rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold border border-slate-200 shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-foreground">Design Your Plasmid</h3>
                                        <p className="text-sm text-muted-foreground mt-1">Use the Dashboard to configure your strain (BL21) and plasmid options.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-surface border border-border rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold border border-slate-200 shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-foreground">Transformation</h3>
                                        <p className="text-sm text-muted-foreground mt-1">Transform the supplied plasmid into competent BL21(DE3) cells using heat shock.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-surface border border-border rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold border border-slate-200 shrink-0">3</div>
                                    <div>
                                        <h3 className="font-bold text-foreground">Induction</h3>
                                        <p className="text-sm text-muted-foreground mt-1">Induce with IPTG at OD600 = 0.6. The sensor system is constitutively active.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* Section: Troubleshooting */}
                        <section id="troubleshooting" className="space-y-6">
                            <h2 className="text-2xl font-bold text-foreground">Troubleshooting</h2>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="text-yellow-600 mt-1" size={20} />
                                    <div>
                                        <h3 className="font-bold text-yellow-900">Low Yield?</h3>
                                        <p className="text-sm text-yellow-800/80 mt-2 leading-relaxed">
                                            If you observe lower total biomass but higher specific yield per cell, this is normal behavior. The Catcheater system eliminates non-productive biomass, so the final OD600 may be lower than a wild-type culture, but the protein concentration should be higher.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT: ON THIS PAGE (Floating) */}
                    <div className="hidden lg:block col-span-1 pl-6">
                        <div className="sticky top-24 border-l border-border pl-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">On this page</h5>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#intro" className="text-foreground font-medium">Introduction</a></li>
                                <li><a href="#quickstart" className="text-muted-foreground hover:text-foreground">Quick Start</a></li>
                                <li><a href="#troubleshooting" className="text-muted-foreground hover:text-foreground">Troubleshooting</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
