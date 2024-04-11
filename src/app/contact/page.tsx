"use client"
import React, { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper/SectionWrapper'
import styles from '../styles/contact.module.css';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const Contact = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (newDate: any) => setDate(newDate);

  return (
    <SectionWrapper className={styles.contactSectionWrapper}>
      <h1 className={styles.heading}>Hello!</h1>

      <div className={styles.contactWrapper}>
        <div className={styles.leftWrapper}>
          <div className={styles.left}>
            {/* <div className={styles.calendarContainer}>
              <Calendar
                onChange={onChange}
                value={date}
                className={styles.calendar}
                tileClassName={({ date }) => (date.getDay() === 0 ? styles.weekend : styles.weekday)}
              />
            </div> */}
          </div>
        </div>
        <div className={styles.rightWrapper}>
          <h2>Contact Us</h2>
          <TextInput placeholder="Name" className={styles.input} />
          <TextInput placeholder="Email" type="email" className={styles.input} />
          <TextInput placeholder='Message' type="textarea" className={styles.input} />
          <Button label="Start Project" className={styles.startProjectButton} />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact