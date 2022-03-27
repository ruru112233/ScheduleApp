import { useCallback } from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlagin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

export const Calender = () => {
  const handleDateClick = useCallback((arg: DateClickArg) => {
    alert(arg.dateStr);
  }, []);
  return (
    <div>
      <FullCalender
        // events={[
        //   { title: "event 1", date: `${thisMonth()}-01` },
        //   { title: "event 2", date: `${thisMonth()}-02` }
        // ]}
        locales={allLocales}
        locale="jp"
        // plugins={[dayGridPlagin]}
        plugins={[dayGridPlagin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
    </div>
  );
};
