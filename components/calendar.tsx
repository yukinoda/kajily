import { Calendar, View, momentLocalizer, SlotInfo } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month"];

class CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;

  constructor(
    _title: string,
    _start: Date,
    _end: Date,
    _allDay?: boolean,
    _resource?: any
  ) {
    this.title = _title;
    this.start = _start;
    this.end = _end;
    this.allDay = _allDay || false;
    this.resource = _resource || "";
  }
}

const sampleEvents: CalendarEvent[] = [
  {
    title: "Monstarhacks",
    start: new Date("2021-12-10"),
    end: new Date("2021-12-12"),
    allDay: true,
  },
  {
    title: "Laundry",
    start: new Date("2021-12-21"),
    end: new Date("2021-12-21"),
    allDay: true,
  },
  {
    title: "Christmas Eve",
    start: new Date("2021-12-24"),
    end: new Date("2021-12-24"),
    allDay: true,
  },
  {
    title: "Christmas",
    start: new Date("2021-12-25"),
    end: new Date("2021-12-25"),
    allDay: true,
  },
];

export default function SelectableCalendar() {
  const [events, setEvents] = useState(sampleEvents as CalendarEvent[]);

  const handleSelect = ({ start, end }: SlotInfo) => {
    const title = window.prompt("New Event name");

    if (title) {
      let newEvent = {} as CalendarEvent;
      newEvent.start = moment(start).toDate();
      newEvent.end = moment(end).toDate();
      newEvent.title = title;

      setEvents([...events, newEvent]);
    }
  };

  return (
    <Calendar
      selectable
      localizer={localizer}
      events={events}
      defaultView="month"
      views={allViews}
      defaultDate={new Date()}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={handleSelect}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
    />
  );
}
