'use client';

import { FileText, Download, ExternalLink } from 'lucide-react';


export default function Trust() {
    return (
        <section id="trust" className="py-24 bg-background relative border-t border-border">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Documentation Preview */}
                    <div className="relative group">
                        {/* Removed Glow Blob */}
                        <div className="relative bg-muted/10 rounded-2xl p-8 border border-border overflow-hidden hover:border-border/80 transition-colors">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                                    <FileText size={32} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-mono text-muted-foreground">
                                    v1.0.4
                                </div>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-white mb-2">
                                Deployment Guide
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                Complete integration protocol for BL21(DE3) strains.
                            </p>

                            <div className="space-y-3">
                                <div className="h-2 w-3/4 bg-muted rounded" />
                                <div className="h-2 w-full bg-muted rounded delay-75" />
                                <div className="h-2 w-5/6 bg-muted rounded delay-150" />
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black font-bold rounded hover:bg-slate-200 transition-colors">
                                    <Download size={16} /> PDF
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border text-foreground rounded hover:bg-muted/50 transition-colors">
                                    <ExternalLink size={16} /> View
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof / Partners */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
                            Trusted by the <br />
                            Bio-Industrial Complex
                        </h2>
                        <p className="text-lg text-muted-foreground mb-12">
                            Our strains are currently eliminating cheaters in 14 universities and 3 major biotech foundries.
                        </p>

                        <div className="grid grid-cols-2 gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
                            {/* Placeholder Logos - Simplified */}
                            <div className="h-12 border border-border rounded-lg flex items-center justify-center text-muted-foreground font-mono font-bold">
                                MIT BIO
                            </div>
                            <div className="h-12 border border-border rounded-lg flex items-center justify-center text-muted-foreground font-mono font-bold">
                                GINKGO
                            </div>
                            <div className="h-12 border border-border rounded-lg flex items-center justify-center text-muted-foreground font-mono font-bold">
                                AMYRIS
                            </div>
                            <div className="h-12 border border-border rounded-lg flex items-center justify-center text-muted-foreground font-mono font-bold">
                                ZYMERGEN
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
