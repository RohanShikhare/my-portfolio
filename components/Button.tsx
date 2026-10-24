import Link from 'next/link';
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Variant } from '@/types';
import { cn } from '@/lib/utils';

const Child = ({ icon }: any) => (
    <span className="flex items-center justify-center gap-3">
        <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
        {!icon && 'Processing...'}
    </span>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
    as?: 'link' | 'button';
    loading?: boolean;
    icon?: boolean;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: Variant;
} & (ComponentProps<typeof Link> | ButtonProps);

const Button = ({
    loading,
    variant,
    className,
    children,
    as = 'link',
    icon = false,
    ...rest
}: Props) => {
    const variantClasses = {
        primary: `bg-editorial-ink text-white hover:bg-editorial-hover`,
        secondary: `bg-editorial-surface text-editorial-ink border border-editorial-border hover:bg-white`,
        success: `bg-emerald-600 text-white hover:bg-emerald-700`,
        warning: `bg-amber-600 text-white hover:bg-amber-700`,
        danger: `bg-rose-600 text-white hover:bg-rose-700`,
        info: `bg-sky-600 text-white hover:bg-sky-700`,
        light: `bg-editorial-surface text-editorial-ink hover:bg-editorial-surface/80`,
        dark: `bg-editorial-ink text-white hover:bg-editorial-hover`,
        link: `text-editorial-ink hover:underline underline-offset-4`,
        'no-color': '',
    }[variant || 'primary'];

    const iconClasses = cn(
        'min-w-9 aspect-square text-base p-0 inline-flex items-center justify-center rounded-full',
        variantClasses,
    );

    const buttonClasses = cn(
        `group h-11 px-6 inline-flex justify-center items-center gap-2 font-sans text-sm font-medium tracking-wide rounded-full outline-none transition-all relative overflow-hidden shadow-sm`,
        variantClasses,
        { [iconClasses]: icon },
        className,
    );

    if (as === 'link') {
        const props = rest as ComponentProps<typeof Link>;

        if (props.target === '_blank') {
            return (
                <a
                    className={buttonClasses}
                    {...props}
                    href={props.href.toString() || '#'}
                >
                    {variant !== 'link' && (
                        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                    )}
                    <span className="z-[1]">
                        {loading ? <Child icon={icon} /> : children}
                    </span>
                </a>
            );
        }

        return (
            <Link className={buttonClasses} {...props} href={props.href || '#'}>
                {variant !== 'link' && (
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                )}
                <span className="z-[1]">
                    {loading ? <Child icon={icon} /> : children}
                </span>
            </Link>
        );
    } else if (as === 'button') {
        const props = rest as ButtonProps;

        return (
            <button className={buttonClasses} {...props}>
                {variant !== 'link' && (
                    <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                )}
                <span className="z-[1]">
                    {loading ? <Child icon={icon} /> : children}
                </span>
            </button>
        );
    }
};

export default Button;
