import { GENERAL_INFO } from '@/lib/data';
import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const StickyEmail = () => {
    return (
        <div className="max-xl:hidden fixed bottom-32 left-0 block z-floating mix-blend-difference">
            <a
                href={GENERAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume (Google Drive)"
                className="px-3 text-white/80 font-sans text-xs tracking-[0.2em] transition-all hover:text-white inline-flex items-center gap-2"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                <span>RESUME</span>

                <FaFileAlt className="text-xs rotate-90" aria-hidden="true" />
            </a>
        </div>
    );
};

export default StickyEmail;
