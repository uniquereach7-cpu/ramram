'use client';

import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// ============================================
// STATS COUNTER - Light Theme
// ============================================

interface Stat {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

interface StatsCounterProps {
    stats: Stat[];
    variant?: 'grid' | 'inline';
}

// Individual counter component with animation
function Counter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let startTime: number;
            const duration = 2000;

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                setDisplayValue(Math.floor(easeOutQuart * value));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isInView, value]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}

export default function StatsCounter({ stats, variant = 'inline' }: StatsCounterProps) {
    if (variant === 'grid') {
        return (
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="text-center p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all"
                    >
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <p className="text-stone-600 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-2">
                        <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <p className="text-stone-600 font-medium">{stat.label}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}
