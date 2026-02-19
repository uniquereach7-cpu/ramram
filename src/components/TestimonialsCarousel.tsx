'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carouselSlide, fadeInUp } from '@/lib/animations';

// ============================================
// TESTIMONIALS CAROUSEL - Light Theme
// ============================================

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    company?: string;
    rating?: number;
    image?: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export default function TestimonialsCarousel({
    testimonials,
    autoPlay = true,
    autoPlayInterval = 5000,
}: TestimonialsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay || isPaused || testimonials.length <= 1) return;

        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, isPaused, testimonials.length]);

    // Navigation handlers
    const goToNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const goToPrevious = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    const goToSlide = useCallback((index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    }, [currentIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'ArrowRight') goToNext();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious]);

    const currentTestimonial = testimonials[currentIndex];

    // Render star rating
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-orange-400' : 'text-stone-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative"
            role="region"
            aria-label="Testimonials carousel"
        >
            {/* Main Testimonial Card */}
            <div className="relative overflow-hidden rounded-3xl bg-white border border-stone-200 shadow-lg p-8 md:p-12 min-h-[300px]">
                {/* Quote Mark Decoration */}
                <div className="absolute top-8 left-8 text-orange-200 opacity-50">
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                </div>

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={carouselSlide}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative z-10"
                    >
                        {/* Rating */}
                        {currentTestimonial.rating && (
                            <div className="flex gap-1 mb-6">
                                {renderStars(currentTestimonial.rating)}
                            </div>
                        )}

                        {/* Quote */}
                        <blockquote className="text-xl md:text-2xl text-stone-700 font-medium leading-relaxed mb-8 max-w-3xl">
                            &ldquo;{currentTestimonial.quote}&rdquo;
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-4">
                            {currentTestimonial.image ? (
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.author}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-200"
                                />
                            ) : (
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white text-xl font-bold">
                                    {currentTestimonial.author.charAt(0)}
                                </div>
                            )}
                            <div>
                                <p className="font-semibold text-stone-800">{currentTestimonial.author}</p>
                                <p className="text-stone-500 text-sm">
                                    {currentTestimonial.role}
                                    {currentTestimonial.company && `, ${currentTestimonial.company}`}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
                <div className="flex items-center justify-between mt-8">
                    {/* Dots */}
                    <div className="flex gap-2" role="tablist">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'w-8 bg-gradient-to-r from-orange-500 to-orange-600'
                                        : 'w-2 bg-stone-300 hover:bg-stone-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-selected={index === currentIndex}
                                role="tab"
                            />
                        ))}
                    </div>

                    {/* Arrow Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={goToPrevious}
                            className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={goToNext}
                            className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-orange-600 hover:border-orange-300 transition-colors shadow-sm"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
