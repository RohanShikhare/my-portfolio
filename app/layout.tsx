import type { Metadata } from 'next';
import { Bebas_Neue, Italiana } from 'next/font/google';
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

const bebasNeue = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bebas',
});

const italiana = Italiana({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-italiana',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://rohan-shikhare-portfolio.vercel.app'),
    title: {
        default: 'Rohan Shikhare | Full Stack Developer',
        template: '%s | Rohan Shikhare',
    },
    description:
        'Rohan Shikhare is a Full Stack Developer building modern, responsive, and accessible digital experiences with Next.js, React, TypeScript, and full-stack web technologies.',
    keywords: [
        'Rohan Shikhare',
        'Full Stack Developer',
        'portfolio',
        'Next.js',
        'React',
        'TypeScript',
        'web developer',
        'frontend developer',
        'backend developer',
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
        title: 'Rohan Shikhare | Full Stack Developer',
        description:
            'Portfolio of Full Stack Developer Rohan Shikhare showcasing modern web applications, creative frontend experiences, and technical expertise.',
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
        title: 'Rohan Shikhare | Full Stack Developer',
        description:
            'Portfolio of Full Stack Developer Rohan Shikhare showcasing modern web applications, creative frontend experiences, and technical expertise.',
        creator: '@RohanShikhare',
        images: ['/og-image.jpg'],
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/icon.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
            <body
                className={`${bebasNeue.variable} ${italiana.variable} antialiased bg-black font-[var(--font-bebas)]`}
            >
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
