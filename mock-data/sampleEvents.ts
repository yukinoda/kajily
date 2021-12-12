import { CalendarEvent } from "../types/common.types";

export const sampleEvents: CalendarEvent[] = [
  {
    title: "Major cleanup",
    start: new Date("2021-12-17"),
    end: new Date("2021-12-17"),
    allDay: true,
    id: "major-cleanup",
  },
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
          { name: "Mop the floor", id: "2" },
          { name: "Make the bed", id: "3" },
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
