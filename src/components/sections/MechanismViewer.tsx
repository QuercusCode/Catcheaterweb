'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Zap, ShieldCheck, Dna, CheckCircle2, XCircle } from 'lucide-react';

export default function MechanismViewer() {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            id: 'sensor',
            title: '1. The Sensor',
            description: 'A genetic probe fused to your product mRNA detects translation in real-time.',
            icon: Zap,
            color: 'text-indigo-400',
            bg: 'bg-indigo-500',
            status: 'Detecting...'
        },
        {
            id: 'certificate',
            title: '2. The Certificate',
            description: 'If production is high, the cell creates an Anti-Toxin (the "Certificate").',
            icon: ShieldCheck,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500',
            status: 'Verified'
        },
        {
            id: 'enforcer',
            title: '3. The Enforcer',
            description: 'A latent Toxin is always present. Without the Anti-Toxin, the cell is eliminated.',
            icon: Dna,
            color: 'text-rose-400',
            bg: 'bg-rose-500',
            status: 'Protected'
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT: Controls / Explanation */}
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <motion.button
                        key={step.id}
                        onClick={() => setActiveStep(index)}
                        className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group
                            ${activeStep === index
                                ? 'border-indigo-500 bg-indigo-950/20 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                                : 'border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:border-slate-700'
                            }`}
                    >
                        <div className="flex items-start gap-4 relative z-10">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border 
                                ${activeStep === index ? `${step.bg} text-white border-transparent` : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                                <span className="font-mono font-bold">{index + 1}</span>
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold mb-1 ${activeStep === index ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                    {step.title}
                                </h3>
                                <p className={`text-sm leading-relaxed ${activeStep === index ? 'text-indigo-200' : 'text-slate-500'}`}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* RIGHT: Visual Simulation */}
            <div className="relative aspect-square bg-slate-950 rounded-full border border-slate-800 p-8 flex items-center justify-center overflow-hidden">
                {/* Cell Boundary */}
                <motion.div
                    animate={{
                        borderColor: activeStep === 2 ? '#f43f5e' : '#6366f1',
                        boxShadow: activeStep === 1
                            ? '0 0 50px rgba(16, 185, 129, 0.2)'
                            : activeStep === 2
                                ? '0 0 50px rgba(244, 63, 94, 0.2)'
                                : '0 0 50px rgba(99, 102, 241, 0.1)'
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-8 rounded-full border-4 border-dashed opacity-50"
                />

                {/* Central Kernel */}
                <div className="relative z-10 text-center">
                    <motion.div
                        key={activeStep}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.5 }}
                        className={`w-32 h-32 rounded-3xl mx-auto mb-6 flex items-center justify-center ${steps[activeStep].bg} shadow-2xl`}
                    >
                        {/* Assign to variable to satisfy JSX requirement */}
                        {(() => {
                            const StepIcon = steps[activeStep].icon;
                            return <StepIcon size={64} className="text-white" />;
                        })()}
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        key={`text-${activeStep}`}
                    >
                        <h4 className={`text-2xl font-bold font-display uppercase tracking-widest ${steps[activeStep].color}`}>
                            {steps[activeStep].status}
                        </h4>
                        <p className="text-xs text-slate-500 font-mono mt-2 uppercase">System Status: Active</p>
                    </motion.div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                x: [0, Math.random() * 100 - 50],
                                y: [0, Math.random() * 100 - 50],
                                scale: [1, 0],
                                opacity: [0.5, 0]
                            }}
                            transition={{
                                duration: 2 + Math.random(),
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${steps[activeStep].bg}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
