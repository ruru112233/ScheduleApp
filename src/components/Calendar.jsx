import { useState } from "react";
import DatePicker, { moment } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Calender = () => {
  const toUtcIso8601str = (momentInstance) => {
    return momentInstance.clone().utc().format("YYYY-MM-DDTHH:mm:00Z");
  };
  const CustomInputDatePicker = () => {
    const initialDate = new Date();
    const [startDate, setStartDate] = useState(initialDate);
    const handleChenge = (date) => {
      setStartDate(date);
    };

    return <DatePicker selected={startDate} onChange={handleChenge} />;
  };
  return (
    <div>
      <CustomInputDatePicker />
    </div>
  );
};
