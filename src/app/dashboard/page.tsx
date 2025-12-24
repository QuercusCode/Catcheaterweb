'use client';

import { ArrowUpRight, Bell, Calendar, CheckCircle2, ChevronDown, Download, Filter, MoreHorizontal, Plus, Settings, TrendingUp, Users, Wallet, Zap } from 'lucide-react';
import { useState } from 'react';

export default function DashboardOverview() {
    const [viewMode, setViewMode] = useState<'revenue' | 'volume'>('revenue');
    const [isGenerating, setIsGenerating] = useState(false);
    const [dateRange, setDateRange] = useState('This Quarter');

    const handleGenerateReport = () => {
        setIsGenerating(true);
        setTimeout(() => setIsGenerating(false), 2000);
    };

    return (
        <div className="h-full bg-slate-50/50 p-8 font-sans text-slate-900 overflow-y-auto">
            {/* Top Navigation / Breadcrumb Area */}
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Enterprise Overview</h1>
                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                        Global Production
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center gap-1 text-slate-900 font-medium cursor-pointer hover:bg-white px-2 py-0.5 rounded border border-transparent hover:border-slate-200 transition-colors">
                            <Calendar size={12} /> {dateRange} <ChevronDown size={12} />
                        </span>
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="p-2 bg-white border border-slate-200 rounded-md text-slate-500 hover:text-slate-900 shadow-sm relative">
                        <Bell size={20} />
                        <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                    <span className="text-xs font-medium px-3 py-1.5 bg-white border border-slate-200 rounded-md text-slate-600 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        System Operational
                    </span>
                    <button
                        onClick={handleGenerateReport}
                        disabled={isGenerating}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isGenerating ? (
                            <>Generating...</>
                        ) : (
                            <>
                                <Download size={16} /> Generate Report
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Main Stats Row - FinTech Style */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <MetricCard
                    label="Total Savings"
                    value="€1.24M"
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

                {/* Main Graph Area */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-base font-semibold text-slate-900 transition-all">
                                {viewMode === 'revenue' ? 'Revenue Performance' : 'Volume Output'}
                            </h3>
                            <p className="text-sm text-slate-500">Standardized across all facilities</p>
                        </div>
                        <div className="flex bg-slate-100 rounded-lg p-1 transition-colors">
                            <button
                                onClick={() => setViewMode('revenue')}
                                className={`px-3 py-1 text-xs font-medium rounded shadow-sm transition-all ${viewMode === 'revenue' ? 'bg-white text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Revenue
                            </button>
                            <button
                                onClick={() => setViewMode('volume')}
                                className={`px-3 py-1 text-xs font-medium rounded shadow-sm transition-all ${viewMode === 'volume' ? 'bg-white text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
                            >
                                Volume
                            </button>
                        </div>
                    </div>

                    {/* CSS-only Bar Chart - Animated & Dynamic */}
                    <div className="flex-1 min-h-[250px] flex items-end justify-between gap-4 px-2">
                        {(viewMode === 'revenue'
                            ? [45, 52, 49, 62, 58, 65, 72, 68, 75, 82, 85, 94]
                            : [60, 58, 62, 70, 75, 72, 80, 85, 82, 88, 92, 98]
                        ).map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer relative">
                                <div
                                    className="w-full bg-blue-500/10 group-hover:bg-blue-600/20 rounded-t-sm transition-all relative overflow-hidden"
                                    style={{ height: `${h}%` }}
                                >
                                    {/* Filled part */}
                                    <div
                                        className="absolute bottom-0 left-0 w-full bg-blue-600 rounded-t-sm transition-all duration-700 ease-out group-hover:bg-blue-500"
                                        style={{ height: `${h * 0.8}%` }}
                                    ></div>
                                </div>
                                <div className="text-[10px] text-center text-slate-400 mt-2 font-medium group-hover:text-blue-600 transition-colors">
                                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                                </div>
                                {/* Tooltip */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded pointer-events-none z-10 whitespace-nowrap">
                                    {viewMode === 'revenue' ? `€${(h * 0.8 * 1.5).toFixed(1)}k` : `${h * 10}L`}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Feed and Actions */}
                <div className="space-y-6">
                    {/* Quick Actions Panel */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                        <h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm text-slate-700 transition-colors text-left border border-slate-100 group">
                                <div className="p-1.5 bg-blue-100 text-blue-600 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Plus size={16} />
                                </div>
                                Initiate New Batch
                            </button>
                            <button className="w-full flex items-center gap-3 p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm text-slate-700 transition-colors text-left border border-slate-100 group">
                                <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <Download size={16} />
                                </div>
                                Order Reagent Kit
                            </button>
                            <button className="w-full flex items-center gap-3 p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-sm text-slate-700 transition-colors text-left border border-slate-100 group">
                                <div className="p-1.5 bg-slate-200 text-slate-600 rounded-md group-hover:bg-slate-600 group-hover:text-white transition-colors">
                                    <Settings size={16} />
                                </div>
                                Config Parameters
                            </button>
                        </div>
                    </div>

                    {/* Updates Feed */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col h-[300px]">
                        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-slate-900">Live Updates</h3>
                            <MoreHorizontal size={16} className="text-slate-400 cursor-pointer hover:text-slate-600" />
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
                        </div>
                        <div className="p-3 border-t border-slate-100 bg-slate-50 rounded-b-xl">
                            <button className="w-full text-xs font-medium text-slate-600 hover:text-slate-900 py-1 flex items-center justify-center gap-1 group">
                                View All Activity <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* New Table Section */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-semibold text-slate-900">Recent Production Batches</h3>
                    <div className="flex gap-2">
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-medium rounded border border-slate-200 transition-colors">
                            <Filter size={14} /> Filter
                        </button>
                        <button className="p-1.5 hover:bg-slate-50 rounded text-slate-400 hover:text-slate-600 transition-colors">
                            <Download size={16} />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-slate-500 uppercase bg-slate-50/50">
                            <tr>
                                <th className="px-6 py-3 font-medium">Batch ID</th>
                                <th className="px-6 py-3 font-medium">Facility</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Yield</th>
                                <th className="px-6 py-3 font-medium">Completion</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                                    #CK-2025-001
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" />
                                </td>
                                <td className="px-6 py-4 text-slate-500">Cambridge, MA</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold border border-emerald-100">Complete</span></td>
                                <td className="px-6 py-4 font-mono text-slate-700">5.4 g/L</td>
                                <td className="px-6 py-4 text-slate-500">100%</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                                    #CK-2025-002
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" />
                                </td>
                                <td className="px-6 py-4 text-slate-500">Singapore HQ</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold border border-blue-100">In Progress</span></td>
                                <td className="px-6 py-4 font-mono text-slate-700">--</td>
                                <td className="px-6 py-4 text-slate-500">
                                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-[65%]"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                                <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                                    #CK-2025-003
                                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" />
                                </td>
                                <td className="px-6 py-4 text-slate-500">Berlin Ops</td>
                                <td className="px-6 py-4"><span className="px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold border border-indigo-100">Optimization</span></td>
                                <td className="px-6 py-4 font-mono text-slate-700">--</td>
                                <td className="px-6 py-4 text-slate-500">12%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function MetricCard({ label, value, change, period, icon }: any) {
    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-slate-300 transition-colors cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
                <div className="flex items-center text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
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
        <div className="flex items-start gap-3 hover:bg-slate-50 p-2 rounded-lg transition-colors cursor-pointer">
            <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${dot}`}></div>
            <div>
                <h4 className="text-xs font-semibold text-slate-900">{title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                <p className="text-[10px] text-slate-400 mt-1">{time}</p>
            </div>
        </div>
    );
}
