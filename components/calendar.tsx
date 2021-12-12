import { Calendar, View, momentLocalizer, SlotInfo } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";
import { CalendarEvent } from "../types/common.types";

const localizer = momentLocalizer(moment);

const allViews: View[] = ["month"];

const sampleEvents: CalendarEvent[] = [
  {
    title: "Monstarhacks",
    start: new Date("2021-12-10"),
    end: new Date("2021-12-12"),
    allDay: true,
    id: "monstarhacks",
  },
  {
    title: "Kaji Day",
    start: new Date("2021-12-21"),
    end: new Date("2021-12-21"),
    allDay: true,
    id: "kaji-day",
    chores: [
      {
        name: "Laundry",
        id: "laundry",
        relayTasks: [
          { name: "Gather dirty clothes", id: "1" },
          { name: "Turn on the washing machine", id: "2" },
          { name: "Hang out the laundry", id: "3" },
        ],
      },
      {
        name: "Dish Washing",
        id: "dish-washing",
        relayTasks: [
          { name: "Gather dirty dishes", id: "1" },
          { name: "Wash the dishes", id: "2" },
          { name: "Clearing the dishes", id: "3" },
        ],
      },
      {
        name: "Bedroom Cleaning",
        id: "bedroom-cleaning",
        relayTasks: [
          { name: "Clean up the floor", id: "1" },
          { name: "Make the bed", id: "2" },
        ],
      },
      {
        name: "Cooking Dinner",
        id: "cooking-dinner",
        relayTasks: [
          { name: "Prepare ingredients", id: "1" },
          { name: "Cook", id: "2" },
          { name: "Prepare dining table", id: "3" },
        ],
      },
    ],
  },
  {
    title: "Christmas Eve",
    start: new Date("2021-12-24"),
    end: new Date("2021-12-24"),
    allDay: true,
    id: "christmas-eve",
  },
  {
    title: "Christmas",
    start: new Date("2021-12-25"),
    end: new Date("2021-12-25"),
    allDay: true,
    id: "christmas",
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
      onSelectEvent={event => router.push(`/detail/${event.id}`)}
      onSelectSlot={handleSelect}
      startAccessor="start"
      endAccessor="end"
      titleAccessor="title"
    />
  );
}
