'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface TechStackCubeProps {
    name: string;
    icon: React.ElementType;
    color: string;
}

const TechStackCube: React.FC<TechStackCubeProps> = ({
    name,
    icon: Icon,
    color,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(
                'group relative inline-flex flex-col items-center justify-center',
                'max-[360px]:w-16 max-[360px]:h-16 w-[4.25rem] h-[4.25rem] sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 p-2 sm:p-3 rounded-xl',
                'bg-white border border-editorial-border',
                'transition-all duration-300 ease-out',
                'hover:border-editorial-ink/40 hover:shadow-md hover:-translate-y-1',
                'cursor-pointer',
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role="article"
            aria-label={`${name} technology logo`}
            title={name}
        >
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 w-full h-full">
                {/* Icon container */}
                <div
                    className={cn(
                        'relative w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 flex items-center justify-center flex-shrink-0',
                        'transition-all duration-300',
                    )}
                >
                    <Icon
                        className={cn(
                            'w-full h-full transition-all duration-300',
                            isHovered ? 'scale-110 opacity-100' : 'opacity-85',
                        )}
                        style={{
                            color: color,
                        }}
                        aria-hidden="true"
                    />
                </div>

                {/* Tech name */}
                <span
                    className={cn(
                        'text-[10px] sm:text-[11px] md:text-xs text-center px-1 leading-tight font-sans transition-colors duration-200 line-clamp-2',
                        isHovered
                            ? 'text-editorial-ink font-semibold'
                            : 'text-editorial-muted font-normal',
                    )}
                >
                    {name}
                </span>
            </div>
        </div>
    );
};

export default TechStackCube;

