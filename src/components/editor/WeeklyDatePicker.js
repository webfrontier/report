import React, {useState} from 'react'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const WeeklyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      filterDate={isWeekday}
      placeholderText="Select a weekday"
      className="form-control"
      dateFormat="yyyy年MM月dd日含む週"
      showWeekNumbers
    />
  );
};

export default WeeklyDatePicker