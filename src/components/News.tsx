/* eslint-disable @next/next/no-img-element */
import { NextComponentType } from "next";
import React, { ReactElement } from "react";
import Image from "next/image";

import styles from "../styles/components/News.module.css";
import { NewsProps } from "../pages";
import { useSession } from "next-auth/react";
import axios from "axios";

export interface NewsComponentProps {
  news: NewsProps;
  setRefresh: (refresh: boolean) => void;
}
const News: React.FunctionComponent<NewsComponentProps> = ({
  news,
  setRefresh,
}) => {
  const { data: session } = useSession();

  const contentFilter = (content: string) => {
    const contentArray = content.split("[+");
    return contentArray[0];
  };

  async function saveNews() {
    var url = `${process.env.NEXT_PUBLIC_BACKEND_API_BASE}/api/news/saved/`;
    try {
      const response = await axios.post(
        url,
        { content: news },
        { headers: { Authorization: `Bearer ${session?.accessToken}` } }
      );
      setRefresh(true);
    } catch (error) {
      console.log(error);
    }
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
      <h1>{news.title}</h1>
      <p>{news.description}</p>
      {news.urlToImage && (
        <div className={styles.newsImage}>
          <img src={news.urlToImage} alt="Foto Avatar" />
        </div>
        // <div className={styles.newsImage}>
        //   <Image
        //     unoptimized={true}
        //     loader={() => news.urlToImage}
        //     src={news.urlToImage}
        //     alt={news.title}
        //     width="640"
        //     height="360"
        //     sizes="(max-width: 500px) 200px, (max-width: 1023px) 600px, 740px"
        //     layout="responsive"
        //   />
        // </div>
      )}
      <p>
        {contentFilter(news.content || "")}{" "}
        <a target="_blank" href={news.url} rel="noreferrer">
          Ler Mais
        </a>
      </p>

      <div className={styles.footer}>
        {news.author && <h2>Fonte: {news.author}</h2>}
        {news.saved ? (
          <button onClick={() => deleteNews()} type="button">
            <div>
              <svg
                aria-label="Remover"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></path>
              </svg>
            </div>
          </button>
        ) : (
          <button onClick={() => saveNews()} type="button">
            <div>
              <svg
                aria-label="Salvar"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default News;
