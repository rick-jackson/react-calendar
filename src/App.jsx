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
    ediEvents(event);
  }, []);

  const ediEvents = () => {
    fetchEvents().then((response) => {
      setEvents(response);
    });
  };

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  return (
    <>
      <Header
        ediEvents={ediEvents}
        setWeekStartDate={setWeekStartDate}
        weekStartDate={weekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        ediEvents={ediEvents}
        events={event}
        weekStartDate={weekStartDate}
      />
    </>
  );
};

export default App;
