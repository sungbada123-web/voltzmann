'use client';

import { motion } from 'framer-motion';
import { Radar, Radio, Shield, BarChart3, CheckCircle2, Wind, Activity, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HubPage() {
    const features = [
        'Millimeterwellen-Radar (mmWave) Technologie',
        'Berührungslose Vital-Parameter-Überwachung',
        'Kontinuierliche Schlafanalyse',
        'Datenschutz durch lokale Verarbeitung',
        'Integration in Smart Home Ökosystem',
    ];

    const metrics = [
        { icon: <Radio className="w-8 h-8" />, title: 'Herzfrequenz', desc: 'Präzise ohne Wearable' },
        { icon: <Wind className="w-8 h-8" />, title: 'Atmung', desc: 'Atemfrequenz & Tiefe' },
        { icon: <Activity className="w-8 h-8" />, title: 'Bewegung', desc: 'Schlafphasen-Erkennung' },
        { icon: <User className="w-8 h-8" />, title: 'Präsenz', desc: 'Anwesenheitserkennung' },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-[#F9FBFD] overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px]">
                                VÖLTZMANN Systems
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003568] leading-tight mb-8">
                                Secure <br />
                                <span className="font-semibold">Intelligence.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10 max-w-xl">
                                Distributed AI for your sleep ecosystem.
                                VÖLTZMANN Systems processes all biometric data locally using edgecomputing,
                                ensuring 100% privacy and millisecond-latency analysis.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#003568] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#002855] transition-colors rounded-[2px]">
                                    Request Access
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full"
                        >
                            <Image
                                src="/images/voeltzmann-hub-product.png"
                                alt="VÖLTZMANN Systems Hub"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="py-10">
                <div className="max-w-[1640px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#555555] mb-12 text-center">
                        mmWave Radar-Technologie
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                        <div>
                            <h3 className="text-2xl font-medium text-[#555555] mb-6">
                                Wie funktioniert mmWave?
                            </h3>
                            <p className="text-[#707070] font-light text-lg leading-relaxed mb-6">
                                Millimeterwellen-Radar sendet hochfrequente elektromagnetische Wellen aus, die von
                                Körperbewegungen reflektiert werden. Modernste Signalverarbeitung extrahiert daraus
                                präzise Vitaldaten �?ganz ohne Hautkontakt.
                            </p>
                            <p className="text-[#707070] font-light text-lg leading-relaxed">
                                Diese Technologie wird bereits in der medizinischen Forschung und Automobilindustrie eingesetzt
                                und bietet höchste Genauigkeit bei vollständiger Privatsphäre.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {metrics.map((metric, index) => (
                                <div key={index} className="bg-[#F9FBFD] p-6 text-center hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                                    <div className="text-[#003568] flex justify-center mb-3">
                                        {metric.icon}
                                    </div>
                                    <h4 className="text-[#555555] font-medium mb-4">{metric.title}</h4>
                                    <p className="text-[#707070] text-sm font-light">{metric.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-[#F9FBFD] p-8 hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                            <Shield className="w-12 h-12 text-[#003568] mb-4" />
                            <h3 className="text-xl font-medium text-[#555555] mb-3">Vollständige Privatsphäre</h3>
                            <p className="text-[#707070] font-light leading-relaxed">
                                Keine Kameras, keine Cloud-Übertragung. Alle Daten werden lokal verarbeitet.
                            </p>
                        </div>

                        <div className="bg-[#F9FBFD] p-8 hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                            <BarChart3 className="w-12 h-12 text-[#179A97] mb-4" />
                            <h3 className="text-xl font-medium text-[#555555] mb-3">Langzeit-Monitoring</h3>
                            <p className="text-[#707070] font-light leading-relaxed">
                                Kontinuierliche Überwachung ohne Batteriewechsel oder Aufladen.
                            </p>
                        </div>

                        <div className="bg-[#F9FBFD] p-8 hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                            <Radar className="w-12 h-12 text-[#003568] mb-4" />
                            <h3 className="text-xl font-medium text-[#555555] mb-3">Medizinische Präzision</h3>
                            <p className="text-[#707070] font-light leading-relaxed">
                                Genauigkeit vergleichbar mit klinischen Monitoring-Systemen.
                            </p>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="bg-white p-10 hover:bg-[#F9FBFD] transition-colors rounded-[2px]">
                        <h3 className="text-2xl font-medium text-[#555555] mb-6">Produktmerkmale</h3>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#179A97] flex-shrink-0 mt-1" />
                                    <span className="text-[#707070] font-light text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 bg-[#F9FBFD]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-medium text-[#555555] mb-6">
                        Interessiert an VÖLTZMANN Systems?
                    </h2>
                    <p className="text-[#707070] font-light text-lg mb-8">
                        Erfahren Sie mehr über unsere Radar-Technologie und wie sie Ihr Zuhause intelligent macht.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-[#003568] text-white hover:bg-[#179A97] transition-colors"
                    >
                        Kontakt aufnehmen
                    </a>
                </div>
            </section>
        </div>
    );
}

