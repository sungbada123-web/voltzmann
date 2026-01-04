'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Pill, Beaker } from 'lucide-react';

export default function EssencePage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <section className="relative py-10 bg-[#F4F7F9]">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px]">
                                VÖLTZMANN Essence
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-light text-[#003568] leading-tight mb-8">
                                Molecular <br />
                                <span className="font-semibold">Support.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-12">
                                Pharmaceutical-grade sleep supplementation.
                                Developed by German neurologists to support the biochemistry of deep sleep.
                            </p>

                            <div className="relative h-[500px] w-full mb-16">
                                <Image
                                    src="/images/voeltzmann-essence-bottle.png"
                                    alt="VÖLTZMANN Essence"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
                                <div className="bg-white p-8 hover:bg-[#F9FBFD] transition-colors rounded-[2px]">
                                    <Leaf className="w-8 h-8 text-[#179A97] mb-4" />
                                    <h4 className="font-bold text-[#333] mb-4">Dual-Release Melatonin</h4>
                                    <p className="text-sm text-[#777]">Immediate onset + sustained release for 8 hours.</p>
                                </div>
                                <div className="bg-white p-8 hover:bg-[#F9FBFD] transition-colors rounded-[2px]">
                                    <Beaker className="w-8 h-8 text-[#003568] mb-4" />
                                    <h4 className="font-bold text-[#333] mb-4">Magnesium Bisglycinate</h4>
                                    <p className="text-sm text-[#777]">Highest bioavailability for muscle relaxation.</p>
                                </div>
                                <div className="bg-white p-8 hover:bg-[#F9FBFD] transition-colors rounded-[2px]">
                                    <Pill className="w-8 h-8 text-[#555555] mb-4" />
                                    <h4 className="font-bold text-[#333] mb-4">L-Theanine</h4>
                                    <p className="text-sm text-[#777]">Promotes alpha-wave brain activity for calm.</p>
                                </div>
                            </div>

                            <div className="mt-16">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#003568] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#002855] transition-colors rounded-[2px]">
                                    View Formula
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >
        </div >
    );
}
