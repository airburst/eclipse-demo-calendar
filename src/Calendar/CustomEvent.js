// const MyEvent = ({ event }) => {
//   return (
//     <span>
//       <strong>{event.title}</strong>
//       {event.desc && <p className="event-description">{event.desc}</p>}
//     </span>
//   );
// };

// const EventAgenda = ({ event }) => {
//   let source = (event.source !== 'eclipse') ? <em>({event.source})</em> : '';
//   return (
//     <span>
//       <strong>{event.title} {source}</strong>
//       <p className="event-description">{event.desc}</p>
//     </span>
//   );
// };

// Use like
/**
   components={{
    event: MyEvent,
    agenda: { event: EventAgenda }
  }}
 */