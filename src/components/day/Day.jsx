import React from "react";
import propTypes from "prop-types";
import Hour from "../hour/Hour";
import "./day.scss";

const Day = ({ dataDay, dayEvents, events, editEvents, weekStartDate }) => {
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
            editEvents={editEvents}
          />
        );
      })}
    </div>
  );
};

export default Day;

Day.propTypes = {
  dayEvents: propTypes.array.isRequired,
  dataDay: propTypes.number.isRequired,
  events: propTypes.array.isRequired,
  editEvents: propTypes.func.isRequired,
};
