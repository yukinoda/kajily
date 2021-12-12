import { Calendar, View, momentLocalizer, SlotInfo } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["agenda", "day", "week", "month"];

class CalendarEvent {
  title: string;
  allDay: boolean;
  start: Date;
  end: Date;
  desc: string;
  resourceId?: string;
  tooltip?: string;

  constructor(
    _title: string,
    _start: Date,
    _endDate: Date,
    _allDay?: boolean,
    _desc?: string,
    _resourceId?: string
  ) {
    this.title = _title;
    this.allDay = _allDay || false;
    this.start = _start;
    this.end = _endDate;
    this.desc = _desc || "";
    this.resourceId = _resourceId;
  }
}

export default function SelectableCalendar() {
  const [events, setEvents] = useState([] as CalendarEvent[]);

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
