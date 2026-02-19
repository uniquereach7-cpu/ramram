import { MetadataRoute } from 'next';

// ============================================
// ROBOTS.TXT - Search Engine Crawling Rules
// ============================================

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/', '/_next/'],
            },
        ],
        sitemap: 'https://ramramgroup.com/sitemap.xml',
    };
}
