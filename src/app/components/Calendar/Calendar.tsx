import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './Calendar.module.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CalendarSelect() {
  const [value, onChange] = useState<Value>(new Date());  // value field will contain the selected date

  return (
    <div>
      <Calendar onChange={onChange} value={value} className={styles.reactCalendar} />
    </div>
  );
}

export default CalendarSelect;