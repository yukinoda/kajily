import { Box } from "@mui/material";
import Head from "next/head";
import Calendar from "../components/calendar";
import { Copyright } from "../components/copyright";
import DefaultLayout from "../components/layouts/defaultLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Kajily | home</title>
      </Head>
      <DefaultLayout>
        <Box height="80vh">
          {/* react-big-calendar */}
          <Calendar />
        </Box>
        <Copyright />
      </DefaultLayout>
    </>
  );
};

export default Home;
