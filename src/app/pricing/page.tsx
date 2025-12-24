'use client';

import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tiers = [
    {
        name: 'Evaluation Kit',
        price: '€499',
        description: 'Perfect for pilot studies and academic verification.',
        features: [
            '1x Snitch Sensor Strain',
            '1x Toxic Control Strain',
            '5x Reaction Aliquots',
            'Basic Documentation',
            '48h Results Guarantee'
        ],
        cta: 'Order Evaluation',
        href: '/#order',
        popular: false
    },
    {
        name: 'Standard License',
        price: '€2,500',
        period: '/year',
        description: 'For startups and recurring production batches.',
        features: [
            '10x Kits per Year',
            'Priority Email Support',
            'Commercial Use Rights (Small Scale)',
            'Access to Dashboard Console',
            'Monthly Calibration Updates'
        ],
        cta: 'Subscribe',
        href: '/dashboard',
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For industrial-scale fermentation (>1000L).',
        features: [
            'Unlimited Volume License',
            'Custom Strain Engineering',
            'On-site Integration Support',
            'Dedicate Account Manager',
            'SLA & Yield Guarantees'
        ],
        cta: 'Contact Sales',
        href: 'mailto:sales@catcheater.bio',
        popular: false
    }
];

export default function Pricing() {
    return (
        <div className="min-h-screen bg-background font-sans max-w-7xl mx-auto">
            {/* Header */}
            <div className="py-20 px-6 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                    Transparent Pricing
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                    Simple Pricing for <span className="text-primary italic">Complex Biology</span>.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Start with a low-risk evaluation kit, then scale with confidence. No hidden fees or complex royalties.
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="container px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`relative flex flex-col p-8 bg-surface rounded-2xl border ${tier.popular ? 'border-primary shadow-xl shadow-primary/10' : 'border-border shadow-sm'} transition-all hover:shadow-lg`}>
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-foreground mb-2">{tier.name}</h3>
                                <p className="text-sm text-muted-foreground h-10">{tier.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                                {tier.period && <span className="text-muted-foreground ml-1">{tier.period}</span>}
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                                        <div className="mt-0.5 min-w-4 text-emerald-500">
                                            <Check size={16} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.href}
                                className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${tier.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-slate-100 text-foreground hover:bg-slate-200'}`}
                            >
                                {tier.cta} <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mt-24">
                    <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">Do you offer academic discounts?</h3>
                            <p className="text-sm text-muted-foreground">Yes! The Evaluation Kit price listed is already subsidized for academic verification. Contact us for bulk university licenses.</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">How fast is shipping?</h3>
                            <p className="text-sm text-muted-foreground">We ship all Evaluation Kits via FedEx Overnight on dry ice to ensure strain viability.</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">Is a Material Transfer Agreement (MTA) required?</h3>
                            <p className="text-sm text-muted-foreground">Yes, for the Standard License and Enterprise tiers. The Evaluation Kit operates under a simplified implicit license for non-commercial use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
