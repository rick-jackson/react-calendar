// const events = [
//   // {
//   //   id: 1,
//   //   title: "Go to the gym",
//   //   description: "some text here",
//   //   date: "2022, 6, 12, 10, 15",
//   //   startTime: "2022, 5, 12, 10, 15",
//   //   endTime: "2022, 5, 12, 15, 0",
//   // },
//   {
//     id: 2,
//     title: "Go to the school",
//     description: "hello, 2 am",
//     date: '2022-6-9',
//     startTime: '10:15',
//     endTime: '11:15',
//   },
//   {
//     id: 3,
//     title: "Lunch",
//     description: "",
//     date: '2022-6-10',
//     startTime: '10:30',
//     endTime: '11:30',
//   },
//   // {
//   //   id: 4,
//   //   title: "Meet friend",
//   //   description: "at the cafe",
//   //   date: new Date(2022, 5, 9, 10, 30),
//   //   startTime: new Date(2022, 5, 9, 10, 30),
//   //   endTime: new Date(2022, 5, 9, 11, 0),
//   // },
// ];

// export default events;


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
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasksList) => {
      return tasksList;
    });
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
