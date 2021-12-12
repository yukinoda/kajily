import { Box, CardMedia, Typography } from "@mui/material";
import Head from "next/head";
import DefaultLayout from "../components/layouts/defaultLayout";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const Complete = () => {
  const [countDate, setCountData] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });
  useEffect(() => {
    const completeTime = localStorage.getItem("completeTime");

    if (completeTime) {
      setCountData(JSON.parse(completeTime));
    }
  }, []);
  return (
    <>
      <Head>
        <title>Kajily | complete</title>
      </Head>
      <DefaultLayout>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box mb={2}>
            <Typography
              variant="h1"
              color="secondary.dark"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontStyle: "italic",
                fontWeight: "700",
              }}
            >
              You Made It!
            </Typography>
          </Box>
          <Typography
            variant="h3"
            color="secondary.dark"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontStyle: "italic",
              fontWeight: "700",
            }}
          >
            {countDate.hour !== 0 && `${countDate.hour}:`}
            {String(countDate.min).padStart(2, "0")}:
            {String(countDate.sec).padStart(2, "0")}
          </Typography>
        </Box>
      </DefaultLayout>
      <Box position="fixed" zIndex={-9999} bottom={0}>
        <CardMedia
          component="img"
          height={500}
          image="bgimage.jpg"
          alt="Complete Kaji"
        />
      </Box>
      {typeof window !== "undefined" && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          gravity={0.04}
          colors={["#ff9f1c", "#ffbf69", "#cbf3f0", "#2ec4b6"]}
          initialVelocityY={25}
        />
      )}
    </>
  );
};

export default Complete;
