'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PlasmidViewerProps {
    promoter: string;
    promoterLabel?: string;
    resistance: string;
    resistanceLabel?: string;
    origin: string;
    originLabel?: string;
    insertSize?: number; // 0 if no insert
}

export default function PlasmidViewer({
    promoter, promoterLabel,
    resistance, resistanceLabel,
    origin, originLabel,
    insertSize = 0
}: PlasmidViewerProps) {
    // SVG Helper: Calculate Arc Path
    const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    };

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    // Configuration
    // ViewBox 600x400 to absolutely maximize horizontal space for labels
    const centerX = 300;
    const centerY = 200;
    const radius = 90;
    const strokeWidth = 24;

    // Dynamic Colors based on Selection
    const getColor = (type: string, value: string) => {
        if (!value) return '#cbd5e1'; // slate-300
        if (type === 'promoter') return '#3b82f6'; // blue-500
        if (type === 'resistance') return '#ef4444'; // red-500
        if (type === 'origin') return '#0f172a'; // slate-900
        return '#cbd5e1';
    };

    const LabelWithLeader = ({ angle, labelContent, color, offset = 30 }: { angle: number, labelContent: React.ReactNode, color: string, offset?: number }) => {
        const start = polarToCartesian(centerX, centerY, radius + (strokeWidth / 2) + 4, angle);
        const elbow = polarToCartesian(centerX, centerY, radius + offset + 10, angle);
        const isRight = angle < 180;
        const endX = isRight ? elbow.x + 20 : elbow.x - 20; // Thinner leader for cleaner look

        return (
            <g>
                <circle cx={start.x} cy={start.y} r="3" fill={color} />
                <path d={`M ${start.x} ${start.y} L ${elbow.x} ${elbow.y} L ${endX} ${elbow.y}`} fill="none" stroke={color} strokeWidth="2" />
                <text
                    x={isRight ? endX + 8 : endX - 8}
                    y={elbow.y + 6}
                    fontSize="18" // Increased to 18px to compensate for 600px width scaling
                    fontWeight="700"
                    fill="#1e293b"
                    textAnchor={isRight ? "start" : "end"}
                    className="font-sans"
                >
                    {labelContent}
                </text>
            </g>
        );
    };

    const finalPromoterLabel = promoterLabel || promoter;
    const finalResistanceLabel = resistanceLabel || resistance;
    const finalOriginLabel = originLabel || origin;

    // Logic to strip "Promoter" word if redundant for the P_ subscript
    // If label is "T7", result P_T7.
    // If label is "araBAD", result P_araBAD.
    // If label is "T7 Promoter", strip "Promoter" -> "T7" -> P_T7.
    const cleanPromoterName = finalPromoterLabel.replace(/promoter/i, '').trim();

    return (
        <div className="relative w-full max-w-[400px] mx-auto bg-slate-50/50 rounded-xl p-2">
            <svg viewBox="0 0 600 400" className="w-full h-auto">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* 1. Backbone (Base Ring) */}
                <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#e2e8f0" strokeWidth={strokeWidth} />
                <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />

                {/* 2. Origin */}
                <path
                    d={describeArc(centerX, centerY, radius, 190, 230)}
                    fill="none"
                    stroke={getColor('origin', origin)}
                    strokeWidth={strokeWidth}
                    strokeLinecap="butt"
                />
                <LabelWithLeader
                    angle={210}
                    labelContent={`Ori: ${finalOriginLabel}`}
                    color={getColor('origin', origin)}
                    offset={50}
                />

                {/* 3. Resistance Marker */}
                <path
                    d={describeArc(centerX, centerY, radius, 110, 150)}
                    fill="none"
                    stroke={getColor('resistance', resistance)}
                    strokeWidth={strokeWidth}
                    strokeLinecap="butt"
                    cursor="pointer"
                />
                <LabelWithLeader
                    angle={130}
                    labelContent={finalResistanceLabel}
                    color={getColor('resistance', resistance)}
                    offset={50}
                />

                {/* 4. Promoter - Visualizing as an arrow on top of the ring */}
                {/* Arrow body */}
                <path
                    d={describeArc(centerX, centerY, radius, 340, 359.9)}
                    fill="none" stroke={getColor('promoter', promoter)} strokeWidth={strokeWidth + 4} strokeLinecap="butt"
                />
                <path
                    d={describeArc(centerX, centerY, radius, 0, 20)}
                    fill="none" stroke={getColor('promoter', promoter)} strokeWidth={strokeWidth + 4} strokeLinecap="butt"
                />
                {/* Arrow Head */}
                <path
                    d={`M ${polarToCartesian(centerX, centerY, radius + (strokeWidth / 2) + 6, 20).x} ${polarToCartesian(centerX, centerY, radius + (strokeWidth / 2) + 6, 20).y} 
                       L ${polarToCartesian(centerX, centerY, radius, 30).x} ${polarToCartesian(centerX, centerY, radius, 30).y} 
                       L ${polarToCartesian(centerX, centerY, radius - (strokeWidth / 2) - 6, 20).x} ${polarToCartesian(centerX, centerY, radius - (strokeWidth / 2) - 6, 20).y} Z`}
                    fill={getColor('promoter', promoter)}
                />
                <LabelWithLeader
                    angle={0}
                    labelContent={<>P<tspan baselineShift="sub" fontSize="14">{cleanPromoterName}</tspan></>}
                    color={getColor('promoter', promoter)}
                    offset={60}
                />

                {/* 5. Insert (Gene) - Position: 50 to 90 */}
                {insertSize > 0 && (
                    <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <path
                            d={describeArc(centerX, centerY, radius, 50, 90)}
                            fill="none"
                            stroke="#f97316" // orange-500
                            strokeWidth={strokeWidth - 8}
                            strokeLinecap="butt"
                        />
                        <LabelWithLeader angle={70} labelContent="Target Gene" color="#f97316" offset={50} />
                    </motion.g>
                )}

                {/* Center Content */}
                <circle cx={centerX} cy={centerY} r={radius - (strokeWidth / 2) - 5} fill="white" className="drop-shadow-sm" />
                <foreignObject x={centerX - 60} y={centerY - 60} width="120" height="120">
                    <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Total Size</span>
                        <span className="text-xl font-bold text-slate-800 font-mono">{3000 + insertSize}</span>
                        <span className="text-[9px] text-slate-400 font-medium">base pairs</span>
                    </div>
                </foreignObject>

            </svg>
        </div>
    );
}
