import { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

export const Calender = () => {
  console.log("レンダリンされた");
  const parseAsMoment = (dateTimeStr) => {
    return moment.utc(dateTimeStr, "YYYY-MM-DDTHH:mm:00Z", "ja").utcOffset(9);
  };
  const toUtcIso8601str = (momentInstance) => {
    return momentInstance.clone().utc().format("YYYY-MM-DDTHH:mm:00Z");
  };
  const CustomInputDatePicker = () => {
    const [startDate, setStartDate] = useState(toUtcIso8601str(moment()));
    const handleChenge = (date) => {
      setStartDate(toUtcIso8601str(moment(date)));
    };

    return (
      <DatePicker
        selected={moment(startDate).toDate()}
        onChange={handleChenge}
        customInput={
          <button>{parseAsMoment(startDate).format("YYYY/MM/DD")}</button>
        }
      />
    );
  };
  return (
    <div>
      <CustomInputDatePicker />
    </div>
  );
};
