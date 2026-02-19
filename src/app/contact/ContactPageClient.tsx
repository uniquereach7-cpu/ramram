'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import MotionWrapper from '@/components/MotionWrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// ============================================
// CONTACT PAGE CLIENT - Light Theme
// ============================================

const contactInfo = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Visit Us',
        details: ['#6-100,Mokila thanda, Shankarpally, Rangareddy, Telangana, 501203'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        title: 'Call Us',
        details: ['+91 9912812631'],
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: 'Email Us',
        details: ['info@ramramgroup.com'],
    },
];

const offices = [
    {
        city: 'Mumbai',
        country: 'India',
        address: '123 Business Avenue, Tower A',
        phone: '+91 22 1234 5678',
        isHQ: true,
    },
    {
        city: 'Delhi',
        country: 'India',
        address: '456 Corporate Park, Sector 5',
        phone: '+91 11 2345 6789',
        isHQ: false,
    },
    {
        city: 'Dubai',
        country: 'UAE',
        address: 'Business Bay, Tower 3, Level 15',
        phone: '+971 4 123 4567',
        isHQ: false,
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        address: '789 Marina Boulevard',
        phone: '+65 6789 0123',
        isHQ: false,
    },
];

export default function ContactPageClient() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-green-50 to-white">
                {/* Background Decoration */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />

                <div className="container-custom relative z-10 text-center py-16">
                    <MotionWrapper animation="fadeInUp">
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-green-100 text-green-700 border border-green-200 mb-6">
                            Get In Touch
                        </span>
                    </MotionWrapper>

                    <MotionWrapper animation="fadeInUp" delay={0.1}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-stone-800">Let&apos;s</span>{' '}
                            <span className="text-green-600">Connect</span>
                        </h1>
                    </MotionWrapper>

                    <MotionWrapper animation="fadeInUp" delay={0.2}>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            Have questions or want to explore partnership opportunities? We&apos;d love to hear from you.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div>
                            <MotionWrapper animation="fadeInLeft">
                                <h2 className="text-3xl font-bold text-stone-800 mb-4">Send Us a Message</h2>
                                <p className="text-stone-600 mb-8">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>
                            </MotionWrapper>

                            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-200">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        variants={fadeInUp}
                                        className="flex gap-6 p-6 rounded-2xl bg-white border border-stone-200 hover:border-orange-300 transition-colors shadow-sm hover:shadow-lg"
                                    >
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 flex-shrink-0">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-stone-800 mb-2">{info.title}</h4>
                                            {info.details.map((detail, i) => (
                                                <p key={i} className="text-stone-600">{detail}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Map placeholder */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mt-8 rounded-2xl overflow-hidden border border-stone-200 shadow-lg"
                            >
                                <div className="relative h-64 bg-stone-100">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1706454789012!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="RamRamGroup Location"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Offices */}
            {/* <section className="section-padding bg-stone-50">
                <div className="container-custom">
                    <MotionWrapper animation="fadeInUp" className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-green-100 text-green-700 border border-green-200 mb-4">
                            Global Presence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800">
                            Our <span className="text-green-600">Offices</span>
                        </h2>
                    </MotionWrapper>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {offices.map((office, index) => (
                            <motion.div
                                key={office.city}
                                variants={fadeInUp}
                                className={`p-6 rounded-2xl border transition-all shadow-sm hover:shadow-lg ${office.isHQ
                                    ? 'bg-gradient-to-br from-orange-50 to-white border-orange-300'
                                    : 'bg-white border-stone-200 hover:border-orange-300'
                                    }`}
                            >
                                {office.isHQ && (
                                    <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-orange-100 text-orange-700 mb-3">
                                        Headquarters
                                    </span>
                                )}
                                <h4 className="text-xl font-bold text-stone-800 mb-1">{office.city}</h4>
                                <p className="text-orange-600 text-sm mb-3">{office.country}</p>
                                <p className="text-stone-600 text-sm mb-2">{office.address}</p>
                                <p className="text-stone-600 text-sm">{office.phone}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <MotionWrapper animation="fadeInUp" className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                            Frequently Asked <span className="gradient-text">Questions</span>
                        </h2>
                        <p className="text-stone-600">
                            Find answers to common questions about RamRamGroup and our services.
                        </p>
                    </MotionWrapper>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {[
                            {
                                q: 'How can I partner with RamRamGroup?',
                                a: 'We welcome partnership inquiries across all our verticals. Please fill out the contact form or email us at partnerships@ramramgroup.com with your proposal.',
                            },
                            {
                                q: 'Are there investment opportunities available?',
                                a: 'Yes, we offer various investment opportunities across our business verticals. Contact our investor relations team for more information.',
                            },
                            {
                                q: 'How can I apply for a job at RamRamGroup?',
                                a: 'Visit our careers page or email your resume to info@ramramgroup.com or call +91 9912812631. We are always looking for talented individuals to join our team.',
                            },
                            {
                                q: 'What industries does RamRamGroup operate in?',
                                a: 'We operate across six major verticals: Real Estate, Restaurant, Salon, Education, Café, and Agriculture.',
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 transition-colors"
                            >
                                <h4 className="text-lg font-semibold text-stone-800 mb-2">{faq.q}</h4>
                                <p className="text-stone-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
