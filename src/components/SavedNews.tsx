/* eslint-disable @next/next/no-img-element */
import React, { ReactElement } from "react";

import styles from "../styles/components/SavedNews.module.css";
import { NewsProps } from "../pages";
import axios from "axios";
import { useSession } from "next-auth/react";

export interface NewsComponentProps {
  news: NewsProps;
  setRefresh: (refresh: boolean) => void;
}
const SavedNews: React.FunctionComponent<NewsComponentProps> = ({
  news,
  setRefresh,
}) => {
  const { data: session } = useSession();

  function splitString(str: string): string {
    const split = str.split(".");
    return split[0] + ".";
  }

  function splitTitle(str: string): string {
    const split = str.split("- ");
    return split[0];
  }

  async function deleteNews() {
    var url = `${process.env.NEXT_PUBLIC_BACKEND_API_BASE}/api/news/saved/`;
    try {
      const response = await axios.delete(url, {
        headers: { Authorization: `Bearer ${session?.accessToken}` },
        data: { content: news },
      });
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <h1>{splitTitle(news.title)}</h1>
      <p>{splitString(news.description)}</p>
      <div className={styles.footer}>
        <a target="_blank" href={news.url} rel="noreferrer">
          Ler Mais
        </a>
        <a onClick={() => deleteNews()}>Remover</a>
      </div>
    </div>
  );
};

export default SavedNews;
