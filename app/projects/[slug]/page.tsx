import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

const siteUrl = 'https://rohan-shikhare-portfolio.vercel.app';

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
}

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return {
            title: 'Project not found | Rohan Shikhare',
            robots: {
                noindex: true,
                nofollow: true,
            },
        };
    }

    const title = `${project.title} — ${project.techStack.slice(0, 3).join(', ')}`;
    const cleanDescription = stripHtml(project.description).slice(0, 160);
    const projectUrl = `${siteUrl}/projects/${slug}`;
    const projectImage = project.thumbnail
        ? `${siteUrl}${project.thumbnail}`
        : `${siteUrl}/og-image.jpg`;

    return {
        title,
        description: cleanDescription,
        alternates: {
            canonical: projectUrl,
        },
        openGraph: {
            title: `${project.title} | Rohan Shikhare`,
            description: cleanDescription,
            url: projectUrl,
            siteName: 'Rohan Shikhare Portfolio',
            type: 'article',
            locale: 'en_US',
            images: [
                {
                    url: projectImage,
                    alt: `${project.title} project showcase preview`,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Rohan Shikhare`,
            description: cleanDescription,
            images: [projectImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-snippet': -1,
                'max-image-preview': 'large',
                'max-video-preview': -1,
            },
        },
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    const projectStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        applicationCategory: 'WebApplication',
        operatingSystem: 'All',
        description: stripHtml(project.description).slice(0, 200),
        url: `${siteUrl}/projects/${project.slug}`,
        author: {
            '@type': 'Person',
            name: 'Rohan Shikhare',
            url: siteUrl,
        },
        keywords: project.techStack.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(projectStructuredData),
                }}
            />
            <ProjectDetails project={project} />
        </>
    );
};

export default Page;

