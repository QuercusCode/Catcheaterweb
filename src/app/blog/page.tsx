'use client';

// ... (imports)
import { Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
    {
        id: 1,
        title: "The Metabolic Burden of Cheaters: Why Your Yield Plateaued",
        excerpt: "Plasmid-bearing cells grow 15-20% slower than their plasmid-free counterparts. In a standard bioreactor, this differential growth rate allows 'cheater' cells to overtake the culture in just 40 generations. We analyze the math behind the takeover.",
        date: "Dec 18, 2025",
        author: "AmirMohammad Cheraghali",
        category: "Research",
        readTime: "6 min read",
        image: "/blog/metabolic-burden.png"
    },
    {
        id: 2,
        title: "Inside the Snitch & Enforcer: A Dual-Layer Defense",
        excerpt: "How do you distinguish a stressed producer from a lazy cheater? Our 'Snitch' sensor detects the heat-shock response of protein burden, while the 'Enforcer' checks for plasmid retention. A deep dive into the AND-gate logic of pCatch.",
        date: "Dec 10, 2025",
        author: "Sogand Azadeh",
        category: "Engineering",
        readTime: "10 min read",
        image: "/blog/genetic-circuit.png"
    },
    {
        id: 3,
        title: "Scaling to 10,000L: Stability Case Study",
        excerpt: "Industrial fermentation requires stability over hundreds of bacterial generations. In a recent pilot with a Top 5 Pharma partner, the Catcheater system maintained >99% plasmid retention for 120 hours of continuous culture.",
        date: "Nov 25, 2025",
        author: "Tech Team",
        category: "Case Study",
        readTime: "5 min read",
        image: "/blog/bioreactor-scale.png"
    },
    {
        id: 4,
        title: "The 250 Generation Challenge: Why Long-Term Fermentation Fails",
        excerpt: "Continuous biomanufacturing is the holy grail of efficiency, but genetic drift makes it nearly impossible. We explore how 'Cheater' mutations accumulate over time and why traditional selection methods fail after generation 60.",
        date: "Dec 22, 2025",
        author: "Dr. Elena Vance",
        category: "Deep Tech",
        readTime: "9 min read",
        image: "/blog/genetic-drift.png"
    },
    {
        id: 5,
        title: "Bio-Manufacturing in 2030: The End of Antibiotics?",
        excerpt: "Regulatory pressure from the FDA and EMA is mounting to remove antibiotics from the manufacturing chain. How will the industry adapt when the primary method of plasmid retention is banned?",
        date: "Dec 20, 2025",
        author: "AmirMohammad Cheraghali",
        category: "Industry Outlook",
        readTime: "7 min read",
        image: "/blog/future-biomanufacturing.png"
    },
    {
        id: 6,
        title: "ROI Analysis: The Hidden Cost of Batch Failure",
        excerpt: "A single crashed fermentation tank can cost upwards of €250,000 in lost media, time, and opportunity cost. We break down the unit economics of 'Stability Assurance' and why it pays for itself in a single run.",
        date: "Dec 15, 2025",
        author: "Strategy Team",
        category: "Economics",
        readTime: "6 min read",
        image: "/blog/roi-analysis.png"
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <header className="bg-white border-b border-border py-16">
                <div className="container px-6 mx-auto max-w-7xl text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Research Insights</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Deep dives into synthetic biology, fermentation optimization, and the science behind Catcheater.
                    </p>
                </div>
            </header>

            {/* Articles Grid */}
            <main className="container px-6 py-12 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article key={article.id} className="card bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                            {/* Image Placeholder */}
                            <div className="relative h-48 w-full border-b border-border overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-foreground shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} /> {article.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold font-display text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${article.id}`}>
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                            <User size={12} />
                                        </div>
                                        {article.author}
                                    </div>
                                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
