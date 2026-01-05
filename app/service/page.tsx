'use client';

import { motion } from 'framer-motion';
import { Headset, Download, ShieldCheck, Users, GraduationCap, Wrench, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicePage() {
    const services = [
        {
            title: 'Customer Support',
            items: [
                { name: 'Help Center', href: '/service/help', icon: <Headset className="w-5 h-5" />, desc: 'Find answers and guides.' },
                { name: 'Downloads & Manuals', href: '/service/downloads', icon: <Download className="w-5 h-5" />, desc: 'Technical documentation.' },
                { name: 'Warranty', href: '/service/warranty', icon: <ShieldCheck className="w-5 h-5" />, desc: 'Peace of mind guaranteed.' },
            ]
        },
        {
            title: 'Professional Services',
            items: [
                { name: 'Partner Network', href: '/service/partners', icon: <Users className="w-5 h-5" />, desc: 'For clinics and resellers.' },
                { name: 'Training', href: '/service/training', icon: <GraduationCap className="w-5 h-5" />, desc: 'Professional certification.' },
                { name: 'Maintenance', href: '/service/maintenance', icon: <Wrench className="w-5 h-5" />, desc: 'Regular equipment care.' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero */}
            <section className="py-20 bg-[#F9FBFD]">
                <div className="container">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-light text-[#003568] leading-tight mb-8">
                                Reliable <br />
                                <span className="font-semibold">Support.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-10">
                                We are here for you 24/7 with comprehensive support and global service networks.
                                Ensuring your VÖLTZMANN systems perform at peak precision.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {services.map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-bold text-[#A0AEC0] uppercase tracking-widest mb-10 border-b border-gray-100 pb-4">
                                    {section.title}
                                </h3>
                                <div className="space-y-8">
                                    {section.items.map((item, i) => (
                                        <Link key={i} href={item.href} className="group block">
                                            <div className="flex items-start gap-6 p-6 rounded-sm hover:bg-[#F9FBFD] transition-colors">
                                                <div className="w-12 h-12 flex items-center justify-center bg-white shadow-sm rounded-full text-[#003568] group-hover:bg-[#003568] group-hover:text-white transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-medium text-[#2D3748] mb-2 flex items-center gap-2">
                                                        {item.name}
                                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                                    </h4>
                                                    <p className="text-[#718096] font-light">{item.desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
