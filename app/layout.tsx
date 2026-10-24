import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const instrumentSerif = Instrument_Serif({
    weight: '400',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    variable: '--font-serif',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://rohan-shikhare-portfolio.vercel.app'),
    title: {
        default: 'Rohan Shikhare | Software Developer & Founder',
        template: '%s | Rohan Shikhare',
    },
    description:
        'Rohan Shikhare is a Software Developer and Builder creating modern digital experiences, scalable web applications, and software products.',
    keywords: [
        'Rohan Shikhare',
        'Software Developer',
        'Founder',
        'Builder',
        'portfolio',
        'Next.js',
        'React',
        'TypeScript',
        'web developer',
        'frontend architecture',
        'web application',
        'personal website',
    ],
    authors: [{ name: 'Rohan Shikhare', url: 'https://rohan-shikhare-portfolio.vercel.app' }],
    creator: 'Rohan Shikhare',
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
    alternates: {
        canonical: 'https://rohan-shikhare-portfolio.vercel.app',
    },
    openGraph: {
        title: 'Rohan Shikhare | Software Developer & Founder',
        description:
            'Portfolio of Software Developer and Founder Rohan Shikhare showcasing modern web applications, scalable architecture, and technical craft.',
        url: 'https://rohan-shikhare-portfolio.vercel.app',
        siteName: 'Rohan Shikhare Portfolio',
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/og-image.jpg',
                alt: 'Rohan Shikhare portfolio preview',
                width: 1200,
                height: 630,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Rohan Shikhare | Software Developer & Founder',
        description:
            'Portfolio of Software Developer and Founder Rohan Shikhare showcasing modern web applications, scalable architecture, and technical craft.',
        images: ['/og-image.jpg'],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/icon.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rohan Shikhare',
    jobTitle: 'Software Developer',
    description:
        'Software Developer and Founder creating modern web applications, scalable architecture, and software products.',
    url: 'https://rohan-shikhare-portfolio.vercel.app',
    email: 'rohan.shikhare.work@gmail.com',
    sameAs: [
        'https://github.com/RohanShikhare',
        'https://www.linkedin.com/in/rohan-shikhare',
    ],
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'India',
    },
};

const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rohan Shikhare Portfolio',
    url: 'https://rohan-shikhare-portfolio.vercel.app',
    author: {
        '@type': 'Person',
        name: 'Rohan Shikhare',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground font-sans`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personStructuredData),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(websiteStructuredData),
                    }}
                />
                <GoogleAnalytics gaId="G-MHLY1LNGY5" />
                <Script id="hotjar" strategy="afterInteractive">
                    {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </Script>
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
