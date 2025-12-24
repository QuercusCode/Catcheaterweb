export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-glass-border mt-20 relative bg-background">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-display font-bold text-white mb-4">CatchEater</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        The world&apos;s first tag-less quality control system for protein production.
                        Eliminate cheaters, guarantee stability.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary transition-colors">Studio</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Evaluation Kit</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                <p>&copy; 2025 CatchEater Inc. All rights reserved.</p>
                <p>Designed for the Future of TechBio.</p>
            </div>
        </footer>
    );
}
