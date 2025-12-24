'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Package, ShoppingCart, Settings, LogOut, Beaker } from 'lucide-react';
import { clsx } from 'clsx';

const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Kits', href: '/dashboard/kits', icon: Beaker },
    { name: 'Orders', href: '/dashboard/orders', icon: ShoppingCart },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-surface border-r border-border h-[calc(100vh-4rem)] sticky top-16 hidden md:flex flex-col">
            <div className="p-6">
                <h2 className="text-xs font-bold text-muted uppercase tracking-wider mb-4">Dashboard</h2>
                <nav className="space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={clsx(
                                    'flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                                    isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-slate-50 hover:text-foreground'
                                )}
                            >
                                <Icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-border">
                <button className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/5 rounded-lg w-full transition-colors">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
