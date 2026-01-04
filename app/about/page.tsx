'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Shield } from 'lucide-react';

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
            <section className="py-10 bg-gradient-to-br from-[#F9FBFD] to-white">
                <div className="max-w-[1640px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl font-medium text-[#003568] mb-6">
                            Über VÖLTZMANN
                        </h1>
                        <p className="text-xl text-[#707070] font-light leading-relaxed">
                            Wir sind ein deutsches Medizintechnik-Unternehmen mit der Mission,
                            Schlafqualität durch innovative Neurotechnologie nachhaltig zu verbessern.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-10">
                <div className="max-w-[1640px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-medium text-[#555555] mb-6">
                                Unsere Mission
                            </h2>
                            <p className="text-[#707070] font-light text-lg leading-relaxed mb-6">
                                Schlaf ist die Grundlage für Gesundheit und Lebensqualität. Trotzdem leiden
                                Millionen Menschen unter Schlafstörungen, die mit konventionellen Methoden
                                schwer zu behandeln sind.
                            </p>
                            <p className="text-[#707070] font-light text-lg leading-relaxed mb-6">
                                VÖLTZMANN entwickelt evidenzbasierte, technologische Lösungen, die auf
                                neurowissenschaftlichen Erkenntnissen basieren. Unsere Produkte vereinen
                                deutsche Präzision mit medizinischer Sicherheit.
                            </p>
                            <p className="text-[#707070] font-light text-lg leading-relaxed">
                                Wir glauben: Besserer Schlaf sollte für jeden zugänglich sein �?ohne
                                Medikamente, ohne invasive Eingriffe, aber mit wissenschaftlicher Fundierung.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#003568] to-[#179A97] text-white p-12">
                            <h3 className="text-3xl font-medium mb-6">Unsere Vision</h3>
                            <p className="text-lg font-light leading-relaxed opacity-90">
                                "Eine Welt, in der jeder Mensch Zugang zu regenerativem Schlaf hat �?
                                unterstützt durch intelligente, sichere und evidenzbasierte Technologie."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-10 bg-[#F9FBFD]">
                <div className="max-w-[1640px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#555555] mb-12 text-center">
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
                                className="bg-white border border-[#C3C3C3] p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-[#003568] flex items-center justify-center mx-auto mb-6 text-white">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-medium text-[#555555] mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-[#707070] font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-10">
                <div className="max-w-[1640px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#555555] mb-6 text-center">
                        Unser Team
                    </h2>
                    <p className="text-center text-[#707070] font-light text-lg mb-12 max-w-3xl mx-auto">
                        VÖLTZMANN wurde von einem interdisziplinären Team aus Neurowissenschaftlern,
                        Ingenieuren und Medizinern gegründet.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Dr. Max Mustermann',
                                role: 'CEO & Gründer',
                                background: 'Neurowissenschaften, Charité Berlin',
                            },
                            {
                                name: 'Dr. Anna Schmidt',
                                role: 'CTO',
                                background: 'Elektrotechnik, TU München',
                            },
                            {
                                name: 'Dr. Thomas Weber',
                                role: 'Chief Medical Officer',
                                background: 'Schlafmedizin, Universitätsklinikum Heidelberg',
                            },
                        ].map((member, index) => (
                            <div key={index} className="bg-[#F9FBFD] border border-[#C3C3C3] p-8 text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#003568] to-[#179A97] mx-auto mb-6 rounded-none"></div>
                                <h3 className="text-xl font-medium text-[#555555] mb-4">
                                    {member.name}
                                </h3>
                                <p className="text-[#179A97] font-medium mb-3">{member.role}</p>
                                <p className="text-[#707070] font-light text-sm">{member.background}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Made in Germany */}
            <section className="py-10 bg-gradient-to-br from-[#003568] to-[#179A97] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-medium mb-6">
                        Made in Germany
                    </h2>
                    <p className="text-xl font-light leading-relaxed opacity-90">
                        Alle VÖLTZMANN Produkte werden in Deutschland entwickelt und gefertigt.
                        Wir stehen für höchste Qualitätsstandards, medizinische Sicherheit und
                        absolute Verlässlichkeit �?heute und in Zukunft.
                    </p>
                </div>
            </section>
        </div>
    );
}

