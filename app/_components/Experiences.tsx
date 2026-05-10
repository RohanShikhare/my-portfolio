'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const timelineEntries = [
    {
        title: 'Learning Something New',
        subtitle: 'Self-Development',
        year: 'NOW',
        description:
            'Continuously exploring emerging technologies, researching advanced AI systems, and pushing the boundaries of what’s possible in tech.',
    },
    {
        title: 'AI Engineer',
        subtitle: 'Freelance & Projects',
        year: '2025',
        description:
            'Developing intelligent AI systems, chatbots, and machine learning solutions. Building next-gen conversational AI agents and JARVIS-like personal assistants.',
    },
    {
        title: 'Full-Stack Developer',
        subtitle: 'Product & Growth',
        year: '2024',
        description:
            'Built complete web applications from frontend to backend. Developed responsive UIs, RESTful APIs, and database solutions for various clients and projects.',
    },
    {
        title: 'Frontend Developer',
        subtitle: 'Enterprise & Team',
        year: '2023',
        description:
            'Shipped polished user experiences with modern frontend architecture, performance optimization, and strong UX-driven interactions.',
    },
];

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current || !timelineRef.current) return;

            gsap.fromTo(
                '.timeline-progress, .timeline-progress-tip',
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        end: 'top 50%',
                        toggleActions: 'play none none reverse',
                        markers: false,
                    },
                },
            );

            gsap.utils
                .toArray('.experience-entry')
                .forEach((entry: any, index: number) => {
                    gsap.fromTo(
                        entry,
                        { y: 35, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.75,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: entry,
                                start: 'top 92%',
                                end: 'top 65%',
                                toggleActions: 'play none none reverse',
                                markers: false,
                            },
                        },
                    );
                });

            // Desktop timeline progress animation
            gsap.utils
                .toArray('.hidden.md\\:block .timeline-progress')
                .forEach((progressBar: any) => {
                    const progressTip = (
                        progressBar.parentElement as HTMLElement
                    ).querySelector('.timeline-progress-tip') as HTMLElement;
                    gsap.to(progressBar, {
                        height: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: 0.6,
                            onUpdate: (self) => {
                                if (progressTip) {
                                    const barHeight = (
                                        progressBar as HTMLElement
                                    ).offsetHeight;
                                    progressTip.style.transform = `translateY(${barHeight}px)`;
                                }
                            },
                            markers: false,
                        },
                    });
                });

            // Mobile timeline progress animation
            gsap.utils
                .toArray('.md\\:hidden.absolute .timeline-progress')
                .forEach((progressBar: any) => {
                    const progressTip = (
                        progressBar.parentElement as HTMLElement
                    ).querySelector('.timeline-progress-tip') as HTMLElement;
                    gsap.to(progressBar, {
                        height: '100%',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top center',
                            end: 'bottom center',
                            scrub: 0.6,
                            onUpdate: (self) => {
                                if (progressTip) {
                                    const barHeight = (
                                        progressBar as HTMLElement
                                    ).offsetHeight;
                                    progressTip.style.transform = `translateY(${barHeight}px)`;
                                }
                            },
                            markers: false,
                        },
                    });
                });
        },
        { scope: containerRef },
    );

    return (
        <section
            className="py-section text-white overflow-hidden"
            id="my-experience"
        >
            <div
                className="container relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
                ref={containerRef}
            >
                <SectionTitle
                    title="Career & Experience"
                    classNames={{ title: 'text-2xl sm:text-3xl' }}
                />

                <div className="relative" ref={timelineRef}>
                    <div className="absolute hidden md:block left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-400/15">
                        <div className="timeline-progress absolute left-0 top-0 w-full h-0 bg-gradient-to-b from-cyan-400/95 via-cyan-400/50 to-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.4)]" />

                        <div
                            style={{ left: '-10px' }}
                            className="timeline-progress-tip absolute left-1/2 top-0 h-5 w-5 -translate-y-1/2 rounded-full bg-cyan-400/90 shadow-[0_0_24px_rgba(0,255,255,0.5),0_0_48px_rgba(0,255,255,0.25)]"
                        >
                            <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-lg" />

                            <div className="absolute h-2 w-2 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="absolute md:hidden left-8 top-0 h-full w-px bg-cyan-400/15">
                        <div className="timeline-progress absolute left-0 top-0 w-full h-0 bg-gradient-to-b from-cyan-400/95 via-cyan-400/50 to-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.4)]" />

                        <div
                            style={{ left: '-8px' }}
                            className="timeline-progress-tip absolute left-1/2 top-0 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-400/90 shadow-[0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.25)]"
                        >
                            <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-lg" />

                            <div className="absolute h-1.5 w-1.5 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="space-y-16 sm:space-y-20">
                        {timelineEntries.map((entry, index) => {
                            const active = index === 0;

                            return (
                                <div
                                    key={entry.title}
                                    className="experience-entry relative"
                                >
                                    <div className="md:hidden pl-14 sm:pl-16">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="flex flex-col items-center flex-shrink-0">
                                                <span className="mb-6 text-lg sm:text-2xl uppercase tracking-[0.2em] text-cyan-300">
                                                    {entry.year}
                                                </span>
                                            </div>

                                            <div className="space-y-2 flex-grow">
                                                <div>
                                                    <p className="text-base sm:text-lg leading-tight text-white">
                                                        {entry.title}
                                                    </p>

                                                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300/70">
                                                        {entry.subtitle}
                                                    </p>
                                                </div>

                                                <p className="text-xs sm:text-sm leading-7 text-slate-300">
                                                    {entry.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1.4fr] md:items-start md:gap-10">
                                        <div className="space-y-2">
                                            <p className="text-lg leading-tight text-white">
                                                {entry.title}
                                            </p>
                                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/70">
                                                {entry.subtitle}
                                            </p>
                                        </div>

                                        <div className="relative flex flex-col items-center gap-8 flex-shrink-0">
                                            <span className="text-2xl sm:text-3xl uppercase tracking-[0.2em] text-slate-100">
                                                {entry.year}
                                            </span>
                                        </div>

                                        <div className="text-sm leading-7 text-slate-300">
                                            {entry.description}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
