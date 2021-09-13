import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const DailyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const isDay = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      filterDate={isDay}
      placeholderText="Select a weekday"
      className="form-control"
      dateFormat="yyyy年MM月dd日"
      showDayMonthYearNumbers
    />
  );
};

export default DailyDatePicker
