import React from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './Header.module.css'
import Button from '../Button/Button'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        <>
            <nav className={styles.headerWrapper}>
                <SectionWrapper>
                    <div className={styles.header}>
                        <div className="logo">
                            <Image src="/logo.png" width={100} height={80} alt="logo" />
                        </div>
                        <div className={styles.hamburger} id="hamburger">
                            <div className={styles.line1}></div>
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                        </div>
                        <ul className={`${styles.navLinks} pt-4`} id="nav-links">
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/">Home</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/services">Services</Link>
                            </li>
                            <li className={`${styles.navList} mx-3`}>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </SectionWrapper>
            </nav>
            <Script src="/js/navbar.js"></Script>
        </>
    )
}

export default Header