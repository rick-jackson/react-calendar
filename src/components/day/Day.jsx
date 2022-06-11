import React from "react";
import Hour from "../hour/Hour";
import "./day.scss";

const Day = ({ dataDay, dayEvents, events, ediEvents, weekStartDate }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) =>
            new Date(`${event.date}-${event.startTime}`).getHours() === hour
        );

        return (
          <Hour
          dataDay={dataDay}
          weekStartDate={weekStartDate}
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            event={dayEvents}
            events={events}
            ediEvents={ediEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;
