'use client';

import { motion } from 'framer-motion';
import { History, ArrowLeft, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20 text-center">
                <div className="container">
                    <Link href="/about" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-20 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>

                    <h1 className="text-8xl font-light text-[#003568] mb-12 leading-tight">Our <span className="font-semibold italic">Legacy</span></h1>
                    <p className="text-2xl text-[#555555] font-light max-w-3xl mx-auto leading-relaxed mb-32">
                        Founded in Berlin, VÖLTZMANN was born from a singular vision: to translate the most
                        advanced neuro-research into accessible, non-invasive sleep therapy.
                    </p>

                    <div className="relative h-[600px] w-full rounded-sm overflow-hidden mb-32 shadow-2xl">
                        <Image src="/images/voeltzmann_office_realism_v1.png" alt="Company Growth" fill className="object-cover scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-up from-[#003568]/60 to-transparent"></div>
                        <div className="absolute bottom-16 left-16 text-left">
                            <div className="flex items-center gap-4 text-white text-xs font-bold uppercase tracking-[0.4em] mb-4">
                                <MapPin className="text-[#179A97]" /> Est. 2024 | Berlin, DE
                            </div>
                            <h2 className="text-white text-5xl font-light">Engineering <br />Better Nights</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
