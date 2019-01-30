import moment from 'moment';
import React, { useState } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './CalendarToolbar';
import EventPopup from './EventPopup';
import './theme-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment)

const convertDateFromString = (string) => {
  return moment(string, 'YYYYMMDDTHH:mm:SS').toDate();
};

const parseEvents = data => data.map(e => {
  return Object.assign(e, {
    start: convertDateFromString(e.start),
    end: convertDateFromString(e.end)
  });
});

const Calendar = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event, e) => {
    const { clientX, clientY } = e; // pageX / screenX ?
    setSelectedEvent({ ...event, clientX, clientY });
  }

  const handleSlotSelect = (slotInfo) => {
    alert(`selected slot:
        start ${slotInfo.start.toLocaleString()}
        end: ${slotInfo.end.toLocaleString()}`);
  }

  return (
    <div className="calendar-container" {...props}>
      <BigCalendar
        className="race"
        localizer={localizer}
        selectable
        culture='en-GB'
        popup
        events={parseEvents(props.data)}
        views={['month']}
        defaultView='month'
        onSelectEvent={handleEventSelect}
        onSelectSlot={handleSlotSelect}
        components={{toolbar: CalendarToolbar}}
        eventPropGetter={e => ({ className: e.source })}
      />
      {selectedEvent && <EventPopup event={selectedEvent}/>}
    </div>
  );
}

export default Calendar;