'use client';

import { Activity, Package, AlertCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-display font-bold text-foreground">Welcome back, Dr. Vance</h1>
                <p className="text-muted-foreground">Here's what's happening with your plasmid lines today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 border-l-4 border-l-primary flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Active Kits</p>
                        <h3 className="text-3xl font-bold text-foreground mt-2">12</h3>
                    </div>
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                        <Activity size={24} />
                    </div>
                </div>
                <div className="card p-6 border-l-4 border-l-emerald-500 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">System Health</p>
                        <h3 className="text-3xl font-bold text-foreground mt-2">98%</h3>
                    </div>
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                        <ArrowUpRight size={24} />
                    </div>
                </div>
                <div className="card p-6 border-l-4 border-l-orange-500 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
                        <h3 className="text-3xl font-bold text-foreground mt-2">1</h3>
                    </div>
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                        <Package size={24} />
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="card overflow-hidden">
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <h3 className="font-bold text-lg text-foreground">Recent Activity</h3>
                    <Link href="/dashboard/orders" className="text-sm text-primary hover:underline">
                        View All
                    </Link>
                </div>
                <div className="divide-y divide-border">
                    <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">Order #CK-1024 Shipped</p>
                            <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-600 rounded">Shipped</span>
                    </div>
                    <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">New Plasmid Configuration Saved</p>
                            <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded">Studio</span>
                    </div>
                    <div className="p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">Calibration Required: Kit #A-99</p>
                            <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                        <span className="text-xs font-medium px-2 py-1 bg-orange-50 text-orange-600 rounded">Alert</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
