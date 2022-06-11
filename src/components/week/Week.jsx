import React from "react";
import Day from "../day/Day";

import "./week.scss";

const Week = ({ weekDates, events, ediEvents, weekStartDate }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter(
          (event) =>
            new Date(`${event.date}-${event.startTime}`) > dayStart &&
            new Date(`${event.date}-${event.endTime}`) < dayEnd
        );

        return (
          <Day
          weekStartDate={weekStartDate}
            ediEvents={ediEvents}
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            events={events}
          />
        );
      })}
    </div>
  );
};

export default Week;
