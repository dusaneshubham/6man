"use client"
import React from 'react'
import styles from '../styles/contact.module.css';
import CalCalender from '../components/CalCalender/CalCalender';
import { motion } from 'framer-motion';

const Contact = () => {
  // const [contactDetails, setContactDetails] = useState({ name: '', email: '', subject: '', message: '' })

  // const onChangeName = (event: any) => {
  //   setContactDetails({ ...contactDetails, name: event.target.value })
  // }

  // const onChangeEmail = (event: any) => {
  //   setContactDetails({ ...contactDetails, email: event.target.value })
  // }

  // const onChangeSubject = (event: any) => {
  //   setContactDetails({ ...contactDetails, subject: event.target.value })
  // }

  // const onChangeMessage = (event: any) => {
  //   setContactDetails({ ...contactDetails, message: event.target.value })
  // }

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.1,
        y: { type: "spring", stiffness: 60 },
        ease: "easeInOut",
        duration: 0.6
      }}
      className={styles.contactSectionWrapper}
    >
      <h1 className={styles.heading}>Contact Us</h1>

      <div className={styles.contactWrapper}>
        {/* <div className={styles.leftWrapper}>
          <div className={`${styles.left} px-4`}>
          </div>
        </div> */}
        <CalCalender />
        {/* <div className={styles.rightWrapper}>
          <TextInput placeholder="Name" onChange={onChangeName} className={styles.input} />
          <TextInput placeholder="Email" onChange={onChangeEmail} type="email" className={styles.input} />
          <TextInput placeholder='subject' onChange={onChangeSubject} className={styles.input} />
          <TextInput placeholder='Message' type="textarea" onChange={onChangeMessage} className={styles.input} />
          <Button label="Submit" className={styles.startProjectButton} />
        </div> */}
      </div>
    </motion.div>
  )
}

export default Contact