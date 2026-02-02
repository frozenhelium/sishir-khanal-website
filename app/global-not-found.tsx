import { Metadata } from "next";
import { _cs } from "@togglecorp/fujs";
import { BellSlashIcon } from "@phosphor-icons/react/dist/ssr";

import { defaultFont, defaultMetadata, headingFont } from "@/utils/constants";

import "@/app/globals.css";
import styles from "./global-not-found.module.css"

export const metadata: Metadata = defaultMetadata;

export default async function GlobalNotFound() {

    return (
        <html
            className={_cs(
                defaultFont.variable,
                headingFont.variable,
                styles.globalNotFound,
            )}
        >
            <body className={styles.body}>
                <BellSlashIcon
                    className={styles.icon}
                    weight="duotone"
                />
                <h1>404: Not Found</h1>
                <div>The page you are looking for does not exist.</div>
            </body>
        </html>
    );
}
