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
            className="border-t border-muted/20 py-16 sm:py-20 lg:py-24 overflow-hidden"
            id="contact"
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-3xl font-italiana sm:text-4xl lg:text-5xl font-bold tracking-tight group hover:opacity-80 transition-opacity duration-300 cursor-default">
                        Rohan Shikhare
                    </h2>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                    {/* Left Section - Contact Info */}
                    <div className="space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <p className="text-base uppercase tracking-widest text-muted-foreground">
                                Email
                            </p>
                            <a
                                href={`mailto:${GENERAL_INFO.email}`}
                                className="group/email flex items-center gap-2 text-xl sm:text-xl transition-all duration-300 hover:text-primary"
                            >
                                <Mail className="w-4 h-4 flex-shrink-0 opacity-60 group-hover/email:opacity-100 transition-opacity" />
                                <span className="break-all hover:underline">
                                    {GENERAL_INFO.email}
                                </span>
                            </a>
                        </div>

                        {/* Location */}
                        <div className="space-y-2">
                            <p className="text-base uppercase tracking-widest text-muted-foreground">
                                Location
                            </p>
                            <div className="flex items-center gap-2 text-xl sm:text-xl">
                                <MapPin className="w-4 h-4 flex-shrink-0 opacity-60" />
                                <span>{GENERAL_INFO.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Section - Spacer on Desktop, Hidden on Mobile */}
                    <div className="hidden md:block" />

                    {/* Right Section - Social Links */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className="text-base uppercase tracking-widest text-muted-foreground mb-6">
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
                                        className={`group/link flex items-center gap-2 text-xl sm:text-xl capitalize transition-all duration-300 ${
                                            hoveredLinks[link.name]
                                                ? 'text-primary'
                                                : 'text-foreground'
                                        }`}
                                    >
                                        {/* Animated underline */}
                                        <span className="relative pb-1">
                                            <span className="relative">
                                                {link.name}
                                            </span>
                                            <span
                                                className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary/60 to-primary/30 transition-all duration-300 ${
                                                    hoveredLinks[link.name]
                                                        ? 'w-full opacity-100'
                                                        : 'w-0 opacity-0'
                                                }`}
                                            />
                                        </span>

                                        {/* Arrow Icon with subtle glow */}
                                        <span
                                            className={`inline-flex flex-shrink-0 transition-all duration-300 ${
                                                hoveredLinks[link.name]
                                                    ? 'translate-x-1 opacity-100 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]'
                                                    : 'translate-x-0 opacity-50'
                                            }`}
                                        >
                                            <MoveUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-16 sm:mt-20 pt-8 sm:pt-12 border-t border-muted/10">
                    <p className="text-base sm:text-sm text-muted-foreground text-center sm:text-left">
                        © {new Date().getFullYear()} Rohan Shikhare. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
