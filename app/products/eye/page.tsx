'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Activity, Shield, Wifi, Eye } from 'lucide-react';

export default function DiagnostikPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center bg-[#F9FBFD] overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-[#E6F0FF] text-[#003568] text-xs font-bold tracking-widest uppercase mb-8 rounded-[2px]">
                                VÖLTZMANN Diagnostik
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-light text-[#003568] leading-[1.1] mb-10">
                                Berührungslose <br />
                                <span className="font-semibold">Präzision.</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-light leading-relaxed mb-12 max-w-xl">
                                Medizinische Schlafdiagnostik ohne Kabel oder Kontakt.
                                VÖLTZMANN Diagnostik nutzt 60GHz Millimeterwellen-Radar für
                                laborgenaue Analysen in Ihrer gewohnten Umgebung.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#003568] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#002855] transition-colors rounded-[2px]">
                                    Anfrage stellen
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                                <Link href="#specs" className="inline-flex items-center justify-center px-8 py-4 bg-gray-50 text-[#555555] text-sm font-bold uppercase tracking-widest hover:bg-[#003568] hover:text-white transition-colors rounded-[2px]">
                                    Technische Daten
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[600px] w-full"
                        >
                            <div className="relative w-full h-full">
                                {/* Placeholder for actual image generation */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4F8] to-[#FFFFFF] rounded-full opacity-50 blur-3xl"></div>
                                <Image
                                    src="/images/voeltzmann-eye-radar.png"
                                    alt="VÖLTZMANN Radar Sensor"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid - Precision Layout */}
            <section className="py-10 bg-white">
                <div className="container max-w-[1400px] px-8">

                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-light text-[#003568] mb-6">mmWave Radar-Technologie</h2>
                        <div className="w-24 h-px bg-[#179A97] mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        {/* Left: Description */}
                        <div className="lg:col-span-5 pt-4">
                            <h3 className="text-2xl font-semibold text-[#003568] mb-6">
                                Wie funktioniert mmWave?
                            </h3>
                            <p className="text-lg text-[#555555] font-light leading-relaxed mb-8">
                                Millimeterwellen-Radar sendet hochfrequente elektromagnetische Wellen aus, die von Körperbewegungen reflektiert werden.
                                Modernste Signalverarbeitung extrahiert daraus präzise Vitaldaten �?ganz ohne Hautkontakt.
                            </p>
                            <p className="text-lg text-[#555555] font-light leading-relaxed mb-8">
                                Diese Technologie wird bereits in der medizinischen Forschung und Automobilindustrie eingesetzt und bietet höchste Genauigkeit bei vollständiger Privatsphäre.
                            </p>

                            <div className="space-y-6 mt-12">
                                <div className="flex gap-4">
                                    <Shield className="w-8 h-8 text-[#003568] shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-[#333] mb-1">Vollständige Privatsphäre</h4>
                                        <p className="text-sm text-[#777] leading-relaxed">Keine Kameras, keine Cloud-Bildübertragung. Alle Daten werden lokal als anonyme Punktwolke verarbeitet.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Activity className="w-8 h-8 text-[#003568] shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-[#333] mb-1">Medizinische Präzision</h4>
                                        <p className="text-sm text-[#777] leading-relaxed">Genauigkeit vergleichbar mit klinischen Polysomnographie-Systemen (99.8% Korrelation).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Clean Grid 2x2 (No Borders) */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    {
                                        icon: <Activity className="w-10 h-10 text-[#179A97]" />,
                                        title: "Herzfrequenz",
                                        desc: "Präzise ohne Wearable"
                                    },
                                    {
                                        icon: <Wifi className="w-10 h-10 text-[#003568]" />,
                                        title: "Atmung",
                                        desc: "Atemfrequenz & Tiefe"
                                    },
                                    {
                                        icon: <Activity className="w-10 h-10 text-[#555555]" />,
                                        title: "Bewegung",
                                        desc: "Schlafphasen-Erkennung"
                                    },
                                    {
                                        icon: <Eye className="w-10 h-10 text-[#003568]" />,
                                        title: "Präsenz",
                                        desc: "Anwesenheitserkennung"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col items-center text-center p-6 rounded-[2px] hover:bg-[#F9FBFD] transition-colors">
                                        <div className="mb-6 bg-[#F0F4F8] w-16 h-16 flex items-center justify-center rounded-full text-[#003568]">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-xl font-bold text-[#2D3748] mb-4">{item.title}</h4>
                                        <p className="text-[#718096] font-light">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section id="specs" className="py-10 bg-[#F9FBFD]">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-light text-[#003568] mb-12">Spezifikationen</h2>
                            <div className="space-y-6">
                                {[
                                    { label: "Frequenzband", value: "60GHz - 64GHz" },
                                    { label: "Reichweite", value: "0.2m - 2.5m (Adjustable)" },
                                    { label: "Messgenauigkeit", value: "± 0.5 BPM (Herzrate)" },
                                    { label: "Verbindung", value: "Wi-Fi 6 / Bluetooth 5.3 LE" },
                                    { label: "Stromversorgung", value: "USB-C (5V/2A)" },
                                    { label: "Zertifizierung", value: "CE, Medical Class IIa (Pending)" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center py-6 bg-white px-6 rounded-sm shadow-sm">
                                        <span className="text-[#555555] font-medium">{spec.label}</span>
                                        <span className="text-[#003568] font-mono">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#003568] p-12 text-white flex flex-col justify-center">
                            <h3 className="text-2xl font-light mb-6">Für Kliniken & Forschung</h3>
                            <p className="font-light text-white/80 leading-relaxed mb-8">
                                VÖLTZMANN Diagnostik bietet eine API-Schnittstelle für die Integration in bestehende Krankenhaus-Informationssysteme (KIS) und Forschungsdatenbanken.
                            </p>
                            <Link href="/contact" className="inline-block bg-white/10 px-8 py-4 text-center hover:bg-white hover:text-[#003568] transition-colors font-bold uppercase tracking-widest text-sm">
                                Partner werden
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

