'use client';

import { Beaker, Settings, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';

const kits = [
    {
        id: 'K-101',
        name: 'The Snitch - Core Sensor',
        type: 'Hardware',
        status: 'Active',
        lastCalibrated: 'Dec 15, 2025',
        usage: '12 runs',
        image: 'bg-amber-100 text-amber-600'
    },
    {
        id: 'K-102',
        name: 'The Enforcer - Kill Switch',
        type: 'Module',
        status: 'Optimization Needed',
        lastCalibrated: 'Nov 20, 2025',
        usage: '4 runs',
        image: 'bg-red-100 text-red-600'
    },
    {
        id: 'P-550',
        name: 'pCatch-BL21 (Custom)',
        type: 'Plasmid',
        status: 'Depleted',
        lastCalibrated: 'Oct 01, 2025',
        usage: '50 runs',
        image: 'bg-blue-100 text-blue-600'
    }
];

export default function MyKits() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-display font-bold text-foreground">My Kits & Plasmids</h1>
                    <p className="text-muted-foreground">Manage your deployed sensors and genetic stock.</p>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                    + Register New Kit
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {kits.map((kit) => (
                    <div key={kit.id} className="card p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kit.image}`}>
                                <Beaker size={20} />
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-medium 
                                ${kit.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                                    kit.status === 'Depleted' ? 'bg-slate-100 text-slate-500' : 'bg-orange-50 text-orange-600'}`}>
                                {kit.status}
                            </span>
                        </div>
                        <h3 className="font-bold text-foreground truncate">{kit.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{kit.id} • {kit.type}</p>

                        <div className="space-y-2 text-sm text-slate-500 mb-6">
                            <div className="flex justify-between">
                                <span>Runs</span>
                                <span className="font-medium text-foreground">{kit.usage}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Last Action</span>
                                <span>{kit.lastCalibrated}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 py-2 border border-border rounded-lg text-xs font-medium hover:bg-slate-50 text-foreground">
                                View Data
                            </button>
                            <button className="p-2 border border-border rounded-lg hover:bg-slate-50 text-muted-foreground">
                                <Settings size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
