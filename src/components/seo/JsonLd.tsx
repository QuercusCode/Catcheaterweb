'use client';

export default function JsonLd() {
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Catcheater',
        url: 'https://catcheater.com',
        logo: 'https://catcheater.com/logo-final.png',
        description: 'The first autonomous quality control system for industrial fermentation.',
        sameAs: [
            'https://twitter.com/catcheater', // Placeholder, update if real
            'https://linkedin.com/company/catcheater' // Placeholder
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: 'science@catcheater.com'
        }
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Catcheater Evaluation Kit',
        image: 'https://catcheater.com/kit-preview.png',
        description: 'Plasmid stabilization kit featuring the Translation-Coupled Certificate™ mechanism.',
        brand: {
            '@type': 'Brand',
            name: 'Catcheater'
        },
        offers: {
            '@type': 'Offer',
            price: '499.00', // Example starting price
            priceCurrency: 'EUR',
            availability: 'https://schema.org/PreOrder'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, productSchema]) }}
        />
    );
}
