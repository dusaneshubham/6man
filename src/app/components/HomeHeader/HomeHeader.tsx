import React from 'react'
import styles from './HomeHeader.module.css'

const HomeHeader = () => {
  return (
    <>
      <div className={`${styles.homeHeadersWrapper} container`}>
        <video autoPlay muted loop id={styles.backgroundVideo}>
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        <div className="row">
          <div className="col-lg-4">
            <img className={`${styles.object} img-fluid`} src="keyboard.png" width="100" />
          </div>
          <div className={`col-6 ${styles.homeHeader}`}>
            <div className="raw">
              <h1 className={styles.headerTitle}>Providing The Best <br /> IT Solutions.</h1>
              <p className={`${styles.headerDescription} py-1`}>
                Let's <b>Grow</b> Your <b>Business</b> Together <b>!</b> <br /><br /> <b>+ 6 Men's</b>
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className={`${styles.down} ${styles.hpDown} pt-5`}>
              <p className={styles.scrollText}>Scroll To Explore</p>
              <span className={styles.goDown}></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;