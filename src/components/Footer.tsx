export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-slate-800 mt-20 relative bg-slate-900">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-display font-bold text-white mb-4">CatchEater</h3>
                    <p className="text-sm text-slate-400 max-w-xs">
                        The world&apos;s first tag-less quality control system for protein production.
                        Eliminate cheaters, guarantee stability.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="/pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                        <li><a href="/survey" className="hover:text-primary transition-colors">Market Survey</a></li>
                        <li><a href="/#products" className="hover:text-primary transition-colors">Evaluation Kit</a></li>
                        <li><a href="/docs" className="hover:text-primary transition-colors">Documentation</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li><a href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        <li><a href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; 2025 CatchEater Inc. All rights reserved.</p>
                <p>Designed for the Future of TechBio.</p>
            </div>
        </footer>
    );
}
