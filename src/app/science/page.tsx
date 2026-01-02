import Link from "next/link";
import { ArrowRight, Microscope, AlertTriangle, Activity } from "lucide-react";
import MechanismViewer from "@/components/sections/MechanismViewer";
import ComparisonTable from "@/components/sections/ComparisonTable";

export default function SciencePage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex flex-col items-center justify-center p-6 pt-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-black to-black z-0 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up">
                        <Microscope size={14} /> Technology Deep Dive
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 animate-fade-in-up delay-100">
                        Biology’s First <br />
                        <span className="text-indigo-500">Autonomous Quality Control</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200">
                        Standard fermentation relies on hope. We rely on logic.
                        <span className="text-white font-medium"> Catcheater</span> transforms your production strain into a self-policing entity that eliminates non-producers in real-time.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <Link href="/survey" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center gap-2 group">
                            Assess Your Strain <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="#mechanism" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all border border-slate-700 flex items-center gap-2">
                            How It Works
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM (The Cheater Cell) */}
            <section className="py-24 px-6 relative border-t border-slate-900 bg-slate-950/50">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-3">The Invisible Enemy</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">The "Cheater" Cell</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            In any high-yield fermentation, producing protein is metabolically expensive. A random mutation that breaks the production gene gives that cell a massive growth advantage.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            This mutant is a <strong className="text-white">"Cheater."</strong> It stops producing your product and uses all its energy to reproduce. Within a few generations, cheaters overrun the culture, and your yield crashes.
                        </p>

                        <div className="p-6 bg-red-950/10 border border-red-900/30 rounded-2xl flex items-start gap-4">
                            <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-red-200 mb-1">Standard Antibiotics Fail Here</h4>
                                <p className="text-sm text-red-300/80">
                                    Antibiotics only select for the <em>plasmid</em>, not the <em>protein</em>. If the plasmid breaks but stays in the cell, antibiotics do nothing.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Placeholder for Cheater Graph/Animation */}
                    <div className="relative aspect-square bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50" />
                        {/* Simplified Representation */}
                        <div className="text-center p-8">
                            <div className="inline-block p-4 bg-red-500/10 rounded-full mb-4 group-hover:bg-red-500/20 transition-colors">
                                <Activity size={48} className="text-red-500" />
                            </div>
                            <p className="text-slate-500 font-mono text-sm">Visual: Growth Curve Crash</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE SOLUTION (Translation-Coupled Certificate) */}
            <section id="mechanism" className="py-32 px-6 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
                    <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">The Catcheater Logic</h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Translation-Coupled <br /> Certificate™</h3>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We don't just trust the cell. We make it prove it's working.
                        Our genetic circuit ties <strong>survival</strong> directly to <strong>production</strong>.
                    </p>
                </div>

                {/* MECHANISM VIEWER */}
                <div className="max-w-6xl mx-auto relative z-10">
                    <MechanismViewer />
                </div>
            </section>

            {/* 4. DATA COMPARISON (Placeholder for Table Component) */}
            <section className="py-24 px-6 bg-slate-950 relative border-t border-indigo-900/20">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Standards Fail</h2>
                        <p className="text-slate-400">Comparing modern stabilization methods.</p>
                    </div>

                    <ComparisonTable />
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-indigo-950/30 to-transparent pointer-events-none" />

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 max-w-2xl relative z-10">
                    Stop Feeding The Cheaters.
                </h2>
                <Link href="/survey" className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl relative z-10 flex items-center gap-2">
                    Get Your Stability Report <ArrowRight size={20} />
                </Link>
                <p className="mt-6 text-slate-500 text-sm relative z-10">
                    Takes 2 minutes · No credit card required
                </p>
            </section>
        </div>
    );
}
