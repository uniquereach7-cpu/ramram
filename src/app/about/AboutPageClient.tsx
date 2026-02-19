'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

import MotionWrapper from '@/components/MotionWrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// ============================================
// ABOUT PAGE CLIENT - Light Theme
// ============================================

// Timeline data
const timeline = [
    {
        year: '2026',
        title: 'Foundation',
        description: 'RamRamGroup was founded with a vision to create lasting value through real estate development.',
    },
    {
        year: 'Coming Soon',
        title: 'Future Expansion',
        description: 'Exciting new developments are on the horizon.',
    },
    {
        year: 'Coming Soon',
        title: 'Global Reach',
        description: 'Expanding our footprint to new territories.',
    },
];

// Leadership team
const leadership = [
    {
        name: 'Rajesh Kumar',
        role: 'Founder & Chairman',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
        bio: 'Visionary leader with 30+ years of experience in building successful enterprises.',
    },
    {
        name: 'Anita Sharma',
        role: 'Chief Executive Officer',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
        bio: 'Strategic thinker driving innovation and sustainable growth across all verticals.',
    },
    {
        name: 'Vikram Patel',
        role: 'Chief Operating Officer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
        bio: 'Operations expert ensuring excellence in execution and delivery.',
    },
    {
        name: 'Priya Menon',
        role: 'Chief Financial Officer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
        bio: 'Financial strategist managing our diverse portfolio with precision.',
    },
];

// Stats


export default function AboutPageClient() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-orange-50 to-white">
                {/* Background Decoration */}
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10 text-center py-16">
                    <MotionWrapper animation="fadeInUp">
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-orange-100 text-orange-700 border border-orange-200 mb-6">
                            Our Story
                        </span>
                    </MotionWrapper>

                    <MotionWrapper animation="fadeInUp" delay={0.1}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-stone-800">Building</span>{' '}
                            <span className="gradient-text">Tomorrow</span>
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper animation="fadeInUp" delay={0.2}>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            From a single vision to a global conglomerate, discover the journey that shaped RamRamGroup.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {/* Mission */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-200 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Mission</h3>
                            <p className="text-stone-600 leading-relaxed">
                                To create exceptional value for our stakeholders by delivering excellence across every vertical,
                                fostering innovation, and maintaining unwavering commitment to quality and integrity.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-200 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center text-green-600 mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Vision</h3>
                            <p className="text-stone-600 leading-relaxed">
                                To be the most trusted and admired conglomerate, recognized globally for our transformative
                                impact on industries and communities, setting new standards of excellence.
                            </p>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            variants={fadeInUp}
                            className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-sm hover:shadow-lg transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-stone-800 mb-4">Our Values</h3>
                            <p className="text-stone-600 leading-relaxed">
                                Integrity, Innovation, Excellence, and Sustainability form the cornerstone of everything we do.
                                These values guide our decisions and shape our culture.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Vision Statement Section */}
            <section className="py-16 bg-stone-50 border-y border-stone-200">
                <div className="container-custom flex justify-center items-center">
                    <MotionWrapper animation="fadeInUp">
                        <h2 className="text-3xl md:text-5xl font-bold text-center gradient-text leading-tight">
                            A multi-vertical vision, taking shape.
                        </h2>
                    </MotionWrapper>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        badge="Our Journey"
                        title="25 Years of Growth"
                        description="From humble beginnings to global presence, trace our path of evolution and achievement."
                    />

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-green-500 to-orange-500" />

                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-16 md:pl-0`}>
                                    <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-orange-300 shadow-sm hover:shadow-lg transition-all">
                                        <span className="text-orange-600 font-bold text-lg">{item.year}</span>
                                        <h4 className="text-xl font-bold text-stone-800 mt-2 mb-2">{item.title}</h4>
                                        <p className="text-stone-600">{item.description}</p>
                                    </div>
                                </div>

                                {/* Dot */}
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-orange-500 border-4 border-white shadow" />

                                {/* Empty space for opposite side */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section id="team" className="section-padding bg-gradient-to-br from-orange-50 to-green-50">
                <div className="container-custom">
                    <SectionHeading
                        badge="Leadership"
                        title="Meet Our Leaders"
                        description="The visionary team driving RamRamGroup's success across all verticals."
                        variant="green"
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {leadership.map((leader, index) => (
                            <motion.div
                                key={leader.name}
                                variants={fadeInUp}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-lg">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full aspect-[3/4] object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                                </div>
                                <h4 className="text-xl font-bold text-stone-800 mb-1">{leader.name}</h4>
                                <p className="text-orange-600 font-medium mb-3">{leader.role}</p>
                                <p className="text-stone-600 text-sm">{leader.bio}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Join Our Journey
                        </h2>
                        <p className="text-lg text-white/80 mb-8">
                            Explore career opportunities and be part of a team that&apos;s shaping the future.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-stone-50 transition-colors shadow-lg">
                                <span>Contact Us</span>
                            </Link>
                            <a href="#careers" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 transition-colors">
                                <span>View Careers</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
