'use client';

import { ShoppingCart, Check, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useState, ChangeEvent } from 'react';
import PlasmidViewer from '../PlasmidViewer';
import WaitlistModal from '../WaitlistModal';

export default function OrderForm() {
    // State for all form fields
    const [formData, setFormData] = useState({
        strain: 'bl21de3-catcheater',
        geneName: '',
        additionalFeatures: '',
        sequence: '',
        promoter: 't7',
        resistance: 'amp',
        origin: 'puc',
        customExplanation: '',
        usage: '', // research application
        quantity: 1
    });

    // Validation & UI State
    const [touched, setTouched] = useState({
        geneName: false,
        contact: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    // Handlers
    const handleSubmit = () => {
        if (!formData.strain) return; // Basic validation
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset success message after 5 seconds to allow another order? 
            // Or keep it persistent. Let's keep it persistent for the demo.
        }, 1500);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'geneName' || name === 'fullName') {
            setTouched(prev => ({ ...prev, contact: true })); // simplified for demo
        }
    };

    const handleSequenceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        // DNA Validation: Allow only A, T, C, G and whitespace (case insensitive)
        const sanitized = value.replace(/[^atcgATCG\s]/g, '');

        setFormData(prev => ({ ...prev, sequence: sanitized }));
    };

    // Event Listener for External Selection (from Kits)
    if (typeof window !== 'undefined') {
        window.addEventListener('catcheater:select-kit', ((e: CustomEvent) => {
            const updates = e.detail;
            setFormData(prev => ({ ...prev, ...updates }));

            // Highlight effect (optional, implies scrolling happened)
            const form = document.getElementById('order');
            if (form) {
                form.classList.add('ring-2', 'ring-primary', 'ring-offset-2');
                setTimeout(() => form.classList.remove('ring-2', 'ring-primary', 'ring-offset-2'), 1000);
            }
        }) as EventListener);
    }

    // Derived Status
    const isStrainSelected = !!formData.strain;
    const isGeneAdded = formData.sequence.replace(/\s/g, '').length > 0;
    const isContactAdded = touched.contact; // Simplified trigger for demo

    // Mappings for Summary
    const strainLabel = formData.strain === 'bl21de3-catcheater' ? 'Catcheater + QC' : 'Catcheater Basic';
    const promoterLabel = {
        't7': 'T7',
        'lac': 'lac',
        'ara': 'araBAD',
        'trc': 'trc',
        'custom': 'Custom'
    }[formData.promoter] || formData.promoter;

    const resistanceLabel = {
        'amp': 'Ampicillin',
        'kan': 'Kanamycin',
        'chlor': 'Chloramphenicol',
        'spec': 'Spectinomycin'
    }[formData.resistance] || formData.resistance;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative" id="order">

            {/* LEFT: MAIN FORM CARD */}
            <div className="lg:col-span-2 bg-surface rounded-xl border border-border overflow-hidden shadow-sm">
                {/* Header */}
                <div className="p-6 border-b border-border bg-slate-50 flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                        <ShoppingCart size={24} className="text-primary" /> Configure Your Order
                    </h3>
                </div>

                {/* Form Content */}
                <div className="p-8 space-y-10">

                    {/* 1. STRAIN SELECTION */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</span>
                            Strain Selection
                        </h4>
                        <div className="pl-8 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Strain Type</label>
                                <select
                                    name="strain"
                                    value={formData.strain}
                                    onChange={handleInputChange}
                                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                                >
                                    <option value="bl21de3-catcheater">Catcheater strain (with sfGFP and Toxin)</option>
                                    <option value="bl21de3-basic">Catcheater strain (control)</option>
                                </select>
                                <p className="text-xs text-muted mt-1">
                                    Includes genomic integration of stress sensors, logic gates, and the latch mechanism.
                                </p>
                            </div>

                            {/* Integrated Features Badges */}
                            {formData.strain === 'bl21de3-catcheater' && (
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 animate-in fade-in zoom-in-95 duration-200">
                                    <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Integrated Catcheater Features</h5>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded text-xs font-bold text-center border border-blue-200">
                                            σ32 SENSOR (CYTOSOLIC)
                                        </div>
                                        <div className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded text-xs font-bold text-center border border-emerald-200">
                                            σE/CPX SENSOR (ENVELOPE)
                                        </div>
                                        <div className="bg-purple-100 text-purple-700 px-3 py-2 rounded text-xs font-bold text-center border border-purple-200">
                                            LOGIC GATE (AND/OR)
                                        </div>
                                        <div className="bg-orange-100 text-orange-700 px-3 py-2 rounded text-xs font-bold text-center border border-orange-200">
                                            FLP RECOMBINASE LATCH
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <hr className="border-border" />

                    {/* 2. PLASMID CUSTOMIZATION */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
                            Plasmid Customization
                        </h4>
                        <div className="pl-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Gene/Protein Name</label>
                                    <input
                                        type="text"
                                        name="geneName"
                                        value={formData.geneName}
                                        onChange={handleInputChange}
                                        placeholder="e.g. GFP"
                                        className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Additional Features</label>
                                    <input
                                        type="text"
                                        name="additionalFeatures"
                                        value={formData.additionalFeatures}
                                        onChange={handleInputChange}
                                        placeholder="Tags..."
                                        className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Gene Sequence (DNA)</label>
                                <textarea
                                    rows={5}
                                    name="sequence"
                                    value={formData.sequence}
                                    onChange={handleSequenceChange}
                                    placeholder="Paste ATGC sequence..."
                                    className="w-full bg-background border border-border rounded-lg p-3 font-mono text-xs focus:ring-2 focus:ring-primary/20 outline-none uppercase"
                                />
                                <div className="flex justify-between mt-1 text-xs text-muted">
                                    <span>Allowed: A, T, C, G only</span>
                                    <span className="font-mono">{formData.sequence.replace(/\s/g, '').length} bp</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Promoter</label>
                                    <select name="promoter" value={formData.promoter} onChange={handleInputChange} className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none">
                                        <option value="t7">T7 Promoter (Strong)</option>
                                        <option value="lac">lac Promoter (Moderate)</option>
                                        <option value="ara">araBAD (Arabinose)</option>
                                        <option value="trc">trc Promoter</option>
                                        <option value="custom">Custom</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Resistance</label>
                                    <select name="resistance" value={formData.resistance} onChange={handleInputChange} className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none">
                                        <option value="amp">Ampicillin (AmpR)</option>
                                        <option value="kan">Kanamycin (KanR)</option>
                                        <option value="chlor">Chloramphenicol</option>
                                        <option value="spec">Spectinomycin</option>
                                        <option value="custom">Custom</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Origin of Replication</label>
                                    <select name="origin" value={formData.origin} onChange={handleInputChange} className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none">
                                        <option value="puc">pUC (High copy)</option>
                                        <option value="p15a">p15A (Medium copy)</option>
                                        <option value="cole1">ColE1 (High copy)</option>
                                        <option value="custom">Custom</option>
                                    </select>
                                </div>
                            </div>

                            {/* Custom Explanations Field */}
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Additional Explanations (Custom Options)</label>
                                <textarea
                                    rows={2}
                                    name="customExplanation"
                                    value={formData.customExplanation}
                                    onChange={handleInputChange}
                                    placeholder="Please provide details about your custom resistance or origin requirements..."
                                    className="w-full bg-background border border-border rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <hr className="border-border" />

                    {/* 3. SHIPPING & CONTACT */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</span>
                            Contact Information
                        </h4>
                        <div className="pl-8 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <input type="text" name="fullName" onChange={handleInputChange} placeholder="Full Name *" className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" required />
                                    <input type="email" placeholder="Email Address *" className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                    <input type="text" placeholder="Organization *" className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                    <input type="text" placeholder="Department" className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                </div>
                                <div className="space-y-4">
                                    <textarea placeholder="Shipping Address *" rows={2} className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                    <div className="grid grid-cols-2 gap-2">
                                        <input type="text" placeholder="City *" className="bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                        <input type="text" placeholder="State/Prov" className="bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <input type="text" placeholder="Zip *" className="bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                        <select className="bg-background border border-border rounded-lg p-3 text-sm outline-none text-muted-foreground">
                                            <option value="">Country *</option>
                                            <option value="us">United States</option>
                                            <option value="eu">Europe</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Quantity</label>
                                    <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} min={1} className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Timeline Preferred</label>
                                    <select className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none">
                                        <option value="standard">Standard (2-3 weeks)</option>
                                        <option value="expedited">Expedited (1-2 weeks)</option>
                                        <option value="rush">Rush (&lt;1 week)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Research Application</label>
                                <textarea rows={2} placeholder="Brief description of usage..." className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">Special Requests / PO Number</label>
                                <textarea rows={2} placeholder="Any additional requirements or PO..." className="w-full bg-background border border-border rounded-lg p-3 text-sm outline-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: STICKY SUMMARY (INDEPENDENT) */}
            <div className="lg:col-span-1 h-full">
                <div className="sticky top-32 space-y-6">
                    <div className="bg-surface border border-border rounded-xl p-5 shadow-sm">
                        <h4 className="font-bold text-foreground mb-4 border-b border-border pb-3">Plasmid Map</h4>
                        <div className="mb-6 -mt-2">
                            <PlasmidViewer
                                promoter={formData.promoter}
                                promoterLabel={promoterLabel}
                                resistance={formData.resistance}
                                resistanceLabel={resistanceLabel}
                                origin={formData.origin}
                                originLabel={formData.origin === 'p15a' ? 'p15A' : formData.origin === 'cole1' ? 'ColE1' : formData.origin === 'puc' ? 'pUC' : 'Custom'}
                                insertSize={formData.sequence.replace(/\s/g, '').length}
                            />
                        </div>

                        <div className="space-y-4 text-sm border-t border-border pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-muted">Strain:</span>
                                <span className="font-medium text-foreground text-right">{strainLabel}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted">Promoter:</span>
                                <span className="font-medium text-foreground text-right">{promoterLabel}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-muted">Resistance:</span>
                                <span className="font-medium text-foreground text-right">{resistanceLabel}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-dashed border-border mt-2">
                                <span className="text-muted">Quantity:</span>
                                <span className="font-bold text-lg text-primary">{formData.quantity} Kit{formData.quantity > 1 ? 's' : ''}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-surface border border-border rounded-xl p-5 shadow-sm">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-muted mb-4">Configuration Status</h4>
                        <div className="space-y-3">
                            <div className={`flex items-center gap-2 text-sm ${isStrainSelected ? 'text-emerald-600 font-medium' : 'text-muted'}`}>
                                {isStrainSelected ? <Check size={16} /> : <AlertTriangle size={16} />} Strain Select
                            </div>
                            <div className={`flex items-center gap-2 text-sm ${isGeneAdded ? 'text-emerald-600 font-medium' : 'text-muted'}`}>
                                {isGeneAdded ? <Check size={16} /> : <AlertTriangle size={16} />} Gene Sequence
                                {isGeneAdded && <span className="text-xs bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded ml-auto">{formData.sequence.replace(/\s/g, '').length}bp</span>}
                            </div>
                            <div className={`flex items-center gap-2 text-sm ${isContactAdded ? 'text-emerald-600 font-medium' : 'text-muted'}`}>
                                {isContactAdded ? <Check size={16} /> : <AlertTriangle size={16} />} Contact Info
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-xs text-yellow-800">
                        <strong>Note:</strong> We review all designs manually.
                        <br />You will receive a quote within 24h.
                    </div>

                    <button
                        onClick={() => setIsWaitlistOpen(true)}
                        disabled={false} // Intentionally clickable to trigger the modal
                        className="w-full py-4 bg-slate-400 text-white font-bold rounded-xl shadow-none cursor-not-allowed flex items-center justify-center gap-2 hover:bg-slate-500 transition-colors"
                    >
                        Product Coming Soon
                    </button>

                    <WaitlistModal
                        isOpen={isWaitlistOpen}
                        onClose={() => setIsWaitlistOpen(false)}
                    />

                    {isSuccess && (
                        <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-sm border border-emerald-200 mt-4 animate-in fade-in slide-in-from-top-2">
                            <strong>Success!</strong> Your configuration has been sent to our engineering team (ID: #REQ-{Math.floor(Math.random() * 10000)}). We will email you a quote shortly.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
