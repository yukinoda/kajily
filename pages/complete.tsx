import { Box, CardMedia, Typography } from "@mui/material";
import Head from "next/head";
import DefaultLayout from "../components/layouts/defaultLayout";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Complete = () => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Head>
        <title>kajily | complete</title>
      </Head>
      <DefaultLayout>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box mb={2}>
            <Typography variant="h1" color="secondary.dark">
              YOU MADE IT
            </Typography>
          </Box>
          <Typography variant="h5" color="secondary">
            HH:mm:ss
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
      <Confetti
        width={width}
        height={height}
        gravity={0.02}
        colors={["#ff9f1c", "#ffbf69", "#cbf3f0", "#2ec4b6"]}
      />
    </>
  );
};

export default Complete;
