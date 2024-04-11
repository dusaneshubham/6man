import React, { ReactNode } from 'react'
import styles from './SectionTitle.module.css';

type SectionTitleType = {
    heading?: string;
    subHeading?: ReactNode | string;
}

const SectionTitle = ({ heading = '', subHeading = '' }: SectionTitleType) => {
    return (
        <div className={styles.sectionTitleWrapper}>
            <h2 className={styles.heading}>{heading}</h2>
            {typeof heading === 'string' ? <p className={styles.subHeading}>{subHeading}</p> : <>{subHeading}</>}
            
        </div>
    )
}

export default SectionTitle