import Head from "next/head";
import Calendar from "../components/calendar";

const Home = () => {
  return (
    <>
      <Head>
        <title>kajily | home</title>
      </Head>
      <div style={{ height: "100vw" }}>
        {/* react-big-calendar */}
        <Calendar />
      </div>
    </>
  );
};

export default Home;
