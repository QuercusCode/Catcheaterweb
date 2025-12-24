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
                                <h4 className="font-bold text-xs uppercase tracking-wider text-muted mb-4">Overview</h4>
                                <ul className="space-y-2">
                                    <li><a href="#concept" className="block text-sm font-medium text-primary bg-primary/5 px-3 py-2 rounded-lg">System Concept</a></li>
                                    <li><a href="#benefits" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Key Benefits</a></li>
                                    <li><a href="#workflow" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Workflow Integration</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-wider text-muted mb-4">Resources</h4>
                                <ul className="space-y-2">
                                    <li><a href="#faq" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">FAQ</a></li>
                                    <li><a href="#contact" className="block text-sm text-muted-foreground hover:text-foreground px-3 py-1">Contact Science Team</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-12">

                        {/* Section: Concept */}
                        <section id="concept" className="space-y-6">
                            <h1 className="text-4xl font-display font-bold text-foreground">CatchEater™ System</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                CatchEater is a proprietary biological quality control circuit. It serves as an embedded "immune system" for your bioreactors, autonomously identifying and neutralizing non-productive mutant cells ("cheaters") that compromise yield stability.
                            </p>

                            <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
                                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                    <AlertTriangle size={18} className="text-amber-500" /> Confidential Technology
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Detailed genetic sequences, promoter architectures, and specific mechanism of action data are proprietary and available only under NDA. The documentation below provides a functional overview of the system's capabilities.
                                </p>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* Section: Benefits */}
                        <section id="benefits" className="space-y-8">
                            <h2 className="text-2xl font-bold text-foreground">Why It Matters</h2>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                                        <Book size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Extended Production Runs</h3>
                                        <p className="text-sm text-muted-foreground">
                                            By constantly purging low-performing variants, CatchEater extends the productive phase of fermentation, allowing for longer continuous runs without genetic drift.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                        <Search size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Autonomous Regulation</h3>
                                        <p className="text-sm text-muted-foreground">
                                            No external inducers or manual intervention required. The sensor network is constitutively active and responds dynamically to intracellular stress signals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* Section: Workflow */}
                        <section id="workflow" className="space-y-6">
                            <h2 className="text-2xl font-bold text-foreground">Simplified Workflow</h2>
                            <p className="text-muted-foreground">The system integrates into standard industrial pipelines with zero disruption.</p>

                            <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-8 py-2">
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-4 border-slate-300"></div>
                                    <h3 className="font-bold text-foreground">1. Design</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Select your chassis and target protein. We engineer the specific "Snitch" sensor tuned to your product's metabolic burden.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-4 border-primary"></div>
                                    <h3 className="font-bold text-foreground">2. Transform</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Standard transformation protocols apply. The system is delivered on a high-stability backbone compatible with common industrial strains.</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-4 border-slate-300"></div>
                                    <h3 className="font-bold text-foreground">3. Scale</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Run your fermentation as usual. The CatchEater circuit runs in the background, ensuring population homogeneity.</p>
                                </div>
                            </div>
                        </section>

                        <hr className="border-border" />

                        {/* Section: Troubleshooting / FAQ */}
                        <section id="faq" className="space-y-6">
                            <h2 className="text-2xl font-bold text-foreground">Common Questions</h2>
                            <div className="space-y-4">
                                <div className="bg-surface border border-border rounded-xl p-6">
                                    <h3 className="font-bold text-foreground mb-2">Is it compatible with my strain?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        We currently support major E. coli production strains (B and K-12 derivatives). Contact us for yeast and mammalian cell inquiries.
                                    </p>
                                </div>
                                <div className="bg-surface border border-border rounded-xl p-6">
                                    <h3 className="font-bold text-foreground mb-2">What happens to the lysed cells?</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Cheater cells are lysed and their biomass is recycled by the productive population, effectively converting burden capability into yield.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT: ON THIS PAGE (Floating) */}
                    <div className="hidden lg:block col-span-1 pl-6">
                        <div className="sticky top-24 border-l border-border pl-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Contents</h5>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#concept" className="text-foreground font-medium">Concept</a></li>
                                <li><a href="#benefits" className="text-muted-foreground hover:text-foreground">Benefits</a></li>
                                <li><a href="#workflow" className="text-muted-foreground hover:text-foreground">Workflow</a></li>
                                <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
}
