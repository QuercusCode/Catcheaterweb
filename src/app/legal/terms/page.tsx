export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background font-sans py-20">
            <div className="container px-6 mx-auto max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-foreground mb-4">Terms of Service</h1>
                <p className="text-muted-foreground mb-8">Last updated: December 24, 2025</p>

                <div className="space-y-8 text-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Use of Biological Materials</h2>
                        <p>
                            Any biological materials, plasmids, or strains ordered or supplied through Catcheater are subject to the specific Material Transfer Agreement (MTA) or License Agreement associated with that specific product tier.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Evaluation Models:</strong> Are strictly for non-commercial research and validation purposes.</li>
                            <li><strong>Commercial Licenses:</strong> Require a separate signed agreement for commercial production use.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                        <p>
                            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
                        <p>
                            The materials on Catcheater's website are provided on an 'as is' basis. Catcheater makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
                        <p>
                            Any claim relating to Catcheater's website shall be governed by the laws of France without regard to its conflict of law provisions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
