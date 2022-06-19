import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import { fetchEvents } from "../src/gateway/events";
import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";

const App = () => {
  const [event, setEvents] = useState([]);
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  useEffect(() => {
    editEvents(event);
  }, []);

  const editEvents = () => {
    fetchEvents().then((response) => {
      setEvents(response);
    });
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        editEvents={editEvents}
        setWeekStartDate={setWeekStartDate}
        weekStartDate={weekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        editEvents={editEvents}
        events={event}
        weekStartDate={weekStartDate}
      />
    </>
  );
};

export default App;
