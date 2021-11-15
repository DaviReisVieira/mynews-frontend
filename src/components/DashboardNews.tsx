import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsProps } from "../pages";
import { SavedNewsProps } from "../pages/mynews";

import styles from "../styles/components/DashboardNews.module.css";
import News from "./News";
import SavedNews from "./SavedNews";

export interface NewsComponentProps {
  session: any;
}

const DashboardNews: React.FunctionComponent<NewsComponentProps> = ({
  session,
}) => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [hour, setHour] = useState<string | null>();
  const [savedNews, setSavedNews] = useState<SavedNewsProps[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
      setHour("Bom dia");
    } else if (hour >= 12 && hour < 18) {
      setHour("Boa tarde");
    } else {
      setHour("Boa noite");
    }

    if (!session) {
      return;
    }

    async function fetchNews() {
      var url = `${process.env.NEXT_PUBLIC_BACKEND_API_BASE}/api/news/`;

      const response = await fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${session?.accessToken}`,
        }),
      });
      if (response.ok) {
        const newsData = await response.json();

        setNews(newsData.articles);
      }
    }

    async function fetchSavedNews() {
      var url = `${process.env.NEXT_PUBLIC_BACKEND_API_BASE}/api/news/saved/`;
      const response = await fetch(url, {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${session?.accessToken}`,
        }),
      });
      if (response.ok) {
        const newsData = await response.json();

        setSavedNews(newsData.news.reverse());
      }
    }
    fetchNews();
    fetchSavedNews();
    setRefresh(false);
  }, [session, refresh]);

  return (
    <div className={styles.container}>
      <div className={styles.mainNews}>
        {news.map((e, i) => {
          if (savedNews.some((s) => s.title == e.title)) {
            e.saved = true;
          }
          return <News news={e} key={`news_${i}`} setRefresh={setRefresh} />;
        })}
      </div>
      <div className={styles.personalNews}>
        {savedNews.map((e, i) => {
          return (
            <SavedNews
              news={e.content}
              key={`savedNews_${i}`}
              setRefresh={setRefresh}
            />
          );
        })}
      </div>
      <div className={styles.informations}>
        <div>
          {session.user.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={session.user.image} alt="Foto Avatar" />
          )}
        </div>
        <div>
          <h2>
            {hour}, {session.user.name}
          </h2>
          <h3>{session.user.email}</h3>
          <p>Notícias salvas: {savedNews.length}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardNews;
