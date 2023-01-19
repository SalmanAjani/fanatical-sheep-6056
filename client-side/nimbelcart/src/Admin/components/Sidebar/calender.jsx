// import React, { useState, useEffect } from "react";
// import BigCalendar from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";

// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

// const MyCalendar = (props) => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const currentDate = new Date();
//     const threeMonthsAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3);

//     // Example data
//     const allData = [
//       [new Date(2013, 2, 4), 10],
//       [new Date(2013, 2, 5), 3],
//       [new Date(2013, 2, 7), -1],
//       [new Date(2013, 2, 8), 2],
//       [new Date(2013, 2, 12), -1],
//       [new Date(2013, 2, 13), 1],
//       [new Date(2013, 2, 15), 1],
//       [new Date(2013, 2, 16), -4],
//       [new Date(2013, 1, 4), 10],
//       [new Date(2013, 1, 5), 3],
//       [new Date(2013, 1, 7), -1],
//       [new Date(2013, 1, 8), 2],
//       [new Date(2013, 1, 12), -1],
//       [new Date(2013, 1, 13), 1],
//       [new Date(2013, 1, 15), 1],
//       [new Date(2013, 1, 16), -4],
//     ];

//     allData.forEach((dataPoint) => {
//       if (dataPoint[0] >= threeMonthsAgo) {
//         let className = "event-green-medium";
//         if(dataPoint[1] > 0) {
//           className = dataPoint[1] > 5 ? "event-green-high" : "event-green-medium";
//         } else {
//           className = dataPoint[1] < -5 ? "event-red-high" : "event-red-medium";
//         }
//         events.push({
//           start: dataPoint[0],
//           title: dataPoint[1],
//           className: className
//         });
//       }
//     });
//     setEvents(events);
//   }, []);

//   return (
//     <div>
//       <BigCalendar
//         events={events}
//         defaultView="month"
//         views={["month"]}
//         step={60}
//         showMultiDayTimes
//         components={{
//           event: Event,
//         }}
//       />
//     </div>
//   );
// };

// const Event = ({ event }) => {
//     return (
//       <span className={event.className}>
//         <strong style={{ color: "white" }}>{event.title}</strong>
//       </span>
//     );
//   };