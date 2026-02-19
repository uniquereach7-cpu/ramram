import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// RESTAURANT PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Restaurant',
    description:
        'Experience fine dining with RamRamGroup\'s restaurant chain. World-class gastronomy, exceptional service, and memorable culinary experiences across multiple cuisines.',
    openGraph: {
        title: 'Restaurant | RamRamGroup',
        description: 'Fine dining experiences that celebrate culinary excellence.',
    },
};

const restaurantData = {
    vertical: 'restaurant',
    title: 'Restaurant',
    tagline: 'Culinary Excellence Redefined',
    description: 'RamRamGroup Restaurants brings world-class gastronomy to discerning palates. Our collection of fine dining establishments celebrates culinary artistry, exceptional service, and memorable experiences that linger long after the last course.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-preparing-a-salad-in-a-restaurant-kitchen-1127-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920',

    stats: [
        { value: 25, suffix: '+', label: 'Restaurant Outlets' },
        { value: 12, label: 'Cuisines Offered' },
        { value: 500000, suffix: '+', label: 'Happy Diners' },
        { value: 15, label: 'Culinary Awards' },
    ],

    aboutContent: [
        'From intimate fine dining to vibrant casual eateries, our restaurant portfolio offers diverse culinary experiences crafted by award-winning chefs. Each establishment reflects our commitment to quality ingredients, innovative techniques, and impeccable service.',
        'We source the finest ingredients from local farmers and global suppliers, ensuring every dish tells a story of freshness and authenticity. Our kitchens are led by passionate chefs who blend tradition with innovation.',
        'Whether it\'s a romantic dinner, business lunch, or family celebration, RamRamGroup Restaurants create moments that become cherished memories.',
    ],

    services: [
        {
            title: 'Fine Dining',
            description: 'Exquisite multi-course experiences featuring innovative cuisine, premium ingredients, and sommelier-curated wine pairings.',
        },
        {
            title: 'Casual Dining',
            description: 'Relaxed atmospheres with thoughtfully crafted menus that bring families and friends together over great food.',
        },
        {
            title: 'Private Events',
            description: 'Bespoke catering and private dining rooms for corporate events, weddings, and special celebrations.',
        },
        {
            title: 'Culinary Experiences',
            description: 'Chef\'s table experiences, cooking classes, and wine tasting events for food enthusiasts.',
        },
        {
            title: 'Cloud Kitchens',
            description: 'Delivery-first concepts bringing restaurant-quality meals directly to your doorstep.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800', alt: 'Elegant Restaurant Interior' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', alt: 'Gourmet Plating' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800', alt: 'Chef at Work' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800', alt: 'Wine Selection' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800', alt: 'Signature Dish' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-preparing-a-salad-in-a-restaurant-kitchen-1127-large.mp4', alt: 'Kitchen in Action' },
    ],

    caseStudies: [
        {
            title: 'Spice Symphony',
            description: 'Our flagship Indian fine dining restaurant featuring regional cuisines from across the subcontinent, awarded "Best New Restaurant" three years running.',
            metrics: [
                { label: 'Covers/Day', value: '200+' },
                { label: 'Rating', value: '4.9★' },
                { label: 'Awards', value: '5' },
            ],
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        },
        {
            title: 'The Mediterranean',
            description: 'A coastal-inspired restaurant celebrating the flavors of the Mediterranean with fresh seafood and house-made pastas.',
            metrics: [
                { label: 'Locations', value: '8' },
                { label: 'Signature Dishes', value: '50+' },
                { label: 'Years Running', value: '10' },
            ],
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
        },
    ],

    highlights: [
        'Award-winning executive chefs',
        'Farm-to-table ingredient sourcing',
        'Sustainable seafood practices',
        'Extensive wine and beverage programs',
        'FSSAI certified and hygiene rated',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'The tasting menu at Spice Symphony was an extraordinary journey through flavors. Every course was a masterpiece.',
            author: 'Priya Nair',
            role: 'Food Critic',
            company: 'Gourmet India',
            rating: 5,
        },
        {
            id: '2',
            quote: 'We hosted our wedding reception here and the experience was flawless. The food, service, and ambiance were exceptional.',
            author: 'Rahul & Sneha',
            role: 'Wedding Guests',
            rating: 5,
        },
    ],
};

export default function RestaurantPage() {
    return <VerticalPageTemplate data={restaurantData} />;
}
