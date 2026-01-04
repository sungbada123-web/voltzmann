'use client';

import { motion } from 'framer-motion';
import { Heart, Wind, Waves, Smartphone, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function PetPage() {
    const features = [
        'Atemgesteuerte Biofeedback-Technologie',
        'Physiologische Synchronisation in Echtzeit',
        'Sanfte haptische und visuelle Führung',
        'App-gesteuerte Personalisierung',
        'Beruhigende Begleitung zum Einschlafen',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-10 bg-gradient-to-br from-[#179A97] to-[#003568] text-white">
                <div className="max-w-[1640px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="flex flex-col items-center gap-3 mb-6">
                            <Heart className="w-12 h-12" />
                            <h1 className="text-5xl font-medium">VÖLTZMANN Bio-Sync</h1>
                        </div>
                        <p className="text-2xl font-light mb-8 opacity-90">
                            Ihr intelligenter Atem-Begleiter
                        </p>
                        <p className="text-lg font-light leading-relaxed opacity-80">
                            VÖLTZMANN Bio-Sync ist ein intelligentes Biofeedback-System, das Ihre Atmung erfasst und Sie
                            in einen entspannten Zustand führt. Durch sanfte Synchronisation finden Sie schneller in den Schlaf.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-10">
                <div className="max-w-[1640px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#555555] mb-12 text-center">
                        Biofeedback für besseren Schlaf
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-[#F9FBFD] p-8 hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                            <Wind className="w-12 h-12 text-[#179A97] mb-4" />
                            <h3 className="text-xl font-medium text-[#555555] mb-3">Atemerfassung</h3>
                            <p className="text-[#707070] font-light leading-relaxed">
                                Präzise Sensoren erfassen Ihren Atemrhythmus in Echtzeit ohne Körperkontakt.
                            </p>
                        </div>

                        <div className="bg-[#F9FBFD] p-8 hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                            <Waves className="w-12 h-12 text-[#003568] mb-4" />
                            <h3 className="text-xl font-medium text-[#555555] mb-3">Sanfte Führung</h3>
                            <p className="text-[#707070] font-light leading-relaxed">
                                Haptische Impulse und sanftes Licht leiten Sie zu optimalem Atemrhythmus.
                            </p>
                        </div>

                        <div className="bg-[#F9FBFD] p-8 hover:bg-[#E6F0FF] transition-colors rounded-[2px]">
                            <Smartphone className="w-12 h-12 text-[#179A97] mb-4" />
                            <h3 className="text-xl font-medium text-[#555555] mb-3">Personalisierung</h3>
                            <p className="text-[#707070] font-light leading-relaxed">
                                App-basierte Konfiguration für individuelle Bedürfnisse und Vorlieben.
                            </p>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="bg-white p-10 hover:bg-[#F9FBFD] transition-colors rounded-[2px]">
                        <h3 className="text-2xl font-medium text-[#555555] mb-6">Produktmerkmale</h3>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#179A97] flex-shrink-0 mt-1" />
                                    <span className="text-[#707070] font-light text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 relative h-[400px] w-full rounded-[2px] overflow-hidden">
                            <Image
                                src="/images/voeltzmann-pet-product.png"
                                alt="VÖLTZMANN Bio-Sync in bedroom"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* How It Works */}
            < section className="py-10 bg-[#F9FBFD]" >
                <div className="max-w-[1640px] mx-auto px-6">
                    <h2 className="text-4xl font-medium text-[#1E293B] mb-12 text-center">
                        So funktioniert es
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Erkennung', desc: 'Bio-Sync erfasst Ihren Atemrhythmus' },
                            { step: '02', title: 'Analyse', desc: 'KI analysiert Ihr Muster' },
                            { step: '03', title: 'Führung', desc: 'Sanfte Impulse leiten Sie' },
                            { step: '04', title: 'Entspannung', desc: 'Sie gleiten in den Schlaf' },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-light text-[#179A97] mb-4">{item.step}</div>
                                <h3 className="text-xl font-medium text-[#555555] mb-4">{item.title}</h3>
                                <p className="text-[#707070] font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* CTA Section */}
            < section className="py-10 bg-white" >
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-medium text-[#555555] mb-6">
                        Interessiert an VÖLTZMANN Bio-Sync?
                    </h2>
                    <p className="text-[#707070] font-light text-lg mb-8">
                        Erfahren Sie mehr über unsere Biofeedback-Technologie und Verfügbarkeit.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-[#179A97] text-white hover:bg-[#003568] transition-colors"
                    >
                        Kontakt aufnehmen
                    </a>
                </div>
            </section >
        </div >
    );
}
