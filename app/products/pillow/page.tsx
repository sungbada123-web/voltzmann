'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Moon, Thermometer, Layers, Mic } from 'lucide-react';

export default function PillowPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-[#F9F9F9] overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[500px] w-full order-2 lg:order-1"
                        >
                            <Image
                                src="/images/voeltzmann-pillow-lifestyle.png"
                                alt="VÖLTZMANN Smart Pillow"
                                fill
                                className="object-cover rounded-sm shadow-xl"
                                priority
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px]">
                                VÖLTZMANN Pillow
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003568] leading-tight mb-8">
                                Reactive <br />
                                <span className="font-semibold">Surface.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10 max-w-xl">
                                The world's first medical-grade smart pillow.
                                Embedded sensors monitor head position and temperature, while adaptive memory foam ensures spinal alignment.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#003568] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#002855] transition-colors rounded-[2px]">
                                    Order Now
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-10 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Layers className="w-8 h-8 text-[#003568]" />,
                                title: "Adaptive Memory Foam",
                                desc: "Viscoelastic foam that responds to body heat and pressure for perfect contouring."
                            },
                            {
                                icon: <Thermometer className="w-8 h-8 text-[#179A97]" />,
                                title: "Thermal Regulation",
                                desc: "Phase-change materials absorb excess heat to keep your head cool all night."
                            },
                            {
                                icon: <Mic className="w-8 h-8 text-[#555555]" />,
                                title: "Snore Detection",
                                desc: "Integrated microphones detect snoring and can trigger gentle vibrations to shift position."
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-8 bg-[#F9FBFD] hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-lg font-bold text-[#333333] mb-4">{item.title}</h3>
                                <p className="text-[#707070] font-light text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
