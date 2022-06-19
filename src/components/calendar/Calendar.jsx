import React from "react";
import propTypes from "prop-types";
import Navigation from "./../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";
import "./calendar.scss";

const Calendar = ({ weekDates, events, editEvents, weekStartDate }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} weekStartDate={weekStartDate} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            editEvents={editEvents}
            weekStartDate={weekStartDate}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;

Calendar.propTypes = {
  weekDates: propTypes.array.isRequired,
  events: propTypes.array.isRequired,
  editEvents: propTypes.func.isRequired,
};
