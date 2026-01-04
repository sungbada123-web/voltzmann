'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wind, Droplets, Sun, CloudRain } from 'lucide-react';

export default function SpacePage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-[#F9FBFD] overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px]">
                                VÖLTZMANN Space
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003568] leading-[1.1] mb-8">
                                Pure <br />
                                <span className="font-semibold">Atmosphere.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                The ultimate sleep environment controller.
                                HEPA 14 filtration, intelligent humidification, and circadian lighting in one monolithic device.
                            </p>
                            <div className="mb-20 relative h-[500px] w-full max-w-2xl mx-auto overflow-hidden rounded-sm shadow-2xl">
                                <Image
                                    src="/images/voeltzmann-space-product.png"
                                    alt="VÖLTZMANN Space"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#003568] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#002855] transition-colors rounded-[2px]">
                                Pre-Order
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl -z-10 opacity-50"></div>
            </section>

            {/* Features */}
            <section className="py-10 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <Wind className="w-12 h-12 text-[#003568] mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">HEPA 14 Air Purification</h3>
                            <p className="text-[#707070] font-light">Removes 99.995% of airborne particles, including allergens and viruses.</p>
                        </div>
                        <div className="text-center">
                            <Droplets className="w-12 h-12 text-[#179A97] mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Adaptive Humidity</h3>
                            <p className="text-[#707070] font-light">Maintains optimal 40-60% humidity for respiratory health during sleep.</p>
                        </div>
                        <div className="text-center">
                            <Sun className="w-12 h-12 text-[#555555] mx-auto mb-6" />
                            <h3 className="text-xl font-bold mb-4">Circadian Lighting</h3>
                            <p className="text-[#707070] font-light">Dynamic light temperature adjustment to support natural melatonin production.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
