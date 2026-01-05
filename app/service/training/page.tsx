'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, Award, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TrainingPage() {
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
                                VÖLTZMANN Academy
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Professional <br /><span className="font-semibold text-[#179A97]">Training</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Master the science of non-contact sleep therapy. We provide comprehensive certification
                                courses for medical professionals, therapists, and technical installers.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl">
                            <Image src="/images/voeltzmann_staff_engineer_office.png" alt="In-depth Training" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                        {[
                            { title: 'Level 1: System Integration', icon: <BookOpen />, desc: 'Core hardware setup, radar calibration, and software synchronization.' },
                            { title: 'Level 2: Clinical Data', icon: <Award />, desc: 'Deep-dive into sleep architecture analysis and data interpretation.' },
                            { title: 'Level 3: Neuro-Modulation', icon: <Users />, desc: 'Advanced therapeutic application of CES and sensory protocols.' }
                        ].map((course, i) => (
                            <div key={i} className="p-10 bg-[#F9FBFD] text-center rounded-sm">
                                <div className="text-[#179A97] mb-6 flex justify-center">{course.icon}</div>
                                <h3 className="text-xl font-medium text-[#003568] mb-4">{course.title}</h3>
                                <p className="text-[#718096] font-light text-sm">{course.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
