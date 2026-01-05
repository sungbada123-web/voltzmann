'use client';

import { motion } from 'framer-motion';
import { Download, ArrowLeft, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DownloadsPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/service" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Service
                    </Link>

                    <div className="mb-24">
                        <h1 className="text-6xl font-light text-[#003568] mb-8">Downloads & <span className="font-semibold text-[#179A97]">Resources</span></h1>
                        <p className="text-xl text-[#555555] font-light max-w-2xl leading-relaxed">
                            Access user manuals, safety protocols, and software updates for your VÖLTZMANN ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        <div className="lg:col-span-3 space-y-6">
                            {[
                                { title: 'User Manual: VÖLTZMANN Hub V2', type: 'PDF', size: '4.2 MB' },
                                { title: 'mmWave Calibration Protocol', type: 'PDF', size: '1.8 MB' },
                                { title: 'VÖLTZMANN Desktop Suite (macOS/Win)', type: 'Software', size: '124 MB' },
                                { title: 'Clinical Safety Guidelines 2024', type: 'PDF', size: '2.5 MB' }
                            ].map((doc, i) => (
                                <div key={i} className="flex items-center justify-between p-10 bg-[#F9FBFD] rounded-sm group hover:bg-white hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 flex items-center justify-center bg-white text-[#003568] rounded-sm shadow-sm group-hover:bg-[#179A97] group-hover:text-white transition-colors">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-[#2D3748] mb-1">{doc.title}</h3>
                                            <div className="text-xs text-[#A0AEC0] uppercase tracking-widest">{doc.type} • {doc.size}</div>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 text-[#179A97] hover:text-[#003568] transition-colors">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-8">
                            <div className="bg-[#F0F7FF] p-10 rounded-sm">
                                <h3 className="text-sm font-bold text-[#003568] uppercase tracking-widest mb-6 border-b border-[#003568]/10 pb-4">Product Updates</h3>
                                <p className="text-xs text-[#718096] font-light leading-relaxed mb-6">
                                    Subscribe to receive the latest firmware and medical software releases directly in your inbox.
                                </p>
                                <input type="email" placeholder="Email Address" className="w-full bg-white px-4 py-3 rounded-sm text-xs mb-4 border-none outline-none focus:ring-1 focus:ring-[#179A97]" />
                                <button className="w-full bg-[#179A97] text-white py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest">Subscribe</button>
                            </div>
                            <div className="relative h-64 rounded-sm overflow-hidden grayscale opacity-60">
                                <Image src="/images/voeltzmann_staff_uniform_v1.png" alt="Engineering" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
