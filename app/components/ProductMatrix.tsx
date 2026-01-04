'use client';

import { motion } from 'framer-motion';
import { products } from '../data/products';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function ProductMatrix() {
    return (
        <section className="py-10 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                    <div>
                        <h2 className="text-4xl font-light text-[#003568] mb-4">Das VÖLTZMANN Ökosystem</h2>
                        <div className="h-1 w-20 bg-[#009999]"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="bg-[#F9FBFD] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full rounded-sm overflow-hidden group"
                        >
                            {/* Card Header Strip */}
                            <div className="h-2 w-full" style={{ backgroundColor: product.color }}></div>

                            <div className="p-8 flex-grow flex flex-col">
                                {product.isNew && (
                                    <span className="inline-block px-2 py-0.5 bg-[#E6FFFA] text-[#009999] text-[10px] font-bold uppercase tracking-widest mb-4 w-fit rounded-[2px]" >
                                        New Release
                                    </span>
                                )}

                                <h3 className="text-2xl font-bold text-[#1A202C] mb-4 group-hover:text-[#003366] transition-colors">{product.name}</h3>
                                <p className="text-xs font-bold text-[#009999] uppercase tracking-wider mb-6">{product.tagline}</p>

                                <p className="text-sm text-[#4A5568] leading-relaxed mb-8 flex-grow font-light pb-8">
                                    {product.description}
                                </p>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-1 gap-2 mb-8">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <Check className="w-3 h-3 text-[#009999] mt-1 shrink-0" strokeWidth={3} />
                                            <span className="text-xs font-semibold text-[#2D3748]">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={product.href}
                                    className="w-full btn-secondary group-hover:bg-[#003366] group-hover:text-white group-hover:border-[#003366] justify-between"
                                >
                                    View Specs
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
