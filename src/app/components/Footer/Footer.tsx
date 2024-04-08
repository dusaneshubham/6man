// "use server"
import React from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './Footer.module.css'
import Link from 'next/link'
import TextInput from '../TextInput/TextInput'
import { getCurrentYear } from '../../utils/date'

const Footer = () => {
  const rightIcon = () => {
    return <button>Join</button>
  }

  const currentYear: number = getCurrentYear();

  return (
    <div className={styles.footerWrapper}>
      <SectionWrapper>
        <div className={styles.footer}>

          <div className={styles.contactWrapper}>
            <h4 className={styles.heading}>Get in Touch</h4>
            <TextInput placeholder="Enter Your Mail" rightIcon />
            <p className={styles.footerCopyRight}>&copy; {currentYear} NJ, All Rights Reserved</p>
          </div>

          <div className={styles.pageLinksWrapper}>
            <h4 className={styles.heading}>Links</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerList}>
                <Link href="/about-us">About Us</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="/">Services</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.socialLinksWrapper}>
            <h4 className={styles.heading}>Get in Touch</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerList}>
                <Link href="http://link.com">Whatsapp</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="http://link.com">Instagram</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="http://link.com">Facebook</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="http://link.com">Twitter</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="http://link.com">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Footer