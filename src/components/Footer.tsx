import Head from "next/head";
import Link from "next/link";

import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
        ></link>
      </Head>
      <div className={styles.footerBasic}>
        <footer>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/davireisvieira/">
              <i className="icon ion-social-linkedin"></i>
            </a>
            <a href="https://github.com/DaviReisVieira/">
              <i className="icon ion-social-github"></i>
            </a>
            <a href="https://www.facebook.com/davireisvieira/">
              <i className="icon ion-social-facebook"></i>
            </a>
            <a href="https://www.instagram.com/davi_reis_vieira/">
              <i className="icon ion-social-instagram"></i>
            </a>
          </div>
          <ul className={styles.listInline}>
            <li className={styles.listInlineItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.listInlineItem}>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
            <li className={styles.listInlineItem}>
              <Link href="https://github.com/DaviReisVieira/">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
          <p className={styles.copyright}>
            My News © 2021 - Feito por Davi Reis
          </p>
        </footer>
      </div>
    </>
  );
}
