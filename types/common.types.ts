export type RelayTask = {
  name: string;
  id: string;
};

export type Chore = {
  name: string;
  id: string;
  relayTasks?: RelayTask[];
};

export type CalendarEvent = {
  title: string;
  start: Date;
  end: Date;
  allDay?: boolean;
  resource?: any;
  id: string;
  chores?: Chore[];
};