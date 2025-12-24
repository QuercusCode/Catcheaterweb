'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, Lock, Skull, CheckCircle } from 'lucide-react';

export default function Mechanisms() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStage, setActiveStage] = useState(0);

    // simple scroll tracking to trigger stages based on viewport position of text blocks
    const handleScrollUpdate = (step: number) => {
        setActiveStage(step);
    };

    return (
        <section ref={containerRef} className="relative bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* LEFT: Scrolling Text Steps */}
                    <div className="space-y-24 py-12 pb-24">
                        {/* Intro */}
                        <Step
                            idx={0}
                            onActive={handleScrollUpdate}
                            title="The Silent Killer"
                            text="In standard fermentation, 'Bad Clones' stop producing your protein to grow fast. They take over the tank, crashing your yield."
                        />

                        {/* Stage 1: The Snitch */}
                        <Step
                            idx={1}
                            onActive={handleScrollUpdate}
                            title="1. The Snitch"
                            subtitle="Sensing the Betrayal"
                            text="Our genomic sensors monitor the cell's workload. If a cell stops producing your protein to save energy, the stress levels drop instantly. The Snitch knows."
                            icon={<Zap className="text-yellow-500" />}
                        />

                        {/* Stage 2: The Latch */}
                        <Step
                            idx={2}
                            onActive={handleScrollUpdate}
                            title="2. The Latch"
                            subtitle="Genetic Memory"
                            text="Once the default is detected, a tyrosine recombinase flips a DNA switch. This isn't temporary—it's a permanent, heritable mark of shame."
                            icon={<Lock className="text-blue-500" />}
                        />

                        {/* Stage 3: The Enforcer */}
                        <Step
                            idx={3}
                            onActive={handleScrollUpdate}
                            title="3. The Enforcer"
                            subtitle="Immediate Termination"
                            text="Marked cells triggers the production of endolysins. The 'Cheater' cell is lysed (popped) from within. Only productive 'Good Clones' survive."
                            icon={<Skull className="text-red-500" />}
                        />

                        {/* Outro */}
                        <Step
                            idx={4}
                            onActive={handleScrollUpdate}
                            title="Pure Yield"
                            subtitle="Automatic QC"
                            text="The result? A fermentation tank filled 100% with high-producing cells. No more crash. No more evolution. Just protein."
                            icon={<CheckCircle className="text-emerald-500" />}
                        />
                    </div>

                    {/* RIGHT: Sticky Visualization */}
                    <div className="hidden lg:block h-[calc(100vh-100px)] sticky top-32 flex items-center justify-center">
                        <div className="w-full max-w-md aspect-square bg-white rounded-3xl shadow-2xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                            {/* THE CELL VISUALIZATION */}
                            <CellAnimation stage={activeStage} />

                            {/* Stage Indicator / HUD */}
                            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                                {[1, 2, 3].map((s) => (
                                    <div
                                        key={s}
                                        className={`transition-all duration-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${activeStage === s ? 'bg-slate-900 text-white border-slate-900 scale-110' :
                                            activeStage > s ? 'bg-slate-200 text-slate-500 border-slate-200' :
                                                'bg-white text-slate-300 border-slate-200'
                                            }`}
                                    >
                                        Step {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Sub-component for detection with simplified viewport logic
function Step({ idx, title, subtitle, text, icon, onActive }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-10% 0px -10% 0px" }} // Trigger earlier (10% from edges)
            onViewportEnter={() => onActive(idx)}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg"
        >
            <div className="flex items-start gap-4 mb-4">
                {icon && <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">{icon}</div>}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                    {subtitle && <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mt-1">{subtitle}</p>}
                </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">{text}</p>
        </motion.div>
    );
}

function CellAnimation({ stage }: { stage: number }) {
    // Stage 0: Neutral
    // Stage 1: Pulse (Scan)
    // Stage 2: Locked
    // Stage 3: Explode

    return (
        <div className="relative w-64 h-64 flex items-center justify-center">
            {/* Core Cell Body */}
            <motion.div
                className="absolute inset-0 rounded-[3rem] border-4 bg-slate-50"
                animate={{
                    borderColor: stage === 0 ? '#e2e8f0' : stage === 1 ? '#f59e0b' : stage === 2 ? '#3b82f6' : '#ef4444',
                    backgroundColor: stage === 3 ? '#fee2e2' : '#f8fafc',
                    scale: stage === 3 ? [1, 1.1, 0.9, 0] : 1, // Explode effect
                    opacity: stage === 3 ? [1, 1, 1, 0] : 1,
                }}
                transition={{ duration: 1.5 }} // Slower base transition
            />

            {/* Inner DNA Ring - Slower Spin */}
            <motion.div
                className="absolute w-40 h-40 rounded-full border-4 border-dashed border-slate-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} // Slowed spin from 10s to 20s
                style={{ opacity: stage === 3 ? 0 : 1 }}
            />

            {/* STAGE 1: THE SNITCH (Radar Waves) - Slower Pulse */}
            {stage === 1 && (
                <>
                    <motion.div
                        className="absolute inset-0 rounded-[3rem] border-2 border-yellow-400"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 3, repeat: Infinity }} // 1.5 -> 3s
                    />
                    <motion.div
                        className="absolute inset-0 rounded-[3rem] border-2 border-yellow-400"
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} // Slower stagger
                    />
                    <Zap className="absolute w-12 h-12 text-yellow-500 z-10" />
                </>
            )}

            {/* STAGE 2: THE LATCH (Lock) - Slower Entry */}
            {stage === 2 && (
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 50, damping: 10 }} // Slower spring
                    className="z-10 bg-blue-500 p-6 rounded-2xl shadow-xl"
                >
                    <Lock className="w-12 h-12 text-white" />
                </motion.div>
            )}

            {/* STAGE 3: THE ENFORCER (Debris) - Slower Explosion */}
            {stage === 3 && (
                <>
                    {/* Particles exploding slow motion */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-red-400 rounded-full"
                            initial={{ x: 0, y: 0, opacity: 1 }}
                            animate={{
                                x: (Math.random() - 0.5) * 300,
                                y: (Math.random() - 0.5) * 300,
                                opacity: 0
                            }}
                            transition={{ duration: 3, ease: "easeOut" }} // 0.8 -> 3s
                        />
                    ))}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2 }} // Slower fade out
                        className="absolute text-red-600 font-bold text-2xl uppercase tracking-widest border-4 border-red-600 p-4 rounded-xl"
                    >
                        TERMINATED
                    </motion.div>
                </>
            )}

            {/* STAGE 4: PURE (Success) */}
            {stage === 4 && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <CheckCircle className="w-20 h-20 text-emerald-500 mb-4" />
                    <span className="text-emerald-700 font-bold text-xl uppercase tracking-widest">Optimized</span>
                </motion.div>
            )}
        </div>
    );
}
