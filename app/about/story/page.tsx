'use client';

import { motion } from 'framer-motion';
import { History, ArrowLeft, Award, Zap, Microscope, Globe, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryPage() {
    const timelineEvents = [
        {
            year: '1994',
            title: 'Foundation in Berlin',
            desc: 'Founded by Dr. Heinrich Völtzmann as a specialized lab for bio-signal processing.',
            icon: Factory
        },
        {
            year: '2005',
            title: 'First Patent',
            desc: 'Patented the core "Neuro-Resonance" algorithm, laying the groundwork for non-invasive therapy.',
            icon: Award
        },
        {
            year: '2015',
            title: 'Clinical Research Expansion',
            desc: 'Partnered with Charité Berlin to conduct large-scale sleep study trials using mmWave sensors.',
            icon: Microscope
        },
        {
            year: '2020',
            title: 'AI Integration',
            desc: 'Launched the first NPU-based edge processing unit, enabling real-time sleep stage tracking.',
            icon: Zap
        },
        {
            year: '2024',
            title: 'VÖLTZMANN Brand Global',
            desc: 'Unification of research and consumer divisions under the global VÖLTZMANN Medical brand.',
            icon: Globe
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-32">
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <Link href="/about" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-16 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>

                    {/* Hero Header */}
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                EST. 1994
                            </div>
                            <h1 className="text-7xl font-light text-[#003568] mb-8 leading-tight">
                                30 Years of <br />
                                <span className="font-semibold italic">Engineering Precision</span>
                            </h1>
                            <p className="text-2xl text-[#555555] font-light leading-relaxed">
                                From a specialized bio-signal lab to a global leader in neuro-sleep technology.
                                Three decades of relentless innovation without compromise.
                            </p>
                        </motion.div>
                    </div>

                    {/* Feature Image */}
                    <div className="relative h-[600px] w-full rounded-sm overflow-hidden mb-32 shadow-2xl">
                        <Image
                            src="/images/voeltzmann_medical_lab.png"
                            alt="VÖLTZMANN History Lab"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#003568]/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 text-white p-8 max-w-2xl">
                            <h3 className="text-3xl font-light mb-4 text-[#EDF2F7]">The Berlin Standard</h3>
                            <p className="opacity-80 text-lg font-light">
                                Our central research facility has remained in the heart of Berlin,
                                maintaining the highest standards of German medical engineering.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mb-32 relative">
                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-[#E2E8F0] -translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-24">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    <div className="w-full md:w-1/2 md:text-right">
                                        <div className={`p-8 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                                            <div className="text-6xl font-bold text-[#E2E8F0] mb-4">{event.year}</div>
                                            <h3 className="text-2xl font-bold text-[#003568] mb-4">{event.title}</h3>
                                            <p className="text-[#555555] font-light leading-relaxed text-lg">
                                                {event.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="z-10 bg-white p-4 border-4 border-[#F9FBFD] rounded-full shadow-lg">
                                        <div className="w-12 h-12 bg-[#003568] text-white flex items-center justify-center rounded-sm">
                                            <event.icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="w-full md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Milestones Data Table */}
                    <div className="py-20 bg-[#F9FBFD] -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-20 lg:px-20 rounded-sm">
                        <h2 className="text-4xl font-light text-[#003568] mb-16 text-center">Technical Milestones</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#CBD5E0]">
                                        <th className="py-6 px-8 text-sm font-bold text-[#003568] uppercase tracking-widest">Era</th>
                                        <th className="py-6 px-8 text-sm font-bold text-[#003568] uppercase tracking-widest">Core Technology</th>
                                        <th className="py-6 px-8 text-sm font-bold text-[#003568] uppercase tracking-widest">Global Impact</th>
                                        <th className="py-6 px-8 text-sm font-bold text-[#003568] uppercase tracking-widest">Validation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-[#E2E8F0] bg-white hover:bg-[#F0F7FF] transition-colors">
                                        <td className="py-8 px-8 font-bold text-[#003568]">1990s</td>
                                        <td className="py-8 px-8 text-[#555555]">Analog Bio-signal Sensors</td>
                                        <td className="py-8 px-8 text-[#555555]">Standardized EEG Basics</td>
                                        <td className="py-8 px-8 text-[#179A97]">DIN ISO 9001</td>
                                    </tr>
                                    <tr className="border-b border-[#E2E8F0] bg-white hover:bg-[#F0F7FF] transition-colors">
                                        <td className="py-8 px-8 font-bold text-[#003568]">2000s</td>
                                        <td className="py-8 px-8 text-[#555555]">Digital Signal Processing (DSP)</td>
                                        <td className="py-8 px-8 text-[#555555]">Noise Reduction Algorithms</td>
                                        <td className="py-8 px-8 text-[#179A97]">FDA Class II (Prelim)</td>
                                    </tr>
                                    <tr className="border-b border-[#E2E8F0] bg-white hover:bg-[#F0F7FF] transition-colors">
                                        <td className="py-8 px-8 font-bold text-[#003568]">2010s</td>
                                        <td className="py-8 px-8 text-[#555555]">mmWave Radar (60GHz)</td>
                                        <td className="py-8 px-8 text-[#555555]">Contactless Monitoring</td>
                                        <td className="py-8 px-8 text-[#179A97]">Nature Medicine Publication</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-[#F0F7FF] transition-colors">
                                        <td className="py-8 px-8 font-bold text-[#003568]">2020s</td>
                                        <td className="py-8 px-8 text-[#555555]">Neural Entrainment AI</td>
                                        <td className="py-8 px-8 text-[#555555]">Smart Home Integration</td>
                                        <td className="py-8 px-8 text-[#179A97]">EU MDR Certified</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
