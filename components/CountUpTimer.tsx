import React, { FC } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

interface Props {
  running: boolean;
  start: () => void;
  data: any;
}
const CountUpTimer: FC<Props> = ({ running, start, data }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          // position: "fixed",
          // bottom: "0",
          // left: 0,
          // padding: "0 20px",
        }}
      >
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
          <div
            style={{
              padding: "20px 20px",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            {data.hour !== 0 && `${data.hour}:`}
            {String(data.min).padStart(2, "0")}:
            {String(data.sec).padStart(2, "0")}
          </div>
        )}
      </Box>
    </>
  );
};

export default CountUpTimer;
