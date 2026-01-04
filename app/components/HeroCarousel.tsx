'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
        id: 1,
        image: '/images/hero-slide-1.png',
        tag: 'Clinical Neurotech',
        title: 'Precision Sleep Medicine',
        subtitle: 'German engineering meets neuroscience.',
        description: 'Advanced medical technology for neurological sleep optimization and restoration.',
        link: '/products/pulse',
        overlayColor: 'from-gray-900/60 via-gray-900/20 to-transparent'
    },
    {
        id: 2,
        image: '/images/hero-slide-2.png',
        tag: 'Neuromodulation',
        title: 'Neural Therapy',
        subtitle: 'Non-invasive vagus nerve stimulation.',
        description: 'Clinically proven CES technology to regulate neurochemistry for profound sleep relief.',
        link: '/products/pulse',
        overlayColor: 'from-gray-900/60 via-gray-900/20 to-transparent'
    },
    {
        id: 3,
        tag: 'Diagnostics',
        title: 'Contactless Precision.',
        subtitle: 'VÖLTZMANN Diagnostik',
        description: 'Medical-grade sleep diagnostics using 60GHz Millimeter-Wave Radar technology.',
        image: '/images/voeltzmann-eye-product.png',
        link: '/products/eye',
        overlayColor: 'from-gray-900/70 via-gray-900/30 to-transparent'
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000); // 8 seconds for slower, more premium feel
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden group bg-white">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }} // Slower crossfade for premium feel
                >
                    {/* Full Width Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={slides[current].image}
                            alt={slides[current].title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        {/* Gradient Overlay for Text Readability - Loewenstein Style (Subtle) */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].overlayColor} sm:bg-gradient-to-r sm:from-black/50 sm:via-transparent sm:to-transparent opacity-80`}></div>
                    </div>

                    {/* Content Container */}
                    <div className="container relative z-10 h-full flex items-center">
                        <div className="max-w-3xl pt-32 pl-4 md:pl-12 border-l-4 border-white/20 ml-4 md:ml-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="text-white"
                            >
                                <div className="inline-block px-4 py-1.5 border border-white/30 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-10 rounded-sm">
                                    {slides[current].tag}
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] mb-8 text-shadow-lg drop-shadow-md">
                                    {slides[current].title}
                                </h1>
                                <p className="text-xl md:text-2xl font-light text-white/90 mb-12 leading-relaxed max-w-xl text-shadow-md">
                                    {slides[current].description}
                                </p>

                                <div className="flex gap-4">
                                    <Link
                                        href={slides[current].link}
                                        className="group inline-flex items-center gap-3 bg-white text-[#003568] px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#009999] hover:text-white transition-all rounded-[2px] shadow-lg"
                                    >
                                        Discover More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls - Minimalist */}
            <div className="absolute bottom-12 right-12 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    className="w-14 h-14 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#003568] transition-all rounded-full backdrop-blur-sm"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-14 h-14 flex items-center justify-center border border-white/30 text-white hover:bg-white hover:text-[#003568] transition-all rounded-full backdrop-blur-sm"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-12 left-12 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`transition-all duration-500 rounded-full h-2 shadow-sm ${current === index ? 'w-12 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
