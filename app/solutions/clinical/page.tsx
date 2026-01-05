'use client';

import { motion } from 'framer-motion';
import { Microscope, ArrowLeft, ShieldCheck, Activity } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ClinicalSolutionPage() {
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
                                Clinical Integration
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Clinical <br /><span className="font-semibold">Partners</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Empower your clinic with the next generation of non-contact sleep diagnostics. VÖLTZMANN
                                provides standardized data API and patient management systems for medical professionals.
                            </p>
                        </motion.div>
                        <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                            <Image
                                src="/images/voeltzmann_clinical_lab_v2.png"
                                alt="Clinical Partners"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="py-24 border-t border-[#EDF2F7]">
                        <h2 className="text-4xl font-light text-[#003568] mb-20 text-center uppercase tracking-widest">Medical Infrastructure</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#F9FBFD] flex items-center justify-center text-[#179A97] group-hover:bg-[#179A97] group-hover:text-white transition-all rounded-sm">
                                    <Microscope className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#003568] mb-4">Diagnostic Suite</h3>
                                    <p className="text-[#718096] font-light leading-relaxed">
                                        Interface with existing clinical software via HL7/FHIR standards for seamless patient data integration.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0 w-16 h-16 bg-[#F9FBFD] flex items-center justify-center text-[#179A97] group-hover:bg-[#179A97] group-hover:text-white transition-all rounded-sm">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-[#003568] mb-4">Certified Training</h3>
                                    <p className="text-[#718096] font-light leading-relaxed">
                                        VÖLTZMANN Academy provides full certification for sleep technicians and medical examiners.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-96 w-full rounded-sm overflow-hidden mb-32 group">
                        <Image src="/images/voeltzmann_staff_portrait_v2.png" alt="Clinical Professional" fill className="object-cover" />
                        <div className="absolute inset-0 bg-[#003568]/40 group-hover:bg-[#003568]/20 transition-all"></div>
                        <div className="absolute bottom-12 left-12">
                            <h4 className="text-white text-3xl font-light">Join the Network</h4>
                            <p className="text-white/70 max-w-md">Become a certified VÖLTZMANN clinical partner and leading the way in non-contact sleep therapy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
