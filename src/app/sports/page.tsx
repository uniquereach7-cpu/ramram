import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// SPORTS PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Sports',
    description:
        'Empowering athletes and sports enthusiasts with world-class facilities, coaching academies, and competitive leagues. RamRamGroup Sports — where champions are made.',
    openGraph: {
        title: 'Sports | RamRamGroup',
        description: 'World-class sports facilities, coaching academies, and competitive leagues.',
    },
};

const sportsData = {
    vertical: 'sports',
    title: 'Sports',
    tagline: 'Where Champions Are Made',
    description: 'RamRamGroup Sports is dedicated to building world-class sporting infrastructure, nurturing athletic talent, and fostering a culture of fitness and competitive excellence. From state-of-the-art arenas to grassroots academies, we are shaping the future of sports.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-soccer-player-doing-tricks-with-a-ball-on-a-field-50222-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-bd45ba9407fd?w=1920',

    stats: [
        { value: 15, suffix: '+', label: 'Sports Facilities' },
        { value: 20, label: 'Disciplines Covered' },
        { value: 100000, suffix: '+', label: 'Athletes Trained' },
        { value: 50, suffix: '+', label: 'Championships Won' },
    ],

    aboutContent: [
        'At RamRamGroup Sports, we believe that sports are a powerful catalyst for personal growth, community building, and national pride. Our portfolio includes multi-sport complexes, specialized training academies, and competitive leagues designed to uncover and polish raw talent.',
        'We invest in cutting-edge sports science, technology-driven performance analytics, and world-class coaching programs to ensure our athletes have every advantage on their journey to greatness.',
        'Whether you\'re a budding athlete looking for your first break, a fitness enthusiast seeking premium facilities, or a community in need of recreational infrastructure, RamRamGroup Sports delivers excellence at every level.',
    ],

    services: [
        {
            title: 'Multi-Sport Academies',
            description: 'Comprehensive training academies covering cricket, football, badminton, tennis, athletics, and more — led by certified coaches and former professionals.',
        },
        {
            title: 'Stadium & Arena Management',
            description: 'Design, development, and management of world-class stadiums and indoor arenas for national and international sporting events.',
        },
        {
            title: 'Fitness & Wellness Centers',
            description: 'Premium gyms, swimming pools, and wellness centers equipped with the latest fitness technology and expert trainers.',
        },
        {
            title: 'Sports Leagues & Tournaments',
            description: 'Organization and management of corporate leagues, inter-school tournaments, and community sports festivals that inspire participation.',
        },
        {
            title: 'Sports Science & Rehabilitation',
            description: 'Advanced sports medicine, physiotherapy, and performance analytics labs to keep athletes in peak condition.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1461896836934-bd45ba9407fd?w=800', alt: 'Football Stadium' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800', alt: 'Swimming Pool' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800', alt: 'Cricket Match' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800', alt: 'Gym Training' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800', alt: 'Tennis Court' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-soccer-player-doing-tricks-with-a-ball-on-a-field-50222-large.mp4', alt: 'Sports Action' },
    ],

    caseStudies: [
        {
            title: 'RamRam Sports Arena',
            description: 'A 25,000-seat multi-purpose arena hosting international cricket, football, and kabaddi matches. Equipped with floodlights, VIP lounges, and broadcast-ready infrastructure.',
            metrics: [
                { label: 'Capacity', value: '25,000' },
                { label: 'Events/Year', value: '120+' },
                { label: 'Sports', value: '8' },
            ],
            image: 'https://images.unsplash.com/photo-1461896836934-bd45ba9407fd?w=800',
        },
        {
            title: 'Champions Academy',
            description: 'An elite residential sports academy producing state and national level athletes across cricket, badminton, and athletics with a 92% selection rate for competitive teams.',
            metrics: [
                { label: 'Athletes Enrolled', value: '500+' },
                { label: 'Selection Rate', value: '92%' },
                { label: 'National Players', value: '35' },
            ],
            image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800',
        },
    ],

    highlights: [
        'FIFA & ICC standard playing surfaces',
        'Former international athletes as coaches',
        'AI-powered performance analytics',
        'Partnerships with national sports federations',
        'Community grassroots development programs',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'Training at the RamRam Sports Academy transformed my game. The coaches, facilities, and sports science support are truly international standard.',
            author: 'Arjun Verma',
            role: 'State-Level Cricketer',
            company: 'Under-19 Cricket Team',
            rating: 5,
        },
        {
            id: '2',
            quote: 'Our corporate sports league organized by RamRamGroup was the highlight of the year. It brought our teams together like nothing else could.',
            author: 'Meera Kapoor',
            role: 'HR Director',
            company: 'TechNova Solutions',
            rating: 5,
        },
    ],
};

export default function SportsPage() {
    return <VerticalPageTemplate data={sportsData} />;
}
