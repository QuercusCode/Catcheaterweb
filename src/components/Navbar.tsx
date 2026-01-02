'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, FileText, FlaskConical, LayoutDashboard, HelpCircle } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const navLinks = [
    { name: 'Products', href: '/#products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
];

// Content Index for Search
const searchIndex = [
    { type: 'Page', title: 'Pricing & Plans', href: '/pricing', icon: FileText },
    { type: 'Page', title: 'Documentation', href: '/docs', icon: HelpCircle },
    { type: 'Page', title: 'Research Blog', href: '/blog', icon: FileText },
    { type: 'Page', title: 'About Catcheater', href: '/about', icon: FileText },
    { type: 'Page', title: 'Market Survey', href: '/survey', icon: FileText },
    { type: 'Action', title: 'Console Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { type: 'Action', title: 'My Kits', href: '/dashboard/kits', icon: FlaskConical },
    { type: 'Blog', title: 'The Metabolic Burden of Cheaters', href: '/blog/1', icon: FileText },
    { type: 'Blog', title: 'Inside the Snitch & Enforcer', href: '/blog/2', icon: FileText },
    { type: 'Blog', title: 'Scaling to 10,000L: Stability Case Study', href: '/blog/3', icon: FileText },
    { type: 'Doc', title: 'System Concept', href: '/docs#concept', icon: HelpCircle },
    { type: 'Doc', title: 'Workflow Integration', href: '/docs#workflow', icon: HelpCircle },
    { type: 'Doc', title: 'Common Questions (FAQ)', href: '/docs#faq', icon: HelpCircle },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const router = useRouter();

    const filteredResults = useMemo(() => {
        if (!query) return [];
        return searchIndex.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8); // Limit to top 8 results
    }, [query]);

    const handleSelect = (href: string) => {
        router.push(href);
        setQuery('');
        setIsSearchFocused(false);
    };

    return (
        <nav className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-6 pointer-events-none">
            <div className="max-w-7xl mx-auto pointer-events-auto relative">
                <div className="glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between shadow-xl shadow-primary/5 border border-white/50 bg-white/80 backdrop-blur-md relative z-20">

                    {/* LEFT: Logo + Links */}
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center justify-center w-28 h-14 rounded-xl overflow-hidden bg-slate-100/50 shadow-sm border border-slate-200/50 hover:border-primary/20 transition-colors">
                            <Image
                                src="/logo-final.png"
                                alt="Catcheater Final Logo"
                                width={112}
                                height={56}
                                className="object-contain p-1"
                            />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* MIDDLE: Search (Functional) */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={14} />
                        <input
                            type="text"
                            placeholder="Search pages, docs, or strains..."
                            className="w-full bg-slate-100/50 border border-transparent focus:border-primary/20 hover:bg-slate-100 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:ring-2 focus:ring-primary/10 transition-all font-sans outline-none text-foreground"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} // Delay toggle to allow click
                        />

                        {/* Search Results Dropdown */}
                        <AnimatePresence>
                            {(isSearchFocused && query) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-border shadow-2xl overflow-hidden py-2"
                                >
                                    {filteredResults.length > 0 ? (
                                        <ul>
                                            {filteredResults.map((result) => (
                                                <li key={result.href}>
                                                    <button
                                                        onClick={() => handleSelect(result.href)}
                                                        className="w-full px-4 py-2 text-left hover:bg-slate-50 flex items-center gap-3 transition-colors group"
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                            <result.icon size={14} />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-bold text-foreground">{result.title}</div>
                                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{result.type}</div>
                                                        </div>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="px-4 py-3 text-sm text-muted-foreground text-center">
                                            No results found for "{query}"
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard/kits" className="hidden sm:block text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                            My Kits
                        </Link>
                        <a
                            href="/survey"
                            className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full hover:bg-indigo-100 transition-colors border border-indigo-100"
                        >
                            Join Research
                        </a>
                        <Link href="/dashboard" className="bg-primary text-white border border-primary hover:bg-blue-700 px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-lg shadow-primary/20">
                            Console
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-foreground p-1"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Dropdown */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-4 pointer-events-auto bg-white border border-border shadow-2xl relative z-10"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary px-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-border" />
                        <Link href="/dashboard" className="w-full bg-slate-100 text-foreground px-4 py-2 rounded-lg text-sm font-bold text-center">
                            Dashboard
                        </Link>
                        <Link href="/survey" className="w-full bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-2 rounded-lg text-sm font-bold text-center">
                            Join Research
                        </Link>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
