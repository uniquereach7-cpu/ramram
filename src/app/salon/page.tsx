import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// SALON PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Salon',
    description:
        'RamRamGroup\'s luxury salon and spa chain offering premium beauty and wellness services. Experience transformation through expert care and cutting-edge treatments.',
    openGraph: {
        title: 'Salon | RamRamGroup',
        description: 'Luxury beauty and wellness sanctuaries for the discerning.',
    },
};

const salonData = {
    vertical: 'salon',
    title: 'Salon',
    tagline: 'Beauty & Wellness Reimagined',
    description: 'RamRamGroup Salons are sanctuaries of beauty and wellness where expert artisans transform and rejuvenate. Our luxury establishments combine cutting-edge techniques with time-honored traditions to deliver experiences that pamper body and soul.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-haircut-in-a-beauty-salon-42339-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920',

    stats: [
        { value: 30, suffix: '+', label: 'Salon Locations' },
        { value: 50, suffix: '+', label: 'Services Offered' },
        { value: 200, suffix: '+', label: 'Expert Stylists' },
        { value: 100000, suffix: '+', label: 'Happy Clients' },
    ],

    aboutContent: [
        'Step into a world where beauty meets artistry. Our salons are designed as urban retreats, offering respite from the everyday while delivering transformative beauty experiences. Every visit is a journey of renewal.',
        'Our team of internationally trained professionals brings the latest global trends and techniques to every service. From precision haircuts to advanced skincare treatments, we deliver excellence in every detail.',
        'We use only premium, ethically sourced products from world-renowned brands, ensuring that every treatment is as kind to you as it is to the planet.',
    ],

    services: [
        {
            title: 'Hair Studio',
            description: 'Precision cuts, creative coloring, keratin treatments, and bridal styling by master stylists trained globally.',
        },
        {
            title: 'Skin Care',
            description: 'Advanced facials, HydraFacials, chemical peels, and anti-aging treatments using medical-grade products.',
        },
        {
            title: 'Nail Art',
            description: 'Manicures, pedicures, gel extensions, and nail art from certified nail technicians.',
        },
        {
            title: 'Spa & Massage',
            description: 'Full-body massages, aromatherapy, body wraps, and holistic wellness treatments.',
        },
        {
            title: 'Bridal Services',
            description: 'Complete bridal packages including trials, day-of styling, and wedding party services.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', alt: 'Luxury Salon Interior' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', alt: 'Hair Styling Session' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800', alt: 'Spa Treatment' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', alt: 'Nail Art Detail' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800', alt: 'Skincare Treatment' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-haircut-in-a-beauty-salon-42339-large.mp4', alt: 'Styling in Progress' },
    ],

    caseStudies: [
        {
            title: 'Aura Signature Salon',
            description: 'Our flagship luxury salon featuring private treatment suites, a dedicated bridal lounge, and exclusive VIP experiences.',
            metrics: [
                { label: 'Clients/Month', value: '3000+' },
                { label: 'Rating', value: '4.9★' },
                { label: 'Awards', value: '12' },
            ],
            image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
        },
        {
            title: 'Glow Express',
            description: 'Quick-service premium salons in corporate parks offering efficient beauty services for busy professionals.',
            metrics: [
                { label: 'Locations', value: '15' },
                { label: 'Avg. Visit', value: '45 min' },
                { label: 'Repeat Rate', value: '85%' },
            ],
            image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
        },
    ],

    highlights: [
        'Internationally certified stylists and therapists',
        'Premium product partnerships (L\'Oréal, Kérastase, Dermalogica)',
        'Personalized consultation for every client',
        'Hygiene-certified with hospital-grade sanitization',
        'Exclusive member rewards program',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'My hair transformation was incredible! The stylist understood exactly what I wanted and delivered beyond expectations.',
            author: 'Kavitha Menon',
            role: 'Regular Client',
            rating: 5,
        },
        {
            id: '2',
            quote: 'The bridal package was perfect for my wedding day. The team made me feel like a princess from start to finish.',
            author: 'Neha Sharma',
            role: 'Bride',
            rating: 5,
        },
    ],
};

export default function SalonPage() {
    return <VerticalPageTemplate data={salonData} />;
}
