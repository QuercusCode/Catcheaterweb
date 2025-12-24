'use client';

import { Download, ExternalLink } from 'lucide-react';

const orders = [
    {
        id: 'CK-1024',
        date: 'Dec 18, 2025',
        items: 'Snitch Kit x1, Control Module x2',
        total: '€2,450.00',
        status: 'Shipped',
        invoice: '#INV-001'
    },
    {
        id: 'CK-0992',
        date: 'Nov 05, 2025',
        items: 'Custom Plasmid Design (Review)',
        total: '€500.00',
        status: 'Delivered',
        invoice: '#INV-002'
    },
    {
        id: 'CK-0881',
        date: 'Oct 22, 2025',
        items: 'Refill Pack: Inducer',
        total: '€150.00',
        status: 'Processing',
        invoice: '#INV-003'
    }
];

export default function Orders() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Order History</h1>
                <p className="text-muted-foreground">Track shipments and download invoices.</p>
            </div>

            <div className="card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-muted-foreground font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Items</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Total</th>
                                <th className="px-6 py-4 text-right">Invoice</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-primary">{order.id}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                                    <td className="px-6 py-4 text-foreground">{order.items}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded text-xs font-medium 
                                            ${order.status === 'Delivered' ? 'bg-emerald-50 text-emerald-600' :
                                                order.status === 'Shipped' ? 'bg-blue-50 text-blue-600' : 'bg-yellow-50 text-yellow-600'}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-foreground">{order.total}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                                            <Download size={14} /> PDF
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
