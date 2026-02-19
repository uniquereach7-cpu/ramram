// ============================================
// RAMRAMGROUP - IMAGE UTILITIES
// ============================================

export interface ImageData {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    blurDataURL?: string;
}

// Placeholder image generator using picsum.photos
export const getPlaceholderImage = (
    width: number = 800,
    height: number = 600,
    id?: number
): string => {
    const imageId = id ?? Math.floor(Math.random() * 1000);
    return `https://picsum.photos/seed/${imageId}/${width}/${height}`;
};

// Generate placeholder video (using a placeholder service or local)
export const getPlaceholderVideo = (): string => {
    // Using a free stock video placeholder
    return 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4';
};

// Fetch images for a specific vertical/category
export const fetchVerticalImages = async (
    vertical: string,
    count: number = 6
): Promise<ImageData[]> => {
    // In production, this would fetch from a CMS or API
    // For now, generate placeholder images based on the vertical

    const verticalSeeds: Record<string, number[]> = {
        realestate: [100, 101, 102, 103, 104, 105],
        restaurant: [200, 201, 202, 203, 204, 205],
        salon: [300, 301, 302, 303, 304, 305],
        education: [400, 401, 402, 403, 404, 405],
        cafe: [500, 501, 502, 503, 504, 505],
        agriculture: [600, 601, 602, 603, 604, 605],
    };

    const seeds = verticalSeeds[vertical] ?? [1, 2, 3, 4, 5, 6];

    return seeds.slice(0, count).map((seed, index) => ({
        src: getPlaceholderImage(800, 600, seed),
        alt: `${vertical} image ${index + 1}`,
        width: 800,
        height: 600,
    }));
};

// Generate blur data URL placeholder (simulated)
export const generateBlurDataURL = (): string => {
    // A simple gray blur placeholder
    return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAACAQMRIf/aAAwDAQACEQMRAD8AzXStU1WLT0traS7tLbJMcUk2dwBPJVQAF5+k5qeNc1hJLtXvL2TZKyKHuHIUA4wMnpQorc6T7KKT/9k=';
};

// Image loader for next/image
export const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }): string => {
    // If using picsum, we can adjust the width directly
    if (src.includes('picsum.photos')) {
        const parts = src.split('/');
        const seedMatch = src.match(/seed\/(\w+)/);
        if (seedMatch) {
            const seed = seedMatch[1];
            return `https://picsum.photos/seed/${seed}/${width}/${Math.round(width * 0.75)}`;
        }
    }
    return src;
};

// Preload critical images
export const preloadImages = (urls: string[]): void => {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// Check if image is in viewport (for lazy loading optimization)
export const isImageInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Video placeholder URLs for different verticals
export const verticalVideos: Record<string, string> = {
    realestate: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
    restaurant: 'https://assets.mixkit.co/videos/preview/mixkit-preparing-a-salad-in-a-restaurant-kitchen-1127-large.mp4',
    salon: 'https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-haircut-in-a-beauty-salon-42339-large.mp4',
    education: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-colleagues-working-together-in-an-office-4828-large.mp4',
    cafe: 'https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-from-a-height-into-a-glass-23217-large.mp4',
    agriculture: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-farm-at-sunset-2627-large.mp4',
    hero: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4',
};
