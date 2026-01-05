'use client';

import { motion } from 'framer-motion';
import { Settings, ArrowLeft, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MaintenancePage() {
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
                                Lifecycle Management
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Maintenance <br /><span className="font-semibold text-[#179A97]">& Tuning</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Ensure your VÖLTZMANN ecosystem operates at peak clinical performance. We offer
                                remote diagnostics, hardware tuning, and professional maintenance plans.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/voeltzmann_lab_branding.png" alt="System Maintenance" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="space-y-12 mb-32">
                        {[
                            { title: 'Remote System Health Audit', icon: <Shield />, price: 'Included with Hub Sync' },
                            { title: 'Precision Radar Re-Calibration', icon: <Settings />, price: 'On-demand / Clinical only' },
                            { title: 'Hardware Refresh Program', icon: <Wrench />, price: 'Available after 36 months' }
                        ].map((service, i) => (
                            <div key={i} className="flex items-center justify-between p-12 bg-[#F9FBFD] rounded-sm group hover:bg-white hover:shadow-xl transition-all">
                                <div className="flex items-center gap-8">
                                    <div className="text-[#179A97] group-hover:scale-110 transition-transform">{service.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-light text-[#003568]">{service.title}</h3>
                                        <p className="text-[#A0AEC0] text-xs font-bold uppercase tracking-widest mt-1">{service.price}</p>
                                    </div>
                                </div>
                                <Link href="/contact" className="px-6 py-2 border border-[#EDF2F7] text-[#003568] text-[10px] font-bold uppercase tracking-widest hover:border-[#003568] transition-colors">
                                    Schedule
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
