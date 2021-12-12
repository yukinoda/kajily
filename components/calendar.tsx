import { Calendar, View, momentLocalizer, SlotInfo } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CalendarEvent } from "../types/common.types";
import { sampleEvents } from "../mock-data/sampleEvents";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month"];

export default function SelectableCalendar() {
  const router = useRouter();

  const [events, setEvents] = useState(sampleEvents as CalendarEvent[]);

  useEffect(() => {
    for (const event of sampleEvents) {
      if (typeof window !== "undefined" && "chores" in event) {
        localStorage.setItem(event.id, JSON.stringify(event.chores));
      }
    }
  }, []);

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
      onSelectEvent={e => router.push(`/detail/${e.id}`)}
      onSelectSlot={handleSelect}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
    />
  );
}
