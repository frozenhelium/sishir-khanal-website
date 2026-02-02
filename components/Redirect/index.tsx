'use client';

import { useEffect } from 'react';
import { Metadata } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { _cs } from '@togglecorp/fujs';
import { BellRingingIcon } from '@phosphor-icons/react/dist/ssr';

import { defaultFont, defaultMetadata, headingFont } from '@/utils/constants';
import "@/app/globals.css";

import styles from './styles.module.css';

export const metadata: Metadata = defaultMetadata;

export function Redirect() {
    const router = useRouter()
    const pathname = usePathname()

    const newPathname = `/en${pathname}`;

    useEffect(() => {
        router.replace(newPathname);
    }, [router, newPathname]);

    return (
        <html
            className={_cs(
                defaultFont.variable,
                headingFont.variable,
                styles.redirect,
            )}
        >
            <meta httpEquiv="refresh" content={`3; url=${newPathname}`} />
            <body className={styles.body}>
                <BellRingingIcon
                    className={styles.icon}
                    weight="duotone"
                />
                <div className={styles.message}>
                    Loading...
                </div>
            </body>
        </html>
    );
}

