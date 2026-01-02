
'use client';

import { useState, useEffect } from 'react';
import { X, MessageSquarePlus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function SurveyPrompt() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasDismissed, setHasDismissed] = useState(false);

    useEffect(() => {
        // Check local storage safely
        try {
            const dismissed = localStorage.getItem('survey_prompt_dismissed');
            if (dismissed) {
                setHasDismissed(true);
                return;
            }
        } catch (e) {
            console.warn('LocalStorage access denied', e);
        }

        // Show after 4 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setHasDismissed(true);
        try {
            localStorage.setItem('survey_prompt_dismissed', 'true');
        } catch (e) {
            // Ignore (Private mode)
        }
    };

    if (hasDismissed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-4 right-4 md:left-auto md:right-6 z-[100] w-auto md:w-auto max-w-sm mx-auto touch-none"
                >
                    <div className="bg-white rounded-2xl shadow-2xl p-5 border border-indigo-100 relative overflow-hidden">
                        {/* Decorative bling */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl -mr-8 -mt-8" />

                        <button
                            onClick={handleDismiss}
                            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors p-1"
                        >
                            <X size={16} />
                        </button>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600">
                                <MessageSquarePlus size={24} />
                            </div>

                            <div className="pr-6">
                                <h4 className="font-bold text-foreground mb-1">Have a moment?</h4>
                                <p className="text-sm text-muted-foreground mb-3 leading-tight">
                                    Help us quantify the cost of genetic instability. Takes 2 mins.
                                </p>

                                <Link
                                    href="/survey"
                                    className="inline-flex items-center gap-2 text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
                                >
                                    Take Survey <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
