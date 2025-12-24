'use client';

import { motion } from 'framer-motion';

export default function DataTicker() {
    const tickerItems = [
        '14,020 Cheaters Eliminated Today',
        '3 New Proteins Stabilized',
        'System Status: Operational',
        'Yield Optimization: +12.4%',
        '14,020 Cheaters Eliminated Today', // Repel for loop
    ];

    return (
        <div className="w-full bg-background border-b border-glass-border overflow-hidden py-2 z-50 relative">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-8"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: 'linear',
                        duration: 20,
                    }}
                >
                    {tickerItems.map((item, index) => (
                        <span key={index} className="text-xs font-mono text-primary/80 uppercase tracking-widest flex items-center">
                            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            {item}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {tickerItems.map((item, index) => (
                        <span key={`dup-${index}`} className="text-xs font-mono text-primary/80 uppercase tracking-widest flex items-center">
                            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
