'use client';

import Link from "next/link";
import { _cs } from "@togglecorp/fujs";

import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

import styles from "./styles.module.css";

interface Props {
    href: string;
    children?: React.ReactNode;
    className?: string;
}

function ButtonLikeLink(props: Props) {
    const {
        href,
        children,
        className,
    } = props;

    return (
        <Link
            className={_cs(styles.buttonLikeLink, className)}
            href={href}
        >
            {children}
            <ArrowRightIcon />
        </Link>
    );
}

export default ButtonLikeLink;
