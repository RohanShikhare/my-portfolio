'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface TimelineEntry {
    title: string;
    subtitle: string;
    year: string;
    description: string;
}

const timelineEntries: TimelineEntry[] = [
    {
        title: 'Freelance Web Developer',
        subtitle: 'Self Employed',
        year: '2024 - Present',
        description:
            'Building responsive web applications using React.js, Next.js, Tailwind CSS, and modern frontend technologies.',
    },
    {
        title: 'Frontend Developer Intern',
        subtitle: 'Version Next Technologies Pvt. Ltd.',
        year: '2024',
        description:
            'Developed responsive user interfaces and optimized frontend performance using React.js and JavaScript.',
    },
    {
        title: 'BE in Information Technology',
        subtitle: 'PVPPCOE Mumbai',
        year: '2024 - Present',
        description:
            'Pursuing Information Technology engineering with an 8.17 CGPA focused on full-stack and AI development.',
    },
    {
        title: 'Diploma in Information Technology',
        subtitle: 'Government Polytechnic Mumbai',
        year: '2022 - 2024',
        description:
            'Graduated with 86.33% marks with strong foundations in web development, Java, and databases.',
    },
    {
        title: 'SSC',
        subtitle: 'Our Lady Of Good Counsel High School',
        year: '2021',
        description:
            'Completed secondary education with 75% marks and strong academic fundamentals.',
    },
];

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current || !timelineRef.current) return;

            // Timeline progress and tip animation
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

            // Individual entry animations
            gsap.utils.toArray('.experience-entry').forEach((entry: any) => {
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
            const desktopProgressBar = containerRef.current?.querySelector(
                '.timeline-progress.desktop-progress',
            ) as HTMLElement;
            const desktopProgressTip = containerRef.current?.querySelector(
                '.timeline-progress-tip.desktop-tip',
            ) as HTMLElement;

            if (desktopProgressBar) {
                gsap.to(desktopProgressBar, {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 0.6,
                        onUpdate: (self) => {
                            if (desktopProgressTip) {
                                const barHeight =
                                    desktopProgressBar.offsetHeight;
                                desktopProgressTip.style.transform = `translateY(${barHeight}px)`;
                            }
                        },
                        markers: false,
                    },
                });
            }

            // Mobile timeline progress animation
            const mobileProgressBar = containerRef.current?.querySelector(
                '.timeline-progress.mobile-progress',
            ) as HTMLElement;
            const mobileProgressTip = containerRef.current?.querySelector(
                '.timeline-progress-tip.mobile-tip',
            ) as HTMLElement;

            if (mobileProgressBar) {
                gsap.to(mobileProgressBar, {
                    height: '100%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 0.6,
                        onUpdate: (self) => {
                            if (mobileProgressTip) {
                                const barHeight =
                                    mobileProgressBar.offsetHeight;
                                mobileProgressTip.style.transform = `translateY(${barHeight}px)`;
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
        <section
            className="py-section text-white overflow-hidden"
            id="my-experience"
        >
            <div className="container relative" ref={containerRef}>
                <SectionTitle
                    title="Journey So Far"
                    classNames={{ title: 'text-2xl sm:text-3xl' }}
                />

                <div className="relative" ref={timelineRef}>
                    {/* Desktop Timeline - Centered */}
                    <div className="absolute hidden lg:flex lg:flex-col left-1/2 top-0 h-full w-px -translate-x-1/2">
                        {/* Background line */}
                        <div className="absolute inset-0 w-px bg-cyan-400/15" />

                        {/* Animated progress line */}
                        <div className="timeline-progress desktop-progress absolute left-0 top-0 w-full h-0 bg-gradient-to-b from-cyan-400/95 via-cyan-400/50 to-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.4)]" />

                        {/* Glowing node tip */}
                        <div
                            style={{ left: '-10px' }}
                            className="timeline-progress-tip desktop-tip absolute left-1/2 top-0 h-5 w-5 -translate-y-1/2 rounded-full bg-cyan-400/90 shadow-[0_0_24px_rgba(0,255,255,0.5),0_0_48px_rgba(0,255,255,0.25)]"
                        >
                            <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-lg" />
                            <div className="absolute h-2 w-2 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Mobile Timeline - Left side */}
                    <div className="absolute lg:hidden left-8 top-0 h-full w-px bg-cyan-400/15">
                        {/* Animated progress line */}
                        <div className="timeline-progress mobile-progress absolute left-0 top-0 w-full h-0 bg-gradient-to-b from-cyan-400/95 via-cyan-400/50 to-cyan-400/10 shadow-[0_0_30px_rgba(0,255,255,0.4)]" />

                        {/* Glowing node tip */}
                        <div
                            style={{ left: '-8px' }}
                            className="timeline-progress-tip mobile-tip absolute left-1/2 top-0 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-400/90 shadow-[0_0_20px_rgba(0,255,255,0.5),0_0_40px_rgba(0,255,255,0.25)]"
                        >
                            <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-lg" />
                            <div className="absolute h-1.5 w-1.5 rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Entries Container */}
                    <div className="flex flex-col gap-20 md:gap-24 lg:gap-32">
                        {timelineEntries.map((entry) => (
                            <div
                                key={entry.title}
                                className="experience-entry relative"
                            >
                                {/* Mobile Layout */}
                                <div className="lg:hidden pl-20">
                                    <div className="flex flex-col gap-4">
                                        {/* Year Badge */}
                                        <div className="inline-flex w-fit">
                                            <span className="text-sm sm:text-base uppercase tracking-[0.15em] text-cyan-300/90 px-3 py-1 rounded bg-cyan-400/10 border border-cyan-400/20">
                                                {entry.year}
                                            </span>
                                        </div>

                                        {/* Content Section */}
                                        <div className="space-y-3">
                                            {/* Title */}
                                            <h3 className="text-lg sm:text-xl  leading-snug text-white">
                                                {entry.title}
                                            </h3>

                                            {/* Subtitle */}
                                            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-300/70 font-medium">
                                                {entry.subtitle}
                                            </p>

                                            {/* Description */}
                                            <p className="text-sm sm:text-base leading-relaxed text-slate-300/90 pt-2">
                                                {entry.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Layout - Fixed 3-Column Grid */}
                                <div
                                    className="hidden lg:grid gap-y-0 items-start lg:gap-x-[80px] xl:gap-x-[140px]"
                                    style={{
                                        gridTemplateColumns:
                                            '280px 120px 420px',
                                        gridAutoRows: 'auto',
                                    }}
                                >
                                    {/* Left Column - Title & Subtitle */}
                                    <div className="col-start-1 space-y-2 pr-6">
                                        <h3 className="text-xl  leading-snug text-white">
                                            {entry.title}
                                        </h3>
                                        <p className="text-sm uppercase tracking-[0.15em] text-cyan-300/70 font-medium">
                                            {entry.subtitle}
                                        </p>
                                    </div>

                                    {/* Center Column - Year (Perfectly Centered) */}
                                    <div className="col-start-2 flex flex-col items-center justify-start">
                                        <span className="text-base uppercase tracking-[0.1em] text-slate-100 whitespace-nowrap">
                                            {entry.year}
                                        </span>
                                    </div>

                                    {/* Right Column - Description */}
                                    <div className="col-start-3 space-y-0 pl-6">
                                        <p className="text-base leading-relaxed text-slate-300/90">
                                            {entry.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
