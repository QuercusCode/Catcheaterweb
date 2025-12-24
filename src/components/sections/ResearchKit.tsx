// ... imports
import { Zap, Shield, RefreshCw, AlertTriangle, ArrowRight, CheckCircle2, Star, Plus, TestTube2, Dna } from 'lucide-react';

const coreKits = [
    {
        id: 'snitch',
        name: 'The Snitch - Core Sensor',
        category: 'Core System',
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
        name: 'Smart Backbone (pCatch)',
        category: 'Vector',
        icon: <Dna className="text-white" size={24} />,
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        desc: 'Metabolically optimized plasmid backbone for stability. Reduces burden by 40%.',
        features: ['Low Metabolic Load', 'High Copy Number', 'Modular Header'],
        price: 'Included',
        popular: false,
        config: { origin: 'puc', resistance: 'kan' }
    },
    {
        id: 'enforcer',
        name: 'The Enforcer Module',
        category: 'Add-on',
        icon: <Shield className="text-white" size={24} />,
        iconBg: 'bg-gradient-to-br from-red-500 to-pink-600',
        desc: 'Autonomously eliminates non-productive or mutated cells (Kill Switch).',
        features: ['Genetic Stability', 'Cheat-Proof', 'Automatic'],
        price: '+$199',
        popular: false,
        config: { antidote: 'dual' }
    },
    {
        id: 'control',
        name: 'Toxic Control Strain',
        category: 'Validation',
        icon: <AlertTriangle className="text-white" size={24} />,
        iconBg: 'bg-gradient-to-br from-slate-600 to-slate-800',
        desc: 'Positive control strain for calibrating sensor response.',
        features: ['Calibration Standard', 'Known Toxicity', 'Essential'],
        price: 'Included',
        popular: false,
        config: { strain: 'bl21de3-basic', customExplanation: 'Requiring Toxic Control Positive Standard' }
    }
];

export default function ResearchKit() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelect = (config: any) => {
        const event = new CustomEvent('catcheater:select-kit', { detail: config });
        window.dispatchEvent(event);

        const orderSection = document.getElementById('order');
        if (orderSection) {
            orderSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <section id="products" className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-border pb-6 gap-4">
                <div>
                    <h2 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                        <TestTube2 className="text-primary" size={32} /> Available Kits & Modules
                    </h2>
                    <p className="text-muted-foreground text-base mt-2 max-w-2xl">
                        Select high-performance components to build your custom strain. All kits are compatible with BL21(DE3).
                    </p>
                </div>
            </div>

            {/* Unified Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {coreKits.map((kit) => (
                    <div
                        key={kit.id}
                        className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                        {kit.popular && (
                            <div className="absolute top-0 right-0 z-10">
                                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl shadow-sm">
                                    POPULAR
                                </div>
                            </div>
                        )}

                        {/* Top Accent Gradient */}
                        <div className={`h-1.5 w-full ${kit.iconBg}`} />

                        <div className="p-6 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-xl shadow-md flex items-center justify-center ${kit.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                                    {kit.icon}
                                </div>
                                <span className={`inline-block text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${kit.category === 'Core System' ? 'bg-amber-50 text-amber-700' :
                                    kit.category === 'Add-on' ? 'bg-red-50 text-red-700' :
                                        'bg-slate-100 text-slate-600'
                                    }`}>
                                    {kit.category}
                                </span>
                            </div>

                            <h4 className="text-lg font-bold text-foreground mb-2 leading-tight group-hover:text-primary transition-colors min-h-[50px] flex items-center">
                                {kit.name}
                            </h4>

                            <p className="text-xs text-slate-500 mb-6 leading-relaxed flex-grow">
                                {kit.desc}
                            </p>

                            <div className="space-y-2 mb-6 bg-slate-50/50 rounded-lg p-3 border border-slate-100/50">
                                {kit.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[10px] font-semibold text-slate-600">
                                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> {feat}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                                <span className={`font-bold text-sm ${kit.price === 'Included' || kit.price === 'Free' ? 'text-emerald-600' : 'text-foreground'}`}>
                                    {kit.price.replace('$', '€')}
                                </span>
                                <button
                                    onClick={() => handleSelect(kit.config)}
                                    className="px-4 py-2 bg-slate-50 border border-slate-200 hover:border-primary hover:bg-primary hover:text-white text-slate-700 rounded-lg font-bold text-xs transition-all duration-200 flex items-center gap-2"
                                >
                                    <Plus size={14} strokeWidth={3} /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
