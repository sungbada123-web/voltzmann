'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Präzision',
            description: 'Deutsche Ingenieurskunst und medizinische Genauigkeit in jedem Detail.',
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Menschlichkeit',
            description: 'Technologie im Dienste des Menschen, nicht umgekehrt.',
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: 'Innovation',
            description: 'Kontinuierliche Forschung und Entwicklung für bessere Lösungen.',
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: 'Sicherheit',
            description: 'Höchste medizinische Standards und vollständiger Datenschutz.',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center pt-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/voeltzmann_lab_realism_v1.png"
                        alt="VÖLTZMANN Laboratory"
                        fill
                        className="object-cover brightness-[0.85]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90"></div>
                </div>

                <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl font-light text-[#003568] mb-8 tracking-tight">
                            Über VÖLTZMANN
                        </h1>
                        <p className="text-2xl text-[#003568] font-light leading-relaxed max-w-3xl mx-auto">
                            Wir sind ein deutsches Medizintechnik-Unternehmen mit der Mission,
                            Schlafqualität durch innovative Neurotechnologie nachhaltig zu verbessern.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-light text-[#003568] mb-8">
                                Unsere Mission
                            </h2>
                            <p className="text-[#555555] font-light text-lg leading-relaxed mb-6">
                                Schlaf ist die Grundlage für Gesundheit und Lebensqualität. Trotzdem leiden
                                Millionen Menschen unter Schlafstörungen, die mit konventionellen Methoden
                                schwer zu behandeln sind.
                            </p>
                            <p className="text-[#555555] font-light text-lg leading-relaxed mb-6">
                                VÖLTZMANN entwickelt evidenzbasierte, technologische Lösungen, die auf
                                neurowissenschaftlichen Erkenntnissen basieren. Unsere Produkte vereinen
                                deutsche Präzision mit medizinischer Sicherheit.
                            </p>
                            <p className="text-[#555555] font-light text-lg leading-relaxed">
                                Wir glauben: Besserer Schlaf sollte für jeden zugänglich sein – ohne
                                Medikamente, ohne invasive Eingriffe, aber mit wissenschaftlicher Fundierung.
                            </p>
                        </div>

                        <div className="bg-[#003568] text-white p-12 shadow-2xl rounded-sm">
                            <h3 className="text-3xl font-light mb-8">Unsere Vision</h3>
                            <p className="text-xl font-light leading-relaxed opacity-90 italic">
                                "Eine Welt, in der jeder Mensch Zugang zu regenerativem Schlaf hat –
                                unterstützt durch intelligente, sichere und evidenzbasierte Technologie."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#F9FBFD]">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#003568] mb-16 text-center">
                        Unsere Werte
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-10 text-center hover:shadow-xl transition-shadow duration-300 rounded-sm group"
                            >
                                <div className="w-16 h-16 bg-[#003568] flex items-center justify-center mx-auto mb-8 text-white rounded-sm group-hover:bg-[#179A97] transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#003568] mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-[#555555] font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#003568] mb-6 text-center">
                        Unser Team
                    </h2>
                    <p className="text-center text-[#555555] font-light text-xl mb-16 max-w-3xl mx-auto">
                        VÖLTZMANN wurde von einem interdisziplinären Team aus Neurowissenschaftlern,
                        Ingenieuren und Medizinern gegründet.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                name: 'Dr. Max Mustermann',
                                role: 'CEO & Gründer',
                                background: 'Neurowissenschaften, Charité Berlin',
                                image: '/images/voeltzmann_staff_portrait_v2.png'
                            },
                            {
                                name: 'Dr. Anna Schmidt',
                                role: 'CTO',
                                background: 'Elektrotechnik, TU München',
                                image: '/images/voeltzmann_staff_engineer_office.png'
                            },
                            {
                                name: 'Dr. Rachel Liang',
                                role: 'Chief Medical Officer',
                                background: 'Integrative Medizin & Somnologie, Universität Shanghai',
                                image: '/images/dr_rachel_liang.png'
                            },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-8 text-center hover:shadow-2xl transition-all rounded-sm group border-transparent border hover:border-gray-50">
                                <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-medium text-[#003568] mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-[#179A97] font-bold uppercase text-xs tracking-widest mb-4">{member.role}</p>
                                <p className="text-[#555555] font-light">{member.background}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Made in Germany */}
            <section className="py-20 bg-[#003568] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-light mb-8">
                        Made in Germany
                    </h2>
                    <p className="text-2xl font-light leading-relaxed opacity-90">
                        Alle VÖLTZMANN Produkte werden in Deutschland entwickelt und gefertigt.
                        Wir stehen für höchste Qualitätsstandards, medizinische Sicherheit und
                        absolute Verlässlichkeit – heute und in Zukunft.
                    </p>
                </div>
            </section>
        </div>
    );
}

