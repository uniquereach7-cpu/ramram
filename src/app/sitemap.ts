import { MetadataRoute } from 'next';

// ============================================
// SITEMAP - SEO Sitemap Generation
// ============================================

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ramramgroup.com';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    // Vertical pages
    const verticals = [
        'realestate',
        'restaurant',
        'salon',
        'education',
        'cafe',
        'agriculture',
        'sports',
    ];

    const verticalPages = verticals.map((vertical) => ({
        url: `${baseUrl}/${vertical}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...verticalPages];
}
