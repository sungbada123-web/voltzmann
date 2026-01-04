'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, EyeOff, Battery, Bluetooth, Moon } from 'lucide-react';

export default function MaskPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-[#1a1a1a] text-white overflow-hidden">
                <div className="absolute inset-0 bg-[#003568]/20 z-0"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px] backdrop-blur-sm">
                                VÖLTZMANN Mask
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight mb-8">
                                Total <br />
                                <span className="font-semibold">Immersion.</span>
                            </h1>
                            <p className="text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl">
                                100% blackout meets intelligent light therapy.
                                The VÖLTZMANN Mask integrates ultra-thin OLEDs to simulate sunrise, waking you naturally while blocking all external disturbances.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#003568] text-sm font-bold uppercase tracking-widest hover:bg-[#F0F0F0] transition-colors rounded-[2px]">
                                Discover
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[500px] w-full"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/voeltzmann-mask-product.png"
                                    alt="VÖLTZMANN Smart Sleep Mask"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tech Specs */}
            <section className="py-10 bg-white text-[#333]">
                <div className="container">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Weight", value: "35g" },
                            { label: "Battery Life", value: "14 Nights" },
                            { label: "Material", value: "Mulberry Silk" },
                            { label: "Charging", value: "Wireless (Qi)" }
                        ].map((spec, i) => (
                            <div key={i} className="text-center p-6 bg-[#F9FBFD] rounded-[2px] hover:bg-[#F0F4F8] transition-colors">
                                <div className="text-xs font-bold tracking-widest text-[#999] uppercase mb-4">{spec.label}</div>
                                <div className="text-2xl font-light text-[#003568]">{spec.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
