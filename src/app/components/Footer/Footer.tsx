import React, { useState } from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './Footer.module.css'
import Link from 'next/link'
import TextInput from '../TextInput/TextInput'
import { getCurrentYear } from '../../utils/date'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK, WHATSAPP_LINK } from '@/app/constants/social'

const Footer = () => {
  const currentYear: number = getCurrentYear();

  return (
    <div className={styles.footerWrapper}>
      <SectionWrapper>
        <div className={styles.footer}>

          <div className={styles.contactWrapper}>
            <h4 className={styles.heading}>Connect with Us</h4>
            <TextInput placeholder="Enter Your Mail" rightIcon inputClassName={styles.footerInput} />
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
                <Link href="/services">Services</Link>
              </li>
              <li className={styles.footerList}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.socialLinksWrapper}>
            <h4 className={styles.heading}>Connect with Us</h4>
            <ul className={styles.footerLinks}>
              <li className={styles.footerList}>
                <Link href={WHATSAPP_LINK}><FontAwesomeIcon icon={faWhatsapp} className={styles.socialIcon} /></Link>
              </li>
              <li className={styles.footerList}>
                <Link href={INSTAGRAM_LINK}><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} /></Link>
              </li>
              <li className={styles.footerList}>
                <Link href={FACEBOOK_LINK}><FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} /></Link>
              </li>
              <li className={styles.footerList}>
                <Link href={TWITTER_LINK}><FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} /></Link>
              </li>
              <li className={styles.footerList}>
                <Link href={LINKEDIN_LINK}><FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} /></Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Footer