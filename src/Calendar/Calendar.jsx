import moment from 'moment';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarToolbar from './CalendarToolbar';
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

const MyEvent = ({ event }) => {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && <p className="event-description">{event.desc}</p>}
    </span>
  );
};

const EventAgenda = ({ event }) => {
  let source = (event.source !== 'eclipse') ? <em>({event.source})</em> : '';
  return (
    <span>
      <strong>{event.title} {source}</strong>
      <p className="event-description">{event.desc}</p>
    </span>
  );
};

class Calendar extends Component {
  handleEventSelect = (event) => {
    console.log(event);
  }

  handleSlotSelect = (slotInfo) => {
    alert(`selected slot:
        start ${slotInfo.start.toLocaleString()}
        end: ${slotInfo.end.toLocaleString()}`);
  }

  render() {
    const { data } = this.props;

    return (
      <div className="calendar-container" {...this.props}>
        <BigCalendar
          className="race"
          localizer={localizer}
          selectable
          culture='en-GB'
          popup
          events={parseEvents(data)}
          views={['month']}
          defaultView='month'
          onSelectEvent={this.handleEventSelect}
          onSelectSlot={this.handleSlotSelect}
          components={{
            event: MyEvent,
            toolbar: CalendarToolbar,
            agenda: { event: EventAgenda }
          }}
          eventPropGetter={e => ({ className: e.source })}
        />
      </div>
    );
  }
}

export default Calendar;