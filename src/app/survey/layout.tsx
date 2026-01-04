
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bioproduction Stability Survey | Catcheater',
    description: 'Help us quantify the impact of genetic instability in industrial fermentation. Participate in our market research.',
    openGraph: {
        title: 'Bioproduction Stability Survey | Catcheater',
        description: 'Help us quantify the impact of genetic instability in industrial fermentation.',
        url: 'https://catcheater.com/survey',
        siteName: 'Catcheater',
        images: [
            {
                url: '/og-survey.png', // We'll rely on a default or fallback for now
                width: 1200,
                height: 630,
                alt: 'Bioproduction Stability Survey',
            },
        ],
        type: 'website',
    },
};

export default function SurveyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
