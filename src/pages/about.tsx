/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/Footer";
import MenuBox from "../components/MenuBox";
import styles from "../styles/About.module.css";

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

      <main className={styles.container}>
        <h1>Sobre o My News</h1>
        <img src="/favicon2.png" alt="Logo My News" />
        <p>
          Veja os últimos acontecimentos de graça e organize as notícicas para
          ler mais tarde!
        </p>
        <p>
          Uma plataforma totalmente gratuita para que você possa organzar o
          conteúdo de interesse sobre o mundo.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default About;
