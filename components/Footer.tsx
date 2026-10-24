'use client';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { MoveUpRight, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

interface SocialLink {
    [key: string]: boolean;
}

const Footer = () => {
    const [hoveredLinks, setHoveredLinks] = useState<SocialLink>({});

    const handleSocialHover = (name: string, isHovered: boolean) => {
        setHoveredLinks((prev) => ({
            ...prev,
            [name]: isHovered,
        }));
    };

    return (
        <footer
            className="border-t border-editorial-border bg-editorial-surface py-16 sm:py-20 lg:py-24 text-editorial-ink overflow-hidden"
            id="contact"
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-editorial-ink cursor-default">
                        Rohan Shikhare
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] text-editorial-muted">
                        Software Developer &bull; Founder
                    </p>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                    {/* Left Section - Contact Info */}
                    <div className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-editorial-muted">
                                Direct Inquiries
                            </p>
                            <a
                                href={`mailto:${GENERAL_INFO.email}`}
                                className="group/email flex items-center gap-2 text-lg sm:text-xl font-sans text-editorial-ink transition-colors duration-200 hover:text-editorial-hover"
                            >
                                <Mail className="w-4 h-4 flex-shrink-0 opacity-60 group-hover/email:opacity-100 transition-opacity" />
                                <span className="break-all hover:underline underline-offset-4 decoration-editorial-border">
                                    {GENERAL_INFO.email}
                                </span>
                            </a>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-editorial-muted">
                                Location
                            </p>
                            <div className="flex items-center gap-2 text-lg sm:text-xl font-sans text-editorial-ink">
                                <MapPin className="w-4 h-4 flex-shrink-0 opacity-60" />
                                <span>{GENERAL_INFO.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Spacer on Desktop, Hidden on Mobile */}
                    <div className="hidden md:block" />

                    {/* Right Section - Social Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-editorial-muted mb-4">
                            Connect
                        </p>
                        <ul className="space-y-3">
                            {SOCIAL_LINKS.map((link) => (
                                <li
                                    key={link.name}
                                    onMouseEnter={() =>
                                        handleSocialHover(link.name, true)
                                    }
                                    onMouseLeave={() =>
                                        handleSocialHover(link.name, false)
                                    }
                                >
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/link flex items-center gap-2 text-lg sm:text-xl font-sans capitalize text-editorial-ink hover:text-editorial-hover transition-colors duration-200"
                                    >
                                        <span className="relative pb-1">
                                            <span>
                                                {link.name}
                                            </span>
                                            <span
                                                className={`absolute bottom-0 left-0 h-px bg-editorial-ink transition-all duration-300 ${
                                                    hoveredLinks[link.name]
                                                        ? 'w-full opacity-100'
                                                        : 'w-0 opacity-0'
                                                }`}
                                            />
                                        </span>

                                        <span
                                            className={`inline-flex flex-shrink-0 transition-transform duration-300 ${
                                                hoveredLinks[link.name]
                                                    ? 'translate-x-1 opacity-100'
                                                    : 'translate-x-0 opacity-60'
                                            }`}
                                        >
                                            <MoveUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-editorial-muted group-hover/link:text-editorial-ink" />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-editorial-border/60 flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-editorial-muted">
                    <p>
                        &copy; {new Date().getFullYear()} Rohan Shikhare. All rights reserved.
                    </p>
                    <p>
                        Designed with <span className="font-serif italic font-normal text-editorial-ink">architectural rigour</span> &amp; editorial clarity.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
