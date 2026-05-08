'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/*
const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <div key={item.title} className="experience-item">
                            <p className="text-xl text-muted-foreground">
                                {item.company}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
*/

/*
const experienceDetails = [
    {
        subtitle: 'Self-Development',
        summary:
            'Continuously exploring emerging technologies, researching advanced AI systems, and pushing the boundaries of what’s possible in modern development.',
        points: [
            'Learning new frontend architectures and animation systems.',
            'Experimenting with AI-enabled user experiences and workflows.',
            'Refining premium visual language for dark, neon-first portfolios.',
        ],
    },
    {
        subtitle: 'Freelance & Projects',
        summary:
            'Developing intelligent AI systems, chatbots, and machine learning solutions with a focus on polished conversational experiences.',
        points: [
            'Built conversational agent prototypes and prototype dashboards.',
            'Created responsive UIs with smooth motion and premium spacing.',
            'Delivered lightweight, performance-minded frontend solutions.',
        ],
    },
    {
        subtitle: 'Product-Led Teams',
        summary:
            'Designed and shipped full-stack applications with strong interaction design, architecture, and polished developer tooling.',
        points: [
            'Implemented reusable component systems and modular page flows.',
            'Optimized experience continuity across desktop and mobile screens.',
            'Coordinated cross-functional collaboration between design and engineering.',
        ],
    },
    {
        subtitle: 'Early Growth',
        summary:
            'Focused on building scalable frontend foundations, clear visual hierarchy, and thoughtful motion for end-user clarity.',
        points: [
            'Created layout systems with strong contrast and premium typography.',
            'Delivered accessible interactions and clean content structure.',
            'Maintained a consistent dark aesthetic with neon accent tones.',
        ],
    },
];

const getYearLabel = (duration: string, index: number) => {
    if (duration.toLowerCase().includes('present')) {
        return 'NOW';
    }

    const matches = duration.match(/\d{4}/g);
    if (!matches) {
        return `YEAR ${index + 1}`;
    }

    return matches[matches.length - 1];
};

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.utils.toArray('.timeline-card').forEach((card: any) => {
                gsap.fromTo(
                    card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.85,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 90%',
                            end: 'top 55%',
                            toggleActions: 'play none none reverse',
                        },
                    },
                );
            });

            gsap.fromTo(
                '.timeline-node',
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.85,
                    ease: 'power2.out',
                    stagger: 0.18,
                },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section bg-[#05060c] text-white" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle
                    title="My career & experience"
                    classNames={{ title: 'text-2xl sm:text-3xl' }}
                />
                <p className="max-w-3xl text-sm leading-7 text-violet-200/70 mb-10 md:mb-14">
                    A premium dark timeline with glowing progress nodes, refined spacing, and an AI-inspired career narrative.
                </p>

                <div className="relative overflow-hidden md:px-10">
                    <div className="pointer-events-none absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-gradient-to-b from-violet-500/70 via-violet-500/15 to-transparent md:block" />
                    <div className="pointer-events-none absolute md:hidden left-8 top-0 h-full w-px bg-gradient-to-b from-violet-500/70 via-violet-500/15 to-transparent" />

                    <div className="space-y-20">
                        {timelineEntries.map((entry, index) => {
                            const active = index === 0;

                            return (
                                <div key={entry.title} className="experience-entry relative">
                                    <div className="md:hidden pl-16">
                                        <div className="flex items-start gap-4">
                                            <div className="flex flex-col items-center">
                                                <span className="mb-4 text-3xl font-semibold uppercase tracking-[0.25em] text-slate-100">
                                                    {entry.year}
                                                </span>
                                                <span
                                                    className={`timeline-node relative inline-flex h-4 w-4 rounded-full ${
                                                        active
                                                            ? 'bg-violet-400/95 shadow-[0_0_22px_rgba(168,85,247,0.35)]'
                                                            : 'bg-violet-400/70 shadow-[0_0_18px_rgba(168,85,247,0.22)]'
                                                    }`}
                                                >
                                                    <span className="absolute inset-0 rounded-full bg-violet-500/30 blur-xl" />
                                                    <span className="relative h-2 w-2 rounded-full bg-white" />
                                                </span>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-xl font-semibold leading-tight text-white">
                                                        {entry.title}
                                                    </p>
                                                    <p className="mt-2 text-sm uppercase tracking-[0.28em] text-violet-300/75">
                                                        {entry.subtitle}
                                                    </p>
                                                </div>
                                                <p className="text-sm leading-8 text-slate-300">
                                                    {entry.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1.4fr] md:items-start md:gap-8">
                                        <div className="space-y-3">
                                            <p className="text-xl font-semibold leading-tight text-white">
                                                {entry.title}
                                            </p>
                                            <p className="text-sm uppercase tracking-[0.28em] text-violet-300/75">
                                                {entry.subtitle}
                                            </p>
                                        </div>

                                        <div className="relative flex flex-col items-center gap-6">
                                            <span className="text-[3rem] font-semibold uppercase tracking-[0.25em] text-slate-100">
                                                {entry.year}
                                            </span>
                                            <span
                                                className={`timeline-node relative inline-flex h-5 w-5 rounded-full ${
                                                    active
                                                        ? 'bg-violet-400/95 shadow-[0_0_28px_rgba(168,85,247,0.35)]'
                                                        : 'bg-violet-400/70 shadow-[0_0_18px_rgba(168,85,247,0.22)]'
                                                }`}
                                            >
                                                <span className="absolute inset-0 rounded-full bg-violet-500/30 blur-xl" />
                                                <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
                                            </span>
                                        </div>

                                        <div className="text-sm leading-8 text-slate-300">
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
*/

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

            gsap.utils.toArray('.experience-entry').forEach((entry: any, index: number) => {
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

            const progressBar = timelineRef.current.querySelector('.timeline-progress');
            const progressTip = timelineRef.current.querySelector('.timeline-progress-tip');
            if (progressBar) {
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
                                const barHeight = progressBar.offsetHeight;
                                progressTip.style.transform = `translateY(${barHeight}px)`;
                            }
                        },
                        markers: false,
                    },
                });
            }
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section bg-[#05060c] text-white overflow-hidden" id="my-experience">
            <div className="container relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
                <SectionTitle
                    title="Career & Experience"
                    classNames={{ title: 'text-2xl sm:text-3xl' }}
                />
                <p className="max-w-2xl text-xs sm:text-sm leading-7 text-violet-200/70 mb-14 sm:mb-16">
                    A premium dark timeline tracking career progression with scroll-based animation and refined typography.
                </p>

                <div className="relative" ref={timelineRef}>
                    <div className="absolute hidden md:block left-1/2 top-0 h-full w-px -translate-x-1/2 bg-violet-400/15">
                        <div className="timeline-progress absolute left-0 top-0 w-full h-0 bg-gradient-to-b from-violet-400/95 via-violet-400/50 to-violet-400/10 shadow-[0_0_30px_rgba(168,85,247,0.4)]" />
                        <div className="timeline-progress-tip absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/90 shadow-[0_0_24px_rgba(168,85,247,0.5),0_0_48px_rgba(168,85,247,0.25)]">
                            <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-lg" />
                            <div className="relative h-2 w-2 rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                    <div className="absolute md:hidden left-8 top-0 h-full w-px bg-violet-400/15">
                        <div className="timeline-progress absolute left-0 top-0 w-full h-0 bg-gradient-to-b from-violet-400/95 via-violet-400/50 to-violet-400/10 shadow-[0_0_30px_rgba(168,85,247,0.4)]" />
                        <div className="timeline-progress-tip absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/90 shadow-[0_0_20px_rgba(168,85,247,0.5),0_0_40px_rgba(168,85,247,0.25)]">
                            <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-lg" />
                            <div className="relative h-1.5 w-1.5 rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    <div className="space-y-16 sm:space-y-20">
                        {timelineEntries.map((entry, index) => {
                            const active = index === 0;

                            return (
                                <div key={entry.title} className="experience-entry relative">
                                    <div className="md:hidden pl-14 sm:pl-16">
                                        <div className="flex items-start gap-3 sm:gap-4">
                                            <div className="flex flex-col items-center flex-shrink-0">
                                                <span className="mb-6 text-lg sm:text-2xl font-semibold uppercase tracking-[0.2em] text-slate-100">
                                                    {entry.year}
                                                </span>
                                            </div>
                                            <div className="space-y-2 flex-grow">
                                                <div>
                                                    <p className="text-base sm:text-lg font-semibold leading-tight text-white">
                                                        {entry.title}
                                                    </p>
                                                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-violet-300/70">
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
                                            <p className="text-lg font-semibold leading-tight text-white">
                                                {entry.title}
                                            </p>
                                            <p className="text-xs uppercase tracking-[0.25em] text-violet-300/70">
                                                {entry.subtitle}
                                            </p>
                                        </div>

                                        <div className="relative flex flex-col items-center gap-8 flex-shrink-0">
                                            <span className="text-2xl sm:text-3xl font-semibold uppercase tracking-[0.2em] text-slate-100">
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

