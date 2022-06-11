import React, { useState } from "react";
import moment from "moment";
import "./modal.scss";
import { createEvent } from "../../gateway/events";

const Modal = ({ toggleCreateModal, showCreateModal, ediEvents }) => {
  const [eventValue, setEventValue] = useState({
    title: "Title",
    description: "",
    date: moment(new Date()).format("YYYY-MM-DD"),
    startTime: moment(new Date()).format("H:mm"),
    endTime: moment(new Date()).add(1, "hours").format("H:mm"),
  });

  const getFormValue = (e) => {
    setEventValue({ ...eventValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...eventValue,
      date: moment(eventValue.date).format("YYYY-M-D"),
    };
    createEvent(newEvent).then(() => ediEvents());
    toggleCreateModal(!showCreateModal);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            className="create-event__close-btn"
            onClick={() => toggleCreateModal(!showCreateModal)}
          >
            +
          </button>
          <form className="event-form" onChange={getFormValue}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                onChange={getFormValue}
                value={eventValue.date}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                onChange={getFormValue}
                value={eventValue.startTime}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                onChange={getFormValue}
                value={eventValue.endTime}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={handleSubmit}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
