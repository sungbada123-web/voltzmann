'use client';

import { motion } from 'framer-motion';
import { Camera, ArrowLeft, Download, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PressPage() {
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
                                Media Relations
                            </div>
                            <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">Press <span className="font-semibold text-[#179A97]">Kit</span></h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                Official VÖLTZMANN assets, brand guidelines, and executive biographies for media use.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-sm overflow-hidden shadow-2xl grayscale blur-[1px] opacity-40">
                            <Image src="/images/voeltzmann_hub_black.png" alt="Press Media" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="p-16 bg-[#F9FBFD] flex flex-col md:flex-row items-center justify-between gap-12 rounded-sm mb-32">
                        <div className="flex items-center gap-6 text-[#003568]">
                            <Download className="w-10 h-10" />
                            <div>
                                <h3 className="text-2xl font-light">Complete Media Pack</h3>
                                <p className="text-[#718096] text-sm">Download high-res images, logos, and fact sheets (450 MB)</p>
                            </div>
                        </div>
                        <button className="px-12 py-5 bg-[#003568] text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#179A97] transition-all">
                            Request Access
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
