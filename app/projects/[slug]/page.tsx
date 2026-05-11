import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

const siteUrl = 'https://rohan-shikhare-portfolio.vercel.app';

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
        } as Metadata;
    }

    const title = `${project.title} - ${project.techStack
        .slice(0, 3)
        .join(', ')}`;
    const projectUrl = `${siteUrl}/projects/${slug}`;

    return {
        title,
        description: project.description,
        alternates: {
            canonical: projectUrl,
        },
        openGraph: {
            title,
            description: project.description,
            url: projectUrl,
            siteName: 'Rohan Shikhare Portfolio',
            type: 'website',
            locale: 'en_US',
            images: [
                {
                    url: '/og-image.jpg',
                    alt: `${project.title} project preview`,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: project.description,
            creator: '@RohanShikhare',
            images: ['/og-image.jpg'],
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

    return <ProjectDetails project={project} />;
};

export default Page;
