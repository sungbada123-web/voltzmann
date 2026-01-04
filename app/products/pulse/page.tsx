'use client';

import { motion } from 'framer-motion';
import { Zap, Brain, Activity, CheckCircle2, Battery, Minimize2, Radio, Sliders, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PulsePage() {
    return (
        <div className="min-h-screen bg-white pt-[80px]">

            {/* 1. HERO SECTION - Medical Cleanliness */}
            <section className="relative h-[85vh] min-h-[700px] bg-[#F4F7F9] overflow-hidden flex items-center">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-3 py-1 bg-[#E2E8F0] text-[#003366] text-xs font-bold uppercase tracking-widest mb-6 rounded-[2px]">
                                Medical Device Class IIa
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-light text-[#003366] leading-[1.1] mb-10">
                                VÖLTZMANN <span className="font-semibold">Neural</span>
                            </h1>
                            <p className="text-xl text-[#5A6A85] font-light leading-relaxed mb-12 max-w-xl">
                                Advanced Cranial Electrotherapy Stimulation (CES).
                                Clinically proven to regulate neurochemistry for anxiety relief and profound sleep restoration.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#003366] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#002855] transition-all rounded-[2px] inline-flex items-center gap-2"
                                >
                                    Request quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#specs"
                                    className="px-8 py-4 bg-[#F7FAFC] text-[#4A5568] text-sm font-bold uppercase tracking-wider hover:bg-[#E2E8F0] hover:text-[#003366] transition-all rounded-[2px]"
                                >
                                    Technical Specs
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 30 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full"
                        >
                            <div className="relative w-full h-full">
                                {/* Placeholder for Product Image - Using Pulse Product Image */}
                                <Image
                                    src="/images/voeltzmann-pulse-product.png"
                                    alt="VÖLTZMANN Neural Medical Device"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#E6EBF1] to-transparent -z-10"></div>
            </section>

            {/* 2. CLINICAL SCIENCE - White Background */}
            <section className="py-10 bg-white">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-6">
                            The Science of <span className="font-semibold">Neuromodulation</span>
                        </h2>
                        <p className="text-lg text-[#718096] font-light leading-relaxed">
                            VÖLTZMANN Neural utilizes precise square-wave electrical pulses to gently stimulate the vagus nerve and hypothalamus.
                            This non-invasive mechanism effectively rebalances neurotransmitters without pharmacological intervention.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Brain className="w-10 h-10" />,
                                title: "Neurotransmitter Balance",
                                desc: "Regulates the secretion of Serotonin, Endorphins, and Melatonin to normalize the sleep-wake cycle."
                            },
                            {
                                icon: <Activity className="w-10 h-10" />,
                                title: "Alpha Wave Promotion",
                                desc: "Stimulates alpha brainwave activity (8-13Hz) associated with relaxed wakefulness and stress reduction."
                            },
                            {
                                icon: <Minimize2 className="w-10 h-10" />,
                                title: "Cortisol Reduction",
                                desc: "Significantly lowers stress hormone levels, enabling the body to enter deep restorative sleep states."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group p-8 bg-[#F8FAFB] hover:bg-[#F0F4F8] transition-colors duration-300 rounded-[2px]">
                                <div className="w-16 h-16 bg-white flex items-center justify-center text-[#003366] group-hover:text-[#009999] transition-all mb-6 rounded-full shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-[#2D3748] mb-4">{item.title}</h3>
                                <p className="text-[#718096] font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LIFESTYLE INTEGRATION - Full Width Image Split */}
            <section className="py-0 bg-[#F4F7F9]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-[600px] lg:h-auto">
                        <Image
                            src="/images/lifestyle-young-european.png"
                            alt="Professional using VÖLTZMANN Neural"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex items-center p-16 lg:p-40">
                        <div>
                            <div className="text-[#009999] font-bold tracking-widest uppercase text-sm mb-4">Therapy in Motion</div>
                            <h2 className="text-3xl lg:text-4xl font-light text-[#003366] mb-6 leading-tight">
                                Designed for <br />Modern Life
                            </h2>
                            <p className="text-lg text-[#5A6A85] font-light leading-relaxed mb-8">
                                The ergonomic design and long-lasting battery life make VÖLTZMANN Neural the perfect companion for home use,
                                office recovery sessions, or travel.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "20-minute automated sessions",
                                    "Ear-clip interface for comfort",
                                    "Portable and lightweight (45g)",
                                    "USB-C Quick Charging"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#2D3748]">
                                        <CheckCircle2 className="w-5 h-5 text-[#009999]" />
                                        <span className="font-light">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL SPECS - Loewenstein Style Table */}
            <section id="specs" className="py-10 bg-white">
                <div className="container max-w-5xl">
                    <h2 className="text-3xl font-light text-[#003366] mb-16 text-center">Technical Specifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-[#A0AEC0] uppercase tracking-widest mb-6 pb-2">
                                Output Parameters
                            </h3>
                            <dl className="space-y-4">
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Waveform</dt>
                                    <dd className="text-[#2D3748] font-medium">Modified Square Wave</dd>
                                </div>
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Frequency</dt>
                                    <dd className="text-[#2D3748] font-medium">0.5Hz / 1.5Hz / 100Hz</dd>
                                </div>
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Current</dt>
                                    <dd className="text-[#2D3748] font-medium">0 - 500µA (Adjustable)</dd>
                                </div>
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Timer</dt>
                                    <dd className="text-[#2D3748] font-medium">20 / 40 / 60 mins</dd>
                                </div>
                            </dl>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-[#A0AEC0] uppercase tracking-widest mb-6 pb-2">
                                Device Data
                            </h3>
                            <dl className="space-y-4">
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Dimensions</dt>
                                    <dd className="text-[#2D3748] font-medium">85mm x 45mm x 12mm</dd>
                                </div>
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Weight</dt>
                                    <dd className="text-[#2D3748] font-medium">45g</dd>
                                </div>
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Battery</dt>
                                    <dd className="text-[#2D3748] font-medium">Li-Po 500mAh (~2 weeks use)</dd>
                                </div>
                                <div className="flex justify-between py-2">
                                    <dt className="text-[#718096] font-light">Certification</dt>
                                    <dd className="text-[#2D3748] font-medium">CE Class IIa, FDA Exempt</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. DOWNLOADS & SUPPORT */}
            <section className="py-10 bg-[#003366] text-white">
                <div className="container">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                        <div>
                            <h2 className="text-3xl font-light mb-4">Downloads & Support</h2>
                            <p className="text-white/80 font-light max-w-xl">
                                Access clinical manuals, user guides, and conformity declarations for the VÖLTZMANN Neural.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 bg-white/10 hover:bg-white hover:text-[#003366] transition-all rounded-sm text-sm uppercase tracking-wider">
                                User Manual
                            </button>
                            <button className="px-6 py-3 bg-white/10 hover:bg-white hover:text-[#003366] transition-all rounded-sm text-sm uppercase tracking-wider">
                                Clinical Data
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
