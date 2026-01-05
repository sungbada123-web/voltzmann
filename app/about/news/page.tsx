'use client';

import { motion } from 'framer-motion';
import { Newspaper, ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsPage() {
    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20">
                <div className="container">
                    <Link href="/about" className="inline-flex items-center gap-2 text-[#718096] hover:text-[#003568] transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to About
                    </Link>

                    <div className="mb-24">
                        <h1 className="text-6xl font-light text-[#003568] mb-8">Latest <span className="font-semibold text-[#179A97]">News</span></h1>
                        <p className="text-xl text-[#555555] font-light max-w-2xl leading-relaxed">
                            Updates on our latest clinical achievements, technological breakthroughs, and corporate milestones.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
                        {[
                            { title: 'VÖLTZMANN Hub V2 receives Medical Certification', date: 'Jan 2025', image: '/images/voeltzmann_lab_realism_v1.png' },
                            { title: 'New Clinical Partnership with Charité Berlin', date: 'Dec 2024', image: '/images/voeltzmann_office_realism_v1.png' },
                            { title: ' mmWave Radar precision reach 99.8%', date: 'Nov 2024', image: '/images/voeltzmann_staff_uniform_v1.png' }
                        ].map((post, i) => (
                            <Link href={`/about/news/${i}`} key={i} className="group block">
                                <div className="relative h-64 rounded-sm overflow-hidden mb-6">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="text-[10px] font-bold text-[#179A97] tracking-widest uppercase mb-3">{post.date}</div>
                                <h3 className="text-xl font-medium text-[#003568] group-hover:text-[#179A97] transition-colors leading-snug">{post.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
