import React from "react";
import propTypes from "prop-types";
import Day from "../day/Day";
import "./week.scss";

const Week = ({ weekDates, events, editEvents, weekStartDate }) => {
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
            editEvents={editEvents}
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

Week.propTypes = {
  weekDates: propTypes.array.isRequired,
  events: propTypes.array.isRequired,
  editEvents: propTypes.func.isRequired,
};
