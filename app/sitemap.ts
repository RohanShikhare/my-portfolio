import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

const siteUrl = 'https://rohan-shikhare-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map(
        (project) => ({
            url: `${siteUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }),
    );

    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...projectRoutes,
    ];
}