import React from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './Header.module.css'
import Button from '../Button/Button'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <SectionWrapper>
                <div className={styles.header}>
                    <div className={styles.navLeft}>
                        <Image src="/logo.png" width={100} height={80} alt="logo" />
                    </div>
                    <div className={styles.navCenter}>
                        <ul className={styles.navLinks}>
                            <li className={styles.navList}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={styles.navList}>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li className={styles.navList}>
                                <Link href="/">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.navRight}>
                        <Button label="Start Project"/>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    )
}

export default Header