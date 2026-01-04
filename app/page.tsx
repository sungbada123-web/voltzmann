'use client';

import { ArrowRight, Zap, Heart, Radar, Eye, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from './data/products';
import HeroCarousel from './components/HeroCarousel';

export default function Home() {
  return (
    <div className="min-h-screen pt-[80px]">

      {/* HERO SECTION - Auto-Rotating Carousel */}
      <HeroCarousel />

      {/* QUICK ACCESS CARDS - Spacing Explosion */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: 'Neural Therapy',
                icon: <Zap className="w-12 h-12" />,
                desc: 'VÖLTZMANN Neural',
                href: '/products/pulse',
                color: '#003568'
              },
              {
                title: 'Bio-Sync',
                icon: <Heart className="w-12 h-12" />,
                desc: 'Sensory Entrainment',
                href: '/products/pet',
                color: '#179A97'
              },
              {
                title: 'AI Systems',
                icon: <Radar className="w-12 h-12" />,
                desc: 'Smart Gateway',
                href: '/products/hub',
                color: '#2D3748'
              },
              {
                title: 'Diagnostik',
                icon: <Eye className="w-12 h-12" />,
                desc: 'IVD & Monitoring',
                href: '/products/eye',
                color: '#003568'
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white p-10 hover:bg-[#F8FAFB] transition-all duration-300"
              >
                <div className="mb-8 transition-transform group-hover:scale-110 duration-300" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-[#1A202C] mb-3">{item.title}</h3>
                <p className="text-base text-[#718096] mb-6 leading-relaxed">{item.desc}</p>
                <div className="flex items-center text-[#003568] text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT - Spacing Explosion */}
      <section className="py-10 bg-[#F9FBFD]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] overflow-hidden shadow-lg">
              <Image
                src="/images/voeltzmann-hub-setup.png"
                alt="VÖLTZMANN Systems Hub"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="text-[#003568] font-bold tracking-widest uppercase text-sm mb-4">VÖLTZMANN Systems</div>
              <h2 className="text-5xl font-light text-[#003568] mb-8 leading-[1.1]">
                Distributed AI <br />
                <span className="font-semibold text-[#179A97]">Intelligence</span>
              </h2>
              <p className="text-lg text-[#4A5568] mb-8 font-light leading-relaxed">
                Experience the secure core of your sleep ecosystem. The VÖLTZMANN Hub processes biometric data locally
                using advanced NPU technology, maintaining GDPR compliance while delivering millisecond-latency analysis.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'RK3562 Local AI Computing',
                  'Multi-Protocol Edge Gateway',
                  'Offline AES-256 Security',
                  'Matter & Thread Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#179A97] shrink-0" />
                    <span className="text-[#2D3748]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/products/hub" className="inline-flex items-center gap-2 bg-[#003568] text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-[#002855] transition-all rounded-[2px]">
                Explore Systems
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID - Spacing Explosion */}
      <section className="py-10 bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light text-[#003568] mb-6">Clinical Product Pillars</h2>
            <p className="text-xl text-[#718096] max-w-3xl mx-auto leading-relaxed">
              Comprehensive medical technology solutions engineered for clinical precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group"
              >
                <div className="relative h-[280px] bg-[#F8FAFB] mb-4 overflow-hidden transition-all">
                  <Image
                    src={`/images/voeltzmann-${product.id}-product.png`}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-[#003568]">
                    {product.isNew ? 'New' : 'Bestseller'}
                  </div>
                </div>
                <div className="mb-4 text-[#999] text-xs font-bold tracking-widest uppercase">{product.category}</div>
                <h3 className="text-xl font-light text-[#003568] mb-1 group-hover:text-[#179A97] transition-colors">{product.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION - Spacing Explosion & Pure White */}
      <section className="py-10 bg-white text-[#003568]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-8">
              Precision. Innovation. <span className="font-semibold">Responsibility.</span>
            </h2>
            <p className="text-xl font-light leading-relaxed text-[#555555] mb-20 max-w-2xl mx-auto">
              Three values that define our commitment to advancing medical technology.
              Every VÖLTZMANN product is engineered in Germany to the highest clinical standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div>
                <div className="text-6xl font-light text-[#179A97] mb-4">100%</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#707070] font-bold">Made in Germany</div>
              </div>
              <div>
                <div className="text-6xl font-light text-[#179A97] mb-4">CE</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#707070] font-bold">Medical Certified</div>
              </div>
              <div>
                <div className="text-6xl font-light text-[#179A97] mb-4">24/7</div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#707070] font-bold">Global Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
