'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
    products: [
        { name: 'VÖLTZMANN Neural', href: '/products/pulse' },
        { name: 'VÖLTZMANN Bio-Sync', href: '/products/pet' },
        { name: 'VÖLTZMANN Systems', href: '/products/hub' },
        { name: 'VÖLTZMANN Diagnostik', href: '/products/eye' },
        { name: 'All Products', href: '/products' },
    ],
    solutions: [
        { name: 'Insomnia Treatment', href: '/solutions/insomnia' },
        { name: 'Chronic Anxiety', href: '/solutions/anxiety' },
        { name: 'Elderly Care', href: '/solutions/elderly' },
        { name: 'High-Performance Rest', href: '/solutions/performance' },
    ],
    company: [
        { name: 'About VÖLTZMANN', href: '/about' },
        { name: 'Science & Lab', href: '/science' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
    ],
    service: [
        { name: 'Downloads', href: '/service/downloads' },
        { name: 'App Ecosystem', href: '/service/app' },
        { name: 'Customer Support', href: '/service/support' },
        { name: 'FAQ', href: '/service/faq' },
    ],
    legal: [
        { name: 'Impressum', href: '/legal/impressum' },
        { name: 'Datenschutz', href: '/legal/datenschutz' },
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
    ],
};

const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/company/voeltzmann', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/voeltzmann', label: 'Twitter' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/@voeltzmann', label: 'YouTube' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:contact@voeltzmann-medical.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="bg-[#F8FAFC] pt-32 pb-10 text-[#4A5568]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-end gap-2 group mb-6">
                            <div className="flex flex-col items-end">
                                <span className="text-2xl font-bold text-[#003568] tracking-[0.05em] leading-none relative font-sans">
                                    V<span className="relative inline-block mx-[1px]">O<span className="absolute -top-[4px] left-1/2 -translate-x-1/2 flex gap-[3px]"><span className="w-[3px] h-[3px] bg-[#003568]"></span><span className="w-[3px] h-[3px] bg-[#003568]"></span></span></span>LTZMANN
                                </span>
                            </div>
                            <span className="text-sm font-light text-[#003568] tracking-widest lowercase mb-[2px]">medical</span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs font-light">
                            Engineering precision in Neural Sleep Therapy and Advanced Diagnostics.
                            <br /><br />
                            Made in Germany.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 bg-white/10 flex items-center justify-center hover:bg-[#009999] transition-colors"
                                    style={{ borderRadius: '2px' }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Products</h4>
                        <ul className="space-y-4">
                            {footerLinks.products.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Service */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Service</h4>
                        <ul className="space-y-4">
                            {footerLinks.service.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-[#009999]">Legal</h4>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#003568] transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-20">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} VÖLTZMANN Medical Technology UG. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                                Made in Germany 🇩🇪
                            </span>
                            <span className="text-xs text-gray-400">
                                CE Certified Medical Device
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
