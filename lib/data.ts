import {
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiOpenjdk,
    SiPython,
    SiHtml5,
    SiCss,
    SiSass,
    SiBootstrap,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiAndroidstudio,
    SiFlutter,
    SiPostman,
    SiGithub,
    SiLinux,
} from 'react-icons/si';

import { FaReact } from 'react-icons/fa';

import { IProject } from '@/types';

export interface ITechStack {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

export const GENERAL_INFO = {
    email: 'rohan.shikhare.work@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Rohan, I am reaching out to you because...',
    location: 'India',
    resume: 'https://drive.google.com/file/d/1FQZxo5SG6RJXLF4oyn_25KsJ5dpUykQK/view?usp=drive_link',
};

export const MY_STACK: ITechStack[] = [
    { name: 'Java', icon: SiOpenjdk, color: '#007396' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'HTML', icon: SiHtml5, color: '#E34C26' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Angular', icon: SiAngular, color: '#DD0031' },
    { name: 'CSS', icon: SiCss, color: '#1572B6' },
    { name: 'SCSS', icon: SiSass, color: '#C69' },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#13AA52' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84' },
    { name: 'React Native', icon: FaReact, color: '#61DAFB' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    { name: 'Linux', icon: SiLinux, color: '#FCC624' },
];

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/RohanShikhare' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rohan-shikhare' },
];

export const PROJECTS: IProject[] = [
    {
        title: 'ISPL-T10',
        slug: 'ispl-t10',
        liveUrl: 'https://ispl-t10.com/',
        year: 2024,
        description: `
    Official website developed for ISPL-T10, a popular Indian cricket league featuring multiple state teams along with participation from well-known actors, celebrities, and professional cricketers. <br/><br/>

    <span class="font-italiana font-semibold">Key Features:</span><br/>
    <ul>
        <li>🏏 Dynamic League Platform: Showcased teams, players, fixtures, and league information</li>
        <li>🎬 Celebrity & Cricket Integration: Highlighted participation of actors and cricket personalities</li>
        <li>📱 Fully Responsive UI: Optimized experience across desktop, tablet, and mobile devices</li>
        <li>⚡ Smooth User Experience: Interactive sliders, transitions, and modern UI interactions</li>
        <li>🔥 Performance-Focused Frontend: Fast loading and optimized React-based architecture</li>
    </ul><br/>

    <span class="font-italiana font-semibold">Technical Highlights:</span>
    <ul>
        <li>Built responsive frontend architecture using React.js</li>
        <li>Implemented interactive carousels and media sections using React Slick</li>
        <li>Integrated dynamic routing and navigation with React Router</li>
        <li>Developed reusable UI components for scalability and consistency</li>
        <li>Optimized user interactions and frontend performance for high-traffic event usage</li>
    </ul>
    `,
        role: `
    Frontend Developer <br/>
    Responsible for complete frontend UI development:
    <ul>
        <li>🎨 Developed the entire frontend interface using React.js</li>
        <li>📱 Built fully responsive layouts for all screen sizes</li>
        <li>⚡ Implemented interactive sliders, animations, and smooth transitions</li>
        <li>🧩 Created reusable and scalable UI components</li>
        <li>🛣️ Managed client-side routing and page structure</li>
        <li>🚀 Optimized frontend performance and user experience</li>
    </ul>
    `,
        techStack: [
            'React.js',
            'React Router',
            'Redux',
            'React Slick',
            'Slick Carousel',
            'React Helmet',
            'React Toastify',
            'CSS3',
        ],
        thumbnail: '/projects/thumbnail/ispl.webp',
        longThumbnail: '/projects/long/ispl.webp',
        images: [
            '/projects/images/ispl-1.webp',
            '/projects/images/ispl-2.webp',
        ],
    },
];
