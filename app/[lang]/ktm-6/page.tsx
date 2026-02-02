import { notFound } from "next/navigation";

import { getStrings, hasLocale } from "@/utils/i18n";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

import styles from "./styles.module.css";

async function Ktm6({ params}: PageProps<'/[lang]'>) {
    const { lang } = await params

    if (!hasLocale(lang)) {
        notFound();
    }

    const strings = getStrings(lang);

    return (
        <main className={styles.ktm6}>
            <Navbar lang={lang} />
            <Section heading="Work for Kathmandu-6">
                2079-2082: What Was Done

                Voices Raised in Parliament
                15+ times your issues were raised in Zero Hour and written questions.
                Water: Dharmasthali, Phutung, Manmaiju, Nepal Taar, Samakhusi, Gongabu—demanded solutions for areas Melamchi doesn't reach
                Roads: Chakrapath expansion, Nepal Taar-Dadagaun, Sangla Bihani, Thamel-Gongabu—raised repeatedly, filed joint resolution
                Public Land: Tarkeshwar 9 encroachment, Judicial Academy area issues
                Other: Gongabu bus park vandalism, Bagmati construction zone concerns
                Problems documented. Government questioned. Solutions demanded.
            </Section>
        </main>
    );
}

export default Ktm6;
