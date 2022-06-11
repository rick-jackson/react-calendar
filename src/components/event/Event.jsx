import React, { useState } from "react";
import EventModal from "../modal/EventModal";
import "./event.scss";

const Event = ({
  height,
  marginTop,
  title,
  time,
  events,
  event,
  id,
  ediEvents,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [showEventModal, toggleEventModal] = useState(false);

  return (
    <>
      {showEventModal && (
        <EventModal
          ediEvents={ediEvents}
          id={id}
          toggleEventModal={toggleEventModal}
          showEventModal={showEventModal}
          title={title}
          event={event}
          events={events}
        />
      )}
      <div
        style={eventStyle}
        className="event"
        onClick={() => toggleEventModal(!showEventModal)}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

export default Event;
