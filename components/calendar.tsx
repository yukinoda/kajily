import { Calendar, View, momentLocalizer, SlotInfo } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month"];

type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
  detailId: string;
};

const sampleEvents: CalendarEvent[] = [
  {
    title: "Monstarhacks",
    start: new Date("2021-12-10"),
    end: new Date("2021-12-12"),
    allDay: true,
    detailId: "monstarhacks",
  },
  {
    title: "Laundry",
    start: new Date("2021-12-21"),
    end: new Date("2021-12-21"),
    allDay: true,
    detailId: "laundry",
  },
  {
    title: "Christmas Eve",
    start: new Date("2021-12-24"),
    end: new Date("2021-12-24"),
    allDay: true,
    detailId: "christmas-eve",
  },
  {
    title: "Christmas",
    start: new Date("2021-12-25"),
    end: new Date("2021-12-25"),
    allDay: true,
    detailId: "christmas",
  },
];

export default function SelectableCalendar() {
  const router = useRouter();

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
      onSelectEvent={event => router.push(`/detail/${event.detailId}`)}
      onSelectSlot={handleSelect}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
    />
  );
}
