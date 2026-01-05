'use client';

import { motion } from 'framer-motion';
import { Target, ArrowLeft, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeSolutionPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/solutions" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Solutions
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Consumer Technology
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Home & <br /><span className="font-semibold">Family</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Professional-grade sleep technology, distilled for the modern home. VÖLTZMANN integrates
                                seamlessly into your bedroom, providing every family member with the foundation for better living.
                            </p>
                            <Link href="/products" className="inline-block px-8 py-4 bg-[#003568] text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                                View Home Products
                            </Link>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/voeltzmann_insomnia_cure.png" // Re-using home environment image
                                alt="Home Solution"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-24 border-t border-[#EDF2F7]">
                        <div>
                            <h2 className="text-3xl font-light text-[#003568] mb-8">Authoritative Support</h2>
                            <p className="text-[#718096] font-light leading-relaxed mb-8">
                                Behind every VÖLTZMANN home device is a network of world-class engineers and sleep scientists.
                                We bring clinical excellence to your bedside table.
                            </p>
                            <div className="relative h-64 rounded-sm overflow-hidden mb-8">
                                <Image src="/images/voeltzmann_staff_engineer_office.png" alt="Engineering Team" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="bg-[#F9FBFD] p-16 rounded-sm">
                            <h3 className="text-2xl font-light text-[#003568] mb-8 uppercase tracking-widest">Site Metrics</h3>
                            <div className="space-y-12">
                                {[
                                    { label: 'Latency', value: '< 2ms', sub: 'Real-time sync' },
                                    { label: 'Uptime', value: '99.99%', sub: 'Cloud backup' },
                                    { label: 'Encryption', value: 'AES-256', sub: 'Banking grade' }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-[#E2E8F0] pb-4">
                                        <div>
                                            <div className="text-xs font-bold text-[#179A97] uppercase tracking-widest mb-1">{stat.label}</div>
                                            <div className="text-sm text-[#A0AEC0] font-light">{stat.sub}</div>
                                        </div>
                                        <div className="text-3xl font-light text-[#003568]">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
