'use client';

import { Users, Target, Globe, Award } from 'lucide-react';

const team = [
    {
        name: "Dr. Elena Vance",
        role: "Chief Scientific Officer",
        bio: "Former PI at Stanford Bioengineering. Expert in quorum sensing and genetic circuit stability.",
        initials: "EV"
    },
    {
        name: "Marcus Thorne",
        role: "Lead Engineer",
        bio: "Specialist in bioreactor scale-up and industrial fermentation processes.",
        initials: "MT"
    },
    {
        name: "Sarah Lin",
        role: "Head of Product",
        bio: "Bridging the gap between synthetic biology research and commercial application.",
        initials: "SL"
    }
];

export default function About() {
    return (
        <div className="min-h-screen bg-background font-sans">
            {/* Hero Section */}
            <section className="bg-primary/5 border-b border-primary/10 py-20">
                <div className="container px-6 mx-auto max-w-7xl text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Our Mission
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
                        Stop Feeding the <span className="text-primary italic">Cheaters</span>.
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        We are a team of synthetic biologists and engineers dedicated to solving the plasmid instability problem that plagues industrial fermentation.
                    </p>
                </div>
            </section>

            {/* Stats / Values */}
            <section className="py-16 border-b border-border">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Target size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-1">99.9%</h3>
                            <p className="text-sm text-muted-foreground">Pension Stability</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-1">Globally</h3>
                            <p className="text-sm text-muted-foreground">Certified Labs</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-1">Top Tier</h3>
                            <p className="text-sm text-muted-foreground">NIH Safety Compliance</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Users size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-1">24/7</h3>
                            <p className="text-sm text-muted-foreground">Expert Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 bg-slate-50/50">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Meet the Minds</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our team combines decades of experience in microbiology, genetic engineering, and industrial bioprocessing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="card bg-white p-8 rounded-2xl border border-border shadow-sm text-center hover:shadow-md transition-all">
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-xl font-bold text-slate-400 mx-auto mb-6 border-2 border-white shadow-sm">
                                    {member.initials}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                <p className="text-sm font-medium text-primary mb-4">{member.role}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
