'use client';

import { motion } from 'framer-motion';
import { Briefcase, ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/about" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <div>
                            <div className="inline-block px-4 py-1 bg-[#F0F7FF] text-[#003568] text-[10px] font-bold tracking-widest uppercase mb-6 rounded-sm">
                                We Are Hiring
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Build the future <br /><span className="font-semibold text-[#179A97]">of sleep.</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Join our multi-disciplinary team of neuroscientists, engineers, and designers in Berlin
                                and San Francisco.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/lifestyle-young-european.png" alt="VÖLTZMANN Workplace" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="space-y-6 mb-32">
                        {[
                            { title: 'Senior Firmware Engineer', location: 'Berlin / Remote', dept: 'Hardware' },
                            { title: 'Clinical Sleep Specialist', location: 'Frankfurt Clinic', dept: 'Medical' },
                            { title: 'NPU Implementation Lead', location: 'Berlin HQ', dept: 'AI & Data' },
                            { title: 'Senior Product Designer', location: 'Remote', dept: 'Design' }
                        ].map((job, i) => (
                            <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-12 bg-[#F9FBFD] rounded-sm group hover:bg-white hover:shadow-xl transition-all border-l-4 border-transparent hover:border-[#179A97]">
                                <div className="mb-6 md:mb-0">
                                    <div className="text-[10px] font-bold text-[#179A97] tracking-widest uppercase mb-2">{job.dept}</div>
                                    <h3 className="text-2xl font-light text-[#003568]">{job.title}</h3>
                                    <div className="flex items-center gap-2 text-xs text-[#A0AEC0] mt-3 uppercase tracking-widest">
                                        <MapPin className="w-3 h-3" /> {job.location}
                                    </div>
                                </div>
                                <button className="flex items-center gap-3 text-xs font-bold text-[#003568] uppercase tracking-[0.2em] group-hover:gap-5 transition-all outline-none">
                                    Apply Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
