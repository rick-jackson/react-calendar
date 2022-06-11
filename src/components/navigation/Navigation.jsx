import React from "react";
import moment from "moment";
import { days } from "../../utils/dateUtils.js";

const Navigation = ({ weekDates, weekStartDate }) => {
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) => (
        <div key={index} className="calendar__day-label day-label">
          {dayDate.getDay() === new Date().getDay() &&
          moment(new Date()).format("lll") ===
            moment(weekStartDate).format("lll") ? (
            <span className="day-label__day-number day-label__day-number_today">
              {dayDate.getDate()}
            </span>
          ) : (
            <span className="day-label__day-number">{dayDate.getDate()}</span>
          )}

          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
