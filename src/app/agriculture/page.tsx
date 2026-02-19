import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// AGRICULTURE PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Agriculture',
    description:
        'RamRamGroup Agriculture - Sustainable farming practices and agri-tech innovations driving the future of food production and rural development.',
    openGraph: {
        title: 'Agriculture | RamRamGroup',
        description: 'Sustainable farming and agri-tech innovations for a better tomorrow.',
    },
};

const agricultureData = {
    vertical: 'agriculture',
    title: 'Agriculture',
    tagline: 'Growing Sustainable Futures',
    description: 'RamRamGroup Agriculture combines time-honored farming wisdom with cutting-edge technology to drive sustainable food production. We are committed to empowering farmers, preserving resources, and feeding communities with healthy, nutritious produce.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-farm-at-sunset-2627-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920',

    stats: [
        { value: 5000, suffix: '+', label: 'Partner Farms' },
        { value: 10000, label: 'Acres Under Cultivation' },
        { value: 50, suffix: '+', label: 'Crop Varieties' },
        { value: 25000, suffix: '+', label: 'Farmers Empowered' },
    ],

    aboutContent: [
        'From farm to fork, we are reimagining agriculture for the 21st century. Our integrated approach combines sustainable farming practices with modern technology, ensuring food security while protecting our planet for future generations.',
        'We work directly with farming communities, providing them with access to quality seeds, modern equipment, financial services, and market linkages. Our farmer welfare programs have transformed rural livelihoods across multiple states.',
        'Our agri-tech initiatives leverage IoT, AI, and data analytics to optimize crop yields, reduce water usage, and minimize environmental impact. We are building the infrastructure for smart, sustainable agriculture.',
    ],

    services: [
        {
            title: 'Contract Farming',
            description: 'Partnering with farmers for assured production of premium crops with guaranteed buyback and fair pricing.',
        },
        {
            title: 'Agri-Tech Solutions',
            description: 'IoT-based farm monitoring, precision agriculture, drone surveys, and AI-powered crop management systems.',
        },
        {
            title: 'Organic Farming',
            description: 'Certified organic produce cultivation using natural methods, contributing to healthier soils and communities.',
        },
        {
            title: 'Supply Chain Management',
            description: 'End-to-end cold chain infrastructure ensuring fresh produce reaches markets with minimal wastage.',
        },
        {
            title: 'Farmer Support Programs',
            description: 'Training, financing, and resources to help farmers adopt best practices and improve productivity.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800', alt: 'Sustainable Farm' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800', alt: 'Modern Farming' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800', alt: 'Harvest Time' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800', alt: 'Farmer in Field' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800', alt: 'Fresh Produce' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-farm-at-sunset-2627-large.mp4', alt: 'Aerial Farm View' },
    ],

    caseStudies: [
        {
            title: 'Smart Farm Initiative',
            description: 'A 500-acre pilot project deploying IoT sensors, automated irrigation, and AI-based pest prediction, achieving 40% water savings.',
            metrics: [
                { label: 'Water Saved', value: '40%' },
                { label: 'Yield Increase', value: '35%' },
                { label: 'Farmers Trained', value: '200+' },
            ],
            image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
        },
        {
            title: 'Organic Valley',
            description: 'Converting 2000 acres to certified organic farming, creating a premium produce brand and fair-trade markets for rural women.',
            metrics: [
                { label: 'Organic Acres', value: '2000' },
                { label: 'Women Employed', value: '500+' },
                { label: 'Premium', value: '30%+' },
            ],
            image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800',
        },
    ],

    highlights: [
        'Certified organic and sustainable farming practices',
        'Direct farmer partnerships with fair pricing',
        'Advanced agri-tech and precision farming',
        'Cold chain infrastructure reducing food waste',
        'Women-led farming initiatives and rural empowerment',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'RamRamGroup transformed our village. With their support, my income has tripled and my children can now go to better schools.',
            author: 'Ramaiah',
            role: 'Partner Farmer',
            company: 'Telangana',
            rating: 5,
        },
        {
            id: '2',
            quote: 'Their agri-tech solutions have revolutionized how we farm. We now make data-driven decisions that save resources and improve yields.',
            author: 'Sunita Devi',
            role: 'Farm Manager',
            rating: 5,
        },
    ],
};

export default function AgriculturePage() {
    return <VerticalPageTemplate data={agricultureData} />;
}
