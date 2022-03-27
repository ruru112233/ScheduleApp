import FullCalender from "@fullcalendar/react";
import dayGridPlagin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";

export const Calender = () => {
  return (
    <div>
      <FullCalender
        locales={allLocales}
        locale="jp"
        plugins={[dayGridPlagin]}
        initialView="dayGridMonth"
      />
    </div>
  );
};
