
const baseUrl = "https://628bd5ab7886bbbb37c004f3.mockapi.io/events";

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const fetchEvents = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        alert("Internal Server Error. Can't display events")
        return [];
      }
      return res.json();
    })
    
    .then((tasksList) => {
      return tasksList;
    })
};

export const updateEvent = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to create task");
    }
  });
};

export const deleteEvent = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed remove  task");
    }
  });
};
