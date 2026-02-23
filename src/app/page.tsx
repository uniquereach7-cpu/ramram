'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroVideoLayer from '@/components/HeroVideoLayer';
import SectionHeading from '@/components/SectionHeading';

import VerticalCard from '@/components/VerticalCard';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import MotionWrapper from '@/components/MotionWrapper';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import educationImg from '@/assets/education1.jpg';

// ============================================
// HOMEPAGE - Light Theme with Orange & Green
// ============================================

// Stats Data


// Verticals Data with Icons
const verticals = [
  {
    title: 'Real Estate',
    description: 'Premium residential and commercial developments that redefine urban living with innovative architecture.',
    href: '/realestate',
    color: 'orange' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Restaurant',
    description: 'Fine dining experiences that celebrate culinary artistry with exceptional service and memorable moments.',
    href: '/restaurant',
    color: 'green' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Salon',
    description: 'Luxury beauty and wellness sanctuaries offering premium services and transformative experiences.',
    href: '/salon',
    color: 'pink' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    title: 'Education',
    description: 'World-class educational institutions nurturing future leaders through innovative learning approaches.',
    href: '/education',
    color: 'blue' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Café',
    description: 'Artisanal coffee experiences in thoughtfully designed spaces that inspire creativity and connection.',
    href: '/cafe',
    color: 'purple' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Agriculture',
    description: 'Sustainable farming practices and agri-tech innovations driving the future of food production.',
    href: '/agriculture',
    color: 'teal' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
  {
    title: 'Sports',
    description: 'World-class sports facilities, coaching academies, and competitive leagues nurturing champions.',
    href: '/sports',
    color: 'green' as const,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a4 4 0 11-8 0M12 2v2m0 16v2m-6-6h12M9 18l-3 4m9-4l3 4M5 12a7 7 0 0114 0" />
      </svg>
    ),
  },
];

// Testimonials Data
const homeTestimonials = [
  {
    id: '1',
    quote: 'RamRamGroup has been instrumental in shaping the skyline of our city. Their commitment to quality and innovation is unmatched in the industry.',
    author: 'Vikram Mehta',
    role: 'CEO',
    company: 'Horizon Ventures',
    rating: 5,
  },
  {
    id: '2',
    quote: 'From education to hospitality, every vertical of RamRamGroup delivers excellence. A truly inspiring organization to partner with.',
    author: 'Dr. Priya Sharma',
    role: 'Director',
    company: 'National Education Board',
    rating: 5,
  },
  {
    id: '3',
    quote: 'The sustainable agriculture initiatives by RamRamGroup have transformed our farming community. True partners in progress.',
    author: 'Rajesh Patel',
    role: 'Agricultural Cooperative Head',
    company: 'Green Fields Collective',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroVideoLayer
        title="Building Tomorrow Together"
        subtitle="A diversified conglomerate creating exceptional experiences across real estate, hospitality, education, and beyond."
        ctaText="Explore Our Verticals"
        ctaHref="#verticals"
        secondaryCtaText="Watch Our Story"
        secondaryCtaHref="#about"
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4"
        posterSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
      />

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="container-custom flex justify-center items-center">
          <MotionWrapper animation="fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-center gradient-text leading-tight">
              A multi-vertical vision, taking shape.
            </h2>
          </MotionWrapper>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-stone-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <MotionWrapper animation="fadeInLeft">
                <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-orange-100 text-orange-700 border border-orange-200 mb-6">
                  About RamRamGroup
                </span>
              </MotionWrapper>

              <MotionWrapper animation="fadeInLeft" delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-stone-800">Excellence Across</span>{' '}
                  <span className="gradient-text">Industries</span>
                </h2>
              </MotionWrapper>

              <MotionWrapper animation="fadeInLeft" delay={0.2}>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  For over 25 years, RamRamGroup has been at the forefront of innovation across multiple sectors.
                  From crafting iconic real estate developments to delivering world-class hospitality experiences,
                  we have built a reputation for unwavering quality and customer-centric excellence.
                </p>
              </MotionWrapper>

              <MotionWrapper animation="fadeInLeft" delay={0.3}>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  Our diverse portfolio spans six major verticals, each operating with the same core values
                  of integrity, innovation, and commitment to creating lasting value for our stakeholders.
                </p>
              </MotionWrapper>

              <MotionWrapper animation="fadeInLeft" delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Link href="/about" className="btn-primary">
                    <span>Learn Our Story</span>
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    <span>Get In Touch</span>
                  </Link>
                </div>
              </MotionWrapper>
            </div>

            {/* Image Grid */}
            <MotionWrapper animation="fadeInRight" className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400"
                      alt="Commercial Building"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400"
                      alt="Restaurant"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={educationImg.src}
                      alt="Education"
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400"
                      alt="Agriculture"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section id="verticals" className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Business Verticals"
            title="Diverse Excellence"
            description="Explore our portfolio of businesses, each delivering exceptional value in their respective domains."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {verticals.map((vertical, index) => (
              <VerticalCard
                key={vertical.title}
                title={vertical.title}
                description={vertical.description}
                href={vertical.href}
                icon={vertical.icon}
                color={vertical.color}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container-custom">
          <SectionHeading
            badge="Why Choose Us"
            title="The RamRam Advantage"
            description="What sets us apart in delivering exceptional experiences across all our verticals."
            variant="green"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Quality Assured',
                description: 'Rigorous standards and certifications across all operations.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Innovation Driven',
                description: 'Embracing technology and modern practices in every vertical.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Expert Teams',
                description: '5,000+ skilled professionals delivering excellence daily.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                ),
                title: 'Global Presence',
                description: 'Operations spanning 12 countries with local expertise.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-white border border-stone-200 hover:border-green-300 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-green-100 to-green-50 border border-green-200 flex items-center justify-center text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{item.title}</h3>
                <p className="text-stone-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by Leaders"
            description="What industry leaders and partners say about working with RamRamGroup."
          />

          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel testimonials={homeTestimonials} />
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build the Future Together?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Whether you&apos;re looking to invest, partner, or explore opportunities,
              our team is ready to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-stone-50 transition-colors shadow-lg"
              >
                <span>Contact Us Today</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 transition-colors"
              >
                <span>Learn More About Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
