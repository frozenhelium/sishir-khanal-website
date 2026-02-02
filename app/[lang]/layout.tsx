import { Metadata } from "next";
import { _cs } from "@togglecorp/fujs";
import { defaultFont, headingFont } from "@/utils/constants";
import { defaultLocale, localeByLang, supportedLanguages } from "@/utils/i18n";
import { defaultMetadata } from "@/utils/constants";

import "@/app/globals.css";

export const metadata: Metadata = defaultMetadata;

export const dynamicParams = false;

export function generateStaticParams() {
    return supportedLanguages.map((lang) => ({ lang }))
}

export default async function LangRootLayout(props: LayoutProps<'/[lang]'>) {
    const {
        children,
        params,
    } = props;

    const resolvedParams = await params;

    return (
        <html
            lang={localeByLang[resolvedParams.lang] ?? defaultLocale}
            className={_cs(
                defaultFont.variable,
                headingFont.variable
            )}
        >
            <body>
                {children}
            </body>
        </html>
    );
}
