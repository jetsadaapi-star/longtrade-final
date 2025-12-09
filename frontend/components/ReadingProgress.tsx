'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            setProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-600 to-orange-500 z-[100] transition-all duration-150 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            style={{ width: `${progress}%` }}
        />
    );
}
