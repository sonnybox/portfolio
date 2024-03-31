import ProjectItem from './project-item';
import { useEffect, useState, useCallback } from 'react';
import { Item, TechStack } from '@/lib/interface';

export default function ProjectContainer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [handleMouseMove]);

    const techMap: Record<string, TechStack> = {
        'Next.js': {
            name: 'Next.js',
            icon: '󰛦',
            bgcolor: 'bg-black',
            fgcolor: 'text-yellow-400',
        },
        'Tailwind CSS': {
            name: 'Tailwind CSS',
            icon: '󱏿',
            bgcolor: 'bg-blue-700',
            fgcolor: 'text-white',
        },
        MariaDB: {
            name: 'MariaDB',
            icon: '',
            bgcolor: 'bg-pink-200',
            fgcolor: 'text-black',
        },
        Bun: {
            name: 'Bun',
            icon: '󱌚',
            bgcolor: 'bg-yellow-100',
            fgcolor: 'text-black',
        },
        NA: {
            name: 'n/a',
            icon: '',
            bgcolor: 'bg-gray-700',
            fgcolor: 'text-white',
        },
    };

    function getTechStacks(techNames: string[]): TechStack[] {
        return techNames
            .map((name) => techMap[name])
            .filter((tech): tech is TechStack => tech !== undefined);
    }

    const items: Item[] = [
        {
            icon: '󰩃',
            name: 'TrendyTails Admin',
            description:
                'A CS 340 project by Sonny Box and Sean Long. The project is a web application that allows users to view and manage data for a pet store.',
            techStack: getTechStacks(['Next.js', 'Tailwind CSS', 'MariaDB']),
            link: 'https://trendytails.sonnybox.com',
            image: '/img/trendytails.png',
        },
        {
            icon: '󰇧',
            name: 'This Portfolio',
            description:
                'A personal portfolio website meant to showcase my projects and design language.',
            techStack: getTechStacks(['Next.js', 'Tailwind CSS', 'Bun']),
            link: '#',
            image: '/img/portfolio.png',
        },
        {
            icon: '',
            name: 'My GitHub',
            description:
                'Feel free to check out my GitHub for smaller projects and contributions.',
            techStack: getTechStacks(['NA']),
            link: 'https://github.com/sonnybox',
            image: '/img/github.png',
        },
    ];

    return (
        <>
            <div className='flex flex-row flex-wrap max-w-[90vw] justify-center gap-4 p-4 mt-4 border border-white rounded-3xl group'>
                {items.map((item, index) => (
                    <ProjectItem
                        key={index}
                        mousePosition={mousePosition}
                        item={item}
                    />
                ))}
            </div>
            <div className='mt-2 text-sm'>
                <span className='text-yellow-400'>󰛨</span> tip: hover to get
                more information
            </div>
        </>
    );
}
