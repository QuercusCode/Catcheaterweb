'use client';

import { useState, MouseEvent } from 'react';
import styles from './AnimatedOrderButton.module.css';

interface AnimatedOrderButtonProps {
    onClick?: () => void;
    // You can extend this with text props, disabled state, etc.
}

export default function AnimatedOrderButton({ onClick }: AnimatedOrderButtonProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (!isAnimating) {
            setIsAnimating(true);

            // Reset animation after 10s (match CSS)
            setTimeout(() => {
                setIsAnimating(false);
                // Execute parent Logic (open modal) after animation
                if (onClick) onClick();
            }, 10000);
        }
    };

    return (
        <button
            className={`${styles.order} ${isAnimating ? styles.animate : ''}`}
            onClick={handleClick}
        >
            <span className={styles.default}>Join Waitlist</span>
            <span className={styles.success}>
                Request Sent
                <svg viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>
            <div className={styles.box}></div>
            <div className={styles.truck}>
                <div className={styles.back}></div>
                <div className={styles.front}>
                    <div className={styles.window}></div>
                </div>
                <div className={`${styles.light} ${styles.top}`}></div>
                <div className={`${styles.light} ${styles.bottom}`}></div>
            </div>
            <div className={styles.lines}></div>
        </button>
    );
}
