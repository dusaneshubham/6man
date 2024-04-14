import React, { ReactNode } from 'react'
import styles from './ServiceCard.module.css'

type ServiceCardType = {
    img?: ReactNode | string;
    title?: ReactNode | string;
    description?: ReactNode | string;
    className?: string;
    key?: Number;
}

const ServiceCard = ({ img = "", title = "", description = "", className = "", key = 0 }: ServiceCardType) => {
    return (
        <>
            <div className={`${styles.card} ${className}`} id={"card" + key}>
                <article>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.pic}>
                        {typeof img == "string" ? <img src={img} alt="service logo" width="10" /> : <>{img}</>}
                    </div>
                    <div className={styles.desc}>
                        {description}
                    </div>
                </article>
            </div>
        </>
    )
}

export default ServiceCard