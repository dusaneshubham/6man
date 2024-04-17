import React from "react"
import styles from "./Scroller.module.css"
import Script from "next/script"

const Scroller = () => {
  return (
    <>
      <div id="scrollToTopButton" className={styles.scrollToTopButton}>
        <img src="scroll_top.svg" alt="scroller" id="scroller" className={styles.scroller} />
        <span id="percentageIndicator" className={styles.percentageIndicator}>0%</span>
      </div>

      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
      <Script src="/js/scroller.js" ></Script>
    </>
  )
}

export default Scroller