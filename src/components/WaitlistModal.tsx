'use client';

import { X, Sparkles, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
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
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Decorative Background */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
                >
                    <X size={20} />
                </button>

                <div className="relative z-10 px-8 pt-12 pb-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl flex items-center justify-center mb-6 transform rotate-3">
                            <Sparkles className="text-white" size={32} />
                        </div>

                        {isSubmitted ? (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">You're on the list! 🎉</h3>
                                <p className="text-slate-500 mb-8">
                                    We've reserved your spot. Keep an eye on your inbox for your exclusive 50% discount code.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold rounded-xl transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Join Early Access</h3>
                                <p className="text-slate-500 mb-8 text-sm leading-relaxed">
                                    Be the first to access the <span className="font-bold text-indigo-700">CatchEater™ Cheater Elimination System</span> and get <span className="text-purple-600 font-bold">50% off</span> your first evaluation kit.
                                </p>

                                <form onSubmit={handleSubmit} className="w-full space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wide text-left">Email Address</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="researcher@lab.edu"
                                            className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all text-sm placeholder:text-slate-400"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                                    </button>

                                    <p className="text-[10px] text-slate-400 mt-4">
                                        Limited spots available. No spam, just science.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
