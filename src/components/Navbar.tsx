'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import logo from '@/assets/logo.png';

// ============================================
// NAVBAR COMPONENT - Professional Light Theme
// ============================================

interface NavLink {
    label: string;
    href: string;
    children?: NavLink[];
}

const navigationLinks: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
        label: 'Verticals',
        href: '#',
        children: [
            { label: 'Real Estate', href: '/realestate' },
            { label: 'Restaurant', href: '/restaurant' },
            { label: 'Salon', href: '/salon' },
            { label: 'Education', href: '/education' },
            { label: 'Café', href: '/cafe' },
            { label: 'Agriculture', href: '/agriculture' },
            { label: 'Sports', href: '/sports' },
        ],
    },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.6, 0.01, 0.05, 0.95] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-stone-200'
                : 'bg-transparent'
                }`}
        >
            <nav className="container-custom" aria-label="Main navigation">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative z-10 flex items-center gap-2 group ml-8"
                        aria-label="RamRamGroup Home"
                    >
                        <img
                            src={logo.src}
                            alt="Company Logo"
                            className="w-16 h-16 object-contain"
                        />

                        <div className="hidden sm:flex sm:items-center h-16">
                            <span className="text-3xl font-bold text-stone-800 group-hover:text-orange-600 transition-colors">
                                RamRam
                            </span>
                            <span className="text-3xl font-light text-orange-600">Group</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigationLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.children ? (
                                    <button
                                        className="flex items-center gap-1 text-stone-600 hover:text-orange-600 transition-colors py-2 font-medium"
                                        aria-expanded={activeDropdown === link.label}
                                        aria-haspopup="true"
                                    >
                                        {link.label}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="relative text-stone-600 hover:text-orange-600 transition-colors py-2 font-medium group"
                                    >
                                        {link.label}
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {link.children && activeDropdown === link.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 pt-2"
                                        >
                                            <div className="bg-white border border-stone-200 rounded-xl p-2 min-w-[200px] shadow-xl">
                                                {link.children.map((child, index) => (
                                                    <motion.div
                                                        key={child.label}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                    >
                                                        <Link
                                                            href={child.href}
                                                            className="block px-4 py-3 text-stone-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="btn-primary py-3 px-6 text-sm"
                        >
                            <span>Get In Touch</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-10 p-2 text-stone-700"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                            <motion.span
                                className="block h-0.5 bg-stone-700 rounded-full"
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 4 : 0,
                                }}
                            />
                            <motion.span
                                className="block h-0.5 bg-stone-700 rounded-full"
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                }}
                            />
                            <motion.span
                                className="block h-0.5 bg-stone-700 rounded-full"
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -4 : 0,
                                }}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white/98 backdrop-blur-xl lg:hidden"
                        style={{ top: '80px' }}
                    >
                        <motion.nav
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                            className="container-custom py-8 flex flex-col gap-4"
                        >
                            {navigationLinks.map((link) => (
                                <motion.div key={link.label} variants={fadeInUp}>
                                    {link.children ? (
                                        <div className="space-y-2">
                                            <button
                                                onClick={() =>
                                                    setActiveDropdown(
                                                        activeDropdown === link.label ? null : link.label
                                                    )
                                                }
                                                className="flex items-center justify-between w-full text-2xl font-medium text-stone-800 py-2"
                                            >
                                                {link.label}
                                                <svg
                                                    className={`w-5 h-5 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === link.label && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 border-l-2 border-orange-500"
                                                    >
                                                        {link.children.map((child) => (
                                                            <Link
                                                                key={child.label}
                                                                href={child.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block text-lg text-stone-600 hover:text-orange-600 py-2"
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-2xl font-medium text-stone-800 py-2"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}

                            <motion.div variants={fadeInUp} className="pt-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="btn-primary w-full justify-center"
                                >
                                    <span>Get In Touch</span>
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
