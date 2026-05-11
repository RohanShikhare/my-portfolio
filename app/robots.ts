import { NextResponse } from 'next/server';

const siteUrl = 'https://rohan-shikhare-portfolio.vercel.app';

export function GET() {
    const body = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\nHost: ${siteUrl}\n`;
    return new NextResponse(body, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
