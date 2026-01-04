'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Zap, Heart, Radar, Brain, Moon, Eye, Leaf, Pill, ArrowRight, ChevronRight } from 'lucide-react';

// Menu Configuration
const menuConfig: Record<string, {
  intro: { title: string; desc: React.ReactNode; cta: string; ctaLink: string };
  columns: { title: string; items: { name: string; desc?: string; href: string; icon?: React.ReactNode }[] }[];
}> = {
  'Products': {
    intro: {
      title: 'Products',
      desc: <>Diagnostics. Therapy. Homecare. <br /><br />From precise sleep monitoring to advanced neuro-stimulation, we provide medical-grade solutions for every stage of sleep health.</>,
      cta: 'View All Products',
      ctaLink: '/products'
    },
    columns: [
      {
        title: 'Clinical Therapy',
        items: [
          { name: 'VÖLTZMANN Neural', desc: 'CES Neurostimulation', href: '/products/pulse', icon: <Zap className="w-4 h-4" /> },
          { name: 'VÖLTZMANN CBT-I', desc: 'Digital Therapy Platform', href: '/products/cbti', icon: <Brain className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Sensory Interaction',
        items: [
          { name: 'VÖLTZMANN Bio-Sync', desc: 'Sleep Companion', href: '/products/pet', icon: <Heart className="w-4 h-4" /> },
          { name: 'VÖLTZMANN Pillow', desc: 'Smart Sleep Surface', href: '/products/pillow', icon: <Moon className="w-4 h-4" /> },
          { name: 'VÖLTZMANN Mask', desc: 'Sensory Isolation', href: '/products/mask', icon: <Eye className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Diagnostics',
        items: [
          { name: 'VÖLTZMANN Systems', desc: 'AI Control Center', href: '/products/hub', icon: <Radar className="w-4 h-4" /> },
          { name: 'VÖLTZMANN Diagnostik', desc: '60GHz mmWave Radar', href: '/products/eye', icon: <Eye className="w-4 h-4" /> },
        ]
      },
      {
        title: 'Ambient & Bio',
        items: [
          { name: 'VÖLTZMANN Space', desc: 'Environment Control', href: '/products/space', icon: <Leaf className="w-4 h-4" /> },
          { name: 'VÖLTZMANN Essence', desc: 'Sleep Nutrition', href: '/products/essence', icon: <Pill className="w-4 h-4" /> },
        ]
      }
    ]
  },
  'Solutions': {
    intro: {
      title: 'Solutions',
      desc: <>Customized Care Paths.<br /><br />Tailored therapies designed for specific sleep challenges and user groups.</>,
      cta: 'Explore Solutions',
      ctaLink: '/solutions'
    },
    columns: [
      {
        title: 'By Condition',
        items: [
          { name: 'Chronic Insomnia', href: '/solutions/insomnia' },
          { name: 'Sleep Apnea', href: '/solutions/apnea' },
          { name: 'Anxiety & Stress', href: '/solutions/anxiety' },
          { name: 'Circadian Rhythm', href: '/solutions/circadian' },
        ]
      },
      {
        title: 'By User',
        items: [
          { name: 'Home Care', href: '/solutions/home' },
          { name: 'Clinical Use', href: '/solutions/clinical' },
          { name: 'Professional Athletes', href: '/solutions/athletes' },
          { name: 'Elderly Care', href: '/solutions/elderly' },
        ]
      }
    ]
  },
  'Science & Lab': {
    intro: {
      title: 'Science & Lab',
      desc: <>Evidence-Based Innovation.<br /><br />Our commitment to clinical research, technological measurement, and continuous validation.</>,
      cta: 'Our Research',
      ctaLink: '/science'
    },
    columns: [
      {
        title: 'Research',
        items: [
          { name: 'Clinical Trials', href: '/science#trials' },
          { name: 'Whitepapers', href: '/science#publications' },
          { name: 'Sleep Data Bank', href: '/science#data' },
        ]
      },
      {
        title: 'Technology',
        items: [
          { name: 'mmWave Sensors', href: '/science/sensors' },
          { name: 'Neural Entrainment', href: '/science/neural' },
          { name: 'AI Algorithms', href: '/science/ai' },
        ]
      }
    ]
  },
  'Service': {
    intro: {
      title: 'Service',
      desc: <>Reliable Support.<br /><br />We are here for you 24/7 with comprehensive support and global service networks.</>,
      cta: 'Visit Help Center',
      ctaLink: '/service'
    },
    columns: [
      {
        title: 'Customer Support',
        items: [
          { name: 'Help Center', href: '/service/help' },
          { name: 'Downloads & Manuals', href: '/service/downloads' },
          { name: 'Warranty', href: '/service/warranty' },
        ]
      },
      {
        title: 'Professional Services',
        items: [
          { name: 'Partner Network', href: '/service/partners' },
          { name: 'Training', href: '/service/training' },
          { name: 'Maintenance', href: '/service/maintenance' },
        ]
      }
    ]
  },
  'About': {
    intro: {
      title: 'About VÖLTZMANN',
      desc: <>German Engineering.<br /><br />A tradition of precision, care, and sleep technology innovation since 2024.</>,
      cta: 'Our Story',
      ctaLink: '/about'
    },
    columns: [
      {
        title: 'Company',
        items: [
          { name: 'Our Story', href: '/about/story' },
          { name: 'Mission & Vision', href: '/about/mission' },
          { name: 'Careers', href: '/about/careers' },
        ]
      },
      {
        title: 'News & Press',
        items: [
          { name: 'Latest News', href: '/about/news' },
          { name: 'Press Releases', href: '/about/press' },
          { name: 'Events', href: '/about/events' },
        ]
      }
    ]
  }
};

const navLinks = [
  { name: 'Products', href: '/products', hasMega: true },
  { name: 'Solutions', href: '/solutions', hasMega: true },
  { name: 'Science & Lab', href: '/science', hasMega: true },
  { name: 'Service', href: '/service', hasMega: true },
  { name: 'About', href: '/about', hasMega: true },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container">
        <nav className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-end gap-2 group">
            <div className="flex flex-col items-end">
              <span className="text-2xl font-bold text-[#003568] tracking-[0.05em] leading-none relative font-sans">
                V<span className="relative inline-block mx-[1px]">O<span className="absolute -top-[4px] left-1/2 -translate-x-1/2 flex gap-[3px]"><span className="w-[3px] h-[3px] bg-[#003568]"></span><span className="w-[3px] h-[3px] bg-[#003568]"></span></span></span>LTZMANN
              </span>
            </div>
            <span className="text-sm font-light text-[#003568] tracking-widest lowercase mb-[2px]">medical</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasMega && setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-[#4A5568] hover:text-[#003366] transition-colors py-10" // Increased vertical padding for hover area
                >
                  {link.name}
                  {link.hasMega && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {link.hasMega && activeMenu === link.name && menuConfig[link.name] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-[80px] w-screen bg-white shadow-xl"
                      style={{ position: 'fixed', left: 0, right: 0 }}
                    >
                      <div className="container py-16">
                        <div className="flex gap-24">
                          {/* Left Column: Intro */}
                          <div className="w-1/3 pt-2">
                            <h2 className="text-4xl font-light text-[#003366] mb-8">
                              {menuConfig[link.name].intro.title}
                            </h2>
                            <p className="text-lg text-[#718096] leading-relaxed mb-8 max-w-sm font-light">
                              {menuConfig[link.name].intro.desc}
                            </p>
                            <Link
                              href={menuConfig[link.name].intro.ctaLink}
                              className="text-sm font-bold text-[#009999] uppercase tracking-wider hover:text-[#007777] transition-colors flex items-center gap-2"
                            >
                              {menuConfig[link.name].intro.cta} <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>

                          {/* Right Column: Categories */}
                          <div className="w-2/3 grid grid-cols-2 gap-x-20 gap-y-12">
                            {menuConfig[link.name].columns.map((column) => (
                              <div key={column.title}>
                                <h4 className="text-xs font-bold text-[#A0AEC0] uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
                                  {column.title}
                                </h4>
                                <ul className="space-y-6">
                                  {column.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        className="group flex items-center justify-between py-1 group-hover:translate-x-1 transition-transform duration-300"
                                      >
                                        <div className="flex items-center gap-3">
                                          {item.icon && (
                                            <div className="text-[#CBD5E0] group-hover:text-[#009999] transition-colors">
                                              {item.icon}
                                            </div>
                                          )}
                                          <div>
                                            <span className="text-xl font-light text-[#2D3748] group-hover:text-[#003366] transition-colors">
                                              {item.name}
                                            </span>
                                            {item.desc && (
                                              <p className="text-xs text-[#A0AEC0] mt-1.5 font-light">{item.desc}</p>
                                            )}
                                          </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-[#CBD5E0] group-hover:text-[#009999] opacity-0 group-hover:opacity-100 transition-all" />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <select className="text-sm text-[#4A5568] bg-transparent border-none cursor-pointer focus:outline-none">
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="zh">中文</option>
            </select>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-[#003366] text-white text-sm font-medium hover:bg-[#002855] transition-colors"
              style={{ borderRadius: '2px' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base font-medium text-[#1A202C] hover:text-[#003366]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-50 mx-auto w-full" />
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-[#003366] text-white font-medium"
                style={{ borderRadius: '2px' }}
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
