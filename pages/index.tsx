import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Copyright } from "../components/copyright";
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
          <Link href="/login">
            <a className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>
                Start joining <i>kajily</i> by accessing here!
              </p>
            </a>
          </Link>

          <Link href="/home">
            <a className={styles.card}>
              <h2>Home &rarr;</h2>
              <p>Checkout your event calendar here!</p>
            </a>
          </Link>

          <Link href="/complete">
            <a className={styles.card}>
              <h2>Complete Screen &rarr;</h2>
              <p>Event completion screen after everything is done.</p>
            </a>
          </Link>
        </div>
      </main>
      <Copyright />
    </div>
  );
};

export default Home;
