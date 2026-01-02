'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Share2, Copy, Send } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---

type QuestionType = 'radio' | 'email';

interface Question {
    id: string;
    category: string;
    question: string;
    type: QuestionType;
    options?: string[];
    placeholder?: string;
}

const QUESTIONS: Question[] = [
    // Section 1: Facility Profile
    {
        id: 'sector',
        category: 'Facility Profile',
        question: 'Which sector best describes your organization?',
        type: 'radio',
        options: ['Academic / University research', 'Early-stage Startup (Pre-Seed/Seed)', 'Growth-stage Biotech (Series A+)', 'Large Pharma / CDMO']
    },
    {
        id: 'organism',
        category: 'Facility Profile',
        question: 'What is your primary production organism?',
        type: 'radio',
        options: ['E. coli (BL21 / B-strains)', 'E. coli (K-12 derivatives)', 'Yeast (S. cerevisiae / P. pastoris)', 'Mammalian (CHO / HEK)', 'Other']
    },
    {
        id: 'product',
        category: 'Facility Profile',
        question: 'What is your primary target product?',
        type: 'radio',
        options: ['Recombinant Proteins / Enzymes', 'Therapeutics (Antibodies, Cytokines)', 'Plasmid DNA (Gene Therapy, Vaccines)', 'Small Molecules / Metabolites']
    },
    {
        id: 'scale',
        category: 'Facility Profile',
        question: 'What represents your current production scale?',
        type: 'radio',
        options: ['Lab Scale (< 5L)', 'Pilot Scale (5L - 500L)', 'Industrial Scale (> 500L)']
    },

    // Section 2: Stability
    {
        id: 'frequency',
        category: 'Stability & Pain Points',
        question: 'How often do you experience unexplained yield drops or plasmid instability?',
        type: 'radio',
        options: ['Never (Stable)', 'Rarely (< 10% of runs)', 'Frequently (10-50% of runs)', 'Critical Bottleneck (> 50% of runs)']
    },
    {
        id: 'retention',
        category: 'Stability & Pain Points',
        question: 'To the best of your knowledge, what is your plasmid retention rate at harvest?',
        type: 'radio',
        options: ['Excellent (> 90%)', 'Moderate (70% - 90%)', 'Poor (< 70% or highly variable)', 'Unknown / We do not measure this']
    },
    {
        id: 'impact',
        category: 'Stability & Pain Points',
        question: 'What is the estimated financial impact of a single failed batch?',
        type: 'radio',
        options: ['< €1,000', '€1,000 - €10,000', '€10,000 - €50,000', '> €50,000']
    },

    // Section 3: Methods
    {
        id: 'method',
        category: 'Current Methods',
        question: 'How do you currently manage plasmid loss?',
        type: 'radio',
        options: ['We rely solely on antibiotics (e.g., Amp/Kan)', 'We employ auxotrophic selection markers', 'We over-inoculate to compensate', 'We do not have an effective solution']
    },
    {
        id: 'suicide_gene',
        category: 'Current Methods',
        question: 'Hypothetically, would you be willing to engineer "suicide genes" into your strain if it guaranteed >99% purity?',
        type: 'radio',
        options: ['Yes, yield and purity are the priority.', 'Maybe, but safety/compliance is a concern.', 'No, our regulatory constraints forbid it.']
    },

    // Section 4: Solution
    {
        id: 'interest',
        category: 'The Catcheater Solution',
        question: '"Catcheater" is an autonomous genetic circuit that eliminates "cheater" cells in real-time. How interested are you in testing it?',
        type: 'radio',
        options: ['Not interested (Current methods work)', 'Curious (I would read a whitepaper/case study)', 'Interested (I would buy an Evaluation Kit)', 'Very Interested (We have an active need for this)']
    },
    {
        id: 'pricing',
        category: 'The Catcheater Solution',
        question: 'For a system that guarantees a >20% yield increase, which pricing model do you prefer?',
        type: 'radio',
        options: ['One-time Engineering Fee (per strain)', 'Annual Subscription (License per strain)', 'Value Share (Royalty % per batch)']
    },
    {
        id: 'concern',
        category: 'The Catcheater Solution',
        question: 'What would be your primary concern about adopting this technology?',
        type: 'radio',
        options: ['Regulatory Compliance', 'Metabolic Burden on the cell', 'Implementation Difficulty', 'Cost']
    },
    {
        id: 'email',
        category: 'Final Step',
        question: '(Optional) Enter your email to receive the full Research Report:',
        type: 'email',
        placeholder: 'scientist@biotech.com'
    }
];

export default function Survey() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);

    const activeQuestion = QUESTIONS[currentStep];
    const isLastQuestion = currentStep === QUESTIONS.length - 1;
    const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

    // --- Actions ---

    const handleSelect = (value: string) => {
        setAnswers(prev => ({ ...prev, [activeQuestion.id]: value }));

        // Auto-advance for radio buttons
        if (activeQuestion.type === 'radio') {
            setTimeout(() => handleNext(), 250); // Slight delay for visual feedback
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers(prev => ({ ...prev, [activeQuestion.id]: e.target.value }));
    };

    const handleNext = () => {
        if (!answers[activeQuestion.id] && activeQuestion.type !== 'email') return; // Enforce required fields (except optional email)

        if (isLastQuestion) {
            submitForm();
        } else {
            setDirection(1);
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep === 0) return;
        setDirection(-1);
        setCurrentStep(prev => prev - 1);
    };

    const submitForm = async () => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/survey', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(answers),
            });

            if (response.ok) {
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                alert('Submission failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Keyboard navigation (Enter to next)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && activeQuestion.type === 'email') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentStep, answers]);

    // --- Variants ---

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] as const } // polished 'easeOutQuart' ish
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.2 }
        })
    };


    // --- Render: Success Screen ---
    if (submitted) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
                <div className="max-w-md w-full bg-slate-900 rounded-3xl shadow-2xl p-8 text-center border border-indigo-500/20">
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20"
                    >
                        <CheckCircle2 size={40} />
                    </motion.div>
                    <h2 className="text-3xl font-bold font-display text-white mb-4">Thank You!</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Your insights help shape the future of bioproduction. We'll send the Research Report shortly.
                    </p>

                    <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 mb-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Your 50% Discount Code</p>
                        <div className="flex items-center justify-center gap-3">
                            <code className="text-3xl font-mono font-bold text-white tracking-widest drop-shadow-sm">PIONEER-50</code>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link href="/" className="inline-flex items-center justify-center w-full py-3.5 px-6 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25">
                            Return Home
                        </Link>

                        <div className="pt-8 mt-4 border-t border-slate-800/50">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Help us reach more scientists</p>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => {
                                        const shareData = {
                                            text: 'Join me in helping Catcheater quantify the impact of genetic instability in bioproduction. Take the 2-minute survey here: 🧬 #Biotech #SynBio #Fermentation',
                                            url: 'https://catcheater.bio/survey'
                                        };
                                        const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
                                        window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                                    }}
                                    className="flex items-center justify-center gap-2 py-3 px-4 bg-[#0077b5] text-white text-sm font-bold rounded-xl hover:bg-[#006396] transition-colors"
                                >
                                    <Share2 size={16} /> LinkedIn
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText('https://catcheater.bio/survey');
                                        setNotification('Link copied to clipboard!');
                                        setTimeout(() => setNotification(null), 3000);
                                    }}
                                    className="flex items-center justify-center gap-2 py-3 px-4 bg-slate-800 text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-700 transition-colors border border-slate-700"
                                >
                                    <Copy size={16} /> Copy Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Toast Reuse */}
                <AnimatePresence>
                    {notification && (
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
                        >
                            <div className="bg-indigo-600 text-white px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 min-w-[300px] justify-center border border-indigo-400/30 backdrop-blur-md">
                                <CheckCircle2 size={18} className="text-indigo-200" />
                                <p className="font-bold text-sm tracking-wide">{notification}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }


    // --- Render: Survey Flow ---
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col overflow-hidden selection:bg-indigo-500/30">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-900 z-50">
                <motion.div
                    className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 max-w-4xl mx-auto w-full relative">

                {/* Category Label */}
                <motion.div
                    key={activeQuestion.category}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-12 md:top-20 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em]"
                >
                    {activeQuestion.category} · Q{currentStep + 1}/{QUESTIONS.length}
                </motion.div>

                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full max-w-2xl"
                    >
                        {/* Question */}
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 sm:mb-16 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                            {activeQuestion.question}
                        </h2>

                        {/* Options */}
                        <div className="space-y-4">
                            {activeQuestion.type === 'radio' && activeQuestion.options?.map((opt, idx) => {
                                const isSelected = answers[activeQuestion.id] === opt;
                                return (
                                    <motion.button
                                        key={opt}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => handleSelect(opt)}
                                        className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 group relative overflow-hidden
                                            ${isSelected
                                                ? 'border-indigo-500 bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.15)]'
                                                : 'border-slate-800 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                                                ${isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-600 text-transparent group-hover:border-slate-500'}`}>
                                                {isSelected && <div className="w-2.5 h-2.5 bg-white rounded-full shadow-sm" />}
                                            </div>
                                            <span className={`text-lg md:text-xl font-medium ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {opt}
                                            </span>
                                        </div>
                                        {/* Key Hint (Optional desktop enhancement) */}
                                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                            Key {idx + 1}
                                        </span>
                                    </motion.button>
                                );
                            })}

                            {activeQuestion.type === 'email' && (
                                <div className="relative">
                                    <input
                                        type="email"
                                        autoFocus
                                        placeholder={activeQuestion.placeholder}
                                        value={answers[activeQuestion.id] || ''}
                                        onChange={handleEmailChange}
                                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                                        className="w-full bg-slate-900 border-b-2 border-slate-700 text-3xl md:text-4xl py-4 px-2 focus:outline-none focus:border-indigo-500 transition-colors text-white placeholder:text-slate-700"
                                    />
                                    <p className="mt-4 text-slate-500 flex items-center gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">ENTER</span>
                                        to submit
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Bar */}
            <div className="fixed bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-40 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors
                        ${currentStep === 0 ? 'text-slate-700 cursor-not-allowed' : 'text-indigo-400 hover:text-indigo-300 hover:bg-slate-900'}`}
                >
                    <ChevronLeft size={20} /> Back
                </button>

                {!isLastQuestion && (
                    <button
                        onClick={handleNext}
                        disabled={!answers[activeQuestion.id]}
                        className="flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105 active:scale-95"
                    >
                        OK <ChevronRight size={20} />
                    </button>
                )}

                {isLastQuestion && (
                    <button
                        onClick={submitForm}
                        disabled={isSubmitting}
                        className="flex items-center gap-2 px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-105 active:scale-95"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'} <Send size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}
