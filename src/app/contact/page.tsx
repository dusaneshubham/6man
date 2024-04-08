import React from 'react'
import SectionWrapper from '../components/SectionWrapper/SectionWrapper'
import styles from '../styles/contact.module.css';
import TextInput from '../components/TextInput/TextInput';

const Contact = () => {
  return (
    <SectionWrapper className={styles.contactSectionWrapper}>
        <h1 className={styles.heading}>Hello!</h1>

        <div className={styles.contactWrapper}>
          <div className={styles.leftWrapper}>
            <div className={styles.experience}>10 years of experience</div>
            <div className={styles.abc}>6Man</div>
          </div>
          <div className={styles.rightWrapper}>
            <h2>Contact Us</h2>
            <TextInput placeholder="Name" className={styles.input} />
            <TextInput placeholder="Email" className={styles.input} />
          </div>
        </div>
    </SectionWrapper>
  )
}

export default Contact