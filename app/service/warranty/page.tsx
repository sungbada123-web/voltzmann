'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, RefreshCw, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function WarrantyPage() {
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
                                Global Protection
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Warranty <br /><span className="font-semibold text-[#179A97]">& Care</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Every VÖLTZMANN device is a precision instrument. We offer comprehensive global
                                protection plans to ensure your sleep therapy remains uninterrupted.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/voeltzmann_lab_realism_v1.png" alt="Precision Quality" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {[
                            { title: '2-Year Standard', icon: <ShieldCheck />, desc: 'Standard manufacturer warranty on all hub and sensor hardware.' },
                            { title: 'Elite Care Sync', icon: <RefreshCw />, desc: 'Priority replacement program for clinical and athlete partners.' },
                            { title: 'Lifetime Support', icon: <Clock />, desc: 'Unlimited access to software updates and clinical tuning guidance.' }
                        ].map((plan, i) => (
                            <div key={i} className="p-12 bg-[#F9FBFD] rounded-sm flex flex-col items-center text-center">
                                <div className="text-[#179A97] mb-8">{plan.icon}</div>
                                <h3 className="text-2xl font-light text-[#003568] mb-6">{plan.title}</h3>
                                <p className="text-[#718096] font-light leading-relaxed text-sm">{plan.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
