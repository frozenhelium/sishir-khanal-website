import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { getStrings, hasLocale } from "@/utils/i18n";
import parliament2 from '@/public/images/sishir-parliament-2.jpg';

import styles from "./styles.module.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'About | Shisir Khanal',
    description: 'Brief introduction & biography of Shisir Khanal'
}

async function About({ params }: PageProps<'/[lang]'>) {
    const { lang } = await params

    if (!hasLocale(lang)) {
        notFound();
    }

    const strings = getStrings(lang);

    return (
        <main className={styles.about}>
            <Navbar lang={lang} />
            <div className={styles.cover}>
                <div className={styles.background}>
                    <Image
                        className={styles.coverImage}
                        src={parliament2}
                        alt="Picture of Shisir Khanal"
                        fill
                        priority
                    />
                </div>
                <Section className={styles.quoteSection}>
                    <div className={styles.quote}>
                        {strings.about.bioP6}
                    </div>
                </Section>
            </div>
            <Section heading={strings.about.bioSectionTitle}>
                <p>
                    {strings.about.bioP1}
                </p>
                <p>
                    {strings.about.bioP2}
                </p>
                <p>
                    {strings.about.bioP3}
                </p>
                <p>
                    {strings.about.bioP4}
                </p>
                <p>
                    {strings.about.bioP5}
                </p>
            </Section>
        </main>
    );
}

export default About;
