import { _cs } from "@togglecorp/fujs";

import styles from "./styles.module.css";

interface Props {
    className?: string;
    heading?: React.ReactNode;
    children: React.ReactNode;
    withDarkBackground?: boolean;
}

function Section(props: Props) {
    const {
        className,
        heading,
        children,
        withDarkBackground,
    } = props;

    return (
        <section
            className={_cs(
                styles.section,
                !heading && styles.withoutHeading,
                withDarkBackground && styles.withDarkBackground,
                className
            )}
        >
            {heading && (
                <h2 className={styles.heading}>
                    {heading}
                </h2>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}

export default Section;
