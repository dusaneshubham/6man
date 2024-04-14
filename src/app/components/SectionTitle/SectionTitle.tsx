import React, { ReactNode, isValidElement } from 'react'
import styles from './SectionTitle.module.css';

type SectionTitleType = {
    heading?: ReactNode | string;
    subHeading?: ReactNode | string;
    className?: string;
}

const SectionTitle = ({ heading = '', subHeading = '', className = '' }: SectionTitleType) => {
    return (
        <div className={`${styles.sectionTitleWrapper} ${className}`}>
            {isValidElement(heading) ? heading : <h2 className={styles.heading}>{heading}</h2>}
            {isValidElement(subHeading) ? subHeading : <p className={styles.subHeading}>{subHeading}</p>}
        </div>
    )
}

export default SectionTitle