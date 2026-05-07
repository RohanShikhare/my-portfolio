'use client';
import SectionTitle from '@/components/SectionTitle';
import TechStackCube from '@/components/TechStackCube';
import { MY_STACK, ITechStack } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useMemo } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Create inverted triangle layout
    const triangleRows = useMemo(() => {
        const rows: Array<Array<ITechStack>> = [];
        let currentIndex = 0;

        // Define row sizes for inverted triangle (pointing down)
        // Starting with fewer items at top, more at bottom
        const rowSizes = [3, 4, 5, 6, 4]; // Total: 22 items

        rowSizes.forEach((size) => {
            const row = MY_STACK.slice(currentIndex, currentIndex + size);
            if (row.length > 0) {
                rows.push(row);
                currentIndex += size;
            }
        });

        return rows;
    }, []);

    useGSAP(
        () => {
            const cubeEls =
                containerRef.current?.querySelectorAll('[data-tech-cube]');

            if (!cubeEls?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('[data-tech-cube]', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.08,
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
                    end: 'bottom 10%',
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
        <section id="my-stack" ref={containerRef}>
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="flex flex-col items-center gap-3 sm:gap-4">
                    {triangleRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="flex justify-center gap-2 sm:gap-3"
                            style={{
                                marginLeft: `${(triangleRows.length - rowIndex - 1) * 0.75}rem`,
                                marginRight: `${(triangleRows.length - rowIndex - 1) * 0.75}rem`,
                            }}
                        >
                            {row.map((tech, techIndex) => (
                                <div
                                    key={`${tech.name}-${techIndex}`}
                                    data-tech-cube
                                    className="flex-shrink-0"
                                >
                                    <TechStackCube 
                                        name={tech.name} 
                                        icon={tech.icon}
                                        color={tech.color}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
