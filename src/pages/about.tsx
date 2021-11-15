import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import DashboardNews from "../components/DashboardNews";
import Footer from "../components/Footer";
import MenuBox from "../components/MenuBox";
import News from "../components/News";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
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
        <h1>Sobre Nós</h1>
      </main>

      <Footer />
    </div>
  );
};

export default About;
