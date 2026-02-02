import { notFound } from "next/navigation";
import Image, { StaticImageData } from "next/image";

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
            <Section heading="My Approach in Parliament">
                <div className={styles.methodologies}>
                    <Methodology
                        imageSrc={siteVisit1}
                        imageAlt="Shisir in action"
                        title={strings.work.transparencyTitle}
                        description={strings.work.transparencyDescription}
                    />
                    <Methodology
                        imageSrc={siteVisit2}
                        imageAlt="Shisir in action"
                        title={strings.work.communityToParliamentTitle}
                        description={strings.work.communityToParliamentDescription}
                    />
                    <Methodology
                        imageSrc={siteVisit3}
                        imageAlt="Shisir in action"
                        title={strings.work.researchBackedTitle}
                        description={strings.work.researchBackedDescription}
                    />
                    <Methodology
                        imageSrc={parliament1}
                        imageAlt="Shisir in action"
                        title={strings.work.coalitionBuildingTitle}
                        description={strings.work.coalitionBuildingDescription}
                    />
                </div>
            </Section>
            <Section className={styles.factSection}>
                <div className={styles.content}>
                    <div className={styles.question}>
                        What a Member of Parliament Does?
                    </div>
                    <div>
                        A Member of Parliament represents constituents, holds the government accountable, and shapes legislation. This requires research, evidence, and the ability to work across party lines.
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
                    Parliament is a tool for change. Every question raised, every committee meeting, every coalition built serves one purpose: translate Kathmandu-6's voices into national action.
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
                heading="As Minister of Education"
                withDarkBackground
            >
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        19 Days. Two Fundamental Changes.
                    </h3>
                    <div className={styles.content}>
                        I served as Minister of Education, Science and Technology for 19 days. Short, yes. But enough to demonstrate what capable leadership with clear priorities can achieve.
                        This was not symbolic or ritualistic work. These were structural changes requiring coordination with bureaucracy, navigating supply chain bottlenecks, and solving problems that had persisted for years.
                    </div>
                </div>
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        What Was Done
                    </h3>
                    <div className={styles.content}>
                        <div className={styles.actionList}>
                            <div className={styles.action}>
                                <h4 className={styles.actionHeading}>
                                    1. For the First Time in Nepal’s history, Textbooks were supplied on time
                                </h4>
                                <div className={styles.actionContent}>
                                    For the first time, remote districts from Humla to Taplejug received textbooks before the academic year started.
                                    Humla, a Himalayan district that routinely received books months late—sometimes after annual exams—had textbooks delivered before Baisakh 1.
                                    <strong>
                                        What this required:
                                    </strong>
                                    <div className={styles.requiredActionList}>
                                        <div className={styles.requiredAction}>
                                            <HandshakeIcon />
                                            Coordination across Ministry, Curriculum Development Center, publishers, and transporters
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <AirplaneTakeoffIcon />
                                            Addressing supply chain issues specific to remote areas (air transport unreliability, road accessibility)
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <MoneyIcon />
                                            Budget release synchronization with local governments
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <SecurityCameraIcon />
                                            Real-time tracking of distribution
                                        </div>
                                    </div>
                                    <div>
                                        This wasn't about issuing directives. It was about understanding where the system was breaking and fixing those specific points.
                                    </div>
                                    <div>
                                        As a result of this, students in Humla's and other remote districts’ community schools had books on day one. A historic first. 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.action}>
                                <h4 className={styles.actionHeading}>
                                    2. NOC Process: 75 Days to 5 Days
                                </h4>
                                <div className={styles.actionContent}>
                                    Students seeking No Objection Certificates to study abroad were stuck in a 75-day bureaucratic maze. Multiple office visits. Unclear timelines. Uncertainty.
                                    We reduced this to under 5 days.
                                    <strong>
                                        How this was done:
                                    </strong>
                                    <div>
                                        We didn't start with software. We started with understanding the problem.
                                    </div>
                                    <div className={styles.requiredActionList}>
                                        <div className={styles.requiredAction}>
                                            <div className={styles.time}>
                                                <CalendarCheckIcon />
                                                <div>Week 1</div>
                                            </div>
                                            <div>
                                                We Interviewed students. Mapped their actual journey—from decision to study abroad to departure. Identified pain points in this journey.
                                            </div>
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <div className={styles.time}>
                                                <CalendarCheckIcon />
                                                <div>Week 2</div>
                                            </div>
                                            <div>
                                                Met with ministry officials. Presented data, not anecdotes. Showed them what students were experiencing on the ground. Aligned everyone around a citizen-centric approach.
                                            </div>
                                        </div>
                                        <div className={styles.requiredAction}>
                                            <div className={styles.time}>
                                                <CalendarCheckIcon />
                                                <div>Week 3</div>
                                            </div>
                                            <div>
                                                <strong>Established clear goals:</strong><br />
                                                Reduce in-person office visits from 100% to 40% <br />
                                                Reduce processing time to under 5 days for 80% of applicants
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        Replaced one-year planning cycles with two-week sprints. Established a team. Assigned clear tasks. Build accountability through simple tracking tools.
                                    </div>
                                    <div>
                                        The insight: Most public service failures aren't about bad software or inadequate budget. They're about broken processes and misaligned priorities. Fix those first.
                                    </div>
                                    <div>
                                        The result: First sprint completed. Goals on track. Students no longer traveling to Kathmandu for multiple office visits.
                                        (Implementation credit: Digital transformation work led with Kailash Badu)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        Why This Matters
                    </h3>
                    <div className={styles.content}>
                        <div>
                            These are examples of what's possible when you:
                        </div>
                        <ul>
                            <li>
                                Start with the citizen's experience, not the bureaucracy's convenience
                            </li>
                            <li>
                                Use data to understand problems, not assumptions
                            </li>
                            <li>
                                Coordinate across systems, not just issue orders
                            </li>
                            <li>
                                Prioritize high-impact, achievable changes
                            </li>
                        </ul>
                        <div>
                            Nepal's education system has hundreds of such problems. Low-hanging fruit that requires capable execution, not grand visions.
                        </div>
                        <div>
                            <div>
                                <strong>
                                    Textbooks delivered late.
                                </strong>
                                Fixed in 19 days.
                            </div>
                            <div>
                                <strong>
                                    NOC process taking 75 days.
                                </strong>
                                Reduced to 5 days.
                            </div>
                        </div>
                        <div>
                            There are dozens more like these. They don't require massive budgets. They require leadership that understands how systems work and how to make them work for people.
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionSection}>
                    <h3 className={styles.heading}>
                        What I Learned
                    </h3>
                    <div className={styles.content}>
                        <div>
                            Ministries are not stages for speeches. They are tools for change.
                        </div>
                        <div>
                            19 days proved that with clear priorities, coordination skills, and bias for action, real problems can be solved quickly.
                        </div>
                        <div>
                            The question is: do we want leaders who know how to do this work, or leaders who only know how to talk about it?
                        </div>
                    </div>
                </div>
            </Section>
            <Section heading="Work for Kathmandu-6">
                <div className={styles.ktmWork}>
                    <div className={styles.header}>
                        2079-2082:<br />
                        <strong>
                            What Was Done
                        </strong>
                    </div>
                    <div className={styles.works}>
                        <div className={styles.descriptionSection}>
                            <h3 className={styles.heading}>
                                Voices Raised in Parliament
                            </h3>
                            <div className={styles.content}>
                                <div>
                                    15+ times your issues were raised in Zero Hour and written questions.
                                </div>
                                <div>
                                    Water: Dharmasthali, Phutung, Manmaiju, Nepal Taar, Samakhusi, Gongabu—demanded solutions for areas Melamchi doesn't reach
                                </div>
                                <div>
                                    Roads: Chakrapath expansion, Nepal Taar-Dadagaun, Sangla Bihani, Thamel-Gongabu—raised repeatedly, filed joint resolution
                                </div>
                                <div>
                                    Public Land: Tarkeshwar 9 encroachment, Judicial Academy area issues
                                </div>
                                <div>
                                    Other: Gongabu bus park vandalism, Bagmati construction zone concerns
                                </div>
                                <div>
                                    Problems documented. Government questioned. Solutions demanded.
                                </div>
                            </div>
                        </div>
                        <div className={styles.descriptionSection}>
                            <h3 className={styles.heading}>
                                Resources Mobilized
                            </h3>
                            <div className={styles.content}>
                                <div>
                                    ₹100 crore+ directed to Kathmandu-6 infrastructure (2079-2082)
                                </div>
                                <div>
                                    Roads, water projects, public infrastructure—mobilized through constituency development programs and budget advocacy.
                                </div>
                            </div>
                        </div>
                        <div className={styles.descriptionSection}>
                            <h3 className={styles.heading}>
                                Community Work
                            </h3>
                            <div className={styles.content}>
                                <div>
                                    367+ days in the constituency. Ward-level hearings, project monitoring, school visits, grievance redressal.
                                </div>
                                <div>
                                    The issues raised in parliament came from listening to you.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.ktmWork}>
                    <div className={styles.header}>
                        <strong>
                            What's Next
                        </strong>
                    </div>
                    <div className={styles.plans}>
                        <div className={styles.plan}>
                            <CheckIcon />
                            The problems are known. The work has started. Evidence is there.
                        </div>
                        <div className={styles.plan}>
                            <PlayIcon />
                            Now this work needs to continue.
                        </div>
                        <div className={styles.plan}>
                            <HandshakeIcon />
                            Your support makes that possible.
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}

export default Work;
