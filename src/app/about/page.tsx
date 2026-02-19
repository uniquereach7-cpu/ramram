import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

// ============================================
// ABOUT PAGE - Company Information
// ============================================

export const metadata: Metadata = {
    title: 'About Us',
    description:
        'Learn about RamRamGroup\'s journey, mission, vision, and the values that drive our excellence across six diverse business verticals.',
    openGraph: {
        title: 'About RamRamGroup | Our Story of Excellence',
        description:
            'Discover the story behind RamRamGroup and our commitment to building exceptional experiences across industries.',
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
