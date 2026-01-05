'use client';

import { motion } from 'framer-motion';
import { Microscope, Brain, Database, Cpu, Activity, ShieldCheck, ArrowRight, FlaskConical, Beaker, FileText, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SciencePage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section - Authoritative & Borderless */}
            <section className="relative h-[600px] flex items-center overflow-hidden">
                <Image
                    src="/images/voeltzmann_lab_realism_v1.png"
                    alt="VÖLTZMANN Medical Lab"
                    fill
                    className="object-cover opacity-30 scale-105"
                />
                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-[0.3em] uppercase mb-10 rounded-sm">
                            Clinical Excellence
                        </div>
                        <h1 className="text-8xl font-light text-[#003568] mb-8 leading-tight">
                            Wissenschaft <br />
                            <span className="font-semibold text-[#179A97]">& Forschung</span>
                        </h1>
                        <p className="text-2xl text-[#555555] font-light max-w-3xl leading-relaxed">
                            VÖLTZMANN verbindet modernste Neurotechnologie mit strenger wissenschaftlicher Methodik.
                            Unsere Entwicklungen basieren auf evidenzbasierten Forschungsergebnissen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Research Domains - Borderless & Image Enhanced */}
            <section className="py-32">
                <div className="container">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">Unsere Forschungsschwerpunkte</h2>
                        <div className="h-1 w-20 bg-[#179A97] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {[
                            {
                                title: 'NEUROSTIMULATION',
                                segment: 'Forschung der Wirkweise von CES auf Neurotransmitter-Systeme.',
                                icon: <Brain className="w-8 h-8" />,
                                image: '/images/voeltzmann_neural_tech.png',
                                href: '/science/neural'
                            },
                            {
                                title: 'BIOFEEDBACK',
                                segment: 'Entwicklung adaptiver Algorithmen zur Echtzeit-Analyse physiologischer Signale.',
                                icon: <FlaskConical className="w-8 h-8" />,
                                image: '/images/voeltzmann_sleep_research.png',
                                href: '/science/ai'
                            },
                            {
                                title: 'RADAR-TECHNOLOGIE',
                                segment: 'Weiterentwicklung von mmWave-Sensoren für hochpräzise Vital-Parameter-Erfassung.',
                                icon: <Activity className="w-8 h-8" />,
                                image: '/images/voeltzmann_medical_lab.png',
                                href: '/science/sensors'
                            }
                        ].map((item, i) => (
                            <Link href={item.href} key={i} className="group block">
                                <div className="relative h-64 bg-[#F9FBFD] mb-10 overflow-hidden rounded-sm">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-[#003568] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                </div>
                                <div className="px-2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-[#179A97]">{item.icon}</div>
                                        <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#003568] border-b border-[#E2E8F0] pb-2 flex-grow">{item.title}</h3>
                                    </div>
                                    <p className="text-lg text-[#718096] font-light leading-relaxed mb-8">{item.segment}</p>
                                    <div className="flex items-center gap-2 text-[#179A97] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Details <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Publications - Clean & List Style */}
            <section className="py-32 bg-[#F9FBFD]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-5xl font-light text-[#003568] mb-6">Ausgewählte Publikationen</h2>
                            <p className="text-xl text-[#718096] font-light">
                                Unsere Forschungsergebnisse werden regelmäßig in führenden medizinischen Fachzeitschriften veröffentlicht.
                            </p>
                        </div>
                        <Link href="/science/publications" className="hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#003568] hover:text-[#179A97] transition-all pb-1 border-b-2 border-[#179A97]">
                            Alle Publikationen <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="space-y-12">
                        {[
                            { title: 'Cranial Electrotherapy Stimulation (CES) for Sleep Disorders', journal: 'JOURNAL OF SLEEP RESEARCH', year: '2024', authors: 'Müller, H., Schmidt, T., Weber, K.' },
                            { title: 'Non-contact Vital Signs Monitoring using mmWave Radar', journal: 'IEEE TRANSACTIONS ON BIOMEDICAL ENGINEERING', year: '2023', authors: 'Fischer, M., Becker, L., Hoffmann, A.' },
                            { title: 'Biofeedback-guided Breathing for Sleep Onset', journal: 'SLEEP MEDICINE REVIEWS', year: '2025', authors: 'Schneider, P., Wagner, S., Richter, J.' }
                        ].map((pub, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-10 bg-white hover:shadow-xl transition-all duration-500 rounded-sm"
                            >
                                <div className="max-w-3xl">
                                    <div className="text-xs font-bold text-[#179A97] mb-3 tracking-widest uppercase">
                                        {pub.journal} | {pub.year}
                                    </div>
                                    <h4 className="text-2xl font-light text-[#003568] mb-4 group-hover:text-[#179A97] transition-colors">{pub.title}</h4>
                                    <div className="text-[#A0AEC0] italic font-light">{pub.authors}</div>
                                </div>
                                <div className="mt-8 md:mt-0 flex gap-4">
                                    <button className="p-4 border border-[#EDF2F7] hover:border-[#003568] hover:text-[#003568] transition-all rounded-sm">
                                        <FileText className="w-5 h-5" />
                                    </button>
                                    <button className="p-4 border border-[#EDF2F7] hover:border-[#003568] hover:text-[#003568] transition-all rounded-sm">
                                        <Share2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scientific Partnerships - Global & Clean */}
            <section className="py-32">
                <div className="container">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">Wissenschaftliche Partnerschaften</h2>
                        <div className="h-1 w-20 bg-[#179A97] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { name: 'UNIVERSITÄTSKLINIKUM BERLIN', sub: 'Klinische Studien' },
                            { name: 'FRAUNHOFER-INSTITUT', sub: 'Sensortechnologie' },
                            { name: 'MAX-PLANCK-INSTITUT', sub: 'Neurowissenschaften' }
                        ].map((partner, i) => (
                            <div key={i} className="p-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-700 bg-[#F9FBFD] flex flex-col items-center justify-center">
                                <div className="text-xl font-bold text-[#003568] tracking-widest mb-2">{partner.name}</div>
                                <div className="text-xs text-[#179A97] font-bold uppercase tracking-widest">{partner.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Authoritative Conclusion */}
            <section className="py-24 bg-[#003568] text-white overflow-hidden relative">
                <div className="container relative z-10 text-center">
                    <h2 className="text-5xl font-light mb-10">Klinische Studien</h2>
                    <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                        Alle VÖLTZMANN Produkte werden in kontrollierten klinischen Studien getestet. Wenn Sie an der
                        Teilnahme an unseren Forschungsprojekten interessiert sind, kontaktieren Sie uns gerne.
                    </p>
                    <Link href="/contact" className="inline-block px-12 py-5 bg-[#179A97] text-white hover:bg-white hover:text-[#003568] transition-all shadow-xl font-bold uppercase tracking-widest text-sm rounded-sm">
                        An Studien teilnehmen
                    </Link>
                </div>
                {/* Abstract background element */}
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#179A97] opacity-10 rounded-full blur-3xl"></div>
            </section>
        </div>
    );
}
