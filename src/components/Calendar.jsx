import FullCalender from "@fullcalendar/react";
import dayGridPlagin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

export const Calender = () => {
  return (
    <div>
      <FullCalender
        events={[
          { title: "event 1", date: `${thisMonth()}-01` },
          { title: "event 2", date: `${thisMonth()}-02` }
        ]}
        locales={allLocales}
        locale="jp"
        plugins={[dayGridPlagin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};
