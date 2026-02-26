import { notFound } from "next/navigation";
import { getStrings, hasLocale } from "@/utils/i18n";

import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

import styles from "./styles.module.css";
import {
    BellSimpleRingingIcon,
    DetectiveIcon,
    DropIcon,
    EyesIcon,
    HeartbeatIcon,
    PersonSimpleRunIcon,
    PhoneIncomingIcon,
    RoadHorizonIcon,
    TrafficSignalIcon,
    UsersFourIcon,
    WarehouseIcon
} from "@phosphor-icons/react/dist/ssr";
import ButtonLikeLink from "@/components/ButtonLikeLink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Share concern | Shisir Khanal',
    description: 'Share you concern and let the team know about it.'
}

interface ReportOptionProps {
    title: React.ReactNode;
    icon: React.ReactNode;
}

function ReportOption(props: ReportOptionProps) {
    const {
        icon,
        title,
    } = props;

    return (
        <div className={styles.reportOption}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
}

interface ReportActionProps {
    title: React.ReactNode;
    icon: React.ReactNode;
}

function ReportAction(props: ReportActionProps) {
    const {
        icon,
        title,
    } = props;

    return (
        <div className={styles.reportAction}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
}

export default async function Report({ params }: PageProps<'/[lang]'>) {
    const { lang } = await params

    if (!hasLocale(lang)) {
        notFound();
    }

    const strings = getStrings(lang);

    return (
        <main className={styles.report}>
            <Navbar lang={lang} />
            <div className={styles.cover}>
                <Section
                    className={styles.pageTitleSection}
                    withDarkBackground
                >
                    <div>
                        <h1 className={styles.pageTitle}>
                            {strings.report.pageTitle}
                        </h1>
                        <div>
                            {strings.report.tagline}
                        </div>
                    </div>
                </Section>
            </div>
            <Section>
                {strings.report.reportDescription}
            </Section>
            <Section heading={strings.report.reportOptionsTitle}>
                <div className={styles.reportGridOptions}>
                    <ReportOption
                        title={strings.report.reportOption1}
                        icon={<DropIcon />}
                    />
                    <ReportOption
                        title={strings.report.reportOption2}
                        icon={<RoadHorizonIcon />}
                    />
                    <ReportOption
                        title={strings.report.reportOption3}
                        icon={<WarehouseIcon />}
                    />
                    <ReportOption
                        title={strings.report.reportOption4}
                        icon={<HeartbeatIcon />}
                    />
                    <ReportOption
                        title={strings.report.reportOption5}
                        icon={<TrafficSignalIcon />}
                    />
                    <ReportOption
                        title={strings.report.reportOption6}
                        icon={<UsersFourIcon />}
                    />
                </div>
            </Section>
            <Section heading={strings.report.postReportActionTitle}>
                <div className={styles.postReportAction}>
                    <div className={styles.illustration}>
                        <BellSimpleRingingIcon weight="duotone"/>
                    </div>
                    <div className={styles.actions}>
                        <ReportAction
                            title={strings.report.postReportAction1}
                            icon={<EyesIcon weight="duotone" />}
                        />
                        <ReportAction
                            title={strings.report.postReportAction2}
                            icon={<PersonSimpleRunIcon />}
                        />
                        <ReportAction
                            title={strings.report.postReportAction3}
                            icon={<PhoneIncomingIcon />}
                        />
                        <ReportAction
                            title={strings.report.postReportAction4}
                            icon={<DetectiveIcon />}
                        />
                    </div>
                </div>
            </Section>
            <Section withDarkBackground>
                <div>
                    {strings.report.fillFormPrompt}
                </div>
                <ButtonLikeLink
                    href="https://forms.gle/cCEhAGGRBioon6SVA"
                >
                    Open form
                </ButtonLikeLink>
            </Section>
        </main>
    )
}
