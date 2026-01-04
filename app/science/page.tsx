'use client';

import { motion } from 'framer-motion';
import { Microscope, BookOpen, Award, FlaskConical } from 'lucide-react';

export default function SciencePage() {
    const publications = [
        {
            title: 'Cranial Electrotherapy Stimulation (CES) for Sleep Disorders',
            journal: 'Journal of Sleep Research',
            year: '2024',
            authors: 'Müller, H., Schmidt, T., Weber, K.',
        },
        {
            title: 'Non-contact Vital Signs Monitoring using mmWave Radar',
            journal: 'IEEE Transactions on Biomedical Engineering',
            year: '2023',
            authors: 'Fischer, M., Becker, L., Hoffmann, A.',
        },
        {
            title: 'Biofeedback-guided Breathing for Sleep Onset',
            journal: 'Sleep Medicine Reviews',
            year: '2025',
            authors: 'Schneider, P., Wagner, S., Richter, J.',
        },
    ];

    const partnerships = [
        {
            name: 'Universitätsklinikum Berlin',
            field: 'Klinische Studien',
            icon: <Microscope className="w-8 h-8" />,
        },
        {
            name: 'Fraunhofer-Institut',
            field: 'Sensortechnologie',
            icon: <FlaskConical className="w-8 h-8" />,
        },
        {
            name: 'Max-Planck-Institut',
            field: 'Neurowissenschaften',
            icon: <Award className="w-8 h-8" />,
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-10 bg-[#F9FBFD]">
                <div className="max-w-[1640px] mx-auto px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-2 text-[#707070] text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                            Evidence Based
                        </div>
                        <h1 className="text-6xl font-light text-[#003568] mb-8">
                            Wissenschaft & Forschung
                        </h1>
                        <p className="text-2xl text-[#707070] font-light leading-relaxed">
                            VÖLTZMANN connects the latest neurotechnology with rigorous scientific methodology.
                            Unsere Entwicklungen basieren auf evidenzbasierten Forschungsergebnissen.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Research Areas - Sharp Cards */}
            <section className="py-10">
                <div className="max-w-[1640px] mx-auto px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">
                            Unsere Forschungsschwerpunkte
                        </h2>
                        <div className="w-24 h-1 bg-[#003568] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C3C3C3] border border-[#C3C3C3]">
                        <div className="bg-[#F9FBFD] p-16 hover:bg-white transition-colors rounded-sm shadow-sm">
                            <div className="w-16 h-16 bg-[#003568] flex items-center justify-center mb-12 text-white">
                                <Microscope className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-[#555555] mb-6">
                                Neurostimulation
                            </h3>
                            <p className="text-[#707070] font-light leading-relaxed text-lg">
                                Erforschung der Wirkweise von CES (Craniale Elektrostimulation) auf
                                Neurotransmitter-Systeme und zirkadiane Rhythmen.
                            </p>
                        </div>

                        <div className="bg-white p-16 hover:bg-[#F8FAFC] transition-colors">
                            <div className="w-16 h-16 bg-[#179A97] flex items-center justify-center mb-12 text-white">
                                <FlaskConical className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-[#555555] mb-6">
                                Biofeedback
                            </h3>
                            <p className="text-[#707070] font-light leading-relaxed text-lg">
                                Entwicklung adaptiver Algorithmen zur Echtzeit-Analyse physiologischer
                                Signale und personalisierter Interventionen.
                            </p>
                        </div>

                        <div className="bg-white p-16 hover:bg-[#F8FAFC] transition-colors">
                            <div className="w-16 h-16 bg-[#003568] flex items-center justify-center mb-12 text-white">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase tracking-wider text-[#555555] mb-6">
                                Radar-Technologie
                            </h3>
                            <p className="text-[#707070] font-light leading-relaxed text-lg">
                                Weiterentwicklung von mmWave-Sensoren für hochpräzise, berührungslose
                                Vital-Parameter-Erfassung.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section id="publications" className="py-10 bg-[#F9FBFD]">
                <div className="max-w-[1640px] mx-auto px-12">
                    <h2 className="text-4xl font-light text-[#003568] mb-16 text-center">
                        Ausgewählte Publikationen
                    </h2>

                    <div className="space-y-6">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border-b border-x border-[#C3C3C3] p-12 hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-xl font-medium text-[#555555] mb-4">
                                    {pub.title}
                                </h3>
                                <p className="text-[#003568] font-bold text-sm tracking-wide uppercase mb-2">
                                    {pub.journal} <span className="text-[#707070]">|</span> {pub.year}
                                </p>
                                <p className="text-[#707070] font-light italic">
                                    {pub.authors}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnerships */}
            <section id="data" className="py-10 bg-white">
                <div className="max-w-[1640px] mx-auto px-12">
                    <h2 className="text-4xl font-light text-[#003568] mb-20 text-center">
                        Wissenschaftliche Partnerschaften
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C3C3C3] border border-[#C3C3C3]">
                        {partnerships.map((partner, index) => (
                            <div key={index} className="bg-[#F9FBFD] p-16 text-center hover:bg-white transition-colors rounded-sm shadow-sm">
                                <div className="text-[#003568] flex justify-center mb-8">
                                    {partner.icon}
                                </div>
                                <h3 className="text-xl font-bold uppercase tracking-wider text-[#555555] mb-4">
                                    {partner.name}
                                </h3>
                                <p className="text-[#707070] font-light">
                                    {partner.field}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinical Trials CTA */}
            <section id="trials" className="py-10 bg-[#003568] text-white">
                <div className="max-w-4xl mx-auto px-12 text-center">
                    <h2 className="text-3xl font-light mb-8">
                        Klinische Studien
                    </h2>
                    <p className="text-white/80 font-light text-xl leading-relaxed mb-12">
                        Alle VÖLTZMANN Produkte werden in kontrollierten klinischen Studien getestet.
                        Wenn Sie an der Teilnahme an unseren Forschungsprojekten interessiert sind,
                        kontaktieren Sie uns gerne.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 bg-white text-[#003568] hover:bg-gray-100 transition-all text-sm font-bold uppercase tracking-widest rounded-sm"
                    >
                        An Studien teilnehmen
                    </a>
                </div>
            </section>
        </div>
    );
}
