'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface NavItem {
    num: string;
    name: string;
    italic?: string;
    url: string;
}

const NAV_ITEMS: NavItem[] = [
    { num: '01', name: 'Home', url: '/' },
    { num: '02', name: 'About', italic: 'Perspective', url: '/#about-me' },
    { num: '03', name: 'Technical', italic: 'Stack', url: '/#my-stack' },
    { num: '04', name: 'Career', italic: 'Timeline', url: '/#my-experience' },
    { num: '05', name: 'Selected', italic: 'Projects', url: '/#selected-projects' },
    { num: '06', name: 'Contact', italic: 'Inquiries', url: '/#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const triggerButtonRef = useRef<HTMLButtonElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const firstLinkRef = useRef<HTMLButtonElement>(null);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    // Handle Escape key to close overlay
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
                triggerButtonRef.current?.focus();
            }
        };

        if (isMenuOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isMenuOpen, closeMenu]);

    // Body scroll locking with clean teardown
    useEffect(() => {
        if (isMenuOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isMenuOpen]);

    // Focus management: move focus into overlay on open, restore on close
    useEffect(() => {
        if (isMenuOpen) {
            const timer = setTimeout(() => {
                firstLinkRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isMenuOpen]);

    // Focus trap inside modal
    const handleTrapFocus = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Tab' || !overlayRef.current) return;

        const focusableElements = overlayRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    };

    const handleNavigate = (url: string) => {
        closeMenu();
        router.push(url);
    };

    return (
        <>
            {/* STICKY ACCESSIBLE TRIGGER BUTTON */}
            <div className={cn('fixed top-6 right-6 md:top-8 md:right-10', isMenuOpen ? 'z-modal' : 'z-nav-trigger')}>
                <button
                    ref={triggerButtonRef}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="navigation-overlay"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    className={cn(
                        'group flex items-center gap-3 px-4 py-2.5 rounded-full font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-md shadow-sm',
                        isMenuOpen
                            ? 'bg-editorial-ink text-white border border-editorial-border hover:bg-editorial-hover'
                            : 'bg-editorial-ink text-white border border-editorial-border hover:bg-editorial-hover hover:scale-[1.02] active:scale-[0.98]',
                    )}
                >
                    <span className="hidden xs:inline">
                        {isMenuOpen ? 'Close' : 'Menu'}
                    </span>
                    <div className="relative size-4 flex items-center justify-center" aria-hidden="true">
                        <span
                            className={cn(
                                'absolute h-0.5 w-4 bg-current rounded-full transition-transform duration-300',
                                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1 group-hover:-translate-y-1.5',
                            )}
                        />
                        <span
                            className={cn(
                                'absolute h-0.5 w-4 bg-current rounded-full transition-transform duration-300',
                                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1 group-hover:translate-y-1.5',
                            )}
                        />
                    </div>
                </button>
            </div>

            {/* FULL-SCREEN EDITORIAL OVERLAY */}
            <div
                id="navigation-overlay"
                role="dialog"
                aria-modal="true"
                aria-label="Site Navigation"
                ref={overlayRef}
                onKeyDown={handleTrapFocus}
                className={cn(
                    'fixed inset-0 z-nav-overlay bg-background text-editorial-ink overflow-y-auto transition-all duration-500 ease-out',
                    isMenuOpen
                        ? 'opacity-100 pointer-events-auto visible'
                        : 'opacity-0 pointer-events-none invisible',
                )}
            >
                <div className="container min-h-screen flex flex-col justify-between py-10 sm:py-14 md:py-16">
                    {/* TOP STATUS BAR */}
                    <div className="flex items-center justify-between pb-8 border-b border-editorial-border/60">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 font-sans text-xs tracking-[0.2em] uppercase text-editorial-muted">
                            <span className="text-editorial-ink font-semibold">Rohan Shikhare</span>
                            <span className="hidden sm:inline size-1 rounded-full bg-editorial-muted/40" aria-hidden="true" />
                            <span>Software Developer &amp; Founder</span>
                        </div>

                        <div className="hidden md:flex items-center gap-2 font-sans text-xs text-editorial-muted">
                            <span className="size-2 rounded-full bg-emerald-600" aria-hidden="true" />
                            <span>India &bull; Available for Collaboration</span>
                        </div>
                    </div>

                    {/* MAIN NAVIGATION GRID */}
                    <div className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* LEFT: Nav Links */}
                        <nav className="lg:col-span-8 flex flex-col space-y-3 sm:space-y-4" aria-label="Primary Navigation">
                            {NAV_ITEMS.map((item, index) => (
                                <button
                                    key={item.name}
                                    ref={index === 0 ? firstLinkRef : undefined}
                                    onClick={() => handleNavigate(item.url)}
                                    className="group text-left py-2 flex items-baseline gap-4 sm:gap-6 border-b border-editorial-border/30 hover:border-editorial-border transition-colors duration-200"
                                >
                                    <span className="font-sans text-xs sm:text-sm font-mono tracking-widest text-editorial-muted group-hover:text-editorial-ink transition-colors">
                                        {item.num}
                                    </span>

                                    <div className="flex items-baseline gap-2 sm:gap-3">
                                        <span className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-editorial-ink transition-all duration-300 group-hover:translate-x-1">
                                            {item.name}
                                        </span>
                                        {item.italic && (
                                            <span className="font-serif italic font-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl text-editorial-muted group-hover:text-editorial-accent transition-colors duration-300">
                                                {item.italic}
                                            </span>
                                        )}
                                    </div>

                                    <ArrowUpRight
                                        className="size-5 sm:size-6 text-editorial-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto"
                                        aria-hidden="true"
                                    />
                                </button>
                            ))}
                        </nav>

                        {/* RIGHT: Editorial Context & Connectivity */}
                        <div className="lg:col-span-4 flex flex-col justify-between space-y-10 lg:pl-8 lg:border-l lg:border-editorial-border/60">
                            {/* Inquiries */}
                            <div className="space-y-3 font-sans">
                                <p className="text-xs uppercase tracking-[0.2em] font-medium text-editorial-muted">
                                    Direct Inquiries
                                </p>
                                <a
                                    href={`mailto:${GENERAL_INFO.email}`}
                                    className="block text-base sm:text-lg text-editorial-ink hover:text-editorial-accent font-medium underline underline-offset-4 decoration-editorial-border transition-colors"
                                >
                                    {GENERAL_INFO.email}
                                </a>
                                <p className="text-xs text-editorial-muted leading-relaxed">
                                    Open for technical discussions, software development engagements, and architectural advisory.
                                </p>
                            </div>

                            {/* Resume & Documents */}
                            <div className="space-y-3 font-sans">
                                <p className="text-xs uppercase tracking-[0.2em] font-medium text-editorial-muted">
                                    Curriculum Vitae
                                </p>
                                <a
                                    href={GENERAL_INFO.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-editorial-ink font-medium hover:underline underline-offset-4"
                                >
                                    <span>Download Resume (Google Drive)</span>
                                    <ArrowUpRight className="size-4" aria-hidden="true" />
                                </a>
                            </div>

                            {/* Social Profiles */}
                            <div className="space-y-3 font-sans">
                                <p className="text-xs uppercase tracking-[0.2em] font-medium text-editorial-muted">
                                    Public Profiles
                                </p>
                                <ul className="space-y-2">
                                    {SOCIAL_LINKS.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-editorial-ink capitalize hover:underline underline-offset-4"
                                            >
                                                <span>{link.name}</span>
                                                <ArrowUpRight className="size-3.5 text-editorial-muted" aria-hidden="true" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Builder Note */}
                            <div className="pt-6 border-t border-editorial-border/40 font-sans text-xs text-editorial-muted">
                                <p>
                                    Independent software venture currently under establishment with two engineering partners.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM STATUS FOOTER */}
                    <div className="pt-8 border-t border-editorial-border/60 flex flex-wrap items-center justify-between gap-4 font-sans text-xs text-editorial-muted">
                        <span>&copy; {new Date().getFullYear()} Rohan Shikhare &bull; Software Developer</span>
                        <span>Designed with editorial restraint</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
