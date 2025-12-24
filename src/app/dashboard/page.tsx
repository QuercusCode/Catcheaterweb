'use client';

import { ArrowUpRight, CheckCircle2, MoreHorizontal, TrendingUp, Users, Wallet, Zap } from 'lucide-react';

export default function DashboardOverview() {
    return (
        <div className="h-full bg-slate-50/50 p-8 font-sans text-slate-900">
            {/* Top Navigation / Breadcrumb Area */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Enterprise Overview</h1>
                    <p className="text-sm text-slate-500 mt-1">Global Production • Q4 2025</p>
                </div>
                <div className="flex gap-3">
                    <span className="text-xs font-medium px-3 py-1.5 bg-white border border-slate-200 rounded-md text-slate-600 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        System Operational
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors">
                        Generate Report
                    </button>
                </div>
            </div>

            {/* Main Stats Row - FinTech Style */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <MetricCard
                    label="Total Savings"
                    value="$1.24M"
                    change="+18%"
                    period="vs last quarter"
                    icon={<Wallet className="text-blue-600" size={20} />}
                />
                <MetricCard
                    label="Production Efficiency"
                    value="94.2%"
                    change="+4.5%"
                    period="vs industry avg"
                    icon={<Zap className="text-amber-500" size={20} />}
                />
                <MetricCard
                    label="Successful Batches"
                    value="842"
                    change="100%"
                    period="success rate"
                    icon={<CheckCircle2 className="text-emerald-500" size={20} />}
                />
                <MetricCard
                    label="Active Sites"
                    value="12"
                    change="+2"
                    period="new deployments"
                    icon={<Users className="text-purple-500" size={20} />}
                />
            </div>

            {/* Split Section: Graph & Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Graph Area */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-base font-semibold text-slate-900">Yield Performance</h3>
                            <p className="text-sm text-slate-500">Standardized across all facilities</p>
                        </div>
                        <div className="flex bg-slate-100 rounded-lg p-1">
                            <button className="px-3 py-1 text-xs font-medium bg-white rounded shadow-sm text-slate-900">Revenue</button>
                            <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Volume</button>
                        </div>
                    </div>

                    {/* CSS-only Bar Chart */}
                    <div className="h-64 flex items-end justify-between gap-4 px-2">
                        {[45, 52, 49, 62, 58, 65, 72, 68, 75, 82, 85, 94].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end group">
                                <div
                                    className="w-full bg-blue-500/10 group-hover:bg-blue-600/20 rounded-t-sm transition-all relative overflow-hidden"
                                    style={{ height: `${h}%` }}
                                >
                                    {/* Filled part */}
                                    <div className="absolute bottom-0 left-0 w-full bg-blue-600 rounded-t-sm transition-all duration-500" style={{ height: `${h * 0.8}%` }}></div>
                                </div>
                                <div className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Updates Feed */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-sm font-semibold text-slate-900">Live Updates</h3>
                        <MoreHorizontal size={16} className="text-slate-400" />
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <FeedItem
                            title="Batch #492 Completed"
                            desc="Boston Facility • Yield: 5.2g/L"
                            time="12m ago"
                            dot="bg-emerald-500"
                        />
                        <FeedItem
                            title="New Strain Deployed"
                            desc="Zurich Lab • E. coli K-12"
                            time="2h ago"
                            dot="bg-blue-500"
                        />
                        <FeedItem
                            title="Optimization Alert"
                            desc="System suggests temp adjustment"
                            time="5h ago"
                            dot="bg-amber-500"
                        />
                        <FeedItem
                            title="Compliance Report"
                            desc="Generated via API"
                            time="1d ago"
                            dot="bg-slate-300"
                        />
                    </div>
                    <div className="p-3 border-t border-slate-100 bg-slate-50 rounded-b-xl">
                        <button className="w-full text-xs font-medium text-slate-600 hover:text-slate-900 py-1">View All Activity</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ label, value, change, period, icon }: any) {
    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
                <div className="flex items-center text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                    <TrendingUp size={12} className="mr-1" />
                    {change}
                </div>
            </div>
            <div className="mb-1">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
            </div>
            <p className="text-xs text-slate-500 font-medium">{label}</p>
            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wide">{period}</p>
        </div>
    );
}

function FeedItem({ title, desc, time, dot }: any) {
    return (
        <div className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${dot}`}></div>
            <div>
                <h4 className="text-xs font-semibold text-slate-900">{title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                <p className="text-[10px] text-slate-400 mt-1">{time}</p>
            </div>
        </div>
    );
}
