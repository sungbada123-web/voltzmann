'use client';

import { motion } from 'framer-motion';
import ProductMatrix from '../components/ProductMatrix';

export default function ProductsPage() {
    return (
        <div className="min-h-screen pt-32 pb-32 bg-white">
            <div className="max-w-[1640px] mx-auto px-6 lg:px-12">
                {/* Header - Precise Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-32"
                >
                    <div className="inline-block px-4 py-2 text-[#707070] text-xs font-bold tracking-[0.2em] mb-8 uppercase">
                        Ganzheitliche Schlafökologie
                    </div>
                    <h1 className="text-7xl font-light text-[#003568] mb-8 tracking-tight">
                        Das VÖLTZMANN Ökosystem
                    </h1>
                    <p className="text-2xl text-[#707070] font-light max-w-4xl mx-auto leading-relaxed">
                        Vier Säulen für die perfekte Nacht. Von klinischer Therapie bis zur sensorischen Interaktion – vollständig integriert und medizinisch validiert.
                    </p>
                </motion.div>

                {/* Matrix Component (Refactored to 1-column) */}
                <ProductMatrix />

                {/* Bottom Section - Sharp Design */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-40 text-center bg-[#F9FBFD] py-20 rounded-sm"
                >
                    <h2 className="text-5xl font-light text-[#555555] mb-8">
                        Bereit für den Schlaf von morgen?
                    </h2>
                    <p className="text-[#707070] font-light text-xl mb-12 max-w-3xl mx-auto">
                        Entdecken Sie, wie deutsche Ingenieurskunst und Neurowissenschaft Ihre Lebensqualität nachhaltig verbessern können.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-12 py-5 bg-[#003568] text-white hover:bg-[#179A97] transition-all shadow-lg text-sm font-bold uppercase tracking-widest rounded-sm"
                    >
                        Kontaktieren Sie uns
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
