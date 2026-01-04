'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Brain, Clock, Activity, Smartphone, Moon } from 'lucide-react';

export default function CBTIPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-[#F4F7F9] overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px]">
                                VÖLTZMANN CBT-I
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003568] leading-tight mb-8">
                                Cognitive <br />
                                <span className="font-semibold">Therapy.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10 max-w-xl">
                                The gold standard for insomnia treatment, digitized.
                                VÖLTZMANN CBT-I is a clinically validated digital therapeutic that targets the root cognitive causes of sleeplessness.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#003568] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#002855] transition-colors rounded-[2px]">
                                    Start Therapy
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                                <Link href="#features" className="inline-flex items-center justify-center px-8 py-4 border border-[#C3C3C3] text-[#555555] text-sm font-bold uppercase tracking-widest hover:border-[#003568] hover:text-[#003568] transition-colors rounded-[2px]">
                                    How it Works
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full flex items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/voeltzmann-cbti-tablet.png"
                                    alt="VÖLTZMANN CBT-I App Interface"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-10 bg-white">
                <div className="container">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">Digital Therapeutics</h2>
                        <div className="w-24 h-1 bg-[#179A97] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Brain className="w-8 h-8 text-[#003568]" />,
                                title: "Cognitive Restructuring",
                                desc: "Identify and reframe the thoughts and anxieties that keep you awake at night."
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-[#179A97]" />,
                                title: "Sleep Restriction",
                                desc: "Scientifically calibrated sleep windows to rebuild your natural sleep drive."
                            },
                            {
                                icon: <Activity className="w-8 h-8 text-[#555555]" />,
                                title: "Personalized Algorithm",
                                desc: "AI adapts the therapy program daily based on your sleep diaries and progress."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-8 hover:bg-[#F9FBFD] transition-colors group">
                                <div className="mb-6 bg-[#F9FBFD] w-16 h-16 flex items-center justify-center rounded-[2px] group-hover:bg-[#003568]/5 transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#333333] mb-4">{item.title}</h3>
                                <p className="text-[#707070] font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
