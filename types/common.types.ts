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

export type User = {
  name: string;
  shortName: string;
  id: string;
  color: string;
};

export type EventDataDef = {
  id: string;
  title: string;
  chores?: Chore[];
};
