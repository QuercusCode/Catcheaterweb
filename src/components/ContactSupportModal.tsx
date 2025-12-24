'use client';

import { X, Send, MessageSquare, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContactSupportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactSupportModal({ isOpen, onClose }: ContactSupportModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset state on close after a delay
            setTimeout(() => setIsSubmitted(false), 500);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-indigo-100/50 rounded-lg text-indigo-600">
                            <MessageSquare size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground">Contact Support</h3>
                            <p className="text-xs text-muted-foreground">We usually reply within 24 hours.</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-muted-foreground hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground mb-6">
                                Thanks for reaching out. Our science team will review your inquiry and get back to you shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-foreground font-medium rounded-xl transition-colors"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Dr. Jane Doe"
                                        className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="jane@university.edu"
                                        className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Institution / Company</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Stanford University, Genentech"
                                    className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Topic</label>
                                <select className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm">
                                    <option>Technical Issue (Website/Dashboard)</option>
                                    <option>Experimental Troubleshooting</option>
                                    <option>Plasmid Design Consultation</option>
                                    <option>Billing & Shipping</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-foreground mb-1.5 uppercase tracking-wide">Problem Description</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Please describe the issue you are facing in detail..."
                                    className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm resize-none"
                                ></textarea>
                            </div>

                            <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-xl flex items-start gap-3">
                                <AlertCircle className="text-indigo-600 shrink-0 mt-0.5" size={18} />
                                <p className="text-xs text-indigo-900 leading-relaxed">
                                    <strong>Tip:</strong> For experimental issues, please include your strain type (e.g., BL21) and induction conditions in the description.
                                </p>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>Sending...</>
                                    ) : (
                                        <>Send Message <Send size={16} /></>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}
