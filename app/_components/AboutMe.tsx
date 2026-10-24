'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 75%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 100,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -100,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section
            className="relative overflow-hidden bg-background text-editorial-ink border-b border-editorial-border py-24 sm:py-32 lg:py-36 transition-colors duration-300"
            id="about-me"
        >
            <div className="container" ref={container}>
                {/* Editorial Section Index */}
                <div className="slide-up-and-fade flex items-center gap-3 text-xs sm:text-sm font-sans font-medium tracking-[0.25em] uppercase text-editorial-muted">
                    <span>01</span>
                    <span className="size-1 rounded-full bg-editorial-muted/40" aria-hidden="true" />
                    <span>Perspective &amp; Approach</span>
                </div>

                {/* Primary Editorial Statement */}
                <h2 className="slide-up-and-fade mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-sans font-medium tracking-tight text-editorial-ink leading-[1.12] max-w-4xl">
                    Software is at its best when{' '}
                    <span className="font-serif italic font-normal text-editorial-ink">
                        architectural rigour
                    </span>{' '}
                    meets genuine product intuition.
                </h2>

                {/* Two-Column Editorial Narrative */}
                <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-editorial-border/70 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 font-sans">
                    <div className="slide-up-and-fade space-y-3.5">
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-editorial-ink">
                            01 &mdash; Technical Craft
                        </p>
                        <p className="text-base sm:text-lg text-editorial-muted leading-relaxed">
                            My core foundation is in engineering scalable web applications and resilient frontend architectures. Whether structuring reactive state in React and Next.js, building reusable TypeScript components, or optimizing performance, I prioritize clarity, modularity, and systems that can scale gracefully over time.
                        </p>
                    </div>

                    <div className="slide-up-and-fade space-y-3.5">
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-editorial-ink">
                            02 &mdash; The Builder&apos;s Mindset
                        </p>
                        <p className="text-base sm:text-lg text-editorial-muted leading-relaxed">
                            Technical capability is most rewarding when tied directly to real human outcomes. Moving from standalone development toward establishing an independent software venture with two partners, I approach every codebase through both an engineering lens and a product owner&apos;s discipline&mdash;striving for software that is reliable, elegant, and useful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
