'use client';

import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useCallback } from "react";

import styles from './styles.module.css';

interface Props {
    direction: 'left' | 'right';
    targetId: string;
    numElements: number;
}

function ScrollButton(props: Props) {
    const {
        direction,
        targetId,
        numElements
    } = props;

    const handleClick = useCallback(() => {
        const el = document.getElementById(targetId);
        if (!el) {
            return;
        }

        const scrollAmount = el.scrollWidth / numElements;
        const scrollOffset = direction === 'left'
            ? el.scrollLeft - scrollAmount
            : el.scrollLeft + scrollAmount;

        el.scroll({
            left: scrollOffset,
            behavior: 'smooth',
        });
    }, [targetId, direction, numElements]);

    return (
        <button
            className={styles.scrollButton}
            onClick={handleClick}
        >
            {direction === 'left' && <ArrowLeftIcon />}
            {direction === 'right' && <ArrowRightIcon />}
        </button>
    );
}

export default ScrollButton;
