import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

// ============================================
// CONTACT PAGE - Get in Touch
// ============================================

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Get in touch with RamRamGroup. Whether you have questions, partnership inquiries, or want to learn more about our verticals, we\'re here to help.',
    openGraph: {
        title: 'Contact RamRamGroup | Let\'s Connect',
        description:
            'Reach out to our team for inquiries, partnerships, or any questions about our diverse business verticals.',
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
