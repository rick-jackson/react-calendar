import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import moment from "moment";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({
  dataHour,
  hourEvents,
  event,
  events,
  editEvents,
  weekStartDate,
  dataDay,
}) => {
  const [topLine, getTopLine] = useState(new Date().getMinutes());
  const [showCreateModal, toggleCreateModal] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      getTopLine(new Date().getMinutes());
    }, 60000);
    // return clearInterval(interval);
  }, []);

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {moment(weekStartDate).format("MMM YY") ===
        moment(new Date()).format("MMM YY") &&
        new Date().getHours() === dataHour &&
        new Date().getDate() === dataDay && (
          <div className="red-line" style={{ top: topLine + "px" }}></div>
        )}

      {hourEvents.map(
        ({ id, startTime, endTime, title, date, description }) => {
          const eventStart = `${new Date(
            `${date}-${startTime}`
          ).getHours()}:${formatMins(
            new Date(`${date}-${startTime}`).getMinutes()
          )}`;
          const eventEnd = `${new Date(
            `${date}-${endTime}`
          ).getHours()}:${formatMins(
            new Date(`${date}-${endTime}`).getMinutes()
          )}`;

          return (
            <Event
              editEvents={editEvents}
              id={id}
              key={id}
              height={
                (new Date(`${date}-${endTime}`).getTime() -
                  new Date(`${date}-${startTime}`).getTime()) /
                (1000 * 60)
              }
              marginTop={new Date(`${date}-${startTime}`).getMinutes()}
              time={`${eventStart} - ${eventEnd}`}
              title={title}
              description={description}
              event={event}
              events={events}
            />
          );
        }
      )}
    </div>
  );
};

export default Hour;

Hour.propTypes = {
  dataDay: propTypes.number.isRequired,
  editEvents: propTypes.func.isRequired,
  events: propTypes.array.isRequired,
  event: propTypes.array.isRequired,
  hourEvents: propTypes.array.isRequired,
  dataHour: propTypes.number.isRequired,
};
