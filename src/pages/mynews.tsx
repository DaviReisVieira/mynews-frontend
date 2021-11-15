import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { NewsProps } from ".";
import Footer from "../components/Footer";
import MenuBox from "../components/MenuBox";
import News from "../components/News";
import styles from "../styles/Mynews.module.css";

export interface SavedNewsProps {
  title: string;
  content: NewsProps;
}
const MyNews: NextPage = () => {
  const [news, setNews] = useState<SavedNewsProps[]>([]);
  const { data: session, status } = useSession();
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (!session) {
      return;
    }

    async function fetchSavedNews() {
      var url = "http://localhost:8000/api/news/saved/";
      const response = await fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${session?.accessToken}`,
        }),
      });
      if (response.ok) {
        const newsData = await response.json();

        setNews(newsData.news);
      }
    }
    fetchSavedNews();
    setRefresh(false);
  }, [session, refresh]);

  return (
    <div className={styles.container}>
      <Head>
        <title>My News - Refresh Here!</title>
        <meta name="description" content="My News - Refresh Here" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <MenuBox />

      <main className={styles.main}>
        {session ? (
          news.map((savedNews, i) => {
            savedNews.content.saved = true;
            return (
              <News
                news={savedNews.content}
                key={`news_${i}`}
                setRefresh={setRefresh}
              />
            );
          })
        ) : (
          <h1>Entre para ver as notícias</h1>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MyNews;
