'use client';

import { Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: "Maximizing Yield: The Hidden Cost of Cheater Cells",
        excerpt: "Recent studies show that up to 40% of metabolic energy in standard fermentation is wasted on non-productive plasmid-free cells. Here's how to reclaim it.",
        date: "Dec 12, 2025",
        author: "Dr. Sarah Chen",
        category: "Research",
        readTime: "5 min read",
        image: "bg-blue-50" // Placeholder class
    },
    {
        id: 2,
        title: "Protein Solubility Refactored",
        excerpt: "Why higher biomass doesn't always equal more protein. Understanding the aggregate-to-soluble ratio in high-density cultures.",
        date: "Nov 28, 2025",
        author: "James Wilson",
        category: "Engineering",
        readTime: "8 min read",
        image: "bg-indigo-50"
    },
    {
        id: 3,
        title: "The Snitch: A New Era of Biocontainment",
        excerpt: "Safety levels in synthetic biology are evolving. How our autonomous kill-switches meet the new NIH Guidelines for recombinant DNA.",
        date: "Nov 15, 2025",
        author: "Tech Team",
        category: "Safety",
        readTime: "4 min read",
        image: "bg-emerald-50"
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            {/* Header */}
            <header className="bg-surface border-b border-border py-16">
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
                            <div className={`h-48 ${article.image} flex items-center justify-center border-b border-border`}>
                                <span className="text-muted-foreground/30 font-display font-bold text-4xl group-hover:scale-110 transition-transform duration-500">
                                    {article.category[0]}
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md font-medium text-slate-600">
                                        <Tag size={12} /> {article.category}
                                    </span>
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
