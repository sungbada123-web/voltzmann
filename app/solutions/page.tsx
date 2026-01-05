'use client';

import { motion } from 'framer-motion';
import { Bed, Wind, Heart, Timer, Home, Hospital, Medal, UserPlus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SolutionsPage() {
    const solutions = [
        {
            title: 'By Condition',
            items: [
                { name: 'Chronic Insomnia', icon: <Bed className="w-5 h-5" />, desc: 'Targeted CBT-I and neural therapy.' },
                { name: 'Sleep Apnea', icon: <Wind className="w-5 h-5" />, desc: 'Monitoring and ambient regulation.' },
                { name: 'Anxiety & Stress', icon: <Heart className="w-5 h-5" />, desc: 'Neuro-modulation for relaxation.' },
                { name: 'Circadian Rhythm', icon: <Timer className="w-5 h-5" />, desc: 'Light-based rhythm entrainment.' },
            ]
        },
        {
            title: 'By User',
            items: [
                { name: 'Home Care', icon: <Home className="w-5 h-5" />, desc: 'Consumer-grade precision sleep.' },
                { name: 'Clinical Use', icon: <Hospital className="w-5 h-5" />, desc: 'Institutional deployment tools.' },
                { name: 'Professional Athletes', icon: <Medal className="w-5 h-5" />, desc: 'Performance recovery optimization.' },
                { name: 'Elderly Care', icon: <UserPlus className="w-5 h-5" />, desc: 'Fall prevention and vitals monitoring.' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-24">
            <section className="py-20 bg-[#F4F7F9]">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl font-light text-[#003568] mb-8 leading-tight">
                            Customized <br />
                            <span className="font-semibold">Care Paths.</span>
                        </h1>
                        <p className="text-xl text-[#555555] font-light max-w-2xl leading-relaxed">
                            VÖLTZMANN solutions integrate diagnostics and therapy into seamless workflows tailored for specific sleep challenges and user demographics.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {solutions.map((group, idx) => (
                            <div key={idx}>
                                <h3 className="text-xs font-bold text-[#A0AEC0] uppercase tracking-widest mb-10 border-b pb-4">{group.title}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {group.items.map((item, i) => (
                                        <div key={i} className="p-8 bg-[#F9FBFD] border border-transparent hover:border-[#003568]/10 hover:bg-white transition-all group">
                                            <div className="w-10 h-10 flex items-center justify-center bg-white shadow-sm rounded-sm text-[#003568] group-hover:bg-[#003568] group-hover:text-white transition-all mb-6">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-xl font-medium text-[#2D3748] mb-3">{item.name}</h4>
                                            <p className="text-[#718096] text-sm font-light mb-6 leading-relaxed">{item.desc}</p>
                                            <Link href="/contact" className="text-xs font-bold text-[#003568] uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
                                                Learn More <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
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
