import React, { useState } from "react";
import propTypes from "prop-types";
import EventModal from "../modal/EventModal";
import "./event.scss";

const Event = ({
  height,
  marginTop,
  title,
  time,
  description,
  events,
  event,
  id,
  editEvents,
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
          editEvents={editEvents}
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
        <div className="event__description">{description}</div>
      </div>
    </>
  );
};

export default Event;

Event.propTypes = {
  height: propTypes.number.isRequired,
  marginTop: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  events: propTypes.array.isRequired,
  event: propTypes.array.isRequired,
  id: propTypes.string.isRequired,
  editEvents: propTypes.func.isRequired,
};
