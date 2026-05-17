'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImage from '../../public/mebutnotme.webp';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
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
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section
            className="relative overflow-hidden pt-16 md:pt-28 pb-14 lg:py-0"
            id="banner"
        >
            <ArrowAnimation />

            <div
                className="container min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-14 lg:gap-20"
                ref={containerRef}
            >
                {/* LEFT CONTENT */}
                <div className="max-w-[620px] w-full text-center lg:text-left">
                    <h1 className="banner-title slide-up-and-fade leading-[0.9] text-5xl sm:text-7xl lg:text-[90px] font-bebas tracking-wide">
                        <span className="text-primary font-italiana">FULL STACK</span>
                        <br />
                        <span className="text-white">DEVELOPER</span>
                    </h1>

                    <p className="banner-description slide-up-and-fade mt-6 text-base sm:text-lg leading-7 text-muted-foreground max-w-[520px] mx-auto lg:mx-0">
                        Full Stack Developer specializing in modern web applications, responsive UI/UX design, scalable frontend architecture, and high-performance digital experiences.
                    </p>

                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}?subject=${GENERAL_INFO.emailSubject}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        variant="primary"
                        className="mt-8 banner-button slide-up-and-fade "
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center justify-center lg:justify-start gap-2 mt-5">
                        <span className="size-3 rounded-full bg-primary animate-pulse"></span>

                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex items-center justify-center lg:justify-start gap-5 mt-8">
                        <a
                            href={SOCIAL_LINKS.find(link => link.name === 'github')?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300"
                        >
                            <FaGithub className="text-3xl text-white transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.35)]" />
                        </a>

                        <a
                            href={SOCIAL_LINKS.find(link => link.name === 'linkedin')?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group transition-all duration-300"
                        >
                            <FaLinkedin className="text-3xl text-white transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.35)]" />
                        </a>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative z-[2] flex items-center justify-center">
                    {/* GLOW */}
                    <div className="absolute h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] rounded-full bg-cyan-400/20 blur-[100px]" />

                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(0,255,255,0.08)]">
                        <img
                            src={ProfileImage.src}
                            alt="Profile"
                            className="h-[380px] w-[260px] sm:h-[480px] sm:w-[340px] object-cover grayscale contrast-110 brightness-90"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    </div>

                    {/* FLOATING CARD */}
                    <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-[-30px] lg:translate-x-0 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
                        <p className="text-xs text-muted-foreground">
                            Based in India
                        </p>

                        <h3 className="text-lg text-white">
                            Full Stack Developer
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
