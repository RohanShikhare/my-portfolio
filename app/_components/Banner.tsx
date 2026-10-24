'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImage from '../../public/rohan-shikhare-developer.webp';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // Subtle scroll-exit scrub
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -120, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    const githubLink = SOCIAL_LINKS.find((link) => link.name === 'github')?.url;
    const linkedinLink = SOCIAL_LINKS.find((link) => link.name === 'linkedin')?.url;

    return (
        <section
            className="relative overflow-hidden bg-background text-editorial-ink border-b border-editorial-border pt-24 sm:pt-28 md:pt-36 pb-20 md:pb-28 transition-colors duration-300"
            id="banner"
        >
            <div
                className="container min-h-[calc(100svh-140px)] flex flex-col justify-between"
                ref={containerRef}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                    {/* LEFT COLUMN: Editorial Typography & Actions */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                        {/* Eyebrow Label */}
                        <div className="slide-up-and-fade flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-sans font-medium tracking-[0.2em] uppercase text-editorial-muted">
                            <span className="text-editorial-ink font-semibold">Software Developer</span>
                            <span className="size-1 rounded-full bg-editorial-muted/40" aria-hidden="true" />
                            <span>Founder / Builder</span>
                            <span className="hidden xs:inline-block size-1 rounded-full bg-editorial-muted/40" aria-hidden="true" />
                            <span className="hidden xs:inline text-editorial-muted">India (UTC+5:30)</span>
                        </div>

                        {/* Main Editorial Headline */}
                        <h1 className="slide-up-and-fade mt-6 sm:mt-8 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[84px] font-sans font-medium tracking-tight text-editorial-ink leading-[1.06]">
                            Building software with{' '}
                            <span className="font-serif italic font-normal text-editorial-ink">
                                architectural rigour.
                            </span>
                            <br className="hidden sm:inline" />
                            Turning ideas into{' '}
                            <span className="font-serif italic font-normal text-editorial-accent">
                                refined products.
                            </span>
                        </h1>

                        {/* Supporting Narrative */}
                        <p className="slide-up-and-fade mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-editorial-muted font-sans leading-relaxed max-w-[620px]">
                            Software developer specializing in full-stack web architecture, performance-first frontend systems, and clean interface engineering. Currently building production web applications and establishing an independent software venture with two partners.
                        </p>

                        {/* Action Row */}
                        <div className="slide-up-and-fade mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                            <a
                                href="#selected-projects"
                                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-editorial-ink text-white font-sans text-sm sm:text-base font-medium tracking-wide transition-all duration-300 hover:bg-editorial-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                            >
                                <span>View Selected Work</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                            </a>

                            <a
                                href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-editorial-border bg-editorial-surface text-editorial-ink font-sans text-sm sm:text-base font-medium transition-all duration-300 hover:bg-white hover:border-editorial-ink/40"
                            >
                                <span>Get in Touch</span>
                            </a>
                        </div>

                        {/* Status & Secondary Social Links */}
                        <div className="slide-up-and-fade mt-8 pt-8 border-t border-editorial-border/60 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2.5">
                                <span className="relative flex size-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full size-2.5 bg-emerald-600" />
                                </span>
                                <span className="font-sans text-xs sm:text-sm text-editorial-muted">
                                    Available for technical opportunities &amp; collaboration
                                </span>
                            </div>

                            <div className="flex items-center gap-5">
                                {githubLink && (
                                    <a
                                        href={githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        className="text-editorial-muted hover:text-editorial-ink transition-colors duration-200"
                                    >
                                        <FaGithub className="text-xl" />
                                    </a>
                                )}
                                {linkedinLink && (
                                    <a
                                        href={linkedinLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                        className="text-editorial-muted hover:text-editorial-ink transition-colors duration-200"
                                    >
                                        <FaLinkedin className="text-xl" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Art-Directed Editorial Portrait */}
                    <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end self-start">
                        <div className="slide-up-and-fade w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
                            <div className="relative p-3 sm:p-4 rounded-2xl bg-editorial-surface border border-editorial-border shadow-sm">
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-editorial-surface">
                                    <Image
                                        src={ProfileImage}
                                        alt="Rohan Shikhare — Software Developer and Founder"
                                        priority
                                        sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 420px"
                                        className="object-cover w-full h-full grayscale contrast-[1.08] brightness-[0.98] transition-transform duration-700 hover:scale-[1.03]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Matte Caption */}
                                <div className="mt-3.5 px-1 flex items-baseline justify-between font-sans text-xs text-editorial-muted">
                                    <span className="font-medium text-editorial-ink">Rohan Shikhare</span>
                                    <span className="tracking-widest uppercase text-[10px]">Mumbai &bull; IN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle Scroll Cue */}
                <div className="relative mt-12 pt-6 flex justify-center">
                    <ArrowAnimation />
                </div>
            </div>
        </section>
    );
};

export default Banner;
