'use client';

import { motion } from 'framer-motion';
import { Users, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PartnerNetworkPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/service" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Service
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                B2B & Clinical
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Partner <br /><span className="font-semibold text-[#179A97]">Network</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                VÖLTZMANN collaborates with a global network of specialized sleep clinics,
                                wellness retreats, and technical distributors to bring precision therapy to the world.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/voeltzmann_office_branding.png" alt="Partner Collaboration" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                        <div className="p-16 bg-[#F9FBFD] rounded-sm">
                            <h2 className="text-3xl font-light text-[#003568] mb-10 border-b border-[#003568]/10 pb-6 uppercase tracking-widest">For Clinics</h2>
                            <ul className="space-y-6">
                                {['Advanced Diagnostic API Integration', 'Standardized Patient Data Reports', 'Clinical Study Participation', 'Preferred Hardware Pricing'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[#718096]">
                                        <CheckCircle2 className="w-5 h-5 text-[#179A97] flex-shrink-0 mt-1" />
                                        <span className="text-sm font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-16 bg-[#F9FBFD] rounded-sm">
                            <h2 className="text-3xl font-light text-[#003568] mb-10 border-b border-[#003568]/10 pb-6 uppercase tracking-widest">For Distributors</h2>
                            <ul className="space-y-6">
                                {['Regional Distribution Rights', 'Technical Support Training', 'Marketing & Brand Assets', 'Logistical Synchronization'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[#718096]">
                                        <CheckCircle2 className="w-5 h-5 text-[#179A97] flex-shrink-0 mt-1" />
                                        <span className="text-sm font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
