import { GENERAL_INFO } from '@/lib/data';
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block">
            <a
                href={GENERAL_INFO.resume}
                className="px-3 text-muted-foreground tracking-[1px] transition-all hover:text-foreground inline-flex items-center gap-2"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                <span>RESUME</span>

                <FaFileAlt className="text-base rotate-90" />
            </a>
        </div>
    );
};

export default StickyEmail;
