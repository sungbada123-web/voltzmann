export interface Product {
    id: string;
    name: string;
    tagline: string;
    category: 'Clinical' | 'Sensory' | 'Diagnostics' | 'Ambient' | 'Therapy';
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
    href: string;
    color: string;
    isNew?: boolean;
}

export const products: Product[] = [
    {
        id: 'pulse',
        name: 'VÖLTZMANN Neural',
        tagline: 'CES Neurostimulation System',
        category: 'Clinical',
        description: 'Clinical-grade cranial electrotherapy stimulation (CES) engineered to precisely regulate neurotransmitters for anxiety relief and sleep restoration.',
        features: [
            'Micro-current Modulation',
            'Neurotransmitter Balance',
            '316L Surgical Steel',
            'Class IIa Medical Device'
        ],
        specs: [
            { label: 'Frequency', value: '0.5Hz - 100Hz' },
            { label: 'Output', value: '10 - 500 μA' },
            { label: 'Battery', value: 'Li-Po 500mAh' },
            { label: 'Certification', value: 'CE Medical' }
        ],
        href: '/products/pulse',
        color: '#003568',
        isNew: true
    },
    {
        id: 'eye',
        name: 'VÖLTZMANN Diagnostik',
        tagline: 'Non-Contact Vitals Radar',
        category: 'Diagnostics',
        description: '60GHz mmWave radar system for clinical-grade vital sign monitoring without physical contact. ICU-level precision.',
        features: [
            '60GHz mmWave',
            'Clinical HRV Tracking',
            'Respiration > 98%',
            'Presence Detection'
        ],
        specs: [
            { label: 'Range', value: '0.2m - 4.0m' },
            { label: 'FOV', value: '120° x 120°' },
            { label: 'Resolution', value: '< 1cm' },
            { label: 'Mounting', value: 'Professional Mount' }
        ],
        href: '/products/eye',
        color: '#003568',
        isNew: true
    },
    {
        id: 'pet',
        name: 'VÖLTZMANN Bio-Sync',
        tagline: 'Haptic Sleep Companion',
        category: 'Sensory',
        description: 'Advanced physiological synchronization system. Uses rhythmic haptic feedback and thermal regulation to physically entrain relaxation.',
        features: [
            'H2C Bionic Skeleton',
            '0.1Hz Resonance',
            'Graphene Thermal (37°C)',
            'Real-time Entrainment'
        ],
        specs: [
            { label: 'Weight', value: '2.4 kg' },
            { label: 'Surface', value: 'Medical Fabric' },
            { label: 'Haptics', value: 'Dual Linear Motor' },
            { label: 'Connection', value: 'Bluetooth 5.3' }
        ],
        href: '/products/pet',
        color: '#179A97'
    },
    {
        id: 'hub',
        name: 'VÖLTZMANN Systems',
        tagline: 'Distributed AI Gateway',
        category: 'Diagnostics',
        description: 'Secure local processing unit for biometric data. Ensures GDPR compliance while delivering millisecond-latency analysis.',
        features: [
            'RK3562 Local Compute',
            'Multi-Protocol Edge',
            'Offline Encryption',
            'Matter / Thread'
        ],
        specs: [
            { label: 'NPU', value: '3.0 TOPS' },
            { label: 'Protocols', value: 'Wi-Fi 6, Zigbee' },
            { label: 'Security', value: 'AES-256' },
            { label: 'Power', value: 'USB-C PD' }
        ],
        href: '/products/hub',
        color: '#2D3748'
    },
    {
        id: 'cbti',
        name: 'VÖLTZMANN CBT-I',
        tagline: 'Digital Insomnia Therapy',
        category: 'Therapy',
        description: 'Clinically validated cognitive behavioral therapy for insomnia. Target the psychological root causes of sleeplessness.',
        features: [
            'Cognitive Restructuring',
            'Sleep Restriction Therapy',
            'AI Sleep Coaching',
            'Clinical Validation'
        ],
        specs: [
            { label: 'Platform', value: 'iOS / Android / Web' },
            { label: 'Duration', value: '6-8 Weeks' },
            { label: 'Method', value: 'CBT-I Protocol' },
            { label: 'Clinical', value: 'DiGA (Pending)' }
        ],
        href: '/products/cbti',
        color: '#003568'
    }
];
