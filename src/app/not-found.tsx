import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center px-4">
            <div className="relative mb-8">
                <div className="text-9xl font-bold text-slate-200 font-display select-none">404</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-800 bg-slate-50 px-4">
                    Protein Misfolded
                </div>
            </div>

            <p className="text-slate-500 max-w-md mb-8 leading-relaxed">
                The page you are looking for has been degraded by proteases or never existed.
                Return to the stable strain before you lose more yield.
            </p>

            <Link
                href="/"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-1"
            >
                <ArrowLeft size={18} /> Return to Lab
            </Link>
        </div>
    );
}
