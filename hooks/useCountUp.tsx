import { useState } from "react";
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
} from "date-fns";

let timerId: any;

export const useCountUp = () => {
  const [running, setRunning] = useState(false);

  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  const start = () => {
    if (running) return;

    setRunning(true);
    const startAt = new Date();
    timerId = setInterval(() => {
      const now = new Date();

      setSec(differenceInSeconds(now, startAt) % 60);
      setMin(differenceInMinutes(now, startAt) % 60);
      setHour(differenceInHours(now, startAt));
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerId);
  };

  return { running, start, stop, data: { hour, min, sec } };
};
