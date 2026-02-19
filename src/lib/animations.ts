import type { Variants, Transition } from 'framer-motion';

// ============================================
// RAMRAMGROUP - ANIMATION LIBRARY
// ============================================

// Standard easing curves
export const easings = {
  smooth: [0.25, 0.1, 0.25, 1],
  bouncy: [0.68, -0.6, 0.32, 1.6],
  snappy: [0.4, 0, 0.2, 1],
  elegant: [0.6, 0.01, 0.05, 0.95],
};

// Standard transitions
export const transitions: Record<string, Transition> = {
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  springBouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  },
  smooth: {
    duration: 0.5,
    ease: easings.smooth,
  },
  elegant: {
    duration: 0.8,
    ease: easings.elegant,
  },
};

// Fade In variants
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.smooth,
    },
  },
};

// Fade In Up variants
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.elegant,
    },
  },
};

// Fade In Down variants
export const fadeInDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.elegant,
    },
  },
};

// Fade In Left variants
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.elegant,
    },
  },
};

// Fade In Right variants
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.elegant,
    },
  },
};

// Scale In variants
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.elegant,
    },
  },
};

// Scale In Up variants (combines scale and translate)
export const scaleInUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 30,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.elegant,
    },
  },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Fast stagger for grid items
export const fastStaggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Slow stagger for hero sections
export const slowStaggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Slide In variants for page transitions
export const slideIn: Variants = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easings.snappy,
    },
  },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: {
      duration: 0.3,
      ease: easings.snappy,
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.elegant,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
};

// Card hover effect
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Button hover effect
export const buttonHover: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easings.smooth,
    },
  },
  tap: {
    scale: 0.95,
  },
};

// Image reveal effect
export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easings.elegant,
    },
  },
};

// Counter animation config
export const counterConfig = {
  duration: 2,
  ease: easings.elegant,
};

// Rotate in variants
export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -10,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.elegant,
    },
  },
};

// Blur in variants
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: 'blur(20px)',
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easings.elegant,
    },
  },
};

// Floating animation for decorative elements
export const floating = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Pulse animation for highlights
export const pulse = {
  scale: [1, 1.05, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Shimmer effect for loading states
export const shimmer = {
  x: ['-100%', '100%'],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'linear',
  },
};

// Navigation link hover
export const navLinkHover: Variants = {
  rest: {
    scaleX: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
};

// Modal variants
export const modalBackdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

// Carousel slide variants
export const carouselSlide: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easings.elegant,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easings.elegant,
    },
  }),
};

// Text reveal animation (character by character)
export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: easings.elegant,
    },
  }),
};

// Draw line animation for SVG paths
export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 1.5,
        ease: easings.elegant,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

// Hero text variants for dramatic entrances
export const heroText: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    skewY: 7,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: easings.elegant,
    },
  },
};

// Parallax scroll config helper
export const getParallaxOffset = (strength: number = 0.3) => ({
  y: ['0%', `${strength * 100}%`],
});

// Viewport settings for animations
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-50px',
};

// Default animation wrapper settings
export const defaultAnimationProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: viewportSettings,
};
