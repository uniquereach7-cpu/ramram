'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cardHover, fadeInUp } from '@/lib/animations';

// ============================================
// SERVICE CARD - Light Theme
// ============================================

interface ServiceCardProps {
    title: string;
    description: string;
    image?: string;
    href?: string;
    index?: number;
    variant?: 'default' | 'compact' | 'featured';
}

export default function ServiceCard({
    title,
    description,
    image,
    href,
    index = 0,
    variant = 'default',
}: ServiceCardProps) {
    const cardContent = (
        <motion.div
            variants={fadeInUp}
            whileHover="hover"
            className={`group relative overflow-hidden rounded-2xl bg-white border border-stone-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-xl ${variant === 'featured' ? 'md:flex' : ''
                }`}
        >
            {/* Image */}
            {image && (
                <div className={`relative overflow-hidden ${variant === 'featured' ? 'md:w-1/2' : 'aspect-video'
                    }`}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            )}

            {/* Content */}
            <div className={`p-8 ${variant === 'featured' ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
                <h3 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                    {description}
                </p>

                {href && (
                    <div className="mt-6 flex items-center gap-2 text-orange-600 font-medium">
                        <span>Learn More</span>
                        <motion.svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            variants={{
                                hover: { x: 5 }
                            }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                    </div>
                )}
            </div>
        </motion.div>
    );

    if (href) {
        return <Link href={href}>{cardContent}</Link>;
    }

    return cardContent;
}

// Service Item for List Display
export function ServiceItem({
    title,
    description,
    index = 0,
}: {
    title: string;
    description: string;
    index?: number;
}) {
    return (
        <motion.div
            variants={fadeInUp}
            className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-lg"
        >
            {/* Number Badge */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm mb-4 shadow-lg shadow-orange-500/20">
                {String(index + 1).padStart(2, '0')}
            </div>

            <h4 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-orange-600 transition-colors">
                {title}
            </h4>
            <p className="text-stone-600 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
