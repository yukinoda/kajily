import React, { FC } from "react";
import Button from "@mui/material/Button";
import { useCountUp } from "../hooks/useCountUp";

const CountUpTimer: FC = () => {
  const { running, start, stop, data } = useCountUp();

  return (
    <>
      {!running && (
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => start()}
        >
          Start!
        </Button>
      )}
      {running && (
        <div onClick={() => stop()}>
          {data.hour !== 0 && `${data.hour}:`}
          {String(data.min).padStart(2, "0")}:
          {String(data.sec).padStart(2, "0")}
        </div>
      )}
    </>
  );
};

export default CountUpTimer;
