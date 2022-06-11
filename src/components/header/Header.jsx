import React, { useState } from "react";
import Modal from "../modal/Modal";
import moment from "moment";
import "./header.scss";

const Header = ({ ediEvents, weekStartDate, setWeekStartDate }) => {
  const [showCreateModal, toggleCreateModal] = useState(false);

  return (
    <>
      {showCreateModal && (
        <Modal
          showCreateModal={showCreateModal}
          toggleCreateModal={toggleCreateModal}
          ediEvents={ediEvents}
        />
      )}
      <header className="header">
        <button
          className="button create-event-btn"
          onClick={() => toggleCreateModal(!showCreateModal)}
        >
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={() => setWeekStartDate(new Date())}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={() =>
              setWeekStartDate(
                new Date(weekStartDate.setDate(weekStartDate.getDate() - 7))
              )
            }
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={() =>
              setWeekStartDate(
                new Date(weekStartDate.setDate(weekStartDate.getDate() + 7))
              )
            }
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">{`${moment(
            weekStartDate
          ).format("MMMM")}`}</span>
        </div>
      </header>
    </>
  );
};

export default Header;
