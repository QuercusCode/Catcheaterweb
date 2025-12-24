'use client';

import { Search } from 'lucide-react';

export default function Hero() {
    return (
        <header className="bg-surface border-b border-border py-4 sticky top-0 z-50">
            <div className="w-full max-w-[1920px] mx-auto px-6 flex justify-between items-center">

                {/* Logo / Brand */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">C</div>
                    <span className="font-display font-bold text-xl text-foreground">Catcheater</span>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-lg mx-8 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                        type="text"
                        placeholder="Search for strains, plasmids, or kits..."
                        className="w-full bg-background border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                    />
                </div>

                {/* Account / Nav */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">My Kits</button>
                    <div className="w-8 h-8 bg-gray-200 rounded-full border border-white shadow-sm" />
                </div>
            </div>
        </header>
    );
}
