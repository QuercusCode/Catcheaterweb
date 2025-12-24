export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background font-sans py-20">
            <div className="container px-6 mx-auto max-w-4xl">
                <h1 className="text-4xl font-display font-bold text-foreground mb-4">Privacy Policy</h1>
                <p className="text-muted-foreground mb-8">Last updated: December 24, 2025</p>

                <div className="space-y-8 text-foreground leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                        <p>
                            Catcheater ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Data We Collect</h2>
                        <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, title.</li>
                            <li><strong>Contact Data:</strong> includes email address, institutional affiliation (if provided for support).</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>To process your waitlist application and send you the promised discount code.</li>
                            <li>To respond to your support inquiries via our contact forms.</li>
                            <li>To improve our website and customer experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                        <p>
                            For any questions regarding this privacy policy, please contact us via the support form on our dashboard or email basic@catcheater.bio.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
