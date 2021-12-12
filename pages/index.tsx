import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>kajily</title>
        <meta name="description" content="kajily x family x relay" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kajily.vercel.app/">kajily!</a>
        </h1>

        <p className={styles.description}>kaji x family x relay</p>

        <div className={styles.grid}>
          <a href="/login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>
              Start joining <i>kajily</i> by accessing here!
            </p>
          </a>

          <a href="/home" className={styles.card}>
            <h2>Home &rarr;</h2>
            <p>Checkout your event calendar here!</p>
          </a>

          <a href="/complete" className={styles.card}>
            <h2>Complete Screen &rarr;</h2>
            <p>Event completion screen after everything is done.</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
