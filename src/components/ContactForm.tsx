'use client';

import { useState, useRef, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// ============================================
// CONTACT FORM - Light Theme
// ============================================

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Validation
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (formData.phone && !/^[\d\s\-+()]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // EmailJS integration - hardcoded keys
            const serviceId = 'service_4j4w3g8';
            const templateId = 'template_qqudjk1';
            const publicKey = 'zNSt04SqN4rXLfzYC';

            if (formRef.current) {
                await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            }

            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
        >
            {/* Name Field */}
            <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-orange-500'
                        } focus:outline-none transition-colors text-stone-800 placeholder-stone-400`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                />
                {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-500" role="alert">
                        {errors.name}
                    </p>
                )}
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-orange-500'
                        } focus:outline-none transition-colors text-stone-800 placeholder-stone-400`}
                    placeholder="Enter your email address"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                />
                {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-500" role="alert">
                        {errors.email}
                    </p>
                )}
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={fadeInUp}>
                <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                    Phone Number <span className="text-stone-400">(Optional)</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-orange-500'
                        } focus:outline-none transition-colors text-stone-800 placeholder-stone-400`}
                    placeholder="Enter your phone number"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-red-500" role="alert">
                        {errors.phone}
                    </p>
                )}
            </motion.div>

            {/* Message Field */}
            <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    Your Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-stone-200 focus:border-orange-500'
                        } focus:outline-none transition-colors resize-none text-stone-800 placeholder-stone-400`}
                    placeholder="Tell us about your inquiry..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                />
                {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-500" role="alert">
                        {errors.message}
                    </p>
                )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={fadeInUp}>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <span className="spinner border-white" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </>
                    )}
                </button>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-700"
                    role="alert"
                >
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="font-semibold">Message Sent Successfully!</p>
                            <p className="text-sm">We&apos;ll get back to you within 24 hours.</p>
                        </div>
                    </div>
                </motion.div>
            )}

            {submitStatus === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
                    role="alert"
                >
                    <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <p className="font-semibold">Oops! Something went wrong.</p>
                            <p className="text-sm">Please try again or contact us directly.</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.form>
    );
}
