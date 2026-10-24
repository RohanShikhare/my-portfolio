import { ReactNode } from 'react';
import { SectionFlower } from './icons';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-3.5 mb-10 sm:mb-14',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <SectionFlower
                    width={22}
                    className={cn(
                        'animate-spin duration-7000 text-editorial-ink opacity-80',
                        classNames?.icon,
                    )}
                />
            )}
            <h2
                className={cn(
                    'text-xs sm:text-sm font-sans font-medium uppercase tracking-[0.25em] text-editorial-muted leading-none',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
