'use client';

import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Download, Share2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PublicationsPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/science" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Science
                    </Link>

                    <div className="mb-24">
                        <h1 className="text-6xl font-light text-[#003568] mb-8">Whitepapers & Publications</h1>
                        <p className="text-xl text-[#555555] font-light max-w-3xl leading-relaxed">
                            Access our comprehensive library of scientific research, technical whitepapers, and clinical
                            case studies detailing the VÖLTZMANN methodology.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: 'The Future of Non-Contact Sleep Monitoring', type: 'Whitepaper', date: 'Oct 2024', size: '2.4 MB' },
                            { title: 'Neuro-Entrainment through Haptic Synchronization', type: 'Clinical Study', date: 'Aug 2024', size: '4.1 MB' },
                            { title: 'AI-Driven Sleep Stage Classification: A New Standard', type: 'Technical Note', date: 'June 2024', size: '1.8 MB' },
                            { title: 'Managing Insomnia with CES: Long-term Outcomes', type: 'Research Journal', date: 'March 2024', size: '3.5 MB' }
                        ].map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-10 bg-[#F9FBFD] hover:bg-white hover:shadow-lg transition-all duration-300 rounded-sm group">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 flex items-center justify-center bg-white text-[#003568] rounded-sm group-hover:bg-[#003568] group-hover:text-white transition-colors shadow-sm">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-[#179A97] uppercase tracking-widest mb-1">{doc.type}</div>
                                        <h3 className="text-xl font-medium text-[#2D3748]">{doc.title}</h3>
                                        <div className="text-xs text-[#A0AEC0] mt-1">{doc.date} • {doc.size}</div>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 text-xs font-bold text-[#003568] uppercase tracking-widest hover:text-[#179A97] transition-colors">
                                    Download <Download className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
