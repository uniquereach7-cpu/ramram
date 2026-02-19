'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { heroText, slowStaggerContainer } from '@/lib/animations';

// ============================================
// HERO VIDEO LAYER - Light Theme with Video Background
// ============================================

interface HeroVideoLayerProps {
    videoSrc?: string;
    posterSrc?: string;
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
    overlayLight?: boolean;
}

export default function HeroVideoLayer({
    videoSrc = 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    posterSrc,
    title,
    subtitle,
    ctaText = 'Explore More',
    ctaHref = '#about',
    secondaryCtaText,
    secondaryCtaHref,
    overlayLight = false,
}: HeroVideoLayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    // Parallax effect on scroll
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 700], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-stone-100"
            aria-label="Hero section"
        >
            {/* Video Background */}
            <motion.div
                className="absolute inset-0"
                style={{ y: prefersReducedMotion ? 0 : y }}
            >
                {/* Video Element */}
                {!prefersReducedMotion && (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster={posterSrc}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        onLoadedData={() => setIsVideoLoaded(true)}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}

                {/* Fallback Image for Reduced Motion */}
                {(prefersReducedMotion || !isVideoLoaded) && posterSrc && (
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${posterSrc})` }}
                    />
                )}

                {/* Light Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative z-10 h-full flex items-center"
                style={{ opacity: prefersReducedMotion ? 1 : opacity }}
            >
                <div className="container-custom">
                    <motion.div
                        variants={slowStaggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-4xl"
                    >

                        {/* Title */}
                        <div className="overflow-hidden mb-6">
                            <motion.h1
                                variants={heroText}
                                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
                            >
                                <span className="text-stone-800">{title.split(' ')[0]}</span>
                                <br />
                                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                    {title.split(' ').slice(1).join(' ')}
                                </span>
                            </motion.h1>
                        </div>

                        {/* Subtitle */}
                        {subtitle && (
                            <motion.p
                                variants={heroText}
                                className="text-xl md:text-2xl text-stone-600 max-w-2xl mb-10 leading-relaxed"
                            >
                                {subtitle}
                            </motion.p>
                        )}

                        {/* CTAs */}
                        <motion.div
                            variants={heroText}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href={ctaHref}
                                className="btn-primary group"
                            >
                                <span>{ctaText}</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>

                            {secondaryCtaText && secondaryCtaHref && (
                                <a
                                    href={secondaryCtaHref}
                                    className="btn-secondary group"
                                >
                                    <span>{secondaryCtaText}</span>
                                    <svg
                                        className="w-5 h-5 group-hover:rotate-90 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </a>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-stone-500"
                >
                    <span className="text-sm uppercase tracking-widest">Scroll</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

            {/* Corner Decoration */}
            <div className="absolute top-20 right-8 w-64 h-64 pointer-events-none opacity-30">
                <svg
                    className="w-full h-full text-orange-500"
                    fill="none"
                    viewBox="0 0 200 200"
                >
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
                </svg>
            </div>
        </section>
    );
}
