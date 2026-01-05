'use client';

import { motion } from 'framer-motion';
import { HelpCircle, ArrowLeft, Search, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/service" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Service
                    </Link>

                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                            VÖLTZMANN Support
                        </div>
                        <h1 className="text-6xl font-light text-[#003568] mb-8">How can we <span className="font-semibold text-[#179A97]">help you?</span></h1>
                        <div className="max-w-2xl mx-auto relative">
                            <input
                                type="text"
                                placeholder="Search for products, setup guides, or clinical data..."
                                className="w-full px-8 py-5 bg-[#F9FBFD] border-none rounded-sm text-sm focus:ring-2 focus:ring-[#179A97] transition-all outline-none pl-16"
                            />
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[#A0AEC0] w-5 h-5" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {[
                            { title: 'Setup Guides', items: ['VÖLTZMANN Hub Installation', 'Radar Calibration', 'CBT-I App Sync'] },
                            { title: 'Troubleshooting', items: ['Connection Issues', 'Device Reset', 'Data Export Errors'] },
                            { title: 'Clinical FAQ', items: ['CES Safety Protocol', 'mmWave Privacy', 'Clinical Reports'] }
                        ].map((cat, i) => (
                            <div key={i} className="p-12 bg-[#F9FBFD] rounded-sm group hover:bg-white hover:shadow-xl transition-all border-b-2 border-transparent hover:border-[#179A97]">
                                <h3 className="text-xl font-bold text-[#003568] mb-8 uppercase tracking-widest">{cat.title}</h3>
                                <ul className="space-y-4">
                                    {cat.items.map((item, j) => (
                                        <li key={j} className="text-[#718096] hover:text-[#179A97] cursor-pointer text-sm font-light transition-colors">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#003568] rounded-sm p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
                        <div className="relative z-10 text-white max-w-xl">
                            <h2 className="text-3xl font-light mb-6">Need expert assistance?</h2>
                            <p className="text-white/70 font-light mb-10 leading-relaxed">
                                Our clinical support team is available for deep technical queries regarding our device efficacy and integration.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#179A97] text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white hover:text-[#003568] transition-all">
                                <MessageSquare className="w-4 h-4" /> Speak to a Specialist
                            </Link>
                        </div>
                        <div className="lg:w-1/3 relative h-64 w-full rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/voeltzmann_office_realism_v1.png" alt="Support Team" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
