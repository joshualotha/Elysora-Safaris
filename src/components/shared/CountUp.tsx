'use client';

import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function CountUp({ end, duration = 2000, suffix = '', className = '' }: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = performance.now();
        const startValue = 0;

        const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOut);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
}
