// ... imports
import { Check, ArrowRight, FlaskConical, Factory, Building2, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const tiers = [
    {
        name: 'Evaluation Kit',
        price: '€499',
        icon: FlaskConical,
        description: 'Perfect for pilot studies and academic verification.',
        features: [
            '1x Snitch Sensor Strain (BL21)',
            '1x Toxic Control Strain',
            '5x Reaction Aliquots',
            'Basic Documentation (PDF)',
            '48h Results Guarantee',
            'Non-Commercial License'
        ],
        cta: 'Order Evaluation',
        href: '/#order',
        popular: false,
        color: 'text-foreground'
    },
    {
        name: 'Scale-Up License',
        price: '€2,500',
        period: '/year',
        icon: Factory,
        description: 'For startups and recurring production batches.',
        features: [
            '10x Kits per Year',
            'Priority Email Support',
            'Commercial Use Rights (<500L)',
            'Access to Dashboard Console',
            'Monthly Calibration Updates',
            'No Royalties on Product'
        ],
        cta: 'Subscribe',
        href: '/dashboard',
        popular: true,
        color: 'text-primary'
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        icon: Building2,
        description: 'For industrial-scale fermentation (>1000L).',
        features: [
            'Unlimited Volume License',
            'Custom Strain Engineering',
            'On-site Integration Support',
            'Dedicated Account Manager',
            'SLA & Yield Guarantees',
            'Full Tech Transfer Package'
        ],
        cta: 'Contact Sales',
        href: 'mailto:sales@catcheater.bio',
        popular: false,
        color: 'text-purple-600'
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
                    Start with a low-risk evaluation kit, then scale with confidence. <br />
                    <span className="font-bold text-foreground">No hidden fees. No royalties. Just yield.</span>
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="container px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`relative flex flex-col p-8 bg-surface rounded-2xl border ${tier.popular ? 'border-primary shadow-2xl shadow-primary/10 scale-105 z-10' : 'border-border shadow-sm'} transition-all hover:shadow-lg`}>
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 ${tier.color}`}>
                                    <tier.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                                <p className="text-sm text-muted-foreground h-10">{tier.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline">
                                <span className="text-4xl font-bold text-foreground tracking-tight">{tier.price}</span>
                                {tier.period && <span className="text-muted-foreground ml-1 font-medium">{tier.period}</span>}
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
                                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${tier.popular
                                        ? 'bg-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                                        : 'bg-slate-100 text-foreground hover:bg-slate-200'
                                    }`}
                            >
                                {tier.cta} <ArrowRight size={16} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto mt-24">
                    <div className="text-center mb-12">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HelpCircle size={24} />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Everything you need to know about licensing and tech transfer.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">Do you take royalties on the product?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                <span className="font-semibold text-emerald-600">Never.</span> Your product is yours. We charge a flat fee for the strain license and the recurring diagnostic kits. Your downstream IP remains 100% yours.
                            </p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">Can I perform a tech transfer?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Yes. The Enterprise tier includes a full Tech Transfer package to move the strain from our lab to your CMO or manufacturing facility.
                            </p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">How fast is shipping?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">We ship all Evaluation Kits via FedEx Overnight on dry ice to ensure strain viability. International shipping is available.</p>
                        </div>
                        <div className="p-6 bg-surface border border-border rounded-xl">
                            <h3 className="font-bold text-foreground mb-2">Is an MTA required?</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">Yes, for the Standard License and Enterprise tiers. The Evaluation Kit operates under a simplified implicit license for non-commercial use.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
