import { Check, X } from 'lucide-react';

export default function ComparisonTable() {
    return (
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/30">
            <table className="w-full text-left text-sm text-slate-400">
                <thead className="bg-slate-900 text-slate-200 font-display">
                    <tr>
                        <th className="p-6 font-bold whitespace-nowrap">Method</th>
                        <th className="p-6 font-bold whitespace-nowrap">Selection Target</th>
                        <th className="p-6 font-bold whitespace-nowrap">Reacts to Mutations?</th>
                        <th className="p-6 font-bold whitespace-nowrap">Retention Rate</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                    <tr className="group hover:bg-slate-800/30 transition-colors">
                        <td className="p-6 font-medium text-white">Antibiotics (Standard)</td>
                        <td className="p-6">Plasmid Presence</td>
                        <td className="p-6 text-red-400 flex items-center gap-2 font-medium">
                            <X size={16} className="text-red-500" /> No
                        </td>
                        <td className="p-6">~40-70%</td>
                    </tr>
                    <tr className="group hover:bg-slate-800/30 transition-colors">
                        <td className="p-6 font-medium text-white">Auxotrophy</td>
                        <td className="p-6">Plasmid Presence</td>
                        <td className="p-6 text-red-400 flex items-center gap-2 font-medium">
                            <X size={16} className="text-red-500" /> No
                        </td>
                        <td className="p-6">~80%</td>
                    </tr>
                    <tr className="bg-indigo-950/20 hover:bg-indigo-900/40 transition-colors">
                        <td className="p-6 font-bold text-indigo-300">Catcheater™ System</td>
                        <td className="p-6 text-indigo-200">Protein Production</td>
                        <td className="p-6 text-emerald-400 flex items-center gap-2 font-bold">
                            <Check size={16} className="text-emerald-500" /> Yes (Real-time)
                        </td>
                        <td className="p-6 font-bold text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]">> 99%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
