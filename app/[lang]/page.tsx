import Image from "next/image";
import { notFound } from "next/navigation";
import { randomString } from "@togglecorp/fujs";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import { getStrings, hasLocale } from "@/utils/i18n";
import ButtonLikeLink from "@/components/ButtonLikeLink";
import ScrollButton from "@/components/ScrollButton";
import coverImage from '@/public/images/shishir-khanal-parliament-house.jpg';
import siteVisit1 from '@/public/images/sishir-site-visit-1.jpg';
import siteVisit2 from '@/public/images/sishir-site-visit-2.jpg';
import siteVisit3 from '@/public/images/sishir-site-visit-3.jpg';
import siteVisit4 from '@/public/images/sishir-site-visit-4.jpg';
import parliament1 from '@/public/images/sishir-parliament-1.jpg';

import styles from "./styles.module.css";

const additionalImages = [
    siteVisit1,
    siteVisit2,
    parliament1,
    siteVisit3,
    siteVisit4,
];

interface HighlightProps {
    title: React.ReactNode;
    children: React.ReactNode;
}

function Highlight(props: HighlightProps) {
    const {
        title,
        children,
    } = props;

    return (
        <div className={styles.highlight}>
            <h3 className={styles.heading}>
                {title}
            </h3>
            <ul className={styles.list}>
                {children}
            </ul>
        </div>
    );
}

interface HighlightItemProps {
    title: React.ReactNode;
    description: React.ReactNode;
}

function HighlightItem(props: HighlightItemProps) {
    const {
        title,
        description,
    } = props;

    return (
        <li className={styles.highlightItem}>
            <strong className={styles.title}>
                {title}
            </strong>
            <div className={styles.description}>
                {description}
            </div>
        </li>
    );
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
    const { lang } = await params
    const imageListId = randomString();

    if (!hasLocale(lang)) {
        notFound();
    }

    const strings = getStrings(lang);

    return (
        <main className={styles.page}>
            <Navbar lang={lang} />
            <div className={styles.introSection}>
                <div className={styles.background}>
                    <Image
                        className={styles.coverImage}
                        src={coverImage}
                        alt="Picture of Shisir Khanal"
                        fill
                        priority
                    />
                </div>
                <Section>
                    <div className={styles.intro}>
                        <div className={styles.greeting}>
                            {strings.home.greeting}
                        </div>
                        <h1 className={styles.brandName}>
                            {strings.home.fullName}
                        </h1>
                        <div className={styles.designation}>
                            {strings.home.designation}
                        </div>
                    </div>
                    <ButtonLikeLink
                        className={styles.reportLink}
                        href="report"
                    >
                        Share your concern
                    </ButtonLikeLink>
                </Section>
            </div>
            <Section
                className={styles.additionalImages}
                withDarkBackground
            >
                <div className={styles.briefIntro}>
                    {strings.home.intro}
                </div>
                <div
                    id={imageListId}
                    className={styles.imageList}
                >
                    {additionalImages.map((image, i) => (
                        <div
                            key={i}
                            className={styles.imageWrapper}
                        >
                            <Image
                                className={styles.image}
                                src={image}
                                alt={`Shisir in action Image - ${i+1}`}
                                fill
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.actions}>
                    <ScrollButton 
                        direction="left"
                        targetId={imageListId}
                        numElements={additionalImages.length}
                    />
                    <div className={styles.scrollIndicators}>
                        <div className={styles.scrollIndicator} />
                        <div className={styles.scrollIndicator} />
                        <div className={styles.scrollIndicator} />
                    </div>
                    <ScrollButton 
                        direction="right"
                        targetId={imageListId}
                        numElements={additionalImages.length}
                    />
                </div>
            </Section>
            <Section
                className={styles.highlightsSection}
                heading={strings.home.highlightsSectionTitle}
            >
                <div className={styles.highlights}>
                    <Highlight
                        title={strings.home.inParliamentTitle}
                    >
                        <HighlightItem
                            title={strings.home.parliamentHighlight1Title}
                            description={strings.home.parliamentHighlight1Description}
                        />
                        <HighlightItem
                            title={strings.home.parliamentHighlight2Title}
                            description={strings.home.parliamentHighlight2Description}
                        />
                        <HighlightItem
                            title={strings.home.parliamentHighlight3Title}
                            description={strings.home.parliamentHighlight3Description}
                        />
                    </Highlight>
                    <Highlight
                        title={strings.home.asMinisterTitle}
                    >
                        <HighlightItem
                            title={strings.home.ministerHighlight1Title}
                            description={strings.home.ministerHighlight1Description}
                        />
                        <HighlightItem
                            title={strings.home.ministerHighlight2Title}
                            description={strings.home.ministerHighlight2Description}
                        />
                        <HighlightItem
                            title={strings.home.ministerHighlight3Title}
                            description={strings.home.ministerHighlight3Description}
                        />
                    </Highlight>
                    <Highlight
                        title={strings.home.ktmTitle}
                    >
                        <HighlightItem
                            title={strings.home.ktmHighlight1Title}
                            description={strings.home.ktmHighlight1Description}
                        />
                        <HighlightItem
                            title={strings.home.ktmHighlight2Title}
                            description={strings.home.ktmHighlight2Description}
                        />
                        <HighlightItem
                            title={strings.home.ktmHighlight3Title}
                            description={strings.home.ktmHighlight3Description}
                        />
                    </Highlight>
                </div>
            </Section>
        </main>
    );
}
