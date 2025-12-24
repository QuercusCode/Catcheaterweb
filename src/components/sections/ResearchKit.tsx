'use client';

import { Zap, Shield, RefreshCw, AlertTriangle, ArrowRight, CheckCircle2, Star, Plus } from 'lucide-react';

const coreKits = [
    {
        id: 'snitch',
        name: 'The Snitch',
        role: 'Core Sensor',
        icon: <Zap className="text-white" size={24} />,
        iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
        desc: 'Instant proteotoxicity detection with fluorescent output. The gold standard for quality control.',
        features: ['Real-time Monitoring', 'High Sensitivity', 'Zero-Burden'],
        price: 'Included',
        popular: true,
        config: { strain: 'bl21de3-catcheater', promoter: 't7' }
    },
    {
        id: 'backbone',
        name: 'Smart Backbone',
        role: 'Optimized Vector',
        icon: <RefreshCw className="text-white" size={24} />,
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        desc: 'Metabolically optimized plasmid backbone for stability. Reduces burden by 40%.',
        features: ['Low Metabolic Load', 'High Copy Number', 'Modular Header'],
        price: 'Included',
        popular: false,
        config: { origin: 'puc', resistance: 'kan' }
    }
];

const modules = [
    {
        id: 'enforcer',
        name: 'The Enforcer',
        role: 'Kill Switch',
        icon: <Shield className="text-white" size={20} />,
        iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
        desc: 'Autonomously eliminates non-productive or mutated cells.',
        features: ['Genetic Stability', 'Cheat-Proof', 'Automatic'],
        price: '+$199',
        popular: false,
        config: { antidote: 'dual' }
    },
    {
        id: 'control',
        name: 'Toxic Control',
        role: 'Validation Module',
        icon: <AlertTriangle className="text-white" size={20} />,
        iconBg: 'bg-gradient-to-br from-slate-600 to-slate-800',
        desc: 'Positive control strain for calibrating sensor response.',
        features: ['Calibration Standard', 'Known Toxicity', 'Essential'],
        price: 'Included',
        popular: false,
        config: { strain: 'bl21de3-basic', customExplanation: 'Requiring Toxic Control Positive Standard' }
    },
];

export default function ResearchKit() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelect = (config: any) => {
        // Dispatch event to OrderForm
        const event = new CustomEvent('catcheater:select-kit', { detail: config });
        window.dispatchEvent(event);

        // Smooth scroll to order form
        const orderSection = document.getElementById('order');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div className="lg:col-span-2 space-y-12">
                    {/* Header */}
                    <div className="flex justify-between items-end border-b border-border pb-6">
                        <div>
                            <h2 className="text-3xl font-display font-bold text-foreground">Available Kits</h2>
                            <p className="text-muted-foreground text-base mt-2">Select high-performance components for your custom strain.</p>
                        </div>
                    </div>

                    {/* 1. Core Systems */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2 mb-4">
                            <Star size={16} className="fill-primary text-primary" /> Core Systems
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {coreKits.map((kit) => (
                                <div
                                    key={kit.id}
                                    className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                                >
                                    {kit.popular && (
                                        <div className="absolute top-0 right-0 z-10">
                                            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm">
                                                MOST POPULAR
                                            </div>
                                        </div>
                                    )}

                                    {/* Top Accent Gradient */}
                                    <div className={`h-1.5 w-full ${kit.iconBg}`} />

                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`w-14 h-14 rounded-xl shadow-lg flex items-center justify-center ${kit.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                                {kit.icon}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{kit.role}</div>
                                                <span className={`inline-block text-xs font-bold px-2 py-1 rounded-md ${kit.price === 'Included' ? 'text-emerald-700 bg-emerald-50 border border-emerald-100' : 'text-slate-700 bg-slate-100'}`}>
                                                    {kit.price}
                                                </span>
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{kit.name}</h4>
                                        <p className="text-sm text-slate-500 mb-6 leading-relaxed min-h-[40px]">{kit.desc}</p>

                                        <div className="space-y-3 mb-8 bg-slate-50 rounded-xl p-4 border border-slate-100">
                                            {kit.features.map((feat, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" /> {feat}
                                                </div>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => handleSelect(kit.config)}
                                            className="w-full py-3 bg-white border-2 border-slate-100 hover:border-primary hover:bg-primary hover:text-white text-slate-700 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20"
                                        >
                                            <Plus size={16} strokeWidth={3} /> Add to Order
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. Add-on Modules */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                            <Shield size={16} /> Add-on Modules
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {modules.map((kit) => (
                                <div key={kit.id} className="relative bg-slate-50/80 rounded-2xl border border-slate-200 p-1 hover:bg-white hover:border-slate-300 transition-all duration-300 group">
                                    <div className="p-5 flex flex-col h-full">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`w-10 h-10 rounded-lg shadow-sm flex items-center justify-center ${kit.iconBg}`}>
                                                {kit.icon}
                                            </div>
                                            <span className={`text-xs font-bold px-2 py-1 rounded border ${kit.price.startsWith('+') ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>
                                                {kit.price.replace('$', '€')}
                                            </span>
                                        </div>

                                        <h4 className="text-base font-bold text-foreground mb-1">{kit.name}</h4>
                                        <p className="text-xs text-slate-500 mb-4 leading-relaxed">{kit.desc}</p>

                                        <div className="mt-auto pt-4 border-t border-slate-200/60">
                                            <button
                                                onClick={() => handleSelect(kit.config)}
                                                className="text-xs font-bold text-slate-600 hover:text-primary flex items-center gap-1 group-hover:gap-2 transition-all w-full justify-end"
                                            >
                                                Select Option <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* 3. Empty Column to align with Order form sidebar */}
                <div className="hidden lg:block lg:col-span-1" />
            </div>
        </section>
    );
}
