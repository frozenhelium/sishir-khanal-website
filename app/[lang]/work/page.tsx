import { notFound } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import { getStrings, hasLocale } from "@/utils/i18n";
import Section from "@/components/Section";
import Navbar from "@/components/Navbar";
import siteVisit1 from '@/public/images/sishir-site-visit-1.jpg';
import siteVisit2 from '@/public/images/sishir-site-visit-2.jpg';
import siteVisit3 from '@/public/images/sishir-site-visit-3.jpg';
import parliament1 from '@/public/images/sishir-parliament-1.jpg';
import singleShot1 from '@/public/images/sishir-single-shot-1.jpg';

import styles from "./styles.module.css";
import { AirplaneTakeoffIcon, CalendarCheckIcon, CheckIcon, HandshakeIcon, MoneyIcon, PlayIcon, SecurityCameraIcon } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: 'Works & Impact | Shisir Khanal',
    description: 'Works done by Shisir Khanal as a member of Parliamet, as Minister of education and as MP of Kathmandu-6'
}

interface MethodologyProps {
    imageSrc: StaticImageData;
    imageAlt: string;
    title: React.ReactNode;
    description: React.ReactNode;
}
function Methodology(props: MethodologyProps) {
    const {
        title,
        imageSrc,
        imageAlt,
        description
    } = props;

    return (
        <div className={styles.methodology}>
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image}
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                />
            </div>
            <div className={styles.details}>
                <h4 className={styles.title}>
                    {title}
                </h4>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>
    );
}

async function Work({ params}: PageProps<'/[lang]'>) {
    const { lang } = await params

    if (!hasLocale(lang)) {
        notFound();
    }

    const strings = getStrings(lang);

    return (
        <main className={styles.work}>
            <Navbar lang={lang} />
            <div className={styles.cover}>
                <div className={styles.background}>
                    <Image
                        className={styles.coverImage}
                        src={singleShot1}
                        alt="Shisir Khanal"
                        fill
                    />
                </div>
                <Section className={styles.mainHeader}>
                    <div className={styles.headerContent}>
                        <h1 className={styles.pageTitle}>
                            Work & Impact
                        </h1>
                        <div className={styles.pageDescription}>
                            As MP for Kathmandu-6, my approach is simple: study the issue, speak with evidence, work for results.
                        </div>
                    </div>
                </Section>
            </div>
                        <Section heading={strings.work.howIWorkTitle}>
                <div className={styles.methodologies}>
                    <Methodology
                        imageSrc={siteVisit1}
                        imageAlt={strings.home.fullName}
                        title={strings.work.transparencyTitle}
                        description={strings.work.transparencyDescription}
                    />
                    <Methodology
                        imageSrc={siteVisit2}
                        imageAlt={strings.home.fullName}
                        title={strings.work.communityToParliamentTitle}
                        description={strings.work.communityToParliamentDescription}
                    />
                    <Methodology
                        imageSrc={siteVisit3}
                        imageAlt={strings.home.fullName}
                        title={strings.work.researchBackedTitle}
                        description={strings.work.researchBackedDescription}
                    />
                    <Methodology
                        imageSrc={parliament1}
                        imageAlt={strings.home.fullName}
                        title={strings.work.coalitionBuildingTitle}
                        description={strings.work.coalitionBuildingDescription}
                    />
                </div>
            </Section>
            <Section className={styles.factSection}>
                <div className={styles.content}>
                    <div className={styles.question}>
                        {strings.work.whatMpDoesTitle}
                    </div>
                    <div>
                        {strings.work.whatMpDoesDescription}
                    </div>
                </div>
            </Section>
            <Section heading={strings.work.parliamentWorkTitle}>
                <div className={styles.subSection}>
                    <div className={styles.header}>
                        <h3 className={styles.heading}>
                            {strings.work.zeroHourTitle}
                        </h3>
                        <div>
                            {strings.work.zeroHourSummary}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.issueContainer}>
                            <h4>
                                {strings.work.ktm6IssuesTitle}
                            </h4>
                            <div className={styles.issues}>
                                <div>
                                    {strings.work.ktm6Issue1}
                                </div>
                                <div>
                                    {strings.work.ktm6Issue2}
                                </div>
                                <div>
                                    {strings.work.ktm6Issue3}
                                </div>
                                <div>
                                    {strings.work.ktm6Issue4}
                                </div>
                                <div>
                                    {strings.work.ktm6Issue5}
                                </div>
                            </div>
                        </div>
                        <div className={styles.issueContainer}>
                            <h4>
                                {strings.work.nationalIssuesTitle}
                            </h4>
                            <div className={styles.issues}>
                                <div>
                                    {strings.work.nationalIssue1}
                                </div>
                                <div>
                                    {strings.work.nationalIssue2}
                                </div>
                                <div>
                                    {strings.work.nationalIssue3}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.header}>
                        <h3 className={styles.heading}>
                            {strings.work.committeeWorkTitle}
                        </h3>
                        <div>
                            {strings.work.committeeWorkDescription}
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.workContainer}>
                            <div className={styles.work}>
                                <h4>
                                    {strings.work.committee1Title}
                                </h4>
                                <div>
                                    {strings.work.committee1Description}
                                </div>
                            </div>
                            <div className={styles.work}>
                                <h4>
                                    {strings.work.committee2Title}
                                </h4>
                                <div>
                                    {strings.work.committee2Description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.header}>
                        <h3 className={styles.heading}>
                            {strings.work.legislativeWorkTitle}
                        </h3>
                    </div>
                    <div className={styles.content}>
                        <div>
                            {strings.work.legislativeWorkDescription1}
                        </div>
                        <div>
                            {strings.work.legislativeWorkDescription2}
                        </div>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.header}>
                        <h3 className={styles.heading}>
                            {strings.work.resolutionProposalsTitle}
                        </h3>
                    </div>
                    <div className={styles.content}>
                        <div>
                            {strings.work.resolutionProposalsDescription}
                        </div>
                        <div>
                            {strings.work.resolutionExample}
                        </div>
                    </div>
                </div>
            </Section>
            <Section className={styles.factSection}>
                <div className={styles.content}>
                    {strings.work.parliamentToolForChange}
                </div>
            </Section>
            <Section
                heading={strings.work.resultsTitle}
                className={styles.resultSection}
            >
                <div className={styles.results}>
                    <div className={styles.result}>
                        {strings.work.result1}
                    </div>
                    <div className={styles.result}>
                        {strings.work.result2}
                    </div>
                    <div className={styles.result}>
                        {strings.work.result3}
                    </div>
                    <div className={styles.result}>
                        {strings.work.result4}
                    </div>
                    <div className={styles.result}>
                        {strings.work.result5}
                    </div>
                </div>
            </Section>
            <Section
                heading={strings.work.asMinisterSectionTitle}
                withDarkBackground
            >
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        {strings.work.ministerHeroTitle}
                    </h3>
                    <div className={styles.content}>
                        {strings.work.ministerHeroDescription}
                    </div>
                </div>
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        {strings.work.ministerWhatWasDoneTitle}
                    </h3>
                    <div className={styles.content}>
                        <div className={styles.actionList}>
                            <div className={styles.action}>
                                <h4 className={styles.actionHeading}>
                                    {strings.work.ministerAction1Title}
                                </h4>
                                <div className={styles.actionContent}>
                                    {strings.work.ministerAction1P1}
                                    {strings.work.ministerAction1P2}
                                    <strong>
                                        {strings.work.ministerAction1RequirementsTitle}
                                    </strong>
                                    <div className={styles.requiredActionList}>
                                        <div className={styles.requiredAction}>
                                            <HandshakeIcon />
                                            {strings.work.ministerAction1Requirement1}
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <AirplaneTakeoffIcon />
                                            {strings.work.ministerAction1Requirement2}
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <MoneyIcon />
                                            {strings.work.ministerAction1Requirement3}
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <SecurityCameraIcon />
                                            {strings.work.ministerAction1Requirement4}
                                        </div>
                                    </div>
                                    <div>
                                        {strings.work.ministerAction1P3}
                                    </div>
                                    <div>
                                        {strings.work.ministerAction1P4}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.action}>
                                <h4 className={styles.actionHeading}>
                                    {strings.work.ministerAction2Title}
                                </h4>
                                <div className={styles.actionContent}>
                                    {strings.work.ministerAction2P1}
                                    {strings.work.ministerAction2P2}
                                    <strong>
                                        {strings.work.ministerAction2HowTitle}
                                    </strong>
                                    <div>
                                        {strings.work.ministerAction2P3}
                                    </div>
                                    <div className={styles.requiredActionList}>
                                        <div className={styles.requiredAction}>
                                            <div className={styles.time}>
                                                <CalendarCheckIcon />
                                                <div>{strings.work.ministerWeek1}</div>
                                            </div>
                                            <div>
                                                {strings.work.ministerWeek1Description}
                                            </div>
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <div className={styles.time}>
                                                <CalendarCheckIcon />
                                                <div>{strings.work.ministerWeek2}</div>
                                            </div>
                                            <div>
                                                {strings.work.ministerWeek2Description}
                                            </div>
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <div className={styles.time}>
                                                <CalendarCheckIcon />
                                                <div>{strings.work.ministerWeek3}</div>
                                            </div>
                                            <div>
                                                <strong>{strings.work.ministerWeek3GoalsTitle}</strong><br />
                                                {strings.work.ministerWeek3Goal1} <br />
                                                {strings.work.ministerWeek3Goal2}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {strings.work.ministerAction2P4}
                                    </div>
                                    <div>
                                        {strings.work.ministerAction2P5}
                                    </div>
                                    <div>
                                        {strings.work.ministerAction2P6}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        {strings.work.whyThisMattersTitle}
                    </h3>
                    <div className={styles.content}>
                        <div>
                            {strings.work.whyThisMattersIntro}
                        </div>
                        <ul>
                            <li>
                                {strings.work.whyThisMattersPoint1}
                            </li>
                            <li>
                                {strings.work.whyThisMattersPoint2}
                            </li>
                            <li>
                                {strings.work.whyThisMattersPoint3}
                            </li>
                            <li>
                                {strings.work.whyThisMattersPoint4}
                            </li>
                        </ul>
                        <div>
                            {strings.work.whyThisMattersP1}
                        </div>
                        <div>
                            <div>
                                <strong>
                                    {strings.work.whyThisMattersTextbookLate}
                                </strong>
                                {': '}
                                {strings.work.whyThisMattersTextbookLateFix}
                            </div>
                            <div>
                                <strong>
                                    {strings.work.whyThisMattersNocSlow}
                                </strong>
                                {': '}
                                {strings.work.whyThisMattersNocFix}
                            </div>
                        </div>
                        <div>
                            {strings.work.whyThisMattersP2}
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        {strings.work.whatILearnedTitle}
                    </h3>
                    <div className={styles.content}>
                        <div>
                            {strings.work.whatILearnedP1}
                        </div>
                        <div>
                            {strings.work.whatILearnedP2}
                        </div>
                        <div>
                            {strings.work.whatILearnedP3}
                        </div>
                    </div>
                </div>
            </Section>
            <Section heading={strings.work.workForKtm6SectionTitle}>
                <div className={styles.ktmWork}>
                    <div className={styles.header}>
                        {strings.work.ktmWorkHeaderYear}<br />
                        <strong>
                            {strings.work.ktmWorkHeaderTitle}
                        </strong>
                    </div>
                    <div className={styles.works}>
                        <div className={styles.descriptionSection}>
                            <h3 className={styles.heading}>
                                {strings.work.voicesRaisedTitle}
                            </h3>
                            <div className={styles.content}>
                                <div>
                                    {strings.work.voicesRaisedP1}
                                </div>
                                <div>
                                    {strings.work.voicesRaisedP2}
                                </div>
                                <div>
                                    {strings.work.voicesRaisedP3}
                                </div>
                                <div>
                                    {strings.work.voicesRaisedP4}
                                </div>
                                <div>
                                    {strings.work.voicesRaisedP5}
                                </div>
                                <div>
                                    {strings.work.voicesRaisedP6}
                                </div>
                            </div>
                        </div>
                        <div className={styles.descriptionSection}>
                            <h3 className={styles.heading}>
                                {strings.work.resourcesMobilizedTitle}
                            </h3>
                            <div className={styles.content}>
                                <div>
                                    {strings.work.resourcesMobilizedP1}
                                </div>
                                <div>
                                    {strings.work.resourcesMobilizedP2}
                                </div>
                            </div>
                        </div>
                        <div className={styles.descriptionSection}>
                            <h3 className={styles.heading}>
                                {strings.work.communityWorkTitle}
                            </h3>
                            <div className={styles.content}>
                                <div>
                                    {strings.work.communityWorkP1}
                                </div>
                                <div>
                                    {strings.work.communityWorkP2}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ktmWork}>
                    <div className={styles.header}>
                        <strong>
                            {strings.work.whatsNextTitle}
                        </strong>
                    </div>
                    <div className={styles.plans}>
                        <div className={styles.plan}>
                            <CheckIcon />
                            {strings.work.whatsNextPoint1}
                        </div>
                        <div className={styles.plan}>
                            <PlayIcon />
                            {strings.work.whatsNextPoint2}
                        </div>
                        <div className={styles.plan}>
                            <HandshakeIcon />
                            {strings.work.whatsNextPoint3}
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default Work;
