import React, { useCallback, useState } from "react";
import FullCalender from "@fullcalendar/react";
import timeGridPlagin from "@fullcalendar/timegrid";
import dayGridPlagin from "@fullcalendar/daygrid";
import allLocales from "@fullcalendar/core/locales-all";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import DatePicker, { registerLocale } from "react-datepicker";

import ja from "date-fns/locale/ja";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import styled from "styled-components";

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

registerLocale("ja", ja);

// interface myEventsType {
//   id: number;
//   title: string;
//   start: Date;
//   end: Date;
// }

const myEventsType = (props) => {
  const { id, title, start, end } = props;
  const obj = [
    {
      id: id,
      title: title,
      start: start,
      end: end
    }
  ];

  return obj;
};

const thisMonth = () => {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
};

export const Calender = () => {
  const classes = useStyles();

  // const handleDateClick = useCallback((arg) => {
  // console.log(ref.current);
  //   alert(arg.dateStr);
  // });

  const ref = React.createRef();

  const [inputTitle, setInputTitle] = useState("");
  const [inputStart, setInputStart] = useState(new Date());
  const [inputEnd, setInputEnd] = useState(new Date());
  const [inView, setInView] = useState(false);
  const [myEvents, setMyEvents] = useState(myEventsType("", "", "", ""));

  const handleClick = (info) => {
    const event = myEvents[info.event.id];
    const title = event.title;
    const start = event.start;
    const end = event.end;

    setInputTitle(title);
    setInputStart(start);
    setInputEnd(end);
    setInView(true);
  };

  const handleSelect = (selectInfo) => {
    const start = new Date(selectInfo.start);
    const end = new Date(selectInfo.end);
    start.setHours(start.getHours());
    end.setHours(end.getHours());

    setInputTitle("");
    setInputStart(start);
    setInputEnd(end);
    setInView(true);
  };

  // カレンダーに予定を追加する

  const onAddEvent = () => {
    const startTime = inputStart;
    const endTime = inputEnd;

    if (startTime >= endTime) {
      alert("開始時間と終了時間を確認してください");
      return;
    }

    const event = {
      id: myEvents.length,
      title: inputTitle,
      start: startTime,
      end: endTime
    };

    setMyEvents([...myEvents, event]);
    ref.current.getApi().addEvent(event);
  };

  const coverElement = (
    <div
      onClick={() => setInView(false)}
      className={inView ? `${classes.cover} ${classes.inView}` : classes.cover}
    />
  );

  const titleElement = (
    <div>
      <label>タイトル</label>
      <input
        type="text"
        value={inputTitle}
        name="inputTitle"
        onChange={(e) => {
          setInputTitle(e.target.value);
        }}
      />
    </div>
  );

  const startTimeElement = (
    <div>
      <label>開始</label>
      <DatePicker
        local="jp"
        dateFormat="yyyy/MM/d HH:mm"
        selected={inputStart}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={10}
        todayButton="today"
        name="inputStart"
        onChange={(time) => {
          setInputStart(time);
        }}
      />
    </div>
  );

  const endTimeElement = (
    <div>
      <label>終了</label>
      <DatePicker
        local="jp"
        dateFormat="yyyy/MM/d HH:mm"
        selected={inputStart}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={10}
        todayButton="today"
        name="inputStart"
        onChange={(time) => {
          setInputEnd(time);
        }}
      />
    </div>
  );

  const btnElement = (
    <div>
      <input
        type="button"
        value="キャンセル"
        onClick={() => {
          setInView(false);
        }}
      />
      <input
        type="button"
        value="保存"
        onClick={() => {
          onAddEvent();
        }}
      />
    </div>
  );

  const formElement = (
    <div
      className={inView ? `${classes.form} ${classes.inView}` : classes.form}
    >
      <form>
        <div>予定を入力</div>
        {titleElement}
        {startTimeElement}
        {endTimeElement}
        {btnElement}
      </form>
    </div>
  );

  return (
    <SContainer>
      {coverElement}
      {formElement}
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
        // dateClick={handleDateClick}
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
        ref={ref}
        eventClick={handleClick}
        select={handleSelect}
      />
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  /* overflow: auto; */
  z-index: 5;
`;
