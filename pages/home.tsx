import { Box } from "@mui/material";
import Head from "next/head";
import Calendar from "../components/calendar";
import DefaultLayout from "../components/layouts/defaultLayout";

const Home = () => {
  return (
    <>
      <Head>
        <title>kajily | home</title>
      </Head>
      <DefaultLayout>
        <Box height="90vh">
          {/* react-big-calendar */}
          <Calendar />
        </Box>
      </DefaultLayout>
    </>
  );
};

export default Home;
