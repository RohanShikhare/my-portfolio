'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TechStackCubeProps {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

const TechStackCube: React.FC<TechStackCubeProps> = ({ name, icon: Icon, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(
                'group relative inline-flex flex-col items-center justify-center',
                'w-24 h-24 sm:w-28 sm:h-28 p-3 rounded-lg',
                'bg-gradient-to-b from-muted/15 to-muted/5',
                'border border-muted/40',
                'transition-all duration-500 ease-out',
                'hover:border-primary/70 hover:scale-110',
                'cursor-pointer',
                'backdrop-blur-sm',
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background glow effect */}
            <div
                className={cn(
                    'absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500',
                    'bg-gradient-to-br from-primary/25 via-secondary/15 to-primary/25 blur-lg',
                    isHovered && 'opacity-100',
                )}
                aria-hidden="true"
            />

            {/* Border glow effect */}
            <div
                className={cn(
                    'absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500',
                    'bg-gradient-to-r from-primary/60 via-secondary/50 to-primary/60 blur-sm',
                    isHovered && 'opacity-80',
                )}
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black, transparent)',
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-1 w-full h-full">
                {/* Icon container */}
                <div
                    className={cn(
                        'relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0',
                        'transition-all duration-500',
                        isHovered && 'drop-shadow-[0_0_20px_rgba(0,194,111,0.9)]',
                    )}
                >
                    <Icon
                        className={cn(
                            'w-full h-full transition-all duration-500',
                            isHovered
                                ? 'opacity-100'
                                : 'opacity-40',
                        )}
                        style={{
                            color: isHovered ? color : '#a0a0a0',
                            filter: isHovered ? 'drop-shadow(0 0 8px rgba(0, 194, 111, 0.6))' : 'saturate(0.3) brightness(0.7)',
                        }}
                    />
                </div>

                {/* Tech name */}
                <span
                    className={cn(
                        'text-[10px] sm:text-xs font-semibold text-center px-1 leading-tight',
                        'transition-all duration-500 line-clamp-2',
                        isHovered
                            ? 'text-foreground'
                            : 'text-muted-foreground/50',
                    )}
                >
                    {name}
                </span>
            </div>
        </div>
    );
};

export default TechStackCube;
