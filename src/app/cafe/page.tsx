import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// CAFÉ PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Café',
    description:
        'RamRamGroup Café - Artisanal coffee experiences in thoughtfully designed spaces. Premium brews, delightful treats, and inspiring atmospheres.',
    openGraph: {
        title: 'Café | RamRamGroup',
        description: 'Artisanal coffee experiences that inspire creativity and connection.',
    },
};

const cafeData = {
    vertical: 'cafe',
    title: 'Café',
    tagline: 'Where Coffee Meets Culture',
    description: 'RamRamGroup Cafés are more than coffee shops – they are community hubs where ideas brew alongside artisanal beverages. Our thoughtfully designed spaces inspire creativity, foster connections, and serve as the perfect backdrop for life\'s meaningful moments.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-from-a-height-into-a-glass-23217-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920',

    stats: [
        { value: 40, suffix: '+', label: 'Café Locations' },
        { value: 8, label: 'Cities Covered' },
        { value: 50, suffix: '+', label: 'Coffee Varieties' },
        { value: 2, suffix: 'M+', label: 'Cups Served' },
    ],

    aboutContent: [
        'Every cup we serve tells a story – from the carefully selected beans sourced from sustainable farms to the skilled hands of our baristas who craft each beverage with precision and passion.',
        'Our cafés are designed as third spaces – welcoming environments where you can work, meet, celebrate, or simply take a moment for yourself. Each location has its unique character while maintaining the warmth that defines our brand.',
        'Beyond coffee, we offer a curated selection of artisan teas, fresh-baked pastries, healthy bites, and signature drinks that spark joy in every sip.',
    ],

    services: [
        {
            title: 'Specialty Coffee',
            description: 'Single-origin beans, micro-lot roasts, and signature blends prepared with precision by certified baristas.',
        },
        {
            title: 'Artisan Bakery',
            description: 'Fresh-baked croissants, sourdough, pastries, and desserts made daily in our on-site kitchens.',
        },
        {
            title: 'Healthy Menu',
            description: 'Nutritious bowls, sandwiches, salads, and vegan options for health-conscious guests.',
        },
        {
            title: 'Co-Working Space',
            description: 'Dedicated work zones with high-speed WiFi, power outlets, and meeting rooms for professionals.',
        },
        {
            title: 'Private Events',
            description: 'Book our spaces for private parties, corporate events, and coffee appreciation sessions.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800', alt: 'Cozy Café Interior' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800', alt: 'Latte Art' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800', alt: 'Coffee and Pastry' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800', alt: 'Coffee Brewing' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800', alt: 'Fresh Pastries' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-from-a-height-into-a-glass-23217-large.mp4', alt: 'Coffee Pour' },
    ],

    caseStudies: [
        {
            title: 'Bean & Beyond Flagship',
            description: 'Our flagship café featuring an in-house roastery, coffee museum, and barista training academy – a temple for coffee lovers.',
            metrics: [
                { label: 'Daily Visitors', value: '500+' },
                { label: 'Beans Sourced', value: '20+' },
                { label: 'Rating', value: '4.8★' },
            ],
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
        },
        {
            title: 'Campus Brew',
            description: 'College campus cafés designed for students with affordable pricing, study-friendly environments, and late-night hours.',
            metrics: [
                { label: 'Locations', value: '12' },
                { label: 'Student Members', value: '50K+' },
                { label: 'Late Hours', value: '2 AM' },
            ],
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800',
        },
    ],

    highlights: [
        'Direct trade relationships with coffee farmers',
        'SCA certified baristas at every location',
        'Seasonal and limited-edition menu offerings',
        'Sustainable packaging and zero-waste initiatives',
        'Loyalty program with exclusive member perks',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'This is my daily creative sanctuary. The coffee is exceptional and the vibe is perfect for getting work done.',
            author: 'Rohan Desai',
            role: 'Freelance Designer',
            rating: 5,
        },
        {
            id: '2',
            quote: 'Best coffee in the city, hands down. The baristas remember my order and always make me feel welcome.',
            author: 'Isha Malhotra',
            role: 'Regular Customer',
            rating: 5,
        },
    ],
};

export default function CafePage() {
    return <VerticalPageTemplate data={cafeData} />;
}
