import { Metadata } from "next";
import { Teko,  Google_Sans } from "next/font/google";

export const defaultFont = Google_Sans({
    variable: '--font-default',
    weight: ["400", "700"],
    subsets: ["latin", "devanagari"],
});

export const headingFont = Teko({
    variable: '--font-heading',
    weight: ["400", "700"],
    subsets: ["latin", "devanagari"],
});

export const defaultMetadata = {
    title: "Shisir Khanal",
    description: "A former member of Parliament",
} satisfies Metadata;

