'use client';

import { Activity, ArrowUpRight, BarChart3, FlaskConical, History, Mic2, Settings2, Share2, Timer } from 'lucide-react';

export default function DashboardOverview() {
    return (
        <div className="space-y-6 h-full font-sans text-slate-800">
            {/* Professional Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                <div>
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                        Fermentation Command Center
                    </h1>
                    <p className="text-sm font-medium text-slate-500 mt-1">
                        Facility: <span className="text-slate-900">Cambridge, MA (Site A)</span> • Status: <span className="text-emerald-600 font-bold">OPERATIONAL</span>
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
                        <History size={16} className="text-slate-500" />
                        Export Logs
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm">
                        <Settings2 size={16} />
                        Configure Parameters
                    </button>
                </div>
            </div>

            {/* Top Metrics Row - High Density */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <MetricCard
                    label="Current Yield"
                    value="4.2 g/L"
                    trend="+12% vs Std"
                    icon={<FlaskConical size={18} />}
                    trendColor="text-emerald-600"
                />
                <MetricCard
                    label="Plasmid Retention"
                    value="99.98%"
                    trend="Stable (48h)"
                    icon={<Activity size={18} />}
                    trendColor="text-blue-600"
                />
                <MetricCard
                    label="Active Cheater Load"
                    value="0.00%"
                    trend="Below Detection"
                    icon={<Mic2 size={18} />}
                    trendColor="text-emerald-600"
                />
                <MetricCard
                    label="Est. Completion"
                    value="14h 20m"
                    trend="On Schedule"
                    icon={<Timer size={18} />}
                    trendColor="text-slate-600"
                />
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">

                {/* Chart Area (2/3 width) */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-slate-900 flex items-center gap-2">
                            <BarChart3 size={18} className="text-slate-500" />
                            Live Bioreactor Telemetry
                        </h3>
                        <div className="flex gap-2">
                            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                LIVE
                            </div>
                            <span className="text-xs font-medium text-slate-400 border border-slate-100 px-2 py-1 rounded">24h View</span>
                        </div>
                    </div>

                    {/* Simulated Professional Chart */}
                    <div className="flex-1 w-full bg-slate-50 rounded-lg border border-slate-100 relative overflow-hidden p-4">
                        {/* Grid Lines */}
                        <div className="absolute inset-x-0 top-1/4 h-px bg-slate-200/50 dashed"></div>
                        <div className="absolute inset-x-0 top-2/4 h-px bg-slate-200/50 dashed"></div>
                        <div className="absolute inset-x-0 top-3/4 h-px bg-slate-200/50 dashed"></div>

                        {/* Chart Content */}
                        <div className="relative h-full flex items-end justify-between px-2 gap-1 overflow-hidden opacity-90">
                            {/* Simulated Curves using standard divs for reliability */}
                            <svg className="absolute inset-0 w-full h-full p-4 overflow-visible" preserveAspectRatio="none">
                                {/* Green Line (Catcheater) */}
                                <path
                                    d="M0,300 C50,280 100,200 200,150 C300,100 400,80 500,75 C600,72 700,70 800,70"
                                    fill="none"
                                    stroke="#059669"
                                    strokeWidth="3"
                                    vectorEffect="non-scaling-stroke"
                                />
                                {/* Red Dotted Line (Control - Crash) */}
                                <path
                                    d="M0,300 C50,290 100,220 200,200 C250,190 300,300 350,350 C400,380 500,380 800,380"
                                    fill="none"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>

                            {/* Labels */}
                            <div className="absolute top-10 right-4 text-xs font-bold text-emerald-600 bg-white/80 px-2 py-1 rounded shadow-sm border border-emerald-100">
                                Catcheater Line (Stable)
                            </div>
                            <div className="absolute bottom-10 right-1/2 text-xs font-bold text-red-500 bg-white/80 px-2 py-1 rounded shadow-sm border border-red-100">
                                Unprotected Control (Crash)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Batch List & Alerts */}
                <div className="space-y-6">
                    {/* Active Batches */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Active Batches</h3>
                        <div className="space-y-3">
                            <BatchRow id="B-1024" strain="E. coli BL21" status="Running" time="34h" />
                            <BatchRow id="B-1025" strain="P. pastoris" status="Running" time="12h" />
                            <BatchRow id="B-1026" strain="C. glutamicum" status="Initializing" time="0h" />
                        </div>
                    </div>

                    {/* System Parameters */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Parameters (Avg)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-xs text-slate-500 mb-1">Temperature</div>
                                <div className="font-mono font-bold text-slate-800">37.0°C</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-xs text-slate-500 mb-1">Stir Rate</div>
                                <div className="font-mono font-bold text-slate-800">250 RPM</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-xs text-slate-500 mb-1">pH</div>
                                <div className="font-mono font-bold text-slate-800">7.02</div>
                            </div>
                            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="text-xs text-slate-500 mb-1">Dissolved O2</div>
                                <div className="font-mono font-bold text-slate-800">30%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Subcomponents for cleaner code
function MetricCard({ label, value, trend, icon, trendColor }: any) {
    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-medium text-slate-500">{label}</span>
                <span className="text-slate-400">{icon}</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
            <div className={`text-xs font-bold ${trendColor} flex items-center gap-1`}>
                <ArrowUpRight size={12} />
                {trend}
            </div>
        </div>
    );
}

function BatchRow({ id, strain, status, time }: any) {
    return (
        <div className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
            <div>
                <div className="font-bold text-slate-800 text-sm">{id}</div>
                <div className="text-xs text-slate-500">{strain}</div>
            </div>
            <div className="text-right">
                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide mb-1
                    ${status === 'Running' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}
                 `}>
                    {status}
                </span>
                <div className="text-xs font-mono text-slate-600">{time} elapsed</div>
            </div>
        </div>
    );
}
