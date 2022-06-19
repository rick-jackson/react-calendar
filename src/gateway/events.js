
const baseUrl = "https://628bd5ab7886bbbb37c004f3.mockapi.io/events";

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Failed to create event")
      
    }
  });
};

export const fetchEvents = () => {
  return fetch(baseUrl)
    .then((response) => {
      if (!response.ok) {
        alert("Internal Server Error. Can't display events")
        return [];
      }
      return response.json();
    })
    
    .then((events) => {
      return events;
    })
};

export const updateEvent = (eventId, eventData) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Failed to update event")
    }
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      alert("Internal Server Error. Failed to remove event")
    }
  });
};
