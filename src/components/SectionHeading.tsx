'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/lib/animations';

// ============================================
// SECTION HEADING - Light Theme
// ============================================

interface SectionHeadingProps {
    badge?: string;
    title: string;
    description?: string;
    children?: ReactNode;
    alignment?: 'left' | 'center';
    variant?: 'orange' | 'green';
}

export default function SectionHeading({
    badge,
    title,
    description,
    children,
    alignment = 'center',
    variant = 'orange',
}: SectionHeadingProps) {
    const alignmentClasses = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

    const badgeClasses = variant === 'orange'
        ? 'bg-orange-100 text-orange-700 border-orange-200'
        : 'bg-green-100 text-green-700 border-green-200';

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className={`flex flex-col ${alignmentClasses} mb-12 md:mb-16`}
        >
            {badge && (
                <motion.span
                    variants={fadeInUp}
                    className={`inline-block px-4 py-1.5 text-sm font-semibold rounded-full border mb-4 ${badgeClasses}`}
                >
                    {badge}
                </motion.span>
            )}

            <motion.h2
                variants={fadeInUp}
                className="max-w-3xl"
            >
                <span className="text-stone-800">{title.split(' ').slice(0, -1).join(' ')}</span>{' '}
                <span className={variant === 'orange' ? 'gradient-text' : 'text-green-600'}>
                    {title.split(' ').slice(-1)}
                </span>
            </motion.h2>

            {description && (
                <motion.p
                    variants={fadeInUp}
                    className={`mt-4 text-lg text-stone-600 ${alignment === 'center' ? 'max-w-2xl' : 'max-w-xl'}`}
                >
                    {description}
                </motion.p>
            )}

            {children && (
                <motion.div variants={fadeInUp} className="mt-6">
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
}
