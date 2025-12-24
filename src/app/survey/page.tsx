'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Send } from 'lucide-react';
import Link from 'next/link';

export default function Survey() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-border">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-2xl font-bold font-display text-foreground mb-4">Thank You!</h2>
                    <p className="text-muted-foreground mb-8">
                        Your insights are incredibly valuable. We will process your feedback and send the Research Report to your inbox soon.
                    </p>
                    <Link href="/" className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 font-sans py-20">
            <div className="container px-6 mx-auto max-w-3xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100">
                        Market Research
                    </span>
                    <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
                        Bioproduction Stability Survey
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Help us quantify the impact of genetic instability in industrial fermentation.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Section 1 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8">
                        <h2 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">1</span>
                            Facility Profile
                        </h2>

                        <div className="space-y-6">
                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">Which sector best describes your organization?</label>
                                <div className="space-y-2">
                                    {['Academic / University research', 'Early-stage Startup (Pre-Seed/Seed)', 'Growth-stage Biotech (Series A+)', 'Large Pharma / CDMO'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="sector" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">What is your primary production organism?</label>
                                <div className="space-y-2">
                                    {['E. coli (BL21 / B-strains)', 'E. coli (K-12 derivatives)', 'Yeast (S. cerevisiae / P. pastoris)', 'Mammalian (CHO / HEK)', 'Other'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="organism" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">What is your primary target product?</label>
                                <div className="space-y-2">
                                    {['Recombinant Proteins / Enzymes', 'Therapeutics (Antibodies, Cytokines)', 'Plasmid DNA (Gene Therapy, Vaccines)', 'Small Molecules / Metabolites'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="product" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">What represents your current production scale?</label>
                                <div className="space-y-2">
                                    {['Lab Scale (< 5L)', 'Pilot Scale (5L - 500L)', 'Industrial Scale (> 500L)'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="scale" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8">
                        <h2 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">2</span>
                            Stability & Pain Points
                        </h2>

                        <div className="space-y-6">
                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">How often do you experience unexplained yield drops or plasmid instability?</label>
                                <div className="space-y-2">
                                    {['Never (Stable)', 'Rarely (< 10% of runs)', 'Frequently (10-50% of runs)', 'Critical Bottleneck (> 50% of runs)'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="frequency" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">To the best of your knowledge, what is your plasmid retention rate at harvest?</label>
                                <div className="space-y-2">
                                    {['Excellent (> 90%)', 'Moderate (70% - 90%)', 'Poor (< 70% or highly variable)', 'Unknown / We do not measure this'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="retention" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">What is the estimated financial impact of a single failed batch?</label>
                                <div className="space-y-2">
                                    {['< $1,000', '$1,000 - $10,000', '$10,000 - $50,000', '> $50,000'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="impact" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8">
                        <h2 className="text-xl font-bold font-display text-foreground mb-6 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm">3</span>
                            Current Methods & Concept
                        </h2>

                        <div className="space-y-6">
                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">How do you currently manage plasmid loss?</label>
                                <div className="space-y-2">
                                    {['We rely solely on antibiotics (e.g., Amp/Kan)', 'We employ auxotrophic selection markers', 'We over-inoculate to compensate', 'We do not have an effective solution'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="method" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">Hypothetically, would you be willing to engineer "suicide genes" into your strain if it guaranteed &gt;99% purity?</label>
                                <div className="space-y-2">
                                    {['Yes, yield and purity are the priority.', 'Maybe, but safety/compliance is a concern.', 'No, our regulatory constraints forbid it.'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-primary hover:bg-blue-50 cursor-pointer transition-all group">
                                            <input type="radio" name="suicide_gene" className="peer w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                                            <span className="text-slate-600 font-medium group-hover:text-primary">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="bg-indigo-900/5 border border-indigo-100 rounded-2xl shadow-sm p-6 md:p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        <h2 className="text-xl font-bold font-display text-indigo-900 mb-6 flex items-center gap-2 relative z-10">
                            <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">4</span>
                            The Catcheater Solution
                        </h2>

                        <div className="space-y-6 relative z-10">
                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3 leading-relaxed">
                                    "Catcheater" is an autonomous genetic circuit that detects low-producing "cheater" cells and eliminates them from the bioreactor in real-time. Knowing this, how interested are you in testing it?
                                </label>
                                <div className="space-y-2">
                                    {['Not interested (Current methods work)', 'Curious (I would read a whitepaper/case study)', 'Interested (I would buy an Evaluation Kit)', 'Very Interested (We have an active need for this)'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-indigo-100 hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all group">
                                            <input type="radio" name="interest" className="peer w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                            <span className="text-slate-700 font-medium group-hover:text-indigo-700">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">For a system that guarantees a &gt;20% yield increase, which pricing model do you prefer?</label>
                                <div className="space-y-2">
                                    {['One-time Engineering Fee (per strain)', 'Annual Subscription (License per strain)', 'Value Share (Royalty % per batch)'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-indigo-100 hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all group">
                                            <input type="radio" name="pricing" className="peer w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                            <span className="text-slate-700 font-medium group-hover:text-indigo-700">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="block text-sm font-bold text-foreground mb-3">What would be your primary concern about adopting this technology?</label>
                                <div className="space-y-2">
                                    {['Regulatory Compliance', 'Metabolic Burden on the cell', 'Implementation Difficulty', 'Cost'].map((opt) => (
                                        <label key={opt} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-indigo-100 hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all group">
                                            <input type="radio" name="concern" className="peer w-4 h-4 text-indigo-600 border-slate-300 focus:ring-indigo-500" />
                                            <span className="text-slate-700 font-medium group-hover:text-indigo-700">{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email Capture */}
                    <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8">
                        <label className="block text-sm font-bold text-foreground mb-3"> (Optional) Email address for the Research Report:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="scientist@biotech.com"
                            className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-primary text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : (
                            <>
                                Submit Survey <Send size={20} />
                            </>
                        )}
                    </button>

                </form>
            </div>
        </div>
    );
}
