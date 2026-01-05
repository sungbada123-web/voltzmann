'use client';

import { motion } from 'framer-motion';
import { Database, ArrowLeft, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SleepDataBankPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/science" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Science
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Big Data & AI
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8">Sleep Data Bank</h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                VÖLTZMANN maintains one of the largest anonymized repositories of high-resolution radar
                                sleep data. This foundation drives our AI models to detect subtle sleep patterns with
                                clinical precision.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden bg-[#F9FBFD]">
                            <Image
                                src="/images/voeltzmann_data_analytics.png"
                                alt="Sleep Data Bank"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {[
                            { title: '1.2M+ Nights', icon: <Database />, desc: 'Anonymized sleep sessions recorded across diverse demographics.' },
                            { title: 'Privacy First', icon: <ShieldCheck />, desc: 'Advanced AES-256 encryption and strictly decentralized processing.' },
                            { title: 'Local AI', icon: <Cpu />, desc: 'Processing 4k+ data points per second directly on the VÖLTZMANN Hub.' }
                        ].map((stat, i) => (
                            <div key={i} className="p-12 bg-[#F9FBFD] text-center rounded-sm group hover:bg-[#003568] transition-all duration-500">
                                <div className="text-[#179A97] mb-6 flex justify-center group-hover:text-white transition-colors">{stat.icon}</div>
                                <h3 className="text-2xl font-light text-[#003568] mb-4 group-hover:text-white transition-colors">{stat.title}</h3>
                                <p className="text-[#718096] font-light leading-relaxed group-hover:text-white/70 transition-colors">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
