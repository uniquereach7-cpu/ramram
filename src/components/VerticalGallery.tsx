'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer, modalBackdrop, modalContent } from '@/lib/animations';

// ============================================
// VERTICAL GALLERY - Light Theme
// ============================================

export interface GalleryItem {
    id: string;
    type: 'image' | 'video';
    src: string;
    alt: string;
    thumbnail?: string;
}

interface VerticalGalleryProps {
    items: GalleryItem[];
    columns?: 2 | 3 | 4;
}

export default function VerticalGallery({ items, columns = 3 }: VerticalGalleryProps) {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    // Open lightbox
    const openLightbox = (item: GalleryItem, index: number) => {
        setSelectedItem(item);
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    };

    // Close lightbox
    const closeLightbox = () => {
        setSelectedItem(null);
        document.body.style.overflow = '';
    };

    // Navigate in lightbox
    const goToNext = () => {
        const nextIndex = (selectedIndex + 1) % items.length;
        setSelectedIndex(nextIndex);
        setSelectedItem(items[nextIndex]);
    };

    const goToPrevious = () => {
        const prevIndex = (selectedIndex - 1 + items.length) % items.length;
        setSelectedIndex(prevIndex);
        setSelectedItem(items[prevIndex]);
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'ArrowLeft') goToPrevious();
    };

    // Grid column classes
    const columnClasses = {
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <>
            {/* Gallery Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`grid ${columnClasses[columns]} gap-4 md:gap-6`}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={fadeInUp}
                        className={`group relative overflow-hidden rounded-2xl cursor-pointer ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                            }`}
                        onClick={() => openLightbox(item, index)}
                    >
                        <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onMouseEnter={(e) => e.currentTarget.play()}
                                    onMouseLeave={(e) => e.currentTarget.pause()}
                                />
                            )}

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Hover Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                                    {item.type === 'video' ? (
                                        <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Alt Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm font-medium">{item.alt}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        variants={modalBackdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/95 backdrop-blur-xl p-4"
                        onClick={closeLightbox}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Image lightbox"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                            aria-label="Close lightbox"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation Buttons */}
                        {items.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToPrevious();
                                    }}
                                    className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToNext();
                                    }}
                                    className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                                    aria-label="Next image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Media Content */}
                        <motion.div
                            variants={modalContent}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="relative max-w-5xl max-h-[80vh] rounded-xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === 'image' ? (
                                <img
                                    src={selectedItem.src}
                                    alt={selectedItem.alt}
                                    className="max-w-full max-h-[80vh] object-contain"
                                />
                            ) : (
                                <video
                                    src={selectedItem.src}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-[80vh]"
                                />
                            )}
                        </motion.div>

                        {/* Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                            {selectedIndex + 1} / {items.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
