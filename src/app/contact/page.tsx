"use client"
import React, { useEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper/SectionWrapper'
import styles from '../styles/contact.module.css';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import CalendarSelect from "../components/Calendar/Calendar";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({ name: '', email: '', subject: '', message: '' })

  const onChangeName = (event: any) => {
    setContactDetails({...contactDetails, name: event.target.value})
  }

  const onChangeEmail = (event: any) => {
    setContactDetails({...contactDetails, email: event.target.value})
  }

  const onChangeSubject = (event: any) => {
    setContactDetails({...contactDetails, subject: event.target.value})
  }

  const onChangeMessage = (event: any) => {
    setContactDetails({...contactDetails, message: event.target.value})
  }

  return (
    <SectionWrapper className={styles.contactSectionWrapper}>
      <h1 className={styles.heading}>Contact Us</h1>

      <div className={styles.contactWrapper}>
        <div className={styles.leftWrapper}>
          <div className={`${styles.left} px-4`}>
            <CalendarSelect />
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <TextInput placeholder="Name" onChange={onChangeName} className={styles.input} />
          <TextInput placeholder="Email" onChange={onChangeEmail} type="email" className={styles.input} />
          <TextInput placeholder='subject' onChange={onChangeSubject} className={styles.input} />
          <TextInput placeholder='Message' type="textarea" onChange={onChangeMessage} className={styles.input} />
          <Button label="Submit" className={styles.startProjectButton} />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact