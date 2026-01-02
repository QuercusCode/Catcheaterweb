
'use client';

import Image from 'next/image';
import { Linkedin, Mail } from 'lucide-react';

const team = [
    {
        name: 'Amir M. Cheraghali',
        role: 'Co-Founder & Lead Scientist',
        bio: 'Driving the vision for autonomous genetic quality control.',
        image: '/Image-Amir.png',
        linkedin: 'https://www.linkedin.com/in/amir-m-cheraghali-195b23207/',
        email: 'amir.mcheraghali81@gmail.com'
    },
    {
        name: 'Sogand Azadeh',
        role: 'Co-Founder & Research Lead',
        bio: 'Expert in synthetic biology circuits and strain engineering.',
        image: '/Image-Sogand.png',
        linkedin: 'https://www.linkedin.com/in/sogand-azadeh/',
        email: 'sogandazde@gmail.com'
    }
];

export default function Team() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-100">
                        The Team
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                        Built by <span className="text-primary">Scientists</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We are a team of synthetic biologists determined to solve the reliability crisis in biomanufacturing.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {team.map((member) => (
                        <div key={member.name} className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all text-center">
                            <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                            <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {member.bio}
                            </p>

                            <div className="flex justify-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-white rounded-full hover:text-[#0077b5] transition-colors"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href={`mailto:${member.email}`}
                                    className="p-2 hover:bg-white rounded-full hover:text-red-500 transition-colors"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
