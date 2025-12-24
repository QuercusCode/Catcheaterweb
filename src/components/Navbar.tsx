'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Docs', href: '/docs' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-0 right-0 z-[100] px-4 md:px-6 pointer-events-none">
            <div className="max-w-7xl mx-auto pointer-events-auto">
                <div className="glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between shadow-xl shadow-primary/5 border border-white/50 bg-white/80 backdrop-blur-md">

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

                    {/* MIDDLE: Search (Hidden on mobile) */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" size={14} />
                        <input
                            type="text"
                            placeholder="Search strains..."
                            className="w-full bg-slate-100/50 border border-transparent focus:border-primary/20 hover:bg-slate-100 rounded-full py-1.5 pl-9 pr-4 text-xs focus:ring-2 focus:ring-primary/10 transition-all font-sans outline-none"
                        />
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard/kits" className="hidden sm:block text-xs font-bold text-muted-foreground hover:text-primary transition-colors">
                            My Kits
                        </Link>
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
                        className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-4 pointer-events-auto bg-white border border-border shadow-2xl"
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
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
