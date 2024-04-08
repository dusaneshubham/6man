import React from 'react'
import SectionWrapper from '../components/SectionWrapper/SectionWrapper'
import styles from '../styles/about-us.module.css';

const AboutUs = () => {
  return (
    <SectionWrapper className={styles.aboutUsSectionWrapper}>
        <h1 className={styles.heading}>Why You Choose Us</h1>

        <div className={styles.aboutUsWrapper}>
          <div className={styles.leftWrapper}>
            <div className={styles.experience}>10 years of experience</div>
            <div className={styles.logo}>6Man</div>
          </div>
          <div className={styles.rightWrapper}>
            <h2>What we are done?</h2>
            <p>Lorem Ipsum'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h2>What we are done?</h2>
            <p>Lorem Ipsum'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
    </SectionWrapper>
  )
}

export default AboutUs