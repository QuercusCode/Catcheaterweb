import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://catcheater.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard/', '/api/'], // Hide private areas/APIs
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
