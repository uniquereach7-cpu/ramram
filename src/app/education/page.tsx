import { Metadata } from 'next';
import VerticalPageTemplate from '@/components/VerticalPageTemplate';

// ============================================
// EDUCATION PAGE
// ============================================

export const metadata: Metadata = {
    title: 'Education',
    description:
        'RamRamGroup Education - World-class educational institutions nurturing future leaders through innovative learning, expert faculty, and modern infrastructure.',
    openGraph: {
        title: 'Education | RamRamGroup',
        description: 'Nurturing minds, building futures through quality education.',
    },
};

const educationData = {
    vertical: 'education',
    title: 'Education',
    tagline: 'Nurturing Tomorrow\'s Leaders',
    description: 'RamRamGroup Education is committed to shaping the minds that will lead tomorrow. Our educational institutions combine academic excellence with holistic development, preparing students to thrive in a rapidly changing world.',
    heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-colleagues-working-together-in-an-office-4828-large.mp4',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920',

    stats: [
        { value: 15, label: 'Educational Institutions' },
        { value: 10000, suffix: '+', label: 'Students Enrolled' },
        { value: 500, suffix: '+', label: 'Expert Faculty' },
        { value: 95, suffix: '%', label: 'Placement Rate' },
    ],

    aboutContent: [
        'From pre-primary to higher education, RamRamGroup Education offers a complete ecosystem of learning. Our institutions are designed to foster curiosity, creativity, and critical thinking while providing strong foundational knowledge.',
        'We believe education goes beyond textbooks. Our curriculum integrates academic rigor with experiential learning, sports, arts, and life skills development. Students graduate not just with degrees, but with the confidence to make a difference.',
        'With campuses equipped with cutting-edge technology, extensive libraries, and world-class facilities, we provide an environment where learning flourishes and potential is realized.',
    ],

    services: [
        {
            title: 'K-12 Schools',
            description: 'Comprehensive school education with CBSE, ICSE, and international curricula, focusing on holistic development.',
        },
        {
            title: 'Higher Education',
            description: 'Undergraduate and postgraduate programs in engineering, management, arts, and sciences.',
        },
        {
            title: 'Vocational Training',
            description: 'Skill development programs aligned with industry needs, ensuring career-ready graduates.',
        },
        {
            title: 'E-Learning Platform',
            description: 'Digital learning solutions with interactive content, assessments, and personalized learning paths.',
        },
        {
            title: 'Corporate Training',
            description: 'Customized executive education and corporate training programs for organizational development.',
        },
    ],

    gallery: [
        { id: '1', type: 'image' as const, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', alt: 'Graduation Celebration' },
        { id: '2', type: 'image' as const, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800', alt: 'Modern Campus' },
        { id: '3', type: 'image' as const, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800', alt: 'Interactive Classroom' },
        { id: '4', type: 'image' as const, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800', alt: 'Science Lab' },
        { id: '5', type: 'image' as const, src: 'https://images.unsplash.com/photo-1544717305-996b815c338c?w=800', alt: 'Library Resources' },
        { id: '6', type: 'video' as const, src: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-colleagues-working-together-in-an-office-4828-large.mp4', alt: 'Collaborative Learning' },
    ],

    caseStudies: [
        {
            title: 'RamRam International School',
            description: 'An IB World School offering primary years to diploma programs, featuring global exchange programs and 100% university placement.',
            metrics: [
                { label: 'Students', value: '2500' },
                { label: 'Countries', value: '45+' },
                { label: 'IB Score', value: '38 avg' },
            ],
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
        },
        {
            title: 'RamRam Institute of Technology',
            description: 'NAAC A+ accredited engineering college with strong industry partnerships and cutting-edge research facilities.',
            metrics: [
                { label: 'Programs', value: '12' },
                { label: 'Placement', value: '98%' },
                { label: 'Patents', value: '25+' },
            ],
            image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
        },
    ],

    highlights: [
        'NAAC and NBA accredited institutions',
        '1:15 faculty-to-student ratio',
        'International exchange programs',
        'Industry-integrated curriculum',
        'State-of-the-art smart classrooms',
    ],

    testimonials: [
        {
            id: '1',
            quote: 'The education I received at RamRam prepared me exceptionally well for my career. The faculty truly cared about our success.',
            author: 'Arjun Krishnamurthy',
            role: 'Alumni, Software Engineer',
            company: 'Google',
            rating: 5,
        },
        {
            id: '2',
            quote: 'As a parent, I\'ve seen remarkable growth in my child. The school\'s approach to holistic education is truly commendable.',
            author: 'Dr. Lakshmi Venkatesh',
            role: 'Parent',
            rating: 5,
        },
    ],
};

export default function EducationPage() {
    return <VerticalPageTemplate data={educationData} />;
}
