import { useCallback, useState } from "react";
import FullCalender from "@fullcalendar/react";
import timeGridPlagin from "@fullcalendar/timegrid";
import dayGridPlagin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import DatePicker, { registerLocale } from "react-datepicker";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";
import { SchedulePopup } from "./SchedulePopup";

const useStyles = makeStyles(() => {
  createStyles({
    cover: {
      opacity: 0,
      visibility: "hidden",
      position: "fixed",
      width: "100%",
      height: "100%",
      zIndex: 1000,
      top: 0,
      left: 0,
      background: "rgba(0,0,0, 0.3)"
    },
    form: {
      opacity: 0,
      visibilityj: "hidden",
      position: "fixed",
      top: "30%",
      left: "40%",
      fontWeight: "bold",
      background: "rgba(255,255,255)",
      width: "400px",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 2000
    },
    inView: {
      opacity: 1,
      visibility: "visible"
    }
  });
});

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

export const Calender = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDateClick = useCallback(
    (arg: DateClickArg) => {
      setOpenDialog(!openDialog);
      console.log(openDialog);
      // alert(arg.dateStr);
    },
    [openDialog]
  );

  return (
    <SContainer>
      <FullCalender
        // events={[
        //   { title: "event 1", date: `${thisMonth()}-01` },
        //   { title: "event 2", date: `${thisMonth()}-02` }
        // ]}
        locales={allLocales}
        locale="jp"
        // plugins={[dayGridPlagin]}
        plugins={[timeGridPlagin, dayGridPlagin, interactionPlugin]}
        initialView="timeGridWeek"
        dateClick={handleDateClick}
        slotDuration="00:30:00"
        selectable={true}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: "00:00",
          endTime: "24:00"
        }}
        weekends={true}
        titleFormat={{
          year: "numeric",
          month: "short"
        }}
        headerToolbar={{
          start: "title",
          center: "prev, next, today",
          end: "dayGridMonth, timeGridWeek"
        }}
      />
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  /* overflow: auto; */
  z-index: 5;
`;
