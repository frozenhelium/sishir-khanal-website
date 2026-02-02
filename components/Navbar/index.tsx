'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { _cs, isTruthyString } from "@togglecorp/fujs";

import { Lang } from "@/utils/i18n";

import styles from "./styles.module.css";

interface Props {
    lang: Lang;
}

function Navbar(props: Props) {
    const { lang } = props;
    const pathname = usePathname();

    const pages = [
        { path: "", label: "Home" },
        { path: "about", label: "About" },
        { path: "work", label: "Work & Impact" },
        // { path: "ktm-6", label: "KTM-6" },
        // { path: "news", label: "News" },
        // { path: "contact", label: "Contact" },
    ];

    return (
        <nav className={styles.navbar}>
            {pages.map((page) => {
                const pagePath = isTruthyString(page.path)
                    ? `/${lang}/${page.path}/`
                    : `/${lang}/`;

                return (
                    <Link
                        key={page.path}
                        className={_cs(
                            styles.navLink,
                            pathname === pagePath && styles.active
                        )}
                        href={pagePath}
                    >
                        {page.label}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Navbar;
