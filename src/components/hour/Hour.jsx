import React, { useEffect, useState } from "react";
import moment from "moment";
import Event from "../event/Event";
import { formatMins } from "../../../src/utils/dateUtils.js";

const Hour = ({
  dataHour,
  hourEvents,
  event,
  events,
  ediEvents,
  weekStartDate,
  dataDay,
}) => {
  const [topLine, getTopLine] = useState(new Date().getMinutes());


  useEffect(() => {
    const interval = setInterval(() => {
      getTopLine(new Date().getMinutes());
    }, 60000);
    // return clearInterval(interval);
  }, []);




  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}

      {moment(weekStartDate).format("MMM YY") ===
        moment(new Date()).format("MMM YY") &&
        new Date().getHours() === dataHour &&
        new Date().getDate() === dataDay && (
          <div className="red-line" style={{ top: topLine + "px" }}></div>
        )}

      {hourEvents.map(({ id, startTime, endTime, title, date }) => {
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
            ediEvents={ediEvents}
            id={id}
            key={id}
            //calculating event height = duration of event in minutes
            height={
              (new Date(`${date}-${endTime}`).getTime() -
                new Date(`${date}-${startTime}`).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(`${date}-${startTime}`).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            event={event}
            events={events}
          />
        );
      })}
    </div>
  );
};

export default Hour;
