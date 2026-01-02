
'use client';

import { motion } from 'framer-motion';

const milestones = [
    {
        title: 'Proof of Concept (TRL 3)',
        description: 'Successful demonstration of the "Catcheater" circuit in lab-scale E. coli cultures. Validation of cheater detection mechanism.',
        status: 'completed'
    },
    {
        title: 'Prototype Validation (TRL 4)',
        description: 'Optimization of genetic circuit stability. achieving >95% plasmid retention in high-stress mock fermentation environments.',
        status: 'current'
    },
    {
        title: 'Pilot Studies (TRL 6)',
        description: 'Collaboration with industrial partners to test "Catcheater" strains in 50L+ bioreactors. Real-world yield comparison.',
        status: 'upcoming'
    },
    {
        title: 'Commercial Launch',
        description: 'Release of the "Catcheater" Engineering Kit and licensing model for CDMOs and pharmaceutical manufacturers.',
        status: 'upcoming'
    }
];

export default function Roadmap() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
                        The Plan
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                        Road to <span className="text-primary">Resilience</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We are rapidly advancing from lab-bench verification to industrial integration.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {milestones.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`relative flex items-center md:justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Icon / Marker */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-slate-50 shadow-sm z-10 flex items-center justify-center">
                                        <div className={`w-4 h-4 rounded-full ${item.status === 'completed' ? 'bg-emerald-500' :
                                            item.status === 'current' ? 'bg-blue-600 animate-pulse' :
                                                'bg-slate-300'
                                            }`} />
                                    </div>

                                    {/* Content Card (Left or Right) */}
                                    <div className={`ml-20 md:ml-0 w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className={`p-6 rounded-2xl border ${item.status === 'current'
                                            ? 'bg-white border-blue-200 shadow-lg shadow-blue-500/10'
                                            : 'bg-white/50 border-slate-200 hover:bg-white hover:shadow-md transition-all'
                                            }`}>
                                            <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty spacer for the other side on desktop */}
                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
