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
          <p>Harnessing a decade of IT prowess, we've navigated the ever-evolving landscape, delivering innovative solutions that transcend expectations. With each project, we've honed our skills, refining our craft to craft seamless digital experiences. Our journey spans a decade of innovation, where we've transformed challenges into triumphs, and aspirations into achievements. From pioneering projects to industry-leading solutions, our track record speaks volumes about our commitment to excellence. Let's embark on this journey together, leveraging our expertise to propel your business towards unparalleled success. With a decade behind us and boundless opportunities ahead, let's make every line of code count in shaping a brighter digital future.</p>

          <h2>What is our future plan?</h2>
          <p>In the next phase of your journey, capitalize on your decade of IT prowess by prioritizing continued innovation, enhanced digital experiences, strategic partnerships, global expansion, diversification of services, sustainability, investment in talent, and a customer-centric approach. Stay at the forefront of technological advancements, refine user-centric design principles, forge strategic partnerships, explore global markets, diversify your service offerings, integrate sustainable practices, invest in talent development, and maintain a relentless focus on customer satisfaction. By adhering to this comprehensive strategy, you can propel your business towards unparalleled success, shaping a brighter digital future while making every line of code count.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default AboutUs