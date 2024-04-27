import React, { ReactNode } from 'react'
import styles from './ServiceCard.module.css'
import Image from 'next/image';

const ServiceCard = ({ img, title = "", description = "", className = "", keys = 0 }: any) => {
    return (
        <div className="swiper-slide">
            <div className={`${styles.card} ${className}`} id={"card" + keys}>
                <article>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.pic}>
                        <Image src={img?.url} alt={img?.alt} width={200} height={200} />
                    </div>
                    <div className={styles.desc}>
                        {description}
                    </div>
                </article>
            </div>
        </div>
    )
}

export default ServiceCard
