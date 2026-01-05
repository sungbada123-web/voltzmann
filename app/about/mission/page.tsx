'use client';

import { motion } from 'framer-motion';
import { Compass, ArrowLeft, Target, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/about" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                Vision 2030
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Mission & <br /><span className="font-semibold text-[#179A97]">Vision</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Our mission is to eliminate the global sleep deficit through biological synchronization.
                                We envision a world where every bedroom is a clinical-grade restorative environment.
                            </p>
                        </motion.div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/voeltzmann_clinical_trial.png" alt="Clinical Precision" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
                        <div>
                            <div className="text-[#179A97] mb-8"><Target className="w-12 h-12" /></div>
                            <h2 className="text-3xl font-light text-[#003568] mb-6">Our Mission</h2>
                            <p className="text-lg text-[#718096] font-light leading-relaxed">
                                To democratize neurotechnology. We take the expensive, cumbersome diagnostic equipment
                                of sleep labs and miniaturize it for home use, without compromising on medical integrity.
                            </p>
                        </div>
                        <div>
                            <div className="text-[#179A97] mb-8"><Eye className="w-12 h-12" /></div>
                            <h2 className="text-3xl font-light text-[#003568] mb-6">Our Vision</h2>
                            <p className="text-lg text-[#718096] font-light leading-relaxed">
                                A paradigm shift in healthcare where prevention—driven by high-resolution sleep data—precedes treatment.
                                We are building the data infrastructure for the next century of preventative medicine.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
