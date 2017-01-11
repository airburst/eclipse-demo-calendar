import React, { Component } from 'react';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './balloon.css';
import { events } from './events.json';

const convertDateFromString = (string) => {
    return moment(string, 'YYYYMMDDTHH:mm:SS').toDate();
};

const parsedEvents = events.map(e => {
    return Object.assign(e, {
        start: convertDateFromString(e.start),
        end: convertDateFromString(e.end)
    });
});

const MyEvent = ({ event }) => {
    return (
        <span>MARK
            <strong>{event.title}</strong>
            <p>{event.desc}</p>
        </span>
    );
};

const EventAgenda = ({ event }) => {
    let source = (event.source !== 'eclipse') ? <em>(From {event.source})</em> : '';
    return (
        <span>
            <strong>{event.title} {source}</strong>
            <p>{event.desc}</p>
        </span>
    );
};

class Calendar extends Component {

    constructor(props) {
        super(props);
        BigCalendar.momentLocalizer(moment);
    }

    handleEventSelect = (event) => {
        console.log(event);
    }

    handleSlotSelect = (slotInfo) => {
        alert(`selected slot:
        start ${slotInfo.start.toLocaleString()}
        end: ${slotInfo.end.toLocaleString()}`);
    }

    render() {
        return (
            <div className="calendar-container" {...this.props}>
                <BigCalendar
                    selectable
                    culture='en-GB'
                    popup
                    events={parsedEvents}
                    defaultView='month'
                    onSelectEvent={this.handleEventSelect}
                    onSelectSlot={this.handleSlotSelect}
                    components={{
                        event: MyEvent,
                        agenda: { event: EventAgenda }
                    }}
                    eventPropGetter={e => ({ className: e.source })}
                    />
            </div>
        );
    }
}

export default Calendar;