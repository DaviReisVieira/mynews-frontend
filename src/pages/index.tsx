import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import DashboardNews from "../components/DashboardNews";
import Footer from "../components/Footer";
import Login from "../components/Login";
import MenuBox from "../components/MenuBox";
import News from "../components/News";
import styles from "../styles/Home.module.css";

export interface NewsProps {
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
  source: {
    id: string | null;
    name: string;
  };
  saved?: boolean;
}

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session) {
      return;
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>My News - Refresh Here!</title>
        <meta name="description" content="My News - Refresh Here" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MenuBox />

      <main className={styles.main}>
        {session ? <DashboardNews session={session} /> : <Login />}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
