'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Share2, Copy, Send, TriangleAlert, ShieldCheck, Zap, ArrowRight, Activity } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration ---

type QuestionType = 'radio' | 'email' | 'intro';

interface Question {
    id: string;
    category: string;
    question: string;
    type: QuestionType;
    options?: string[];
    placeholder?: string;
}

const QUESTIONS: Question[] = [
    // Welcome Screen
    {
        id: 'intro',
        category: 'Welcome',
        question: 'Plasmid Stability Assessment',
        type: 'intro',
        options: ['Start Assessment'],
        placeholder: 'Take this 2-minute assessment to quantify your plasmid instability risk and unlock a personalized optimization report.'
    },

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

// --- Theming ---

const SECTION_THEMES: Record<string, 'blue' | 'rose' | 'cyan' | 'violet'> = {
    'Welcome': 'blue',
    'Facility Profile': 'blue',
    'Stability & Pain Points': 'rose',
    'Current Methods': 'cyan',
    'The Catcheater Solution': 'violet',
    'Final Step': 'violet'
};

const THEME_STYLES = {
    blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-600',
        border: 'border-blue-500',
        bgSoft: 'bg-blue-500/10',
        shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
        caret: 'caret-blue-500',
        progress: 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        button: 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]',
        buttonSecondary: 'text-blue-400 hover:text-blue-300 hover:bg-slate-900',
        ring: 'focus:border-blue-500'
    },
    rose: {
        text: 'text-rose-400',
        bg: 'bg-rose-600',
        border: 'border-rose-500',
        bgSoft: 'bg-rose-500/10',
        shadow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]',
        caret: 'caret-rose-500',
        progress: 'bg-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.5)]',
        button: 'bg-rose-600 hover:bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_30px_rgba(244,63,94,0.6)]',
        buttonSecondary: 'text-rose-400 hover:text-rose-300 hover:bg-slate-900',
        ring: 'focus:border-rose-500'
    },
    cyan: {
        text: 'text-cyan-400',
        bg: 'bg-cyan-600',
        border: 'border-cyan-500',
        bgSoft: 'bg-cyan-500/10',
        shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]',
        caret: 'caret-cyan-500',
        progress: 'bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]',
        button: 'bg-cyan-600 hover:bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]',
        buttonSecondary: 'text-cyan-400 hover:text-cyan-300 hover:bg-slate-900',
        ring: 'focus:border-cyan-500'
    },
    violet: {
        text: 'text-violet-400',
        bg: 'bg-violet-600',
        border: 'border-violet-500',
        bgSoft: 'bg-violet-500/10',
        shadow: 'shadow-[0_0_20px_rgba(139,92,246,0.2)]',
        caret: 'caret-violet-500',
        progress: 'bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]',
        button: 'bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]',
        buttonSecondary: 'text-violet-400 hover:text-violet-300 hover:bg-slate-900',
        ring: 'focus:border-violet-500'
    }
};

// --- Risk Logic ---

type RiskLevel = 'CRITICAL' | 'HIGH' | 'MODERATE' | 'OPTIMAL';

interface RiskReport {
    level: RiskLevel;
    score: number;
    color: string;
    bg: string;
    icon: any;
    title: string;
    message: string;
}

const getRiskReport = (answers: Record<string, string>): RiskReport => {
    let score = 0;

    // 1. Frequency
    const freq = answers['frequency'];
    if (freq?.includes('Critical')) score += 4;
    else if (freq?.includes('Frequently')) score += 3;
    else if (freq?.includes('Rarely')) score += 1;

    // 2. Retention
    const ret = answers['retention'];
    if (ret?.includes('Poor')) score += 3;
    else if (ret?.includes('Moderate')) score += 2;
    else if (ret?.includes('Unknown')) score += 1;

    // 3. Impact
    const impact = answers['impact'];
    if (impact?.includes('> €50,000')) score += 2;
    else if (impact?.includes('€10,000')) score += 1;

    // 4. Method
    const method = answers['method'];
    if (method?.includes('not have an effective solution')) score += 1;

    // Determine Level
    if (score >= 8) {
        return {
            level: 'CRITICAL',
            score,
            color: 'text-red-500',
            bg: 'bg-red-500/10 border-red-500/50',
            icon: TriangleAlert,
            title: 'Critical Risk Detected',
            message: 'Your facility is likely losing significant value to instability. Immediate intervention is recommended.'
        };
    } else if (score >= 5) {
        return {
            level: 'HIGH',
            score,
            color: 'text-orange-500',
            bg: 'bg-orange-500/10 border-orange-500/50',
            icon: TriangleAlert,
            title: 'High Risk Detected',
            message: 'Stability issues are limiting your production potential. Optimization is highly recommended.'
        };
    } else if (score >= 2) {
        return {
            level: 'MODERATE',
            score,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10 border-yellow-500/50',
            icon: ShieldCheck,
            title: 'Moderate Risk',
            message: 'Your process is stable but could be optimized. Preventative measures can lock in your yields.'
        };
    } else {
        return {
            level: 'OPTIMAL',
            score,
            color: 'text-emerald-500',
            bg: 'bg-emerald-500/10 border-emerald-500/50',
            icon: Zap,
            title: 'Optimal Performance',
            message: 'You are running efficiently! Catcheater can help you maintain this edge as you scale.'
        };
    }
};


export default function Survey() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);
    const [riskReport, setRiskReport] = useState<RiskReport | null>(null);

    const activeQuestion = QUESTIONS[currentStep];
    const isLastQuestion = currentStep === QUESTIONS.length - 1;

    // Progress is now 0 for Intro (Step 0) and builds up from Step 1 onwards
    const progress = activeQuestion.type === 'intro'
        ? 5
        : ((currentStep) / (QUESTIONS.length - 1)) * 100;

    // Theme computation
    const currentThemeName = SECTION_THEMES[activeQuestion.category];
    const theme = THEME_STYLES[currentThemeName];

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
        // Enforce required fields (except optional email and intro button)
        if (activeQuestion.type !== 'intro' && !answers[activeQuestion.id] && activeQuestion.type !== 'email') return;

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
            // Calculate Risk BEFORE submission state update
            const report = getRiskReport(answers);
            setRiskReport(report);

            const response = await fetch('/api/survey', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...answers, riskScore: report.score, riskLevel: report.level }),
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
            if (e.key === 'Enter') {
                if (activeQuestion.type === 'email' || activeQuestion.type === 'intro') {
                    handleNext();
                }
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
    if (submitted && riskReport) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
                <div className="max-w-xl w-full bg-slate-900 rounded-3xl shadow-2xl p-8 text-center border border-slate-800">

                    {/* RISK REPORT CARD */}
                    <div className={`mb-8 p-6 rounded-2xl border-2 ${riskReport.bg} relative overflow-hidden`}>
                        <div className="flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${riskReport.bg} ${riskReport.color} border-2 border-current shadow-lg`}
                            >
                                <riskReport.icon size={32} />
                            </motion.div>
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Plasmid Instability Risk</h2>
                            <h3 className={`text-4xl font-display font-bold ${riskReport.color} mb-4`}>{riskReport.level} EXP</h3>
                            <p className="text-slate-300 font-medium leading-relaxed max-w-sm mx-auto">
                                {riskReport.message}
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold font-display text-white mb-2">Analysis Complete</h2>
                    <p className="text-slate-500 mb-8 text-sm">
                        Calculated from your {Object.keys(answers).length} data points. Your full report has been queued for email delivery.
                    </p>

                    <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 mb-6">
                        <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">Your Research Grant</p>
                        <div className="flex flex-col items-center gap-2">
                            <div className="px-6 py-2 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xl font-bold text-white tracking-widest select-all">
                                PIONEER-50
                            </div>
                            <p className="text-xs text-slate-500 mt-1">50% OFF Evaluation Kit</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={() => {
                                    const shareData = {
                                        text: `I just received a ${riskReport.level} Risk Score on my bioproduction facility analysis. Check your plasmid stability here:`,
                                        url: 'https://catcheater.bio/survey'
                                    };
                                    const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
                                    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
                                }}
                                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#0077b5] text-white text-sm font-bold rounded-xl hover:bg-[#006396] transition-colors"
                            >
                                <Share2 size={16} /> Share on LinkedIn
                            </button>
                            <Link href="/" className="inline-flex items-center justify-center w-full py-3 px-4 bg-slate-800 text-white font-bold text-sm rounded-xl hover:bg-slate-700 transition-all border border-slate-700">
                                Return Home
                            </Link>
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
        <div className={`min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col overflow-hidden selection:text-white selection:${theme.bg}`}>
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-900 z-50">
                <motion.div
                    className={`h-full ${theme.progress} transition-all duration-700`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 pb-24 md:pb-40 max-w-4xl mx-auto w-full relative">

                {/* Category Label - HIDE for welcome screen */}
                {activeQuestion.type !== 'intro' && (
                    <motion.div
                        key={activeQuestion.category}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`absolute top-12 md:top-20 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${theme.text}`}
                    >
                        {activeQuestion.category} · Q{currentStep}/{QUESTIONS.length - 1}
                    </motion.div>
                )}

                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentStep}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full max-w-2xl text-center md:text-left"
                    >
                        {/* Question (or Title for Intro) */}
                        <h2 className={`font-display font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400
                            ${activeQuestion.type === 'intro' ? 'text-4xl md:text-6xl mb-6' : 'text-3xl md:text-5xl mb-12 sm:mb-16'}`}>
                            {activeQuestion.question}
                        </h2>

                        {/* Special Description for Intro */}
                        {activeQuestion.type === 'intro' && (
                            <div className="mb-12">
                                <h3 className="text-xl text-blue-400 font-bold mb-4">Is Your Strain Stability Costing You?</h3>
                                <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                                    {activeQuestion.placeholder}
                                </p>
                            </div>
                        )}

                        {/* Options */}
                        <div className="space-y-3">
                            {activeQuestion.type === 'radio' && activeQuestion.options?.map((opt, idx) => {
                                const isSelected = answers[activeQuestion.id] === opt;
                                return (
                                    <motion.button
                                        key={opt}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => handleSelect(opt)}
                                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 group relative overflow-hidden
                                            ${isSelected
                                                ? `${theme.border} ${theme.bgSoft} ${theme.shadow}`
                                                : 'border-slate-800 bg-slate-900/50 hover:border-slate-600 hover:bg-slate-800'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-300
                                                ${isSelected ? `${theme.border} ${theme.bg} text-white` : 'border-slate-600 text-transparent group-hover:border-slate-500'}`}>
                                                {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />}
                                            </div>
                                            <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                                {opt}
                                            </span>
                                        </div>
                                        {/* Key Hint (Optional desktop enhancement) */}
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
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
                                        className={`w-full bg-slate-900 border-b-2 border-slate-700 text-3xl md:text-4xl py-4 px-2 focus:outline-none ${theme.ring} ${theme.caret} transition-colors duration-500 text-white placeholder:text-slate-700`}
                                    />
                                    <p className="mt-4 text-slate-500 flex items-center gap-2">
                                        <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-700">ENTER</span>
                                        to submit
                                    </p>
                                </div>
                            )}

                            {/* Start Button for Intro */}
                            {activeQuestion.type === 'intro' && (
                                <button
                                    onClick={handleNext}
                                    className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all transform hover:scale-105"
                                >
                                    Start Assessment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Bar */}
            <div className="fixed bottom-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-40 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">

                {/* Hide Back button on Intro screen */}
                <button
                    onClick={handlePrev}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors
                        ${currentStep === 0 ? 'opacity-0 pointer-events-none' : `${theme.buttonSecondary}`}`}
                >
                    <ChevronLeft size={20} /> Back
                </button>

                {!isLastQuestion && activeQuestion.type !== 'intro' && (
                    <button
                        onClick={handleNext}
                        disabled={!answers[activeQuestion.id]}
                        className="flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-xl hover:scale-105 active:scale-95"
                    >
                        Next <ChevronRight size={20} />
                    </button>
                )}

                {isLastQuestion && (
                    <button
                        onClick={submitForm}
                        disabled={isSubmitting}
                        className={`flex items-center gap-2 px-10 py-4 text-white font-bold rounded-xl transition-all disabled:opacity-50 hover:scale-105 active:scale-95 ${theme.button}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'} <Send size={20} />
                    </button>
                )}
            </div>
        </div>
    );
}
