'use client';
import parse from 'html-react-parser';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 30,
            });
            const tl = gsap.timeline({
                delay: 0.5,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    // blur info div and make it smaller on scroll
    useGSAP(
        () => {
            if (window.innerWidth < 992) return;

            gsap.to('#info', {
                filter: 'blur(3px)',
                autoAlpha: 0,
                scale: 0.9,
                // position: 'sticky',
                scrollTrigger: {
                    trigger: '#info',
                    start: 'bottom bottom',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    // parallax effect on images
    useGSAP(
        () => {
            gsap.utils
                .toArray<HTMLDivElement>('#images > div')
                .forEach((imageDiv, i) => {
                    gsap.to(imageDiv, {
                        backgroundPosition: `center 0%`,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: imageDiv,
                            start: () => (i ? 'top bottom' : 'top 50%'),
                            end: 'bottom top',
                            scrub: true,
                            // invalidateOnRefresh: true, // to make it responsive
                        },
                    });
                });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-6 pb-20 bg-background text-editorial-ink">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-12 inline-flex gap-2.5 items-center group h-10 text-editorial-ink hover:text-editorial-hover font-sans text-sm font-medium transition-colors"
                >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>Back to Overview</span>
                </TransitionLink>

                <div
                    className="top-0 min-h-[calc(100svh-120px)] flex"
                    id="info"
                >
                    <div className="relative w-full">
                        <div className="flex items-start justify-between gap-6 mx-auto mb-10 max-w-[680px]">
                            <h1 className="fade-in-later opacity-0 text-4xl md:text-6xl font-sans font-medium tracking-tight text-editorial-ink leading-tight overflow-hidden">
                                <span className="inline-block">
                                    {project.title}
                                </span>
                            </h1>

                            <div className="fade-in-later opacity-0 flex items-center gap-3 pt-2">
                                {project.sourceCode && (
                                    <a
                                        href={project.sourceCode}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="View Source Code on GitHub"
                                        className="text-editorial-muted hover:text-editorial-ink transition-colors"
                                    >
                                        <Github size={24} />
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="View Live Project Site"
                                        className="text-editorial-muted hover:text-editorial-ink transition-colors"
                                    >
                                        <ExternalLink size={24} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="max-w-[680px] space-y-8 pb-20 mx-auto">
                            <div className="fade-in-later">
                                <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted mb-2">
                                    Year
                                </p>
                                <div className="text-base md:text-lg text-editorial-ink font-sans">
                                    {project.year}
                                </div>
                            </div>

                            <div className="fade-in-later">
                                <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted mb-2">
                                    Tech &amp; Technique
                                </p>
                                <div className="text-base md:text-lg text-editorial-ink font-sans leading-relaxed">
                                    {project.techStack.join(', ')}
                                </div>
                            </div>

                            <div className="fade-in-later">
                                <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted mb-2">
                                    Description
                                </p>
                                <div className="text-base md:text-lg text-editorial-muted font-sans leading-relaxed markdown-text">
                                    {parse(project.description)}
                                </div>
                            </div>

                            {project.role && (
                                <div className="fade-in-later">
                                    <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-editorial-muted mb-2">
                                        My Role
                                    </p>
                                    <div className="text-base md:text-lg text-editorial-muted font-sans leading-relaxed markdown-text">
                                        {parse(project.role)}
                                    </div>
                                </div>
                            )}
                        </div>

                        <ArrowAnimation />
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col gap-6 max-w-[850px] mx-auto mt-8"
                    id="images"
                >
                    {project.images.map((image) => (
                        <div
                            key={image}
                            className="group relative w-full aspect-[750/420] bg-editorial-surface rounded-2xl border border-editorial-border overflow-hidden shadow-sm"
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 50%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <a
                                href={image}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Open full resolution image in new tab"
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-editorial-border text-editorial-ink size-11 rounded-full inline-flex justify-center items-center transition-all opacity-0 hover:bg-editorial-ink hover:text-white group-hover:opacity-100 shadow-sm"
                            >
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
