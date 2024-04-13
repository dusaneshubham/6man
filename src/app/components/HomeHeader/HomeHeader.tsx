import React from 'react'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import styles from './HomeHeader.module.css'

const HomeHeader = () => {
  return (
    <>
      <SectionWrapper className="container">
        <img src="galaxy_background.png" alt="galaxy background" className={styles.background} />
        <div className="row">
          <div className="col-4">
            <img className={`${styles.object} img-fluid`} src="robot.png" width="100" />
          </div>
          <div className={`col-6 ${styles.homeHeader}`}>
            <div className="raw">
              <h1 className={styles.headerTitle}>Providing The Best <br /> IT Solutions.</h1>
              <p className={`${styles.headerDescription} py-1`}>
                Let's <b>Grow</b> Your <b>Business</b> Together <b>!</b> <br /><br /> <b>+ 6 Man's</b>
              </p>
            </div>
          </div>
          <div className="col-2 mt-5">
            <div className={`${styles.down} ${styles.hpDown} pt-5`}>
              <p className={styles.scrollText}>Scroll To Explore</p>
              <span className={styles.goDown}></span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

export default HomeHeader;