'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp, cardHover } from '@/lib/animations';

// ============================================
// VERTICAL CARD - Light Theme
// ============================================

interface VerticalCardProps {
    title: string;
    description: string;
    href: string;
    index?: number;
    icon?: React.ReactNode;
    color?: 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'teal';
}

const colorClasses = {
    orange: {
        bg: 'from-orange-500 to-orange-600',
        light: 'from-orange-100 to-orange-50',
        border: 'hover:border-orange-300',
        text: 'text-orange-600',
        icon: 'bg-orange-100 text-orange-600 border-orange-200',
    },
    green: {
        bg: 'from-green-500 to-green-600',
        light: 'from-green-100 to-green-50',
        border: 'hover:border-green-300',
        text: 'text-green-600',
        icon: 'bg-green-100 text-green-600 border-green-200',
    },
    blue: {
        bg: 'from-blue-500 to-blue-600',
        light: 'from-blue-100 to-blue-50',
        border: 'hover:border-blue-300',
        text: 'text-blue-600',
        icon: 'bg-blue-100 text-blue-600 border-blue-200',
    },
    purple: {
        bg: 'from-purple-500 to-purple-600',
        light: 'from-purple-100 to-purple-50',
        border: 'hover:border-purple-300',
        text: 'text-purple-600',
        icon: 'bg-purple-100 text-purple-600 border-purple-200',
    },
    pink: {
        bg: 'from-pink-500 to-pink-600',
        light: 'from-pink-100 to-pink-50',
        border: 'hover:border-pink-300',
        text: 'text-pink-600',
        icon: 'bg-pink-100 text-pink-600 border-pink-200',
    },
    teal: {
        bg: 'from-teal-500 to-teal-600',
        light: 'from-teal-100 to-teal-50',
        border: 'hover:border-teal-300',
        text: 'text-teal-600',
        icon: 'bg-teal-100 text-teal-600 border-teal-200',
    },
};

export default function VerticalCard({
    title,
    description,
    href,
    index = 0,
    icon,
    color = 'orange',
}: VerticalCardProps) {
    const colors = colorClasses[color];

    return (
        <motion.div
            variants={fadeInUp}
            whileHover="hover"
            custom={index}
        >
            <Link
                href={href}
                className={`group block relative bg-white rounded-2xl p-8 border border-stone-200 ${colors.border} shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
            >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    {icon && (
                        <motion.div
                            className={`w-14 h-14 rounded-xl ${colors.icon} border flex items-center justify-center mb-6`}
                            variants={{
                                hover: { scale: 1.1, rotate: 5 }
                            }}
                        >
                            {icon}
                        </motion.div>
                    )}

                    {/* Title */}
                    <h3 className={`text-xl font-bold text-stone-800 mb-3 group-hover:${colors.text} transition-colors`}>
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-stone-600 mb-6 line-clamp-2 leading-relaxed">
                        {description}
                    </p>

                    {/* Arrow Link */}
                    <div className={`flex items-center gap-2 ${colors.text} font-medium`}>
                        <span>Coming Soon</span>
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
                </div>

                {/* Corner Decoration */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${colors.bg} opacity-5 group-hover:opacity-10 rounded-full transition-opacity`} />
            </Link>
        </motion.div>
    );
}
