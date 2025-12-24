'use client';

import { useParams } from 'next/navigation';
import { Calendar, User, Tag, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

// Full Article Data
const blogPosts = {
    1: {
        title: "The Metabolic Burden of Cheaters: Why Your Yield Plateaued",
        subtitle: "The math behind plasmid instability and the 40-generation crash.",
        date: "Dec 18, 2025",
        author: "AmirMohammad Cheraghali",
        role: "Synthetic Biology & AI Lead",
        category: "Research",
        readTime: "8 min read",
        image: "bg-amber-50 text-amber-600",
        content: `
            <h3 class="text-2xl font-bold mb-4">The Paradox of High-Performance Strains</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                In industrial bioproduction, we engineer <i>E. coli</i> to act as microscopic factories. We load them with high-copy plasmids, force them to overexpress heterologous proteins, and push their metabolic flux to the limit. 
                But there is a fundamental trade-off: <strong>Protein production is metabolically expensive.</strong>
            </p>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                A cell dedicating 30-50% of its resources to making your therapeutic protein grows significantly slower than a "cheater" cell—a mutant that has shed the plasmid or silenced the gene. 
                Our data shows a growth rate differential ($\Delta\mu$) of approximately 0.15 $h^{-1}$. This seemingly small difference leverages the power of exponential growth against you.
            </p>

            <h3 class="text-2xl font-bold mb-4">The ATP Budget: Where does the energy go?</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Translation is the most expensive process in the cell. Polymerizing amino acids into a polypeptide chain consumes 4 ATP equivalents per peptide bond. 
                When you induce a strong promoter like T7, you are essentially hijacking the cell's entire energy budget. 
                A "cheater" cell that stops this process suddenly has a massive surplus of ATP available for replication. It doesn't just grow faster; it thrives on the resources you wanted to turn into product.
            </p>

            <h3 class="text-2xl font-bold mb-4">The 40-Generation Crash</h3>
            <div class="bg-slate-50 border-l-4 border-primary p-6 mb-8">
                <p class="italic text-slate-700">
                    "In a standard 10,000L bioreactor run, you are looking at roughly 60-80 generations from inoculation to harvest. If you start with 99% productive cells, simple Darwinian selection dictates that cheaters will dominate the population by generation 45."
                </p>
            </div>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Once the antibiotic in the media is degraded (which happens rapidly with beta-lactamases) or diluted, there is no selection pressure keeping the plasmid. 
                The "cheaters" maximize their own fitness by doing nothing but replicating. They consume the expensive carbon source intended for your product and convert it into useless biomass.
            </p>
            
            <h3 class="text-2xl font-bold mb-4">Why Antibiotics Are Not Enough</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                 Standard practice relies on antibiotic resistance genes (like <i>bla</i> for Ampicillin) to maintain plasmids. However, this method has two fatal flaws in large-scale culture:
            </p>
            <ul class="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Cross-Protection:</strong> The beta-lactamase enzyme is secreted into the periplasm and often leaks into the media, detoxifying the environment for *all* cells, including plasmid-free cheaters.</li>
                <li><strong>Metabolic Cost:</strong> Maintaining the resistance protein itself adds to the burden, further slowing down the productive cells.</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">Reclaiming the ATP</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                The CatchEater system inverts this dynamic. By coupling essential gene function to product formation quality, we ensure that the "cheater" phenotype is lethal. 
                Testing in our BL21(DE3) strains showed that even after 120 hours of continuous culture, the population remained >99% plasmid-positive, resulting in a <strong>2.4x increase in total protein yield</strong> compared to standard antibiotic selection.
            </p>
        `
    },
    2: {
        title: "Inside the Snitch & Enforcer: A Dual-Layer Defense",
        subtitle: "Decoupling detection from execution in genetic circuit design.",
        date: "Dec 10, 2025",
        author: "Sogand Azadeh",
        role: "Genetics & Epigenetics Lead",
        category: "Engineering",
        readTime: "12 min read",
        image: "bg-indigo-50 text-indigo-600",
        content: `
            <h3 class="text-2xl font-bold mb-4">Architecture of a Kill Switch</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Biocontainment systems often fail because they are too "leaky" (killing cells when they shouldn't) or too slow (letting cheaters escape). 
                To solve this, we decoupled the logic into two distinct modules: <strong>The Snitch</strong> (Sensor) and <strong>The Enforcer</strong> (Actuator).
                This separation allows us to tune the sensitivity of the sensor without altering the lethality of the kill switch.
            </p>

            <h3 class="text-2xl font-bold mb-4">Module 1: The Snitch (Sensing Stress)</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Productive cells are stressed cells. The "Snitch" module utilizes a modified heat-shock promoter ($P_{htpG}$) tuned to respond specifically to the burden of heterologous protein aggregation.
                <br/><br/>
                When a cell is actively producing your difficult protein, the Snitch is active. It produces a steady stream of a specific repressor protein (Cl-434). 
                <strong>Simply put: Working hard = Safety Signal ON.</strong>
            </p>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                We engineered the promoter library to offer varying sensitivities. For extremely toxic proteins, we use a "Low Sensitivity" Snitch that requires massive stress to trigger. For easy-to-express proteins, a "High Sensitivity" version ensures even minor slackers are caught.
            </p>

            <h3 class="text-2xl font-bold mb-4">Module 2: The Enforcer (The Kill)</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                The "Enforcer" is a tightly regulated toxin-antitoxin system integrated into the genome or on a low-copy plasmid. 
                The toxin gene is chemically repressed by the signal from the Snitch.
            </p>
            <div class="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-8">
                <h4 class="font-bold text-indigo-900 mb-2">The Logic Gate (AND NOT)</h4>
                <p class="text-sm text-indigo-800">
                    The circuit functions as a biological Boolean gate: <br/>
                    <strong>Survival = (Has Plasmid) AND (Is Stressed)</strong>
                </p>
            </div>
            <ul class="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
                <li><strong>Scenario A (Productive Cell):</strong> Snitch is ON -> Repressor made -> Toxin Silenced -> Cell Lives.</li>
                <li><strong>Scenario B (Cheater Cell):</strong> No protein production -> No Stress -> Snitch OFF -> No Repressor -> Toxin Expressed -> Cell Lysis.</li>
            </ul>

            <h3 class="text-2xl font-bold mb-4">Preventing Escape Mutants</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                A common failure mode in kill switches is mutation of the toxin gene itself. We mitigated this by using <strong>redundancy</strong>. 
                The Enforcer module contains two distinct toxins targeting different cellular machinery (e.g., Gyrase inhibition and Membrane depolarization). 
                The probability of a cell simultaneously mutating both toxin genes to escape is calculated at less than $10^{-14}$.
            </p>

            <h3 class="text-2xl font-bold mb-4">The Result: Pure Yield</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                This logic gate ensures that only cells properly expressing the target pathway survive. 
                Any mutation that breaks the production pipeline—whether it's plasmid loss, gene deletion, or ribosome stalling—simultaneously cuts the safety line, causing the cell to self-terminate immediately.
            </p>
        `
    },
    3: {
        title: "Scaling to 10,000L: Stability Case Study",
        subtitle: "From shake flask to industrial fermenter without the performance drop.",
        date: "Nov 25, 2025",
        author: "Tech Team",
        role: "CatchEater R&D",
        category: "Case Study",
        readTime: "7 min read",
        image: "bg-emerald-50 text-emerald-600",
        content: `
            <h3 class="text-2xl font-bold mb-4">The Linear Scaling Myth</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Every bioprocess engineer knows that what works in a 250mL shake flask rarely behaves the same in a 10,000L steel tank. 
                Shear stress, oxygen gradients, and mixing times introduce new selection pressures that accelerate genetic drift.
                The extended seed trains required to inoculate a large vessel mean that cells have undergone dozens of doublings before the production phase even begins.
            </p>
            
            <h3 class="text-2xl font-bold mb-4">Trial Parameters</h3>
            <div class="overflow-x-auto mb-8">
                <table class="w-full text-sm text-left border border-border rounded-lg overflow-hidden">
                    <thead class="bg-slate-50 font-bold border-b border-border">
                        <tr>
                            <th class="p-3">Parameter</th>
                            <th class="p-3">Control (Standard BL21)</th>
                            <th class="p-3">CatchEater Strain</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-border">
                        <tr>
                            <td class="p-3 font-medium">Vessel Volume</td>
                            <td class="p-3">500L</td>
                            <td class="p-3">500L</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-medium">Induction Time</td>
                            <td class="p-3">OD 0.8</td>
                            <td class="p-3">OD 0.8</td>
                        </tr>
                        <tr>
                            <td class="p-3 font-medium">Antibiotic</td>
                            <td class="p-3">Ampicillin (100ug/mL)</td>
                            <td class="p-3">None</td>
                        </tr>
                         <tr>
                            <td class="p-3 font-medium">Duration</td>
                            <td class="p-3">72 Hours</td>
                            <td class="p-3">72 Hours</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 class="text-2xl font-bold mb-4">Outcomes</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                <strong>1. Plasmid Retention:</strong> The Control group dropped to 45% plasmid retention by hour 48. The CatchEater group maintained 99.8% retention through hour 72.
                <br/><br/>
                <strong>2. Titer:</strong> Final protein titer for CatchEater was 3.8 g/L compared to 1.9 g/L for the control.
                <br/><br/>
                <strong>3. Cost:</strong> Eliminating the antibiotic reduced media costs by 12% at this scale, with projected savings of over $50k/run at the 10,000L scale.
            </p>
            
            <h3 class="text-2xl font-bold mb-4">Regulatory & Downstream Benefits</h3>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Beyond yield, the removal of antibiotics simplifies the entire downstream processing (DSP) workflow. 
                There is no need to validate the removal of trace antibiotics from the final product, a key requirement for FDA approval of injectables.
                <br/><br/>
                Furthermore, the CatchEater system significantly reduces the bioburden of "dead" biomass. While cheaters are lysed, they convert their biomass back into soluble amino acids and nucleotides, which can be scavenged by the productive survivors. 
                This effectively turns your worst enemy (the cheater) into feedstock for your product.
            </p>
        `
    }
};

export default function BlogPost() {
    const params = useParams();
    // In a real app, params.id would be string. 
    // We coerce to number for this simple object lookup.
    const id = Number(params.id);
    const post = blogPosts[id as keyof typeof blogPosts];

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
                    <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-background font-sans pb-20">
            {/* Header */}
            <div className="bg-slate-50 border-b border-border py-20">
                <div className="container px-6 mx-auto max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${post.image.split(' ')[0]} ${post.image.split(' ')[1]}`}>
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock size={14} /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {post.subtitle}
                    </p>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-border/50">
                        <div className="w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center text-slate-400">
                            <User size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-foreground text-sm">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.role}</p>
                        </div>
                        <div className="ml-auto text-sm text-muted-foreground">
                            {post.date}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container px-6 mx-auto max-w-3xl py-12">
                <div
                    className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            {/* CTA */}
            <div className="container px-6 mx-auto max-w-4xl mt-12">
                <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Ready to optimize your yield?</h3>
                    <p className="text-muted-foreground mb-6">Order an Evaluation Kit today and see the difference.</p>
                    <Link href="/#order" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </Link>
                </div>
            </div>
        </article>
    );
}
