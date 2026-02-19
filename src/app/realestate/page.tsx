import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// REAL ESTATE PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Real Estate',
    description:
        'Explore RamRamGroup\'s premium real estate developments - residential and commercial properties that redefine urban living with innovative architecture and sustainable design.',
    openGraph: {
        title: 'Real Estate | RamRamGroup',
        description:
            'Premium residential and commercial developments that redefine urban living.',
    },
};

const realEstateData = {
    vertical: 'realestate',
    title: 'Real Estate',
    tagline: 'Building Dreams, Creating Landmarks',
    description: 'RamRamGroup Real Estate division is at the forefront of premium property development, creating residential and commercial spaces that set new standards for urban living. With over two decades of experience, we have delivered landmark projects that combine innovative architecture, sustainable design, and world-class amenities.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',

    stats: [
        { value: 50, suffix: '+', label: 'Projects Delivered' },
        { value: 2, suffix: 'M+', label: 'Sq. Ft. Developed' },
        { value: 15000, suffix: '+', label: 'Happy Families' },
        { value: 8, label: 'Cities' },
    ],

    aboutContent: [
        'Our real estate portfolio spans across residential townships, commercial complexes, luxury villas, and integrated developments. Each project is crafted with meticulous attention to detail, ensuring that every space reflects our commitment to quality and innovation.',
        'We believe in creating communities, not just buildings. Our developments feature thoughtfully designed common spaces, world-class amenities, and sustainable infrastructure that enhances the quality of life for all residents.',
        'From premium apartments in metro cities to sprawling villa communities, RamRamGroup Real Estate continues to set benchmarks in the industry, earning the trust of thousands of homeowners.',
    ],

    services: [
        {
            title: 'Residential Developments',
            description: 'Premium apartments, villas, and township projects designed for modern living with world-class amenities and sustainable features.',
        },
        {
            title: 'Commercial Properties',
            description: 'State-of-the-art office spaces, retail complexes, and business parks that meet the evolving needs of modern enterprises.',
        },
        {
            title: 'Luxury Villas',
            description: 'Exclusive villa communities that offer privacy, elegance, and the ultimate luxury living experience.',
        },
        {
            title: 'Integrated Townships',
            description: 'Self-contained urban ecosystems with residential, commercial, and recreational facilities under one masterplan.',
        },
        {
            title: 'Property Management',
            description: 'Comprehensive property management services ensuring your investment is maintained to the highest standards.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', alt: 'Modern Commercial Tower' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', alt: 'Luxury Apartment Complex' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', alt: 'Premium Villa' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800', alt: 'Modern Interior' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800', alt: 'Rooftop Amenities' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4', alt: 'Aerial City View' },
    ],

    caseStudies: [
        {
            title: 'RamRam Heights',
            description: 'A 45-story residential tower featuring 300 luxury apartments with panoramic city views, smart home technology, and premium amenities.',
            metrics: [
                { label: 'Units', value: '300' },
                { label: 'Completion', value: '2023' },
                { label: 'Occupancy', value: '98%' },
            ],
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        },
        {
            title: 'Green Valley Township',
            description: 'A 100-acre integrated township with 2000+ homes, commercial spaces, schools, and extensive green areas.',
            metrics: [
                { label: 'Acres', value: '100' },
                { label: 'Homes', value: '2000+' },
                { label: 'Green Cover', value: '40%' },
            ],
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        },
    ],

    highlights: [
        'ISO 9001:2015 certified construction quality',
        'Green building certifications (IGBC, LEED)',
        'On-time delivery track record',
        'Transparent pricing with no hidden costs',
        '25+ years of industry experience',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'RamRamGroup delivered our dream home exactly as promised. The quality and attention to detail exceeded our expectations.',
            author: 'Suresh & Meera Iyer',
            role: 'Homeowners',
            company: 'RamRam Heights',
            rating: 5,
        },
        {
            id: '2',
            quote: 'As a commercial investor, I appreciate the transparency and professionalism of the RamRamGroup team. Highly recommended.',
            author: 'Arun Kapoor',
            role: 'Real Estate Investor',
            rating: 5,
        },
    ],
};

export default function RealEstatePage() {
    return <VerticalPageTemplate data={realEstateData} />;
}
