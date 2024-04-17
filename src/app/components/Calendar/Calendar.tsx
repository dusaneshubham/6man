import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="portrait"
        disablePast
        disableHighlightToday
        onChange={(value) => { setSelectedDate(value?.$d) }}
      />
    </LocalizationProvider>
  );
}

export default Calendar;