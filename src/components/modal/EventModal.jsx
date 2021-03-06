import React, { useState } from "react";
import propTypes from "prop-types";
import moment from "moment";
import { deleteEvent, updateEvent } from "../../gateway/events";
import "./modal.scss";

const Modal = ({
  showEventModal,
  toggleEventModal,
  event,
  events,
  id,
  editEvents,
}) => {
  const [eventValue, setEventValue] = useState(...event);

  const editEventForm = (e) => {
    e.preventDefault();
    setEventValue({ ...eventValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateEvents = {
      ...eventValue,
      date: moment(eventValue.date).format("YYYY-M-D"),
    };

    events.map((el) => {
      updateEvent(id, updateEvents).then(() => {
        editEvents();
      });
      return el;
    });
    editEvents(updateEvents);
    toggleEventModal(!showEventModal);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    deleteEvent(id).then(() => {
      editEvents();
    });

    toggleEventModal(!showEventModal);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => toggleEventModal(!showEventModal)}
          >
            +
          </button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={editEventForm}
              value={eventValue.title}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={editEventForm}
                value={moment(new Date(eventValue.date)).format("YYYY-MM-DD")}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={editEventForm}
                value={eventValue.startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={editEventForm}
                value={eventValue.endTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={editEventForm}
              value={eventValue.description}
            ></textarea>
            <div className="event-form__buttons">
              <button
                type="submit"
                className="event-form__submit-btn"
                onClick={handleSubmit}
              >
                Edit
              </button>
              <button className="event-form__submit-btn" onClick={handleRemove}>
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  toggleEventModal: propTypes.func.isRequired,
  event: propTypes.array.isRequired,
  events: propTypes.array.isRequired,
  id: propTypes.string.isRequired,
  editEvents: propTypes.func.isRequired,
  showEventModal: propTypes.bool.isRequired,
};
