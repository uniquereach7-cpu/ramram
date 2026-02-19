'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroVideoLayer from '@/components/HeroVideoLayer';
import SectionHeading from '@/components/SectionHeading';

import VerticalGallery, { GalleryItem } from '@/components/VerticalGallery';
import TestimonialsCarousel, { Testimonial } from '@/components/TestimonialsCarousel';
import MotionWrapper from '@/components/MotionWrapper';
import { ServiceItem } from '@/components/ServiceCard';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations';

// ============================================
// VERTICAL PAGE TEMPLATE - Light Theme
// ============================================

interface VerticalData {
    vertical: string;
    title: string;
    tagline: string;
    description: string;
    heroVideo?: string;
    heroImage: string;
    stats: Array<{ value: number; suffix?: string; prefix?: string; label: string }>;
    aboutContent: string[];
    services: Array<{ title: string; description: string }>;
    gallery: GalleryItem[];
    caseStudies: Array<{
        title: string;
        description: string;
        metrics: Array<{ label: string; value: string }>;
        image: string;
    }>;
    highlights: string[];
    testimonials: Testimonial[];
}

interface VerticalPageTemplateProps {
    data: VerticalData;
}

export default function VerticalPageTemplate({ data }: VerticalPageTemplateProps) {
    return (
        <>
            {/* Hero Section */}
            <HeroVideoLayer
                title={data.title}
                subtitle={data.tagline}
                ctaText="Explore Services"
                ctaHref="#services"
                secondaryCtaText="View Gallery"
                secondaryCtaHref="#gallery"
                videoSrc={data.heroVideo}
                posterSrc={data.heroImage}
            />

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

            {/* About Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div>
                            <MotionWrapper animation="fadeInLeft">
                                <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-orange-100 text-orange-700 border border-orange-200 mb-6">
                                    About {data.title}
                                </span>
                            </MotionWrapper>

                            <MotionWrapper animation="fadeInLeft" delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    <span className="gradient-text">{data.tagline}</span>
                                </h2>
                            </MotionWrapper>

                            {data.aboutContent.map((paragraph, index) => (
                                <MotionWrapper key={index} animation="fadeInLeft" delay={0.2 + index * 0.1}>
                                    <p className="text-stone-600 mb-4 leading-relaxed">{paragraph}</p>
                                </MotionWrapper>
                            ))}

                            <MotionWrapper animation="fadeInLeft" delay={0.5}>
                                <Link href="/contact" className="btn-primary inline-flex mt-4">
                                    <span>Get In Touch</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </MotionWrapper>
                        </div>

                        {/* Featured Image */}
                        <MotionWrapper animation="fadeInRight" className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={data.heroImage}
                                    alt={data.title}
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </div>


                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding bg-stone-50">
                <div className="container-custom">
                    <SectionHeading
                        badge="What We Offer"
                        title="Our Services"
                        description={`Comprehensive ${data.title.toLowerCase()} solutions tailored to meet your unique needs.`}
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    >
                        {data.services.map((service, index) => (
                            <ServiceItem
                                key={service.title}
                                title={service.title}
                                description={service.description}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="section-padding bg-white">
                <div className="container-custom">
                    <SectionHeading
                        badge="Portfolio"
                        title="Our Gallery"
                        description="Explore our showcase of exceptional projects and experiences."
                        variant="green"
                    />

                    <VerticalGallery items={data.gallery} columns={3} />
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="section-padding bg-gradient-to-br from-orange-50 to-green-50">
                <div className="container-custom">
                    <SectionHeading
                        badge="Success Stories"
                        title="Case Studies"
                        description="Real results from our flagship projects."
                    />

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-8"
                    >
                        {data.caseStudies.map((study, index) => (
                            <motion.div
                                key={study.title}
                                variants={fadeInUp}
                                className="group overflow-hidden rounded-3xl bg-white border border-stone-200 hover:border-orange-300 transition-all shadow-sm hover:shadow-xl"
                            >
                                {/* Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                                    <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                                        {study.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <p className="text-stone-600 mb-6">{study.description}</p>

                                    {/* Metrics */}
                                    <div className="flex gap-8">
                                        {study.metrics.map((metric, i) => (
                                            <div key={i} className="text-center">
                                                <p className="text-2xl font-bold text-orange-600">{metric.value}</p>
                                                <p className="text-sm text-stone-500">{metric.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div>
                            <MotionWrapper animation="fadeInLeft">
                                <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-green-100 text-green-700 border border-green-200 mb-6">
                                    Why Choose Us
                                </span>
                            </MotionWrapper>

                            <MotionWrapper animation="fadeInLeft" delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    <span className="text-stone-800">The RamRam</span>{' '}
                                    <span className="text-green-600">Difference</span>
                                </h2>
                            </MotionWrapper>

                            <MotionWrapper animation="fadeInLeft" delay={0.2}>
                                <p className="text-stone-600 mb-8 leading-relaxed">
                                    What sets us apart is our unwavering commitment to excellence, innovation, and customer satisfaction.
                                </p>
                            </MotionWrapper>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                {data.highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-green-300 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <p className="text-stone-700">{highlight}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Decorative Image Grid */}
                        <MotionWrapper animation="fadeInRight" className="hidden lg:block">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-40 rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200" />
                                    <div className="h-56 rounded-2xl overflow-hidden">
                                        <img
                                            src={data.gallery[0]?.src || data.heroImage}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-56 rounded-2xl overflow-hidden">
                                        <img
                                            src={data.gallery[1]?.src || data.heroImage}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-40 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200" />
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section-padding bg-stone-50">
                <div className="container-custom">
                    <SectionHeading
                        badge="Testimonials"
                        title="What Our Clients Say"
                        description="Hear from those who have experienced our excellence firsthand."
                    />

                    <div className="max-w-4xl mx-auto">
                        <TestimonialsCarousel testimonials={data.testimonials} />
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
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
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-white/20 text-white border border-white/30 mb-6">
                            Let&apos;s Work Together
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Get Started?
                        </h2>

                        <p className="text-lg text-white/80 mb-10">
                            Contact our {data.title.toLowerCase()} team today to discuss your requirements and discover how we can help you achieve your goals.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-stone-50 transition-colors shadow-lg">
                                <span>Contact Us</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                            <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 transition-colors">
                                <span>Back to Home</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
