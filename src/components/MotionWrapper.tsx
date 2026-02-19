'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import {
    fadeIn,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    scaleInUp,
    viewportSettings,
} from '@/lib/animations';

// ============================================
// MOTION WRAPPER - Reusable Animation Wrapper
// ============================================

type AnimationType =
    | 'fadeIn'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'scaleIn'
    | 'scaleInUp';

interface MotionWrapperProps extends Omit<HTMLMotionProps<'div'>, 'variants'> {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    amount?: number;
    as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'span';
}

// Animation variants map
const animationVariants = {
    fadeIn,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    scaleInUp,
};

export default function MotionWrapper({
    children,
    animation = 'fadeInUp',
    delay = 0,
    duration,
    className = '',
    once = true,
    amount = 0.2,
    as = 'div',
    ...props
}: MotionWrapperProps) {
    // Get the selected animation variant
    const selectedVariant = animationVariants[animation];

    // Create custom variant with delay and duration overrides
    const customVariant = {
        hidden: selectedVariant.hidden,
        visible: {
            ...selectedVariant.visible,
            transition: {
                ...(typeof selectedVariant.visible === 'object' && 'transition' in selectedVariant.visible
                    ? selectedVariant.visible.transition
                    : {}),
                delay,
                ...(duration ? { duration } : {}),
            },
        },
    };

    // Dynamic component based on 'as' prop
    const MotionComponent = motion[as] as typeof motion.div;

    return (
        <MotionComponent
            variants={customVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount, margin: viewportSettings.margin }}
            className={className}
            {...props}
        >
            {children}
        </MotionComponent>
    );
}

// Export a simpler version for inline use
export function FadeIn({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <MotionWrapper animation="fadeIn" delay={delay} className={className}>
            {children}
        </MotionWrapper>
    );
}

export function FadeInUp({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <MotionWrapper animation="fadeInUp" delay={delay} className={className}>
            {children}
        </MotionWrapper>
    );
}

export function ScaleIn({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <MotionWrapper animation="scaleIn" delay={delay} className={className}>
            {children}
        </MotionWrapper>
    );
}
